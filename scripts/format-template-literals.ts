import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const EXTENSIONS = ['.ts', '.tsx'];
const IGNORED_DIRS = ['node_modules', '.git', 'dist', 'build', '.next', 'out'];

function getFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (IGNORED_DIRS.includes(file)) continue;

    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (EXTENSIONS.includes(extname(file)) && !file.endsWith('.d.ts')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function processFile(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');
  const edits: { start: number; end: number; replacement: string }[] = [];

  let index = 0;
  const length = content.length;

  while (index < length) {
    const char = content[index];

    // Skip comments
    if (char === '/' && content[index + 1] === '/') {
      index = content.indexOf('\n', index) + 1;
      if (index === 0) index = length;
      continue;
    }
    if (char === '/' && content[index + 1] === '*') {
      index = content.indexOf('*/', index) + 2;
      if (index === 1) index = length;
      continue;
    }

    // Skip strings
    if (char === "'" || char === '"') {
      const quote = char;
      index++;
      while (index < length) {
        if (content[index] === '\\') {
          index += 2;
          continue;
        }
        if (content[index] === '\n') {
          // String not closed on same line (invalid JS unless escaped, but let's be safe)
          break;
        }
        if (content[index] === quote) {
          index++;
          break;
        }
        index++;
      }
      continue;
    }

    // Template Literal
    if (char === '`') {
      const start = index;
      const startLineStart = content.lastIndexOf('\n', start) + 1;
      const startLineStr = content.substring(startLineStart, start);
      const startIndentMatch = startLineStr.match(/^(\s*)/);
      const startIndent = startIndentMatch ? startIndentMatch[1] : '';

      index++;
      let depth = 0;
      let closed = false;

      while (index < length) {
        if (content[index] === '\\') {
          index += 2;
          continue;
        }
        if (content[index] === '$' && content[index + 1] === '{') {
          depth++;
          index += 2;
          continue;
        }
        if (content[index] === '}') {
          if (depth > 0) depth--;
          index++;
          continue;
        }
        if (content[index] === '`') {
          if (depth === 0) {
            closed = true;
            break;
          }
          index++;
        } else {
          index++;
        }
      }

      if (closed) {
        const end = index;
        index++; // move past backtick

        const literalContent = content.substring(start + 1, end);

        if (literalContent.includes('\n')) {
          const lines = literalContent.split('\n');

          // Determine min indent for content lines (1 to length-2 usually, or length-1)
          // We exclude the first line (same line as start `) from indent calculation usually,
          // UNLESS it's just newline.
          // We exclude the last line indentation IF it is the closing indentation block.

          const linesToMeasure = [];
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            // Skip last line if it's whitespace only (it's likely the closing bracket indent)
            if (i === lines.length - 1 && line.trim().length === 0) continue;
            // Skip empty lines
            if (line.trim().length === 0) continue;
            linesToMeasure.push(line);
          }

          let minIndent = Infinity;
          for (const line of linesToMeasure) {
            const match = line.match(/^(\s*)/);
            if (match && match[1].length < minIndent) {
              minIndent = match[1].length;
            }
          }
          if (minIndent === Infinity) minIndent = 0;

          const innerIndent = startIndent + '  '; // 2 spaces
          const newLines: string[] = [lines[0]];

          for (let i = 1; i < lines.length; i++) {
            const line = lines[i];

            // Logic for last line:
            // If it is whitespace only, it is indentation for `
            // It should be startIndent.
            if (i === lines.length - 1 && line.trim().length === 0) {
              newLines.push(startIndent);
            } else {
              // Content line
              // Remove minIndent, add innerIndent
              // Check if we can remove minIndent safely
              // If line is just newline/empty that we skipped?
              if (line.trim().length === 0) {
                // Empty line inside text. Preserve emptiness but maybe indent?
                // Usually empty lines in code are empty.
                newLines.push('');
              } else {
                // Strip indentation
                let stripped = line;
                // Safe strip: match whitespace
                const currentIndentMatch = line.match(/^(\s*)/);
                const currentIndentLen = currentIndentMatch ? currentIndentMatch[1].length : 0;

                // If currentIndent < minIndent (shouldn't happen due to logic above code), clamp
                const removeLen = Math.min(currentIndentLen, minIndent);
                stripped = line.substring(removeLen);

                newLines.push(innerIndent + stripped);
              }
            }
          }

          const replacement = newLines.join('\n');
          if (replacement !== literalContent) {
            edits.push({ start: start + 1, end, replacement });
          }
        }
      }
    } else {
      index++;
    }
  }

  // Apply edits descending
  if (edits.length > 0) {
    // Sort in reverse order just in case, though sequential scan guarantees order
    edits.sort((a, b) => b.start - a.start);

    let newContent = content;
    for (const edit of edits) {
      newContent = newContent.substring(0, edit.start) + edit.replacement + newContent.substring(edit.end);
    }

    if (newContent !== content) {
      writeFileSync(filePath, newContent);
      console.log(`Formatted: ${filePath}`);
    }
  }
}

const rootDir = process.cwd();
console.log(`Scanning ${rootDir}...`);
const files = getFiles(rootDir);
console.log(`Found ${files.length} files.`);

files.forEach(processFile);
console.log('Done.');

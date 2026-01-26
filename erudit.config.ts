export default defineEruditConfig({
    language: {
        current: 'ru',
        // TODO: Replace with shared
        translations: {
            ru: {
                name: 'Русский',
                link: 'https://ru.omath.net',
            },
            en: {
                name: 'English',
                link: 'https://en.omath.net',
            },
        },
    },
    site: {
        originUrl: 'https://new.omath.net/',
        baseUrl: '/',
        title: 'Математика',
        short: 'Понятно и интересно',
        logotype: projectPublic('logotype.svg'), // TODO: Replace with shared
        style: {
            brandColor: 'light-dark(#1879d9, #4e94d9)',
        },
        // TODO: Replace with shared
        favicon: {
            default: projectPublic('favicons/default.svg'),
            group: projectPublic('favicons/group.svg'),
            book: projectPublic('favicons/book.svg'),
            page: projectPublic('favicons/page-article.svg'),
            article: projectPublic('favicons/page-article.svg'),
            summary: projectPublic('favicons/summary.svg'),
            practice: projectPublic('favicons/practice.svg'),
        },
        loadingSvg: `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;"  viewBox="10 10 80 80" preserveAspectRatio="xMidYMid">
                <path fill="none" stroke="currentColor" stroke-width="10" stroke-dasharray="230.93003540039064 25.658892822265614" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
                    <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.25s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                </path>
            </svg>
        `,
    },
    seo: {
        siteTitle: 'Математика',
        useBookSiteTitle: true,
        // TODO: Replace with shared
        image: {
            src: projectPublic('og.png'),
            width: 500,
            height: 500,
        },
    },
    indexPage: {
        title: 'Открытая Математика',
        short: 'Теория, конспекты и задачник в одном флаконе',
        description: `
            Современный учебник по математике — понятный, интересный, подробный.
            Написан так, чтобы вы во всём смогли разобраться самостоятельно.
            Никаких сухих перечислений формул и теорем.
            Только повествовательный подход с большим количеством примеров и задач на закрепление.
            Внести свой вклад в материалы может любой желающий!
        `,
        // TODO: Replace with shared
        topImage: {
            src: projectPublic('index-page-banner.png'),
            maxWidth: '100%',
            invert: 'dark',
        },
        seo: {
            description: `
                Современный учебник по математике — понятный, интересный, подробный.
                Теория, конспекты и задачник в одном флаконе.
                Написан так, чтобы вы во всём разобрались самостоятельно!
            `,
        },
    },
    contributors: {
        enabled: true,
        becomeContributorLink: 'https://github.com/open-math/ru.omath.net/blob/main/CONTRIBUTION.md',
        howToImproveLink: 'https://github.com/open-math/ru.omath.net/blob/main/CONTRIBUTION.md',
    },
    sponsors: {
        enabled: true,
        becomeSponsorLink: 'https://boosty.to/omath',
        defaultSponsorMessages: ['Я поддерживаю "Открытую Математику"!'],
    },
    customLinks: [
        {
            label: 'Telegram',
            href: 'https://t.me/omath_official',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g></svg>',
        },
    ],
    repository: {
        type: 'github',
        name: 'open-math/ru.omath.net',
        branch: 'main',
    },
    analytics: {
        yandex: {
            verification: '986ee9663b1d366b',
            metricsId: '70781320',
        },
        google: {
            verification: 'hbTull_8pcvJm4alie8PVq6-f87heZXqSGp6DVFsJPk',
            gtag: 'G-NE4S66HSF0',
        },
    },
    ads: {
        aside: {
            provider: 'yandex',
            blockId: 'R-A-2185026-3',
        },
        bottom: {
            provider: 'yandex',
            blockId: 'R-A-2185026-1',
        },
    },
    elements: [
        '@erudit-js/prose/elements/math',
        '@erudit-js/prose/elements/diagram',
        // TODO: Replace with shared
        './elements/term',
        './elements/statement',
        './elements/important',
    ],
    countElements: ['accent_term', 'accent_statement', 'accent_important', ['problem', 'problems']],
});

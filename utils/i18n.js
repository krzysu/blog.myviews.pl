import i18n from 'i18next';

i18n.init({
    // we init with resources
    resources: {
        en: {
            blog: {
                intro: {
                    headline1: 'Hi, my name is',
                    headline2: 'Kris Urbas',
                    subheadline: 'I help companies build their internet products',
                    button: 'contact me!',
                },
                datePrefix: 'Published on',
                likeButton: {
                    thanks: 'Thanks a lot!',
                    likeIt: 'Like it?',
                },
                readAlso: 'Read more',
                author: 'The author',
                authorItem: {
                    intro: 'Hi, my name is <1>Kris Urbas</1> and welcome on my blog.',
                    body: '',
                    sayHello: 'Say hello!',
                    writeMe: 'email',
                    onTwitter: 'twitter',
                },
                footer: { contactButton: 'contact me' },
            },
        },
        pl: {
            blog: {
                intro: {
                    headline1: 'Cześć, nazywam się',
                    headline2: 'Krzysiek Urbas',
                    subheadline: 'Pomagam firmom budować internetowe produkty',
                    button: 'napisz do mnie!',
                },
                datePrefix: 'Opublikowano',
                likeButton: {
                    thanks: 'Dzięki wielkie!',
                    likeIt: 'Podobało się?',
                },
                readAlso: 'Przeczytaj też',
                author: 'O autorze',
                authorItem: {
                    intro: 'Hej, nazywam się <1>Krzysiek Urbas</1> i witam na moim blogu.',
                    body: `Moim celem jest pokazanie, jak można <1>być szczęśliwym w zawodzie programisty</1>.
                        Nie ważne czy jesteś juniorem, czy seniorem.
                        Chce pokazać, na co zwracać uwagę w pracy, czego się uczyć, jak się rozwijać.
                        Na co uważać i jakich ludzi unikać. Jak znaleźć pracę i się w niej spełniać.
                        Jak nie pracować nadgodzin i unikać stresu.
                        Jak mieć także życie po pracy i jak to wszystko może prowadzić do pełnego i szczęśliwego życia.`,
                    sayHello: 'Przywitaj się!',
                    writeMe: 'napisz do mnie',
                    onTwitter: 'w serwisie Twitter',
                },
                footer: { contactButton: 'kontakt' },
            },
        },
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['blog'],
    defaultNS: 'blog',

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
    },

    react: { wait: true },
});

export default i18n;

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
                    body: `My name is <1>Kris Urbas</1> and I help companies build their internet products.
                    I offer help in many different areas of software and product development, management, leadership
                    and team building. I have more than 8 years of professional experience.
                    I've worked with more than 10 companies and startups of different sizes.
                    <3>Can I help you? Write me what are you struggling with!</3>`,
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
                    body: `Nazywam się <1>Krzysiek Urbas</1> i pomagam firmom budować aplikacje internetowe.
                    Oferuję pomoc w wielu różnych obszarach rozwoju oprogramowania i produktu,
                    także zarządzania oraz kierowania i budowania zespołu.
                    Mam ponad 8 lat doświadczenia zawodowego.
                    Pracowałem już z ponad 10 firmami i startup'ami w różnych rozmiarach.
                    <3>W czym mogę Ci pomóc? Napisz do mnie!</3>`,
                },
                footer: { contactButton: 'kontakt' },
            },
        },
    },

    ns: ['blog'],
    defaultNS: 'blog',
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
    },

    react: { wait: true },
    // debug: true,
});

export default i18n;

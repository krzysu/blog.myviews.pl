import i18n from 'i18next';

i18n.init({
    // we init with resources
    resources: {
        en: {
            blog: {
                urls: {
                    homepage: '/',
                    contact: '/contact/',
                    games: '/games/',
                    blog: '/blog/',
                },
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
                    and team building. With 8 years of professional experience I have worked with more than
                    10 companies and startups of different sizes.
                    <3>Can I help you? Write me what are you struggling with!</3>`,
                },
                navigation: {
                    contact: 'Contact',
                    homepage: 'Home',
                    games: 'Games',
                    blog: 'Blog',
                },
                contactPage: {
                    title: 'contact me!',
                    subtitle: 'guaranteed: 100% response rate',
                },
                gamesPage: {
                    title: 'HTML5 game development',
                    subtitle: `I was into game development a few years ago,
                        here you can find the outcome`,
                    footer: 'questions, feedback, coffee?',
                    button: 'contact me',
                    zombieSubtitle: 'what if zombies plague can be stopped?',
                    breakoutSubtitle: 'it was just a weekend challenge',
                    slidesSubtitle: 'slides from my talk on Berlin.JS',
                },
                blogPage: { title: 'Everything what I\'ve written so far' },
                indexPage: {
                    blogTitle: 'Latest on blog',
                    blogButton: 'read more',
                },
            },
        },
        pl: {
            blog: {
                urls: {
                    homepage: '/po-polsku/',
                    contact: '/kontakt/',
                    games: '/tworzenie-gier/',
                    blog: '/polski-blog/',
                },
                intro: {
                    headline1: 'Cześć, nazywam się',
                    headline2: 'Krzysiek Urbas',
                    subheadline: 'Pomagam firmom budować produkty internetowe',
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
                navigation: {
                    contact: 'Kontakt',
                    homepage: 'Strona główna',
                    games: 'Tworzenie gier',
                    blog: 'Blog',
                },
                contactPage: {
                    title: 'napisz do mnie!',
                    subtitle: 'gwarantuję, że odpiszę na każdą wiadomość',
                },
                gamesPage: {
                    title: 'tworzenie gier w HTML5',
                    subtitle: `kilka lat temu interesowałem się pisaniem gier
                        komputerowych, oto co z tego wynikło`,
                    footer: 'pytania, komentarze, zaproszenia na kawe?',
                    button: 'napisz do mnie',
                    zombieSubtitle: 'zatrzymaj atak zombie',
                    breakoutSubtitle: 'projekt weekendowy',
                    slidesSubtitle: 'slajdy z mojej prezentacji na Berlin.JS',
                },
                blogPage: { title: 'Wszystko, co do tej pory napisałem' },
                indexPage: {
                    blogTitle: 'Najnowsze na blogu',
                    blogButton: 'zobacz więcej',
                },
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

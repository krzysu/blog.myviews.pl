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
                    offer: '/consultancy/',
                },
                intro: {
                    headline1: 'Hi, my name is',
                    headline2: 'Kris Urbas',
                    subheadline:
                        'I help companies build their internet products',
                    button: 'check out my offer',
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
                    and team building. With 9 years of professional experience, I have worked with more than
                    10 companies and startups of different sizes.
                    <3>Can I help you? Write me what are you struggling with!</3>`,
                },
                navigation: {
                    contact: 'Contact',
                    homepage: 'Home',
                    games: 'Games',
                    blog: 'Blog',
                    offer: 'Consultancy',
                },
                page: {
                    footer: 'questions, feedback, coffee?',
                    footerButton: 'contact me',
                },
                contactPage: {
                    title: 'Contact me',
                    subtitle: 'guaranteed: 100% response rate',
                    footer: 'like it? share it!',
                },
                gamesPage: {
                    title: 'HTML5 game development',
                    subtitle: `I was into game development a few years ago,
                        here you can find the outcome`,
                    zombieSubtitle: 'what if zombies plague can be stopped?',
                    breakoutSubtitle: 'it was just a weekend challenge',
                    slidesSubtitle: 'slides from my talk on Berlin.JS',
                },
                blogPage: {
                    title: 'Blog',
                    subtitle: 'feedback is welcomed',
                },
                indexPage: {
                    blogTitle: 'Latest blog posts',
                    blogButton: 'read more',
                },
                offerPage: {
                    section2: {
                        title: 'Here\'s how I can help you',
                        subtitle1: 'Contribute and evaluate',
                        subtitle2: 'Improve and train',
                        point1:
                            'I join your team as an engineer for 1 to 6 months. But my role is more like a secret agent.',
                        point2:
                            'I contribute to your projects as a regular employee. That allows me to evaluate your software development and project management practices from the insider position.',
                        point3:
                            'I work with your people arm to arm. That allows me to evaluate their technical and soft skills and see how does a team function as a whole.',
                        point4:
                            'I give you regular feedback on my findings. Together, we improve things on the go or prepare a plan to handle your issues in the future.',
                        point5:
                            'I train your people to handle your problems without me. Motivated and empowered team is the key to your success.',
                        point6:
                            'I leave you with a stronger team, defined processes and software in a better shape.',
                    },
                    footer: 'Do you want to know more?',
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
                    offer: '/wspolpraca/',
                },
                intro: {
                    headline1: 'Cześć, nazywam się',
                    headline2: 'Krzysiek Urbas',
                    subheadline: 'Pomagam firmom budować produkty internetowe',
                    button: 'sprawdź moją ofertę',
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
                    Mam ponad 9 lat doświadczenia zawodowego.
                    Pracowałem już z ponad 10 firmami i startup'ami w różnych rozmiarach.
                    <3>W czym mogę Ci pomóc? Napisz do mnie!</3>`,
                },
                navigation: {
                    contact: 'Kontakt',
                    homepage: 'Strona główna',
                    games: 'Tworzenie gier',
                    blog: 'Blog',
                    offer: 'Współpraca',
                },
                page: {
                    footer: 'pytania, komentarze, zaproszenia na kawe?',
                    footerButton: 'napisz do mnie',
                },
                contactPage: {
                    title: 'Napisz do mnie',
                    subtitle: 'gwarantuję, że odpiszę na każdą wiadomość',
                    footer: 'podobało się? przekaż dalej!',
                },
                gamesPage: {
                    title: 'Tworzenie gier w HTML5',
                    subtitle: `kilka lat temu interesowałem się pisaniem gier
                        komputerowych, oto co z tego wynikło`,
                    zombieSubtitle: 'zatrzymaj atak zombie',
                    breakoutSubtitle: 'projekt weekendowy',
                    slidesSubtitle: 'slajdy z mojej prezentacji na Berlin.JS',
                },
                blogPage: {
                    title: 'Blog',
                    subtitle: 'przeczytaj i daj znać co myślisz',
                },
                indexPage: {
                    blogTitle: 'Najnowsze na blogu',
                    blogButton: 'zobacz więcej',
                },
                offerPage: {
                    section2: {
                        title: 'Moja oferta współpracy',
                        subtitle1: 'Pomagam i obserwuję.',
                        subtitle2: 'Usprawniam i szkolę.',
                        point1:
                            'Dołączam do Twojego zespołu jako inżynier oprogramowania na okres od 1 do 6 miesięcy. Jednak działam trochę jako tajny agent.',
                        point2:
                            'Pracuję przy Twoich projektach tak jak każdy inny. Pozwala mi to poznać podejście do tworzenia oprogramowania i zarządzania w Twojej firmie.',
                        point3:
                            'Pracuję razem z Twoimi ludźmi. Pozwala mi to sprawdzić ich wiedzę techniczną oraz umiejętności miękkie. Obserwuję też, jak zespół funkcjonuje jako całość.',
                        point4:
                            'Regularnie dzielę się z Tobą moimi obserwacjami. Razem wprowadzamy usprawnienia od razu albo przygotowujemy plan na przyszłość. Twoje zaangażowanie jest bardzo ważne.',
                        point5:
                            'Szkolę Twoich pracowników, aby byli w stanie rozwiązywać problemy samodzielnie. Silny i zmotywowany zespół jest podstawą sukcesu Twojej firmy.',
                        point6:
                            'Zostawiam Cię z silniejszym zespołem, zdefiniowanymi praktykami i oprogramowaniem w lepszej kondycji.',
                    },
                    footer: 'Zainteresowany?',
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

    react: { wait: false },
    // debug: true,
});

export default i18n;

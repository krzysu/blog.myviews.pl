import i18n from 'i18next';

i18n.init({
    // we init with resources
    resources: {
        en: {
            blog: {
                datePrefix: 'Published on',
                likeButton: {
                    thanks: 'Thanks a lot!',
                    likeIt: 'Do you like it?',
                },
                readAlso: 'Read more',
                author: 'The author',
            }
        },
        pl: {
            blog: {
                datePrefix: 'Opublikowano',
                likeButton: {
                    thanks: 'Dzięki wielkie!',
                    likeIt: 'Podobało się?',
                },
                readAlso: 'Przeczytaj też',
                author: 'O autorze',
            }
        }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['blog'],
    defaultNS: 'blog',

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },

    react: {
        wait: true
    },
});

export default i18n;

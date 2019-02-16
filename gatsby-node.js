const fs = require('fs-extra-promise');
const sm = require('sitemap');

const pagesToSitemap = (pages) => {
    const urls = pages.map((page) => {
        if (page.path) {
            return {
                url: page.path,
            };
        }

        return null;
    });

    return urls.filter((url) => {
        return !!url;
    });
};

const generateSiteMap = (pages) => {
    const sitemap = sm.createSitemap({
        hostname: 'https://www.krisurbas.pl',
        cacheTime: '60000',
        urls: pagesToSitemap(pages),
    });

    // eslint-disable-next-line no-console
    console.log('Generating sitemap.xml');

    fs.writeFileSync(
        `${__dirname}/public/sitemap.xml`,
        sitemap.toString()
    );
};

const copyFonts = () => {
    // eslint-disable-next-line no-console
    console.log('Copying fonts');

    fs.copySync(`${__dirname}/pages/static/fonts`, `${__dirname}/public/static/fonts`);
};

module.exports.postBuild = (pages, callback) => {
    generateSiteMap(pages);
    copyFonts();
    callback();
};

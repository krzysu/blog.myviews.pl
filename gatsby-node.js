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
        hostname: 'https://blog.myviews.pl',
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

module.exports.postBuild = (pages, callback) => {
    generateSiteMap(pages);
    callback();
};

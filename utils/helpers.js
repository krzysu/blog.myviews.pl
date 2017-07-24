import prune from 'underscore.string/prune'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import include from 'underscore.string/include'

export const getAbstract = (post, length = 200) => {
    const html = post.description || post.body;
    return html ? prune(html.replace(/<[^>]*>/g, ''), length) : '';
}

export const getPublicPosts = (pages, lang = 'en', limit = 0, excludePage = {}) => {

    const sortedPages = sortBy(pages, (page) =>
        access(page, 'data.date')
    ).reverse();

    const filteredPages = sortedPages.filter((page) => {
        return access(page, 'file.ext') === 'md' &&
            !include(page.path, '/404') &&
            !access(page, 'data.draft') &&
            access(page, 'data.lang') === lang &&
            access(page, 'data.path') !== access(excludePage, 'data.path');
    });

    if (limit > 0) {
        return filteredPages.splice(0, limit);
    }

    return filteredPages;
}

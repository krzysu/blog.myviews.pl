import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import include from 'underscore.string/include'

export const getPublicPosts = (pages, limit = 0, excludePage = {}) => {

    const sortedPages = sortBy(pages, (page) =>
        access(page, 'data.date')
    ).reverse();

    const filteredPages = sortedPages.filter((page) => {
        return access(page, 'file.ext') === 'md' &&
            !include(page.path, '/404') &&
            !access(page, 'data.draft') &&
            access(page, 'data.path') !== access(excludePage, 'data.path');
    });

    if (limit > 0) {
        return filteredPages.splice(0, limit);
    }

    return filteredPages;
}

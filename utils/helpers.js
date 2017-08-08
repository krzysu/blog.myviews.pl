import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import truncate from 'lodash/truncate';
import includes from 'lodash/includes';

export const getAbstract = (post, length = 240) => {
    const html = post.description || post.body;
    const truncateOptions = {
        length,
        separator: /,? +/,
    };


    return html ? truncate(html.replace(/<[^>]*>/g, ''), truncateOptions) : '';
};

export const getPublicPosts = (pages, lang = 'en', limit = 0, excludePage = {}) => {

    const sortedPages = sortBy(pages, (page) => {
        return get(page, 'data.date');
    }
    ).reverse();

    const filteredPages = sortedPages.filter((page) => {
        return get(page, 'file.ext') === 'md' &&
            !includes(page.path, '/404') &&
            !get(page, 'data.draft') &&
            get(page, 'data.lang') === lang &&
            get(page, 'data.path') !== get(excludePage, 'data.path');
    });

    if (limit > 0) {
        return filteredPages.splice(0, limit);
    }

    return filteredPages;
};

export const getEmail = () => {
    const emailReversed = 'moc.liamg@lp.usyzrk';

    return emailReversed.split('').reverse().join('');
};

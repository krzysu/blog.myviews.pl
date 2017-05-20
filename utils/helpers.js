import prune from 'underscore.string/prune'

export const getAbstract = (post, length = 200) => {
    const html = post.description || post.body;
    return html ? prune(html.replace(/<[^>]*>/g, ''), length) : '';
}

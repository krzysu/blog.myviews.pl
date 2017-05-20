import React from 'react'
import PropTypes from 'prop-types'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import include from 'underscore.string/include'
import HeadMeta from 'components/HeadMeta'
import Bio from 'components/Bio'
import PostItem from 'components/PostItem/PostItem'

const Drafts = (props) => {
    return (
        <div>
            <h2>Drafts</h2>
            {props.children}
        </div>
    )
}

const BlogIndex = ({ route }) => {
    const pageLinks = []
    const draftLinks = []
    const { page, pages } = route;

    // Sort pages.
    const sortedPages = sortBy(pages, (page) =>
      access(page, 'data.date')
    ).reverse()

    sortedPages.forEach((page) => {
        if (
            access(page, 'file.ext') === 'md' &&
            !include(page.path, '/404')
        ) {
            if (!access(page, 'data.draft')) {
                pageLinks.push(<PostItem page={page} key={page.path} />)
            } else {
                draftLinks.push(<PostItem page={page} key={page.path} />)
            }
        }
    })

    return (
        <div>
            <HeadMeta {...page} />
            <Bio />
            <div style={{ marginTop: '4.5em' }}>
                {pageLinks}
            </div>

            {false && (
                <Drafts>
                    {draftLinks}
                </Drafts>
            )}
        </div>
    )
}

BlogIndex.propTypes = {
  route: PropTypes.shape({
      page: PropTypes.object,
      pages: PropTypes.array,
  }),
}

export default BlogIndex

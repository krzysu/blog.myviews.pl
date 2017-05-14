import React from 'react'
import PropTypes from 'prop-types'
import sortBy from 'lodash/sortBy'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import PostItem from 'components/PostItem'

const isPrd = access(process, 'env.NODE_ENV') === 'production'

const Drafts = (props) => {
    return (
        <div>
            <h2>Drafts</h2>
            {props.children}
        </div>
    )
}

const BlogIndex = (props) => {
    const pageLinks = []
    const draftLinks = []

    // Sort pages.
    const sortedPages = sortBy(props.route.pages, (page) =>
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
            <Helmet
                title={config.blogTitle}
                meta={[
                    {"name": "description", "content": "Sample blog"},
                    {"name": "keywords", "content": "blog, articles"},
                ]}
            />
            <Bio />
            <div>
                {pageLinks}
            </div>

            {!isPrd && (
                <Drafts>
                    {draftLinks}
                </Drafts>
            )}
        </div>
    )
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex

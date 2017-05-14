import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'

const Item = ({ path, title }) => {
    return (
        <li style={{ marginBottom: rhythm(1/4) }}>
          <Link style={{boxShadow: 'none'}} to={prefixLink(path)}>
              {title}
          </Link>
        </li>
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
            const title = access(page, 'data.title') || page.path

            if (!access(page, 'data.draft')) {
                pageLinks.push(<Item path={page.path} title={title} key={page.path} />)
            } else {
                draftLinks.push(<Item path={page.path} title={title} key={page.path} />)
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
            <ul>
                {pageLinks}
            </ul>

            Drafts:
            <ul>
                {draftLinks}
            </ul>
        </div>
    )
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex

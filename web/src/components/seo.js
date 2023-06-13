import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({description, lang, meta, keywords, title, image}) => {
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: image
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', ')
            }
            : []
        )
        .concat(meta)}
    />
  )
}

export default SEO

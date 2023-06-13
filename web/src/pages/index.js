/* eslint-disable import/no-unresolved */
import React from 'react'
import {graphql} from 'gatsby'

import Carousel from '../lib/Carousel/CarouselComponent'
import MenuBar from '../lib/MenuBar/MenuBar'
import Quote from '../lib/Quote/Quote'
import Description from '../lib/Description/Description'
import Footer from '../lib/Footer/Footer'

import Layout from '../containers/layout'
const menuItems = []

export const query = graphql`
  query IndexPageQuery {
    carousel: sanityCarousel(_id: {regex: "/(drafts.|)/"}) {
    carouselImages {
      asset {
        fluid(maxWidth: 1400, maxHeight: 700) {
          ...GatsbySanityImageFluid
        }
      }
      alt
    }
  }
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      keywords
      description
      logo {
        asset {
          _id
        }
      }
      quote {
        asset {
          _id
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data = {}} = props

  const {
    carousel,
    site: {
      quote,
      logo,
      description
    }
  } = data

  return (
    <Layout>
      <MenuBar
        menuItems={menuItems}
        logo={logo}
      />
      <Carousel
        data={carousel}
        type={'fluid'}
        width={100}
        height={40}
      />
      <Quote
        quote={quote}
      />
      <Description
        description={description}
      />
      <Footer
        logo={logo}
      />
    </Layout>
  )
}

export default IndexPage

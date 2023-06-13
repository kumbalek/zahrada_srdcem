import React from 'react'
import styled from 'styled-components'

import {imageUrlFor} from '../image-url'
import {buildImageObj} from '../helpers'

export const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.img`
  padding: 1em;
  height: 2.4em;
`

const Quote = ({quote}) => {
  return (<QuoteContainer>
    <LogoImage
      src={imageUrlFor(buildImageObj(quote))
        .url()}
    />
  </QuoteContainer>)
}

export default Quote

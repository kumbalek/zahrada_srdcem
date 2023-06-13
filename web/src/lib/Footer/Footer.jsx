import React from 'react'
import styled from 'styled-components'

import {imageUrlFor} from '../image-url'
import {buildImageObj} from '../helpers'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2vw 8vw;
  box-sizing: border-box;
`

export const FooterText = styled.p`
  margin: 0.5em 0 0 0.5em;
  font-family: Butler, serif;
`

export const FooterImage = styled.img`
  height: 2.4em;
`

const Footer = ({logo}) => {
  return (<FooterContainer>
    <div>
      <FooterImage
        src={imageUrlFor(buildImageObj(logo))
          .url()}
      />
      <FooterText>{'Martina Barcalová'}</FooterText>
      <FooterText>{'728 878 366'}</FooterText>
      <FooterText>{'barcalova@zahradasrdcem.cz'}</FooterText>
    </div>
  </FooterContainer>)
}

export default Footer

import React from 'react'
import styled from 'styled-components'

export const DescriptionContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const DescriptionParagraph = styled.p`
max-width: 100vw;
padding: 2em;
letter-spacing: 1px;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 75vw;
}
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 50vw;
}
`

const Description = ({description}) => {
  return (<DescriptionContainer>
    <DescriptionParagraph>
      {description}
    </DescriptionParagraph>
  </DescriptionContainer>)
}

export default Description

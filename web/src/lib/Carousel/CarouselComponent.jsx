import React from 'react'
import styled from 'styled-components'
import {CarouselProvider, Slider, Slide, DotGroup} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

// eslint-disable-next-line import/no-unresolved
import SlideImage from './SlideImage'

export const DotContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -32px;

  button {
    margin: 8px;
    padding: 4px;
    border: none;
  }
`

const renderSlides = (slides, type) => slides.map((slide, index) => (
  <Slide key={`slide-${index}`}>
    <SlideImage
      type={type}
      node={slide}
    />
  </Slide>
)
)

const Carousel = ({data, width, height, type}) => {
  const {
    carouselImages = []
  } = data

  return (<CarouselProvider
    naturalSlideWidth={width}
    naturalSlideHeight={height}
    totalSlides={carouselImages.length}
    isPlaying
  >
    <Slider>
      {renderSlides(carouselImages, type)}
    </Slider>
    <DotContainer>
      <DotGroup />
    </DotContainer>

  </CarouselProvider>)
}

export default Carousel

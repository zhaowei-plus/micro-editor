import React from 'react';
import { Carousel } from 'antd'
import cs from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import './index.less'

export default (props) => {
  const { widget = {} } = props

  const {
    id,
    type,
    title,
    showTitle,
    scale,
    playSpeed,
    slide = []
  } = widget

  // const onChange = (a, b, c) => {
  //   console.log('onChange:', a, b, c);
  // }

  const renderSlide = (slide = {}) => {
    const { id, picture, jumpType, jumpUrl, page } = slide

    return (
      <div className="slide" key={id}>
        <img src={picture} alt={title} />
      </div>
    )

  }

  return (
    <div className="carousel">
      <div
        className={
          cs('carousel__header', {
            'hidden': !showTitle
          })
        }>
        {title}
      </div>
      <div className="carousel__content">
        <Carousel
          key={id}
          autoplay
          speed={playSpeed}
          // afterChange={onChange}
        >
          { slide.map(renderSlide) }
        </Carousel>
      </div>
    </div>
  )
}

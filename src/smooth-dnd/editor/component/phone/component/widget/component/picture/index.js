import React from 'react'
import cs from 'classnames'

import './index.less'

export default (props) => {
  const { widget = {} } = props
  // console.log('picture:', widget)
  const {
    type,
    title,
    showTitle,
    scale,
    jumpType,
    url = 'http://a0.att.hudong.com/30/88/01100000000000144726882521407_s.jpg',
    page
  } = widget

  return (
    <div className="picture">
      <div
        className={
          cs('picture__header', {
            'hidden': !showTitle
          })
        }>
        {title}
      </div>
      <div className="picture__content">
        <img src={url} alt={title} />
      </div>
    </div>
  )
}

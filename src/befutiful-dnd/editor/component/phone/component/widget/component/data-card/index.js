import React from 'react';
import cs from 'classnames'

import './index.less'

export default (props) => {
  const { widget = {} } = props

  const {
    id,
    type,
    title,
    showTitle
  } = widget

  return (
    <div className="data-card">
      <div
        className={
          cs('data-card__header', {
            'hidden': !showTitle
          })
        }>
        {title}
      </div>

      <div className="data-card__content">
        卡片数据
      </div>
    </div>
  )
}

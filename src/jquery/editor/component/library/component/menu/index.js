import React, { useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import './index.less'

export default (props) => {
  const { item = {} } = props
  const { icon, title, widget } = item

  return (
    <div
      className="menu"
      data-source-type="menu"
    >
      <div className="menu__icon">
        {/*<img src={require(`assets/images/widgets/${icon}`)} alt={title} />*/}
      </div>
      <span className="menu__title">
            {title}
          </span>
    </div>
  )
}

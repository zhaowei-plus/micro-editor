import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'

import './index.less'

export default (props) => {
  const { item = {} } = props
  const { icon, title, widget } = item

  const ref = useRef()

  const [, drag] = useDrag({
    item: {
      type: 'menu',
      widget
    }
  })

  drag(ref)

  return (
    <div className="menu" ref={ref}>
      <div className="menu__icon">
        {/*<img src={require(`assets/images/widgets/${icon}`)} alt={title} />*/}
      </div>
      <span className="menu__title">
        {title}
      </span>
    </div>
  )
}

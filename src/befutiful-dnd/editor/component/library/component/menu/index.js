import React, { useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import './index.less'

export default (props) => {
  const { item = {} } = props
  const { icon, title, widget } = item
  console.log('item:', item)

  return (
    <Draggable
      key={item.id}
      draggableId={`menu-${item.id}`}
      index={item.id}
      isDragDisabled={false}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="menu"
        >
          <div className="menu__icon">
            {/*<img src={require(`assets/images/widgets/${icon}`)} alt={title} />*/}
          </div>
          <span className="menu__title">
            {title}
          </span>
        </div>
      )}
    </Draggable>
  )
}

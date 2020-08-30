import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import cs from 'classnames'

import './index.less'

export default (props) => {
  const {
    id,
    children,
    accept = [],
    onDrop,
    className = ''
  } = props

  const ref = useRef()

  // 可放置
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept, // 可放置的类型
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    drop: params => onDrop({ ...params, id })
  })

  drop(ref)

  const isHover = canDrop && isOverCurrent

  return (
    <div
      className={
        cs(`drop ${className}`, {
          'hover': isHover
        })
      }
      ref={ref}
    >
      {children}
    </div>
  )
}

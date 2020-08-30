import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import cs from 'classnames'

import './index.less'

export default (props) => {
  console.log('card:', props)
  const {
    card = {},
    swapCard,
  } = props

  const ref = useRef()

  const [, drag] = useDrag({
    item: {
      type: 'card',
      card,
    }
  })

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: 'card', // 可放置的类型
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    canDrop: ({ card: dragCard }) => {
      return dragCard.id !== card.id
    },
    drop: params => {
      console.log('drop:', params)
      const { card: dragCard } = params
      swapCard(dragCard, card)
    }
  })

  drop(drag(ref))

  const isHover = canDrop && isOverCurrent

  return (
    <div
      className={
        cs('card', {
          'hover': isHover
        })
      }
      ref={ref}
    >
      {card.name}
    </div>
  )
}

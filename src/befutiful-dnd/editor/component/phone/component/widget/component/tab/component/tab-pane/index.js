import React, { useRef } from 'react'
import { Tabs } from 'antd'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import cs from 'classnames'

import './index.less'

const { TabPane } = Tabs

export default (props) => {
  const { tab, info = {}, children, ...rest } = props
  console.log('tab pane:', info)
  const { id, name } = info

  const ref = useRef()
  const dispatch = useDispatch()

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: ['menu', 'widget'],
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    canDrop: ({ widget: dragWidget }) => {
      // tab内部不能再有其他tab
      if (['tab'].includes(dragWidget.type)) {
        return false
      }
      return true;
    },
    hover: ({ widget: dragWidget }) => {
      if (['tab'].includes(dragWidget.type)) {
        return false
      }
      return true
    },
    drop: params => {
      console.log('Tab pane drop:', params)
      const { type, widget } = params

      if (type === 'menu') {
        console.log('tabPane ------ add:', widget)
        dispatch({
          type: 'ADD_WIDGET',
          payload: {
            widget: {
              ...widget,
              pid: id,
            }
          }
        })
      }

      if (type === 'widget') {
        console.log('tabPane ------ move:', widget)
        dispatch({
          type: 'MOVE_WIDGET',
          payload: {
            widget,
            pid: id,
          }
        })
      }
    }
  })

  drop(ref)

  const isHover = canDrop && isOverCurrent

  return (
    <TabPane {...rest} tab={name}>
      <div
        className={
          cs('tab-phone', {
            'hover': isHover
          })
        }
        ref={ref}
      >
        {children}
      </div>
    </TabPane>
  )
}

import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import cs from 'classnames'

import Widget from '../widget'
import { initialWidget } from '@/assets/utils'

import './index.less'

export default (props) => {
  const {
    pid,
    path = [],
    widgets = [],
  } = props

  const ref = useRef()
  const dispatch = useDispatch()
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: [ 'menu', 'widget' ],
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    drop: (params, monitor) => {
      const didDrop = monitor.didDrop()

      if (!didDrop) {
        // 拖拽元素数据
        const { type, widget } = params

        // 页面内组件拖拽则移动组件
        if (type === 'widget') {
          console.log('widgets move widget:', widget)
          dispatch({
            type: 'MOVE_WIDGET',
            payload: {
              widget,
              pid,
              path,
            }
          })
        }

        // 菜单栏组件拖拽则新增组件
        if (type === 'menu') {
          console.log('widgets add menu:', widget)
          dispatch({
            type: 'ADD_WIDGET',
            payload: {
              widget: initialWidget({
                ...widget,
                pid,
                path
              })
            }
          })
        }
      }
    }
  })

  drop(ref)

  const isHover = canDrop && isOverCurrent

  return (
    <div
      className={
        cs('widgets', {
          'hover': isHover
        })
      }
      ref={ref}
    >
      {
        widgets.map(widget => (
          <Widget widget={widget} path={path} key={widget.id}/>
        ))
      }
    </div>
  )
}

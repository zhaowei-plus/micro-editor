import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { CloseOutlined } from '@ant-design/icons'
import cs from 'classnames'

import Tab from './component/tab'
import Picture from './component/picture'
import Carousel from './component/carousel'
import DataCard from './component/data-card'

import { initialWidget } from '@/assets/utils'

import './index.less'

export default (props) => {
  const {
    widget = {}
  } = props
  const pid = widget.id

  const ref = useRef()
  const dispatch = useDispatch()
  const active = useSelector(state => state.active)

  const [, drag] = useDrag({
    item: {
      type: 'widget',
      widget
    }
  })

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: [ 'menu', 'widget' ],
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    canDrop: ({ widget: dragWidget }) => {
      // 1、不能拖拽到自己
      // 2、不能拖到到上级组件
      if (dragWidget.id === widget.id) {
        return false
      }

      return true;
    },
    hover: ({ widget: dragWidget }) => {
      if (dragWidget.id === widget.id) {
        return false
      }
      return true
    },
    drop: (params, monitor) => {
      const didDrop = monitor.didDrop()

      // 是否已被处理
      if (!didDrop) {
        const { type, widget: dragWidget } = params
        console.log('Widget - Drop:', dragWidget)

        if (type === 'widget') {
          console.log('移动组件：', dragWidget, widget)
          dispatch({
            type: 'SWAP_WIDGET',
            payload: {
              source: dragWidget,
              target: widget
            }
          })
        }

        if (type === 'menu') {
          console.log('新增组件：', widget)
          dispatch({
            type: 'ADD_WIDGET',
            payload: {
              widget: initialWidget({ ...widget, pid })
            }
          })
        }
      }
    }
  })

  drop(drag(ref))

  const renderWidget = (widget) => {
    const props = {
      key: widget.id,
      widget
    }

    switch (widget.type) {
      case 'tab': {
        return (<Tab {...props} />)
      }
      case 'picture': {
        return (<Picture {...props} />)
      }
      case 'carousel': {
        return (<Carousel {...props} />)
      }
      case 'data-card': {
        return (<DataCard {...props} />)
      }
      default: {
        return;
      }
    }
  }

  const handleActive = (e) => {
    e.stopPropagation()

    if (!isActive) {
      dispatch({
        type: 'SET_ACTIVE',
        payload: widget
      })
    }
  }

  const handleDelete = (e) => {
    console.log('handleDelete:', widget, isActive)
    e.stopPropagation()

    const { id } = widget

    // 删除组件
    dispatch({
      type: 'DEL_WIDGET',
      payload: {
        id,
      }
    })

    if (isActive) {
      dispatch({
        type: 'DEL_ACTIVE'
      })
    }
  }

  const isHover = canDrop && isOverCurrent
  const isActive = active.id === widget.id

  return (
    <div
      ref={ref}
      className={
        cs('widget', {
          'active': isActive,
          'hover': isHover
        })
      }
      onClick={handleActive}
    >
      <div className="widget__content">
        {renderWidget(widget)}
      </div>

      <div className="widget__operation">
        <CloseOutlined onClick={handleDelete} />
      </div>
    </div>
  )
}

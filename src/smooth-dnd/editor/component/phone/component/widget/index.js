import React, { useRef } from 'react'
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

  const isHover = false // canDrop && isOverCurrent
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

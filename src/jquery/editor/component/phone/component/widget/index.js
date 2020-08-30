import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CloseOutlined } from '@ant-design/icons'
import cs from 'classnames'

import Tab from './component/tab'
import Picture from './component/picture'
import Carousel from './component/carousel'
import DataCard from './component/data-card'

import './index.less'

export default (props) => {
  const {
    widget = {},
    onDelete,
    onUpdate,
  } = props

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
    e.stopPropagation()
    onDelete(widget.id)

    if (isActive) {
      dispatch({
        type: 'DEL_ACTIVE'
      })
    }
  }

  useEffect(() => {
    if (isActive) {
      onUpdate(active)
    }
  }, [active])

  const isActive = active.id === widget.id

  return (
    <div
      className={
        cs('widget', {
          'active': isActive
        })
      }
      data-id={widget.id}
      data-pid={widget.pid}
      data-source-type="widget"
      data-widget={JSON.stringify(widget)}
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

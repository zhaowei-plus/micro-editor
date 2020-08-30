import React, { useRef } from 'react'
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

  return (
    <div
      className={
        cs('widgets isHover')
      }
    >
      {
        widgets.map(widget => (
          <Widget widget={widget} path={path} key={widget.id}/>
        ))
      }
    </div>
  )
}

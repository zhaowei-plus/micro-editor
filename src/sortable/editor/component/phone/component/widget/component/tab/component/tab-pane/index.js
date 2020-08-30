import React, { useRef } from 'react'
import { Tabs } from 'antd'
import { useDispatch } from 'react-redux'
import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";
import cs from 'classnames'

import './index.less'

Sortable.mount(new MultiDrag(), new Swap());

const { TabPane } = Tabs

export default (props) => {
  const { tab, info = {}, children, ...rest } = props
  // console.log('tab pane:', info)
  const { id, name } = info

  const ref = useRef()
  const dispatch = useDispatch()

  // if (type === 'menu') {
  //   console.log('tabPane ------ add:', widget)
  //   dispatch({
  //     type: 'ADD_WIDGET',
  //     payload: {
  //       widget: {
  //         ...widget,
  //         pid: id,
  //       }
  //     }
  //   })
  // }
  //
  // if (type === 'widget') {
  //   console.log('tabPane ------ move:', widget)
  //   dispatch({
  //     type: 'MOVE_WIDGET',
  //     payload: {
  //       widget,
  //       pid: id,
  //     }
  //   })
  // }

  return (
    <TabPane {...rest} tab={name}>
      <div
        className={
          cs('tab-phone')
        }
        ref={ref}
      >
        {children}
      </div>
    </TabPane>
  )
}

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import cs from 'classnames'

import Widget from '../widget'
import { initialWidget } from '@/assets/utils'

import './index.less'

import { ReactSortable, Sortable, MultiDrag, Swap  } from "react-sortablejs"

// Sortable.mount(new Swap());

export default (props) => {
  const {
    pid,
    path = [],
    // widgets = [],
    group
  } = props

  const [widgets, setWidgets] = useState(props.widgets)

  const dispatch = useDispatch()

  const handleSetList = (params) => {
    console.log('handleSetList:', params)
    setWidgets(params)
  }

  const handleChoose = (params) => {
    console.log('handleChoose:', params)
  }

  // const handleStart = params => {
  //
  // }

  return (
    <div
      className={
        cs('widgets isHover')
      }
    >
      <ReactSortable
        list={widgets}
        setList={handleSetList}
        animation={150}
        fallbackOnBody={true}
        // swapThreshold={0.65}
        // animation={150}
        group={{
          name: "disable-group-name",
          // pull: "clone"
        }}
      >
        {
          widgets.map(widget => (
            <Widget widget={widget} path={path} key={widget.id}/>
          ))
        }
      </ReactSortable>
    </div>
  )
}

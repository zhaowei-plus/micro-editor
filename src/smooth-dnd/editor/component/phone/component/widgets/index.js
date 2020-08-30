import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Draggable } from 'react-smooth-dnd';
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
    groupName
  } = props

  const [widgets, setWidgets] = useState(props.widgets)

  const dispatch = useDispatch()

  const handleDrop = (dropResult) => {
    console.log('widgets --- handleDrop:', groupName, dropResult)
    const { removedIndex, addedIndex, payload } = dropResult;
    if (addedIndex !== null) {
      console.log(`${groupName} 新增 %s 到位置 ${addedIndex}`, payload)
    }

    if (removedIndex !== null) {
      console.log(`${groupName} 删除位置 ${removedIndex} 元素 %s `, payload)
    }
  }

  const shouldAcceptDrop = (sourceContainerOptions, payload) => {
    console.log('shouldAcceptDrop:', sourceContainerOptions, payload)

    if (groupName === 'page') {
      return true
    } else if (payload.type === '') {
      return false
    }
    return true;
  }

  return (
    <div
      className={
        cs('widgets isHover')
      }
    >
      <Container
        groupName="widgets"
        onDrop={handleDrop}
        getChildPayload={i => widgets[i]}
        shouldAcceptDrop={shouldAcceptDrop}
        dropPlaceholder={{
          // className: 'drop-placeholder',
          // showOnTop: true
        }}
        removeOnDropOut={true}
      >
        {
          widgets.map(widget => (
            <Draggable key={widget.id}>
              <Widget widget={widget} path={path} key={widget.id}/>
            </Draggable>
          ))
        }
      </Container>
    </div>
  )
}

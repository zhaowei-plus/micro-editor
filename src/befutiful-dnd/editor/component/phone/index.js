import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Droppable } from 'react-beautiful-dnd'

import Widgets from './component/widgets'

import './index.less'
import Menu from "../library/component/menu";

export default () => {
  const dispatch = useDispatch()
  const {
    widgets = [],
    ...pageInfo
  } = useSelector(state => state.page)
  console.log('phone - widgets:', widgets)

  const pageWidgets = widgets.filter(item => !item.pid)

  const handleClick = () => {
    console.log('handleClick:', pageInfo)

    dispatch({
      type: 'SET_ACTIVE',
      payload: pageInfo
    })
  }

  return (
    <div className="phone" onClick={handleClick}>
      <div className="phone__title">
        标题
      </div>
      {/*<div className="phone__content">*/}
      {/*  <Widgets widgets={pageWidgets} path={[]} />*/}
      {/*</div>*/}

      <Droppable droppableId="page" type="page">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white'
            }}
            {...provided.droppableProps}
            className="phone__content"
          >
            <Widgets widgets={pageWidgets} path={[]} />
          </div>
        )}
      </Droppable>
    </div>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Widgets from './component/widgets'

import './index.less'

export default (props) => {
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
    <div id="page" className="phone" onClick={handleClick}>
      <div className="phone__title">
        标题
      </div>
      <div className="phone__content">
        <Widgets
          path={[]}
          group="page"
          widgets={pageWidgets}
        />
      </div>
    </div>
  )
}

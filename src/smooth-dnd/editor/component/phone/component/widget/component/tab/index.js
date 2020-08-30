import React from 'react'
import { Tabs } from 'antd'
import cs from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

import Widgets from '../../../widgets'

import './index.less'

import TabPane from './component/tab-pane'

export default (props) => {
  const { widget = {} } = props
  const {
    id,
    type,
    title,
    showTitle,
    tabs = []
  } = widget

  const { widgets = [] } = useSelector(state => state.page)

  const handleChange = (key) => {
    console.log('handleChange:', key)
  }

  const renderWidgets = (pid) => {
    const targetWidgets = widgets.filter(item => Number(item.pid) === Number(pid))
    if (targetWidgets.length > 0) {
      return (
        <Widgets
          widgets={targetWidgets}
          pid={pid}
          groupName="tab-pane"
        />
      )
    }
  }

  return (
    <div className="tabs">
      <div
        className={
        cs('tabs__header', {
          'hidden': !showTitle
        })
      }>
        {title}
      </div>
      <div className="tabs__content">
        <Tabs onChange={handleChange}>
          {
            tabs.map(tab => (
              <TabPane
                tab={tab.name}
                key={Number(tab.id)}
                info={tab}
              >
                {renderWidgets(Number(tab.id))}
              </TabPane>
            ))
          }
        </Tabs>
      </div>
    </div>

  )
}

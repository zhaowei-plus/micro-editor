import React from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import Library from './component/library'
import Phone from './component/phone'
import Setting from './component/setting'

import './index.less'

export default (props) => {
  console.log('editor - props:', props)

  const page = useSelector(state => state.page)

  const handleCancel = () => {

  }

  const handlePreview = () => {

  }

  const handleSave = () => {
    console.log('page:', page)
    const {
      // widgets = [],
      config,
      ...pageInfo
    } = page

    const widgets = [].slice.call(document.querySelectorAll('.widget')).map(target => JSON.parse(target.dataset.widget));

    console.log('handleSave widgets:', widgets)

    // const newPage = createNewPage(pageInfo, widgets)
    // console.log('newPage:', JSON.stringify(newPage))
  }

  const handleDragEnd = (params) => {
    console.log('handleDragEnd:', params)
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <div className="page">
        <div className="header">
          <div className="back">
            <Button>返回</Button>
            <span>页面编辑</span>
          </div>

          <span className="title">页面编辑</span>

          <div className="extra">
            <Button>还原初始</Button>
          </div>
        </div>

        <div className="content editor">
          <Library />
          <Phone />
          <Setting />
        </div>

        <div className="footer">
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handlePreview}>预览</Button>
          <Button onClick={handleSave}>保存</Button>
        </div>
      </div>
    </DragDropContext>
  )
}

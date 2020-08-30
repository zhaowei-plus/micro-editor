import React from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import Library from './component/library'
import Phone from './component/phone'
import Setting from './component/setting'

import { createNewPage } from '@/assets/utils'

import './index.less'

export default () => {
  const page = useSelector(state => state.page)

  const handleCancel = () => {

  }

  const handlePreview = () => {

  }

  const handleSave = () => {
    const {
      widgets = [],
      config,
      ...pageInfo
    } = page

    const newPage = createNewPage(pageInfo, widgets)
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

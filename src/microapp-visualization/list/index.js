import React from 'react'
import { Button, Table } from 'antd'

import {
  getColumns
} from './config'

import './index.less'

export default (props) => {
  const { go } = props

  const handleAdd = () => {
    go('editor')
  }

  const renderHeader = () => {

  }

  const columns = getColumns()

  return (
    <div className="page microapp-visualization-list">
      <div className="header">
        <div className="header__title">
          可视化开发
        </div>

        <div className="header__info">
          <div className="status">
            工程状态：待审核
          </div>

          <div className="time">
            当前版本上线时间: -
          </div>

          <div className="operation">
            <Button>提交上线审核</Button>
            <Button>项目预览</Button>
            <Button>版本记录</Button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__title">
          <span>工程库</span>
          <div className="extra">
            <Button onClick={handleAdd}>新增页面</Button>
          </div>
        </div>

        <div className="content__info">
          <Table
            columns={columns}
            dataSource={[]}
          />
        </div>
      </div>
    </div>
  )
}

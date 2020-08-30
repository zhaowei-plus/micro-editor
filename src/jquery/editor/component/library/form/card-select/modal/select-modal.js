import React, { useState } from 'react'
import { Modal, Table } from 'antd'
import { Input, DatePicker } from '@formily/antd-components'

import Search from '@/component/search'

import { getColumns, getSchema } from "../config";

const components = {
  Input,
  DateRangePicker: DatePicker.RangePicker
}

export default (props) => {
  const { onCancel, onOk } = props
  const [selectKeys, setSelectKeys] = useState([])
  const [selectedRows, setSelectedRows] = useState([])

  const handleSearch = (params) => {
    console.log('handleSearch:', params)
    const { createStartTime, createEndTime, ...rest } = params
    if (createStartTime && createEndTime) {
      rest.createStartTime = `${createStartTime} 00:00:00`
      rest.createEndTime = `${createEndTime} 00:00:00`
    }

    // TODO　列表请求
    console.log('search:', rest)
  }

  const handleOk = () => {
    onOk(selectedRows)
  }

  const schema = getSchema()
  const columns = getColumns()
  const dataSource = [
    {
      id: 1,
      name: '卡片名称1',
      category: '生态环境 - 总体态势',
      createTime: '2010/12/12 12:00:00'
    }, {
      id: 2,
      name: '卡片名称2',
      category: '生态环境 - 总体态势',
      createTime: '2010/12/12 12:00:00'
    }, {
      id: 3,
      name: '卡片名称3',
      category: '生态环境 - 总体态势',
      createTime: '2010/12/12 12:00:00'
    }
  ]

  const rowSelection = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectKeys(selectedRowKeys)
      setSelectedRows(selectedRows)
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Modal
      visible
      width={760}
      title="选择卡片"
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Search
        schema={schema}
        onSearch={handleSearch}
        components={components}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
      />
    </Modal>
  )
}

import React, { Fragment } from 'react'

export const getColumns = () => {

  const renderOperation = (record) => {
    return (
      <Fragment>
        <a>预览</a>
        <a>复制</a>
        <a>编辑</a>
        <a>删除</a>
      </Fragment>
    )
  }

  return [
    {
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '页面名称',
      dataIndex: 'materialName',
    },
    {
      title: '说明',
      dataIndex: 'smsContent',
    },
    {
      title: '创建时间',
      dataIndex: 'pushOrgCount',
    },
    {
      title: '默认页',
      dataIndex: 'pushFriendlyCount',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (record) => renderOperation(record)
    },
  ]
}

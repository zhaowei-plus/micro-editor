
export const getSchema = () => {
  return {
    name: {
      title: '卡片名称',
      'x-component': 'Input',
      'x-props': {
        placeholder: '请输入'
      }
    },
    id: {
      title: '卡片ID',
      'x-component': 'Input',
      'x-props': {
        placeholder: '请输入'
      }
    },
    '[createStartTime,createEndTime]': {
      title: '创建时间',
      'x-component': 'DateRangePicker'
    }
  }
}

export const getColumns = () => {
  return [
    {
      title: '卡片名称',
      dataIndex: 'name',
    },
    {
      title: '分类',
      dataIndex: 'category',
    },
    {
      title: '卡片ID',
      dataIndex: 'id',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    }
  ]
}

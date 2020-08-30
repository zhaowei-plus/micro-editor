import React, { Fragment } from 'react'
import { Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './index.less'

const XmUpload = (props) => {
  const {
    value,
    editable = true,
    mutators,
    props: fieldProps
  } = props

  const { action } = fieldProps['x-props']

  const uploadProps = {
    name: 'file',
    action,
    showUploadList: false,
    listType: 'picture-card',
    className: 'xm-upload__content',
    beforeUpload: file => {
      // if (file.size > max) {
      //   message.warn('图片过大，限制5M以内')
      //   return false
      // }
      return true
    },
    onSuccess: ({ success, data }) => {
      console.log('onSuccess:', success, data)
      if (success) {
        mutators.change(data)
      }
    },
  }

  const renderUploadButton = () => {

    if (value) {
      return (
        <img src={value} alt="avatar" />
      )
    }

    return (
      <PlusOutlined />
    )
  }

  return (
    <div className="xm-upload">
      <Upload {...uploadProps} disabled={!editable}>
        {renderUploadButton()}
      </Upload>
    </div>
  )
}

XmUpload.isFieldComponent = true

export default XmUpload

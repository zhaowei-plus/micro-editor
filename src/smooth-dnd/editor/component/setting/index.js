import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import {
  Schema,
  SchemaForm,
  SchemaField,
  SchemaMarkupField as Field,
  createVirtualBox,
} from '@formily/antd'
import { Input, Upload, Select } from '@formily/antd-components'
import { ArrayList } from '@formily/react-shared-components'
import { toArr, isFn, FormPath } from '@formily/shared'
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons'

import './index.less'

const FormatFormItem = createVirtualBox('format-form-item', (props) => {
  console.log('format-form-item:', props)
  const [first, ...other] = React.Children.map(props.children, child => child)

  return (
    <div className="form-item">
      <div className="form-item__left">
        {first}
      </div>
      <div className="form-item__right">
        {other}
      </div>
    </div>
  )
})

const ArrayCustom = props => {
  const { value, schema, className, editable, path, mutators } = props
  const componentProps = schema.getExtendsComponentProps() || {}

  console.log('ArrayCustom props:', props)

  const onAdd = () => mutators.push(schema.items.getEmptyValue())
  const onRemove = index => mutators.remove(index)

  return (
    <div className="self">
      {toArr(value).map((item, index) => {
          return (
            <div
              key={index}
              className="self-item"
              {...componentProps}
            >
              <div className="self-item__content">
                <SchemaField path={FormPath.parse(path).concat(index)} />
              </div>
              <div className="self-item__operation">
                <CloseCircleOutlined onClick={onRemove}/>
              </div>
            </div>
          )
        }
      )}
      <div className="self-add">
        <Button icon={<PlusOutlined />} block onClick={onAdd}>添加图片</Button>
      </div>
    </div>
  )
}
ArrayCustom.isFieldComponent = true

const Setting = (props) => {
  const { active = {}, dispatch } = props
  const handleChange = (widget) => {
    console.log('handleChange:', widget)
    dispatch({
      type: 'SET_ACTIVE',
      payload: widget
    })
  }


  return (
    <div className="setting">
      <div className="setting__title">
        组件设置
      </div>
      <div className="setting__content">
        <SchemaForm
          labelCol={7}
          wrapperCol={17}
          onChange={handleChange}
          components={{ Input, Upload, Select, ArrayCustom }}
        >
          <FormatFormItem name="body">
            <Field
              type="string"
              name="file1"
              x-component="Upload"
              x-component-props={{
                listType: 'card'
              }}

            />
            <Field
              type="string"
              name="name1"
              x-component="Select"
              x-props={{
                placeholder: '请选择'
              }}
            />
            <Field
              type="string"
              name="input1"
              x-component="Input"
              x-props={{
                placeholder: '请输入'
              }}
            />
          </FormatFormItem>

          <Field
            name="userList"
            type="array"
            default={[
              { name: 1, input: '張三' },
              { name: 1, input: '張三' },
              { name: 1, input: '張三' }
            ]}
            x-component="ArrayCustom"
            x-component-props={{
              draggable: true
            }}
          >
            <Field type="object">
              <FormatFormItem>
                <Field
                  type="string"
                  name="file"
                  x-component="Upload"
                  x-component-props={{
                    listType: 'card'
                  }}
                />
                <Field
                  type="string"
                  name="name"
                  x-component="Select"
                  x-props={{
                    placeholder: '请选择'
                  }}
                />
                <Field
                  type="string"
                  name="input"
                  x-component="Input"
                  x-props={{
                    placeholder: '请输入'
                  }}
                />
              </FormatFormItem>
            </Field>
          </Field>
        </SchemaForm>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  active: state.active,
})

export default connect(mapStateToProps)(Setting)


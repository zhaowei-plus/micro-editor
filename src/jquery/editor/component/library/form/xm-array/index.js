import React from 'react'
import { DeleteOutlined, PlusOutlined  } from '@ant-design/icons'
import {
  SchemaField,
} from '@formily/antd'
import { ArrayList } from '@formily/react-shared-components'
import { toArr, FormPath } from '@formily/shared'
import cs from 'classnames'

import './index.less'

const ArrayComponents = {
  CircleButton: props => <div {...props} className="circle-button"/>,
  TextButton: props => <div {...props} className="text-button"/>,
  AdditionIcon: () => (
    <div className="form-addition__add">
      <PlusOutlined />新增
    </div>
  ),
  RemoveIcon: () => (
    <div className="form-item__delete">
      <DeleteOutlined />
    </div>
  )
}

const XmArray = props => {
  const {
    value,
    schema,
    editable,
    path,
    mutators,
  } = props

  const { className } = props['props'] || {}
  const { title } = props['props']['x-component-props'] || {}

  const {
    renderAddition,
    renderRemove,
    renderEmpty,
    ...componentProps
  } = schema.getExtendsComponentProps()

  const handleAdd = () => {
    mutators.push({
      id: new Date().getTime()
    })
  }

  return (
    <div className="xm-array">
      {/*<div className="xm-array__header">*/}
      {/*  {title}*/}
      {/*</div>*/}
      <div className={`xm-array__content form ${className}`}>
        <ArrayList
          value={value}
          editable={editable}
          minItems={schema.minItems}
          maxItems={schema.maxItems}
          components={ArrayComponents}
          renders={{
            renderAddition,
            renderRemove,
            renderEmpty
          }}
        >
          {toArr(value).map((item, index) => {
            return (
              <div
                {...componentProps}
                className="form-item"
                key={index}
              >
                {/*<div className="form-item__title">*/}
                {/*  {title}{index + 1}*/}
                {/*</div>*/}

                <SchemaField
                  path={FormPath.parse(path).concat(index)}
                />
                <ArrayList.Remove
                  index={index}
                  onClick={() => mutators.remove(index)}
                />
              </div>
            )
          })}
          <ArrayList.Empty>
            {({ children }) => {
              return (
                <div
                  {...componentProps}
                  className="form-empty"
                  onClick={handleAdd}
                >
                  {children}
                </div>
              )
            }}
          </ArrayList.Empty>
          <ArrayList.Addition>
            {({ children, isEmpty }) => {
              if (!isEmpty) {
                return (
                  <div className="form-addition" onClick={handleAdd}>
                    {children}
                  </div>
                )
              }
            }}
          </ArrayList.Addition>
        </ArrayList>
      </div>
    </div>
  )
}

XmArray.isFieldComponent = true

export default XmArray

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SchemaForm } from '@formily/antd'

import './index.less'

export default () => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.active)
  console.log('active:', active)

  const handleChange = (widget) => {
    console.log('handleChange:', widget)
    dispatch({
      type: 'SET_WIDGET',
      payload: {
        widget: {
          id,
          ...active,
          ...widget,
        }
      }
    })
  }

  const handleValueChange = (params) => {
    console.log('handleValueChange:', params)
  }

  const { id, config = {}, ...initialValues } = active
  const { components = {}, schema, effects } = config

  return (
    <div className="setting">
      <div className="setting__title">
        组件设置
      </div>
      <div className="setting__content">
        {
          !!id && (
            <SchemaForm
              key={id}
              labelCol={7}
              wrapperCol={17}
              effects={effects}
              schema={{
                type: 'object',
                properties: {
                  id,
                  ...schema,
                }
              }}
              components={components}
              onChange={handleChange}
              initialValues={initialValues}
            />
          )
        }
      </div>
    </div>
  )
}

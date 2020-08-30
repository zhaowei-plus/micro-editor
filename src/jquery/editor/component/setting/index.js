import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { SchemaForm } from '@formily/antd'

import Picture from '../../component/library/config/picture'


import './index.less'

const Setting = (props) => {
  const { active = {}, dispatch } = props

  console.log('Setting:', active)

  const handleChange = (widget) => {
    console.log('handleChange:', widget)
    dispatch({
      type: 'SET_ACTIVE',
      payload: widget
    })
  }

  const { id, ...initialValues } = active
  // const { components = {}, schema, effects } = config

  // let components = {}
  // let schema = {}
  // let effects = () => {}
  // if (active.type === 'picture') {
  //   const
  // }

  const { components = {}, schema, effects } = useMemo(() => {
    if (active) {
      if (active.type === 'picture') {
        return Picture.config
      }
    }
    return {}
  }, [active])
  console.log('components:', components, schema, Picture)

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
                properties: schema
              }}
              components={components}
              onChange={handleChange}
              initialValues={active}
            />
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  active: state.active,
})

export default connect(mapStateToProps)(Setting)


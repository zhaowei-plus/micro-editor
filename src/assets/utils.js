import cloneDeep from 'lodash/cloneDeep'

// 初始化组件
export const initialWidget = widget => {
  console.log('initialWidget - widget:', widget)
  switch (widget.type) {
    case 'tab': {
      // 初始化的子项
      const tabs = [
        {
          id: new Date().getTime() + 1,
          name: 'tab1'
        },
        {
          id: new Date().getTime() + 2,
          name: 'tab2'
        }
      ]

      return {
        ...widget,
        tabs
      }
    }

    default: {
      return widget
    }
  }
}

export const formatFormSchema = (schema) => {
  const newSchema = cloneDeep(schema)
  Object.keys(newSchema).forEach((key) => {
    const item = newSchema[key]

    if (['string', 'xm-string'].includes(item.type)) {
      if (!Reflect.has(item, 'x-props')) {
        item['x-props'] = {}
      }

      if (!Reflect.has(item['x-props'], 'placeholder')) {
        if (Array.isArray(item.enum)) {
          item['x-props'].placeholder = '请选择'
          item['x-props'].getPopupContainer = node => node.parentNode
          if (!Reflect.has(item['x-props'], 'allowClear')) {
            item['x-props'].allowClear = true
          }
        } else {
          item['x-props'].placeholder = '请输入'
        }
      }
    }
  })

  return newSchema
}

/**
 * 清理对象参数值，过滤不合法参数
 * @params {object} params - 待清理的对象
 * @params {array} filters - 清理的值信息，默认当值为[null, undefined, NaN, '']中的任意值时，该字段被清理掉
 * @returns {object} 清理之后的独显
 *
 * @example
 *
 * const params = {
 *  name: '',
 *  age: 10,
 *  desc: null
 * }
 * clearObject(params) ==> { age: 10 }
 */
export const clearObject = (
  params,
  filters = [null, undefined, NaN, '']
) => {
  if (params instanceof Object) {
    const newParams = {}
    Object.keys(params).forEach(key => {
      if (params[key] instanceof Object) {
        newParams[key] = clearObject(params[key], filters)
      } else if (!filters.includes(params[key])) {
        newParams[key] = params[key]
      }
    })
    return newParams
  }
  return params
}

export const createNewPage = (page, widgets = []) => {
  const pageWidgets = widgets.filter(d => !d.pid).map(({ config, ...widget }) => widget)
  const children = pageWidgets.map(item => {
    const { config, ...widget } = item

    // 布局容器
    if (item.type === 'tab') {
      const tabs = item.tabs.map(tab => {
        return {
          ...tab,
          children: widgets.filter(d => Number(d.pid) === Number(tab.id)).map(({config, ...info}) => info)
        }
      })

      console.log('tabs:', tabs)

      return {
        ...widget,
        tabs
      }
    }

    return widget
  })

  return {
    ...page,
    children
  }
}

import { createFormActions, FormEffectHooks, FormPath } from '@formily/antd'
import { Input, Switch } from '@formily/antd-components'
import XmArray from '../form/xm-array'

const { onFieldValueChange$, onFieldInputChange$ } = FormEffectHooks

export default {
  type: 'tab',
  title: '卡片组标题',
  showTitle: true,
  tabs: [],

  config: {
    components: {
      Input,
      Switch,
      XmArray
    },

    schema: {
      type: {
        title: '组件类型',
        'x-component': 'Input',
        'x-props': {
          disabled: true
        },
      },
      title: {
        title: '标题名称',
        'x-component': 'Input'
      },
      showTitle: {
        title: '显示标题',
        'x-component': 'Switch',
      },
      tabs: {
        'x-component': 'XmArray',
        'x-component-props': {
          title: 'tab'
        },
        items: {
          type: 'object',
          properties: {
            id: {
              title: 'id',
              display: false,
              'x-component': 'Input',
            },
            name: {
              title: '名称',
              'x-component': 'Input'
            }
          }
        }
      }
    },

    effects: () => {
      // 新增的
      const { setFieldState, getFieldValue } = createFormActions()
      onFieldInputChange$('tabs.*.id').subscribe(({ name }) => {
        const tabs = getFieldValue('tabs')

        const isRepeat = tabs.reduce((result, item) => {
          if (result.findIndex(d => Number(d.id) === Number(item.id)) === -1) {
            result.push(item)
          }
          return result
        }, []).length !== tabs.length

        setFieldState(
          FormPath.transform(name, /\d/, $1 => `tabs.${$1}.id`),
          state => {
            state.errors = isRepeat ? ['key值必须唯一'] : ['']
          }
        )
      })
    }
  },
}

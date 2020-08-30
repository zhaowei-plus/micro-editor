import { createFormActions, FormEffectHooks } from '@formily/antd'
import { Input, Select, Switch, Upload, NumberPicker, FormTextBox } from '@formily/antd-components'

import XmUpload from "../form/xm-upload"
import XmArray from "../form/xm-array"

const { onFieldValueChange$ } = FormEffectHooks

export default {
  // 数据项
  type: 'picture',
  title: '静态图',
  showTitle: true,
  scale: 0.4,
  jumpType: 1, // 跳转类型，默认是自定义
  picture: '',
  page: 1,

  config: {
    components: {
      Input,
      Select,
      Switch,
      Upload,
      InputNumber: NumberPicker,
      XmUpload,
      XmArray,
      FormTextBox
    },
    schema: {
      type: {
        title: '组件类型',
        'x-component': 'Input',
        'x-props': {
          disabled: true
        },
        default: '静态图'
      },
      title: {
        title: '标题名称',
        'x-component': 'Input',
      },
      showTitle: {
        title: '显示标题',
        'x-component': 'Switch',
        'x-component-props': {
          checkedChildren: '开',
          unCheckedChildren: '关'
        }
      },
      scale: {
        title: '高宽比',
        // description: (
        //   <p>
        //     <span>手机端：宽375*高210</span>
        //     <span>中屏：宽160*高90</span>
        //   </p>
        // ),
        'x-component': 'InputNumber',
        'x-component-props': {
          step: 0.1
        }
      },
      picture: {
        title: '封面图',
        'x-component': 'XmUpload',
        'x-props': {
          // action: API.UPLOAD_FILE,
        }
      },
      slide1: {
        className: 'self-array',
        'x-component': 'XmArray',
        'x-component-props': {
          title: '轮播'
        },
        items: {
          type: 'object',
          properties: {
            picture: {
              'x-component': 'XmUpload',
              'x-props': {
                action: 'xxx'
              },
            },
            jumpType: {
              'x-component': 'Select',
              enum: [
                { label: '自定义', value: 1 },
                { label: '小程序页面', value: 2 },
              ],
              className: 'form-item-right'
            },
            jumpUrl: {
              'x-component': 'Input',
              className: 'form-item-right'
            },
            // page: {
            //   title: '小程序页面',
            //   'x-component': 'Select'
            // }
          }
        }
      },
    },
    effects: () => {
      const { setFieldState } = createFormActions()

      onFieldValueChange$('jumpType').subscribe(({ value }) => {
        console.log('jumpType change:', value)

        setFieldState('jumpUrl', state => {
          state.visible = value === 1
        })

        setFieldState('page', state => {
          state.visible = value === 2
        })

        if (value === 2) {
          // 发送请求，查询小程序页面
          setFieldState('page', state => {
            state['props'].enum = [
              { label: '页面1', value: 1 },
              { label: '页面2', value: 2 }
            ]
          })
        }
      })
    },
  },
}

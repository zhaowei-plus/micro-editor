import { createFormActions, FormEffectHooks, FormPath } from '@formily/antd'
import { Input, Select, Switch, Upload, NumberPicker } from '@formily/antd-components'
import XmArray from "../form/xm-array"

const { onFieldValueChange$ } = FormEffectHooks

export default {
  type: 'carousel',
  title: '轮播',
  showTitle: true,
  scale: 0.4,
  playSpeed: 0.4,
  slide: [
    {
      id: 1,
      picture: 'xxx', // 图片
      jumpType: 1, // 跳转类型
      jumpUrl: '', // 跳转地址
      page: '1', // 小程序页面
    },
    {
      id: 2,
      picture: 'xxxx', // 图片
      jumpType: 2, // 跳转类型
      jumpUrl: 'xxxx', // 跳转地址
      page: 1, // 小程序页面
    },
    {
      id: 3,
      picture: 'xxxx', // 图片
      jumpType: 1, // 跳转类型
      jumpUrl: '', // 跳转地址
      page: 2, // 小程序页面
    }
  ],

  config: {
    components: {
      Input,
      Select,
      Switch,
      Upload,
      InputNumber: NumberPicker,
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
        'x-component': 'InputNumber',
        'x-component-props': {
          step: 0.1
        }
      },
      playSpeed: {
        title: '播放速度',
        'x-component': 'InputNumber',
        'x-component-props': {
          step: 0.1
        }
      },
      slide: {
        'x-component': 'XmArray',
        'x-component-props': {
          title: '轮播'
        },
        items: {
          type: 'object',
          properties: {
            picture: {
              title: '图片',
              'x-component': 'Upload'
            },
            jumpType: {
              title: '跳转类型',
              'x-component': 'Select',
              enum: [
                { label: '自定义', value: 1 },
                { label: '小程序页面', value: 2 },
              ]
            },
            jumpUrl: {
              title: '跳转地址',
              'x-component': 'Input'
            },
            page: {
              title: '小程序页面',
              'x-component': 'Select'
            }
          }
        }
      }
    },
    effects: () => {
      const { setFieldState } = createFormActions()

      // onFieldValueChange$('slide').subscribe(fieldState => {
      //   console.log('onFieldValueChange$:', fieldState)
      //   // 发送请求，查询小程序页面
      //   setFieldState(
      //     FormPath.transform(fieldState.name, /\d/, $1 => `slide.${$1}.page`),
      //     state => {
      //       state['props'].enum = [
      //         { label: '页面1', value: 1 },
      //         { label: '页面2', value: 2 }
      //       ]
      //     }
      //   )
      // })

      onFieldValueChange$('slide.*.jumpType').subscribe(({ name, value }) => {
        console.log('jumpType change:', value)

        setFieldState(
          FormPath.transform(name, /\d/, $1 => `slide.${$1}.jumpUrl`),
          state => {
            state.visible = value === 1
          }
        )

        setFieldState(
          FormPath.transform(name, /\d/, $1 => `slide.${$1}.page`),
          state => {
            state.visible = value === 2
          }
        )
      })
    },
  }
}

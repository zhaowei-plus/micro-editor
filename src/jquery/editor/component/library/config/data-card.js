import { createFormActions, FormEffectHooks, FormPath } from '@formily/antd'
import { Input, Select, Switch, Upload, NumberPicker } from '@formily/antd-components'
import CardSelect from "../form/card-select";
import XmArray from "../form/xm-array";

const { onFieldValueChange$ } = FormEffectHooks

export default {
  type: 'data-card',
  title: '数据卡片',
  showTitle: true,
  cards: [
    {
      id: 1,
      name: '数据卡片1', // 图片
    },
    {
      id: 2,
      name: '数据卡片2', // 图片
    },
    {
      id: 3,
      name: '数据卡片3', // 图片
    },
  ],

  config: {
    components: {
      Input,
      Select,
      Switch,
      Upload,
      InputNumber: NumberPicker,
      CardSelect,
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
        title: '卡片名称',
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
      cards: {
        title: '卡片列表',
        'x-component': 'CardSelect',
      }
    },
    effects: () => {

    },
  }
}

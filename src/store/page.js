import produce from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import { Input, Switch } from '@formily/antd-components'

const initialState = {
  // 初始化的页面信息
  id: 1,
  title: '专题应用页面',
  isDefault: true,
  type: 'page',
  config: {
    components: {
      Input,
      Switch,
    },
    schema: {
      title: {
        title: '页面标题',
        'x-component': 'Input'
      },
      isDefault: {
        title: '默认页',
        'x-component': 'Switch'
      }
    },
  },

  // 组件列表
  widgets: [
    // {
    //   id: 1,
    //   type: 'carousel',
    //   title: '轮播',
    //   showTitle: true,
    //   scale: 0.4,
    //   playSpeed: 0.4,
    //   slide: [
    //     {
    //       id: 1,
    //       picture: 'https://pic4.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1200x500.jpg', // 图片
    //       jumpType: 1, // 跳转类型
    //       jumpUrl: '', // 跳转地址
    //       page: '1', // 小程序页面
    //     },
    //     {
    //       id: 2,
    //       picture: 'http://img95.699pic.com/photo/50038/1170.jpg_wh860.jpg', // 图片
    //       jumpType: 2, // 跳转类型
    //       jumpUrl: 'xxxx', // 跳转地址
    //       page: 1, // 小程序页面
    //     },
    //     {
    //       id: 3,
    //       picture: 'https://pic56.photophoto.cn/20200801/0012025470486232_b.jpg', // 图片
    //       jumpType: 1, // 跳转类型
    //       jumpUrl: '', // 跳转地址
    //       page: 2, // 小程序页面
    //     }
    //   ],
    // },
    // {
    //   id: 2,
    //   // 数据项
    //   type: 'picture',
    //   title: '静态图 - picture',
    //   showTitle: true,
    //   scale: 0.4,
    //   jumpType: 1, // 跳转类型，默认是自定义
    //   picture: '',
    //   page: 1,
    // },
    {
      id: 3,
      type: 'tab',
      title: '卡片组标题',
      showTitle: true,
      tabs: [
        {
          id: 11111,
          name: 'tab1'
        },
        {
          id: 22222,
          name: 'tab2'
        }
      ],
    },
    {
      id: 4,
      pid: 11111,
      // 数据项
      type: 'picture',
      title: '静态图11111',
      showTitle: true,
      scale: 0.4,
      jumpType: 1, // 跳转类型，默认是自定义
      picture: 'https://tse2-mm.cn.bing.net/th/id/OIF.UvUbTFXfhWRfRUMDrK3y8g?pid=Api&w=991&h=687&rs=1',
      page: 1,
    },
    {
      id: 5,
      pid: 22222,
      // 数据项
      type: 'picture',
      title: '静态图22222',
      showTitle: true,
      scale: 0.4,
      jumpType: 1, // 跳转类型，默认是自定义
      picture: 'https://pic4.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1200x500.jpg',
      page: 1,
    },
    {
      id: 6,
      // 数据项
      type: 'picture',
      title: '静态图6666',
      showTitle: true,
      scale: 0.4,
      jumpType: 1, // 跳转类型，默认是自定义
      picture: 'http://pic.lvmama.com/uploads/pc/place2/2016-09-14/9aab9bb7-2593-4ca6-8c5a-31355443aebc.jpg',
      page: 1,
    },
    {
      id: 7,
      // 数据项
      type: 'picture',
      title: '静态图7777',
      showTitle: true,
      scale: 0.4,
      jumpType: 1, // 跳转类型，默认是自定义
      picture: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg',
      page: 1,
    },
    {
      id: 8,
      // 数据项
      type: 'picture',
      title: '静态图7777',
      showTitle: true,
      scale: 0.4,
      jumpType: 1, // 跳转类型，默认是自定义
      picture: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg',
      page: 1,
    },
  ],
}

const delWidget = (widgets, id) => {
  console.log('delWidget:', id)
  const index = widgets.findIndex(item => item.id === id)
  widgets.splice(index, 1)
}

const setTabWidget = (widgets = [], widget) => {
  const index = widgets.findIndex(item => item.id === widget.id)
  const targetWidget = widgets[index]

  targetWidget.tabs.map(item => {
    const tab = widget.tabs.find(d => d.id === item.id)
    if (!tab) {
      // 删除子组件
      const child = widgets.filter(d => d.pid === item.id)
      child.map(d => {
        delWidget(widgets, d.id)
      })
    }
  })

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_WIDGET': {
      console.log('widgets ADD_WIDGET:', payload)
      const { widget } = payload
      return produce(state, newState => {
        newState.widgets.push({
          ...widget,
          id: new Date().getTime()
        })
      })
    }

    case 'DEL_WIDGET': {
      console.log('widgets DEL_WIDGET:', payload)
      const { id } = payload
      return produce(state, newState => {
        const target = newState.widgets.find(item => item.id === id)
        if (target) {
          newState.widgets = newState.widgets.filter(d => d.id !== id)

          // 如果是容器组件：tab，需要删除子组件
          if (target.type === 'tab') {
            target.tabs.map(tab => {
              newState.widgets = newState.widgets.filter(d => d.pid !== tab.id)
            })
          }
        }
      })
    }

    case 'SWAP_WIDGET': {
      console.log('widgets SWAP_WIDGET:', payload)
      const { source, target } = payload
      return produce(state, newState => {
        const sourcePid = source.pid
        const targetPid = target.pid

        const sourceIndex = newState.widgets.findIndex(item => item.id === source.id)
        const targetIndex = newState.widgets.findIndex(item => item.id === target.id)

        newState.widgets.splice(sourceIndex, 1, { ...target, pid: sourcePid })
        newState.widgets.splice(targetIndex, 1, { ...source, pid: targetPid })
      })
    }

    case 'MOVE_WIDGET': {
      console.log('widgets MOVE_WIDGET:', payload)
      const { widget, pid } = payload
      return produce(state, newState => {
        const newWidget = cloneDeep(widget)
        newWidget.pid = pid

        newState.widgets = newState.widgets.filter(item => item.id !== newWidget.id)
        newState.widgets.push(newWidget)
      })
    }

    case 'SET_WIDGET': {
      console.log('widgets SET_WIDGET:', payload)
      const { widget } = payload

      if (widget.type === 'page') {
        return {
          ...state,
          ...widget
        }
      }

      return produce(state, newState => {
        // 当tab容器发生改变时，需要遍历删除子组件
        const index = newState.widgets.findIndex(item => item.id === widget.id)
        const targetWidget = newState.widgets[index]
        if (widget.type === 'tab') {
          setTabWidget(newState.widgets, widget)
        }

        // console.log('targetWidget:', JSON.stringify(targetWidget))
        newState.widgets[index] = widget
      })
    }

    default: {
      return state
    }
  }
}

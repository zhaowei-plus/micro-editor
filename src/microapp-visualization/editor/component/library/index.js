import React from 'react'

import Menu from './component/menu'

import Tabs from './config/tabs'
import Picture from './config/picture'
import Carousel from './config/carousel'
import DataCard from './config/data-card'

import './index.less'

export default (props) => {
  const containers = [
    {
      id: 1,
      icon: 'calendar.png',
      title: 'tab',
      widget: Tabs
    }
  ]

  const widgets = [
    {
      id: 1,
      icon: 'calendar.png',
      title: '轮播',
      widget: Carousel
    },
    {
      id: 2,
      icon: 'chart.png',
      title: '静态图',
      widget: Picture
    }
  ]

  const specials = [
    {
      id: 1,
      icon: 'data-card.png',
      title: '数据卡片',
      widget: DataCard
    }
  ]

  return (
    <div className="library">
      <div className="library__title">
        基础组件
      </div>
      <div className="library__content">
        <div className="group">
          <div className="group__title">
            布局容器
          </div>
          <div className="group__content">
            {
              containers.map(item => (
                <Menu key={item.id} item={item} />
              ))
            }
          </div>
        </div>
        <div className="group">
          <div className="group__title">
            组件
          </div>
          <div className="group__content">
            {
              widgets.map(item => (
                <Menu key={item.id} item={item} />
              ))
            }
          </div>
        </div>
        <div className="group">
          <div className="group__title">
            特殊组件
          </div>
          <div className="group__content">
            {
              specials.map(item => (
                <Menu key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

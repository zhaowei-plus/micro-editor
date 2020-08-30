import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs"

import Menu from './component/menu'

import Tabs from './config/tabs'
import Picture from './config/picture'
import Carousel from './config/carousel'
import DataCard from './config/data-card'

import './index.less'

Sortable.mount(new MultiDrag(), new Swap());

export default (props) => {
  /*
  * SortableJs 会新增
  *   chosen
  *   selected
  * **/
  const [widgets, setWidgets] = useState([
    {
      id: 2,
      icon: 'calendar.png',
      title: '轮播',
      widget: Carousel,
    },
    {
      id: 3,
      icon: 'chart.png',
      title: '静态图',
      widget: Picture,
    }
  ])

  console.log('widgets:', widgets)

  const containers = [
    {
      id: 1,
      icon: 'calendar.png',
      title: 'tab',
      widget: Tabs
    }
  ]

  // const widgets = [
  //   {
  //     id: 2,
  //     icon: 'calendar.png',
  //     title: '轮播',
  //     widget: Carousel
  //   },
  //   {
  //     id: 3,
  //     icon: 'chart.png',
  //     title: '静态图',
  //     widget: Picture
  //   }
  // ]

  const specials = [
    {
      id: 4,
      icon: 'data-card.png',
      title: '数据卡片',
      widget: DataCard
    }
  ]

  const getClone = menu => {
    console.log('getClone:', menu)
    const { widget = {} } = menu
    return {
      id: uuidv4(),
      ...widget,
    }
  }

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
            <ReactSortable
              list={widgets}
              setList={setWidgets}
              animation={150}
              group={{
                name: "disable-group-name",
                pull: "clone",
                put: false
              }}
              clone={getClone}
              sort={false}
            >
              {widgets.map(item => (
                <Menu key={item.id} item={item} />
              ))}
            </ReactSortable>
          </div>
        </div>
      </div>
    </div>
  )
}

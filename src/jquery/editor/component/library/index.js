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
      id: uuidv4(),
      icon: 'calendar.png',
      title: '轮播',
      ...Carousel
    },
    {
      id: uuidv4(),
      icon: 'chart.png',
      title: '静态图',
      ...Picture
    }
  ])

  console.log('widgets:', widgets)

  const containers = [
    {
      id: uuidv4(),
      icon: 'calendar.png',
      title: 'tab',
      ...Tabs
    }
  ]

  const getClone = widget => {
    console.log('getClone:', widget)
    return {
      ...widget,
      id: uuidv4(),
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
          <ReactSortable
            list={widgets}
            setList={() => {}}
            animation={150}
            group={{
              name: "disable-group-name",
              pull: "clone",
              put: false
            }}
            clone={getClone}
            sort={false}
            className="group__content"
          >
            {widgets.map(item => (
              <Menu key={item.id} item={item} />
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  )
}

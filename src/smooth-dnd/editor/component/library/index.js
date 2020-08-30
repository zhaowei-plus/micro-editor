import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Container, Draggable } from 'react-smooth-dnd';

import Menu from './component/menu'

import Tabs from './config/tabs'
import Picture from './config/picture'
import Carousel from './config/carousel'
import DataCard from './config/data-card'

import './index.less'

export default (props) => {
  const widgets = [
    {
      id: 2,
      icon: 'calendar.png',
      ...Carousel,
    },
    {
      id: 3,
      icon: 'chart.png',
      ...Picture
    }
  ]

  const getChildPayload = (i) => {
    console.log('getChildPayload:', i)
    return widgets[i]
  }


  return (
    <div className="library">
      <div className="library__title">
        基础组件
      </div>
      <div className="library__content">
        <div className="group">
          <div className="group__title">
            组件
          </div>
          <div className="group__content">
            <Container
              groupName="menu"
              behaviour="copy"
              getChildPayload={getChildPayload}
            >
              {widgets.map(item => (
                <Draggable
                  key={item.id}
                  render={() =>
                    (
                      <div className="draggable-render">
                        自定义拖拽时的样式
                      </div>
                    )
                  }
                >
                  <Menu key={item.id} item={item} />
                </Draggable>
              ))}
            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import cs from 'classnames'
import cloneDeep from 'lodash/cloneDeep'

import Widget from '../widget'
import { initialWidget } from '@/assets/utils'

import './index.less'

import { ReactSortable, Sortable, MultiDrag, Swap  } from "react-sortablejs"

// Sortable.mount(new Swap());

export default (props) => {
  const {
    pid,
    path = [],
    // widgets = [],
    group
  } = props

  const [widgets, setWidgets] = useState(props.widgets)

  const dispatch = useDispatch()

  const handleSetList = (widgets) => {
    console.log('handleSetList:', group, widgets)
    setWidgets(widgets.map(item => ({  ...item, pid })))
  }

  // 从当前组中删除组件
  const handleDelete = (id) => {
    console.log('handleDelete:', id)
    setWidgets(widgets.filter(item => item.id.toString() !== id.toString()))
  }

  const handleUpdate = (widget = {}) => {
    const index = widgets.findIndex(item => item.id.toString() === widget.id.toString())
    if (index > -1) {
      const newWidgets = cloneDeep(widgets)
      newWidgets.splice(index, 1, widget)
      setWidgets(newWidgets)
    }
  }

  const handleAdd = (params) => {
    const { item } = params
    console.log('handleAdd:', group, params)
    console.log('dataset:', item.dataset)
    const { sourceType, id, pid } = item.dataset
    console.log('handleAdd:', group, id, pid)

    // 添加节点信息
    if (sourceType === 'menu') {
      console.log('添加组件到页面')
    }

    if (sourceType === 'widget') {
      console.log('组件页面内移动')
    }
  }

  const handleRemove = (params) => {
    const { item } = params
    console.log('handleRemove:', group, params)
    console.log('dataset:', item.dataset)
    const { id, pid } = item.dataset
    console.log('handleRemove:', group, id, pid)
  }

  // const handleUpdate = (params) => {
    // console.log('handleUpdate:', params)
  // }

  const handleStart = (params) => {
    // console.log('handleStart:', params)
  }
  const handleEnd = (params) => {
    // console.log('handleEnd:', params)
  }
  const handleChoose = (params) => {
    // console.log('handleChoose:', params)
  }
  const handleUnChoose = (params) => {
    // console.log('handleUnChoose:', params)
  }
  const handleSpill = (params) => {
    // console.log('handleSpill:', params)
  }
  const handleSelect = (params) => {
    // console.log('handleSelect:', params)
  }
  const handleDeSelect = (params) => {
    // console.log('handleDeSelect:', params)
  }

  // useEffect(() => {
  //   setWidgets(props.widgets)
  // }, [props.widgets])

  // onAdd(evt: MultiDragEvent): void;
  // onRemove(evt: MultiDragEvent): void;
  // onUpdate(evt: MultiDragEvent): void;
  // onStart(evt: SortableEvent): void;
  // onEnd(evt: SortableEvent): void;
  // onChoose(evt: SortableEvent): void;
  // onUnchoose(evt: SortableEvent): void;
  // onSpill(evt: SortableEvent): void;
  // onSelect(evt: MultiDragEvent): void;
  // onDeselect(evt: MultiDragEvent): void;

  console.log(group, ' widgets:', widgets)

  return (
    <ReactSortable
      list={widgets}
      setList={handleSetList}
      animation={150}
      fallbackOnBody={true}
      // swapThreshold={0.65}
      // animation={150}
      group={{
        name: "disable-group-name",
        // pull: "clone"
      }}
      className="widgets"
      onAdd={handleAdd}
      onRemove={handleRemove}
      // onUpdate={handleUpdate}
      onStart={handleStart}
      onEnd={handleEnd}
      onChoose={handleChoose}
      onUnchoose={handleUnChoose}
      onSpill={handleSpill}
      onSelect={handleSelect}
      onDeselect={handleDeSelect}
    >
      {
        widgets.map(widget => (
          <Widget
            widget={widget}
            path={path}
            key={widget.id}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      }
    </ReactSortable>
  )
}

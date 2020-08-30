import React, { useState } from 'react'
import { Button } from 'antd'
import cloneDeep from 'lodash/cloneDeep'

import { useVisible } from '@/hooks'

import './index.less'

import SelectModal from './modal/select-modal'
import Card from './component/card'

const CardSelect = (props) => {
  const {
    value = [],
    mutators
  } = props

  const selectModal = useVisible()

  const handleSelect = () => {
    console.log('handleSelect')
    selectModal.open(value)
  }

  const handleOk = (params) => {
    console.log('handleOk:', params)
    selectModal.close()
    mutators.change(params)
  }

  const handleSwapCard = (source, target) => {
    const sourceIndex = value.findIndex(item => item.id === source.id)
    const targetIndex = value.findIndex(item => item.id === target.id)

    const newValue = cloneDeep(value)
    newValue[targetIndex] = cloneDeep(source)
    newValue[sourceIndex] = cloneDeep(target)

    mutators.change(newValue)
  }

  return (
    <div className="card-select">
      <div className="card-select__header">
        <Button onClick={handleSelect}>选择卡片</Button>
      </div>
      <div className="card-select__content">
        {
          value.map(card => (
            <Card card={card} key={card.id} swapCard={handleSwapCard} />
          ))
        }
      </div>
      {
        selectModal.visible && (
          <SelectModal
            params={selectModal}
            onCancel={selectModal.close}
            onOk={handleOk}
          />
        )
      }
    </div>
  )
}

CardSelect.isFieldComponent = true

export default CardSelect

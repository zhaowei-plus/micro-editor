import React from 'react'

import './index.less'

export default () => {

  const dataSource = [
    {
      id: 1,
      name: 'item1',
      children: [
        {
          id: 11,
          name: 'item11'
        },
        {
          id: 12,
          name: 'item12'
        },
      ]
    },
    {
      id: 2,
      name: 'item2',
      children: [
        {
          id: 21,
          name: 'item21',
        }
      ]
    }
  ]

  return (
    <div className="sort-content">
    </div>
  )
}

import React, { useState } from 'react'

import List from './List'
import Editor from './editor'

export default (props) => {
  const [page, setPage] = useState('list')

  const handleGo = (page) => {
    setPage(page)
  }

  if (page === 'editor') {
    return (<Editor go={handleGo} />)
  }

  return (<List go={handleGo} />)
}


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConfigProvider  } from 'antd'

// react-dnd
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'

// React beautiful-dnd
// import { DragDropContext } from 'react-beautiful-dnd'

import store from './store'

// import Editor from './microapp-visualization/editor'
// import Editor from './befutiful-dnd/editor'
// import Editor from './sortable/editor'
// import Editor from './jquery/editor'
import Editor from './smooth-dnd/editor'

import 'antd/dist/antd.css'

// ReactDOM.render(
//   <DndProvider backend={HTML5Backend}>
//     <ConfigProvider>
//       <Provider store={store}>
//         <Editor />
//       </Provider>
//     </ConfigProvider>
//   </DndProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ConfigProvider>
    <Provider store={store}>
      <Editor />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

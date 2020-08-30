export const WidgetsMock = [{
  "type": "tab",
  "title": "卡片组标题",
  "showTitle": true,

  // 子项
  "children": [{
    "id": 1597028136931,
    "name": "tab1"
  }, {
    "id": 1597028136932,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "组件类型",
      "x-component": "Input",
      "x-props": {
        "disabled": true
      },
      "default": "tab"
    },
    "title": {
      "title": "标题名称",
      "x-component": "Input",
      "default": "卡片组标题"
    },
    "showTitle": {
      "title": "显示标题",
      "x-component": "Switch"
    },
    "children": {
      "type": "Array",
      "title": "tab名称",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "名称",
            "x-component": "Input"
          }
        }
      }
    }
  },
  "id": 1597028136931
}, {
  "type": "picture",
  "title": "静态图",
  "showTitle": true,
  "children": [{
    "id": 1,
    "name": "tab1"
  }, {
    "id": 2,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "组件类型",
      "x-component": "Input",
      "x-props": {
        "disabled": true
      },
      "default": "静态图"
    },
    "title": {
      "title": "标题名称",
      "x-component": "Input"
    },
    "showTitle": {
      "title": "显示标题",
      "x-component": "Switch"
    },
    "size": {
      "title": "高宽比",
      "x-component": "Input"
    },
    "picture": {
      "title": "封面图",
      "x-component": "Upload"
    },
    "jumpType": {
      "title": "跳转类型",
      "x-component": "Select",
      "enum": [{
        "label": "自定义",
        "value": 1
      }, {
        "label": "小程序页面",
        "value": 2
      }]
    },
    "jumpUrl": {
      "title": "跳转地址",
      "x-component": "Input"
    }
  },
  "id": 1597028138361
}, {
  "type": "data-card",
  "title": "数据卡片",
  "showTitle": true,
  "children": [{
    "id": 1,
    "name": "tab1"
  }, {
    "id": 2,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "卡片名称",
      "x-component": "Input"
    },
    "children": {
      "type": "Array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "卡片名称",
            "x-component": "Input"
          }
        }
      }
    }
  },
  "id": 1597028140617
}, {
  "type": "picture",
  "title": "静态图",
  "showTitle": true,
  "children": [{
    "id": 1,
    "name": "tab1"
  }, {
    "id": 2,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "组件类型",
      "x-component": "Input",
      "x-props": {
        "disabled": true
      },
      "default": "静态图"
    },
    "title": {
      "title": "标题名称",
      "x-component": "Input"
    },
    "showTitle": {
      "title": "显示标题",
      "x-component": "Switch"
    },
    "size": {
      "title": "高宽比",
      "x-component": "Input"
    },
    "picture": {
      "title": "封面图",
      "x-component": "Upload"
    },
    "jumpType": {
      "title": "跳转类型",
      "x-component": "Select",
      "enum": [{
        "label": "自定义",
        "value": 1
      }, {
        "label": "小程序页面",
        "value": 2
      }]
    },
    "jumpUrl": {
      "title": "跳转地址",
      "x-component": "Input"
    }
  },
  "pid": 1597028136931,
  "id": 1597028142335
}, {
  "type": "静态图",
  "title": "卡片组标题",
  "showTitle": true,
  "children": [{
    "id": 1,
    "name": "tab1"
  }, {
    "id": 2,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "组件类型",
      "x-component": "Input",
      "x-props": {
        "disabled": true
      },
      "default": "tab"
    },
    "title": {
      "title": "标题名称",
      "x-component": "Input",
      "default": "卡片组标题"
    },
    "showTitle": {
      "title": "显示标题",
      "x-component": "Switch"
    },
    "children": {
      "type": "Array",
      "title": "tab名称",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "名称",
            "x-component": "Input"
          }
        }
      }
    }
  },
  "pid": 1597028136931,
  "id": 1597028144013
}, {
  "type": "picture",
  "title": "静态图",
  "showTitle": true,
  "children": [{
    "id": 1,
    "name": "tab1"
  }, {
    "id": 2,
    "name": "tab2"
  }],
  "schema": {
    "type": {
      "title": "组件类型",
      "x-component": "Input",
      "x-props": {
        "disabled": true
      },
      "default": "静态图"
    },
    "title": {
      "title": "标题名称",
      "x-component": "Input"
    },
    "showTitle": {
      "title": "显示标题",
      "x-component": "Switch"
    },
    "size": {
      "title": "高宽比",
      "x-component": "Input"
    },
    "picture": {
      "title": "封面图",
      "x-component": "Upload"
    },
    "jumpType": {
      "title": "跳转类型",
      "x-component": "Select",
      "enum": [{
        "label": "自定义",
        "value": 1
      }, {
        "label": "小程序页面",
        "value": 2
      }]
    },
    "jumpUrl": {
      "title": "跳转地址",
      "x-component": "Input"
    }
  },
  "pid": 1,
  "id": 1597028145475
}]

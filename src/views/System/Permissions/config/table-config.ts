// export const
export const prermissList = [
  // showIndexColumn: true,
  // showSelectionColumn: true,
  // showExpandColumn: true,
  // tableParams:{
  //   rowKey:id
  // },
  {
    label: '菜单名称',
    prop: 'menuLabel',
    align: 'center'
  },
  {
    label: '菜单类型',
    prop: 'type',
    align: 'center',
    slotName:'menuType',
  },
  {
    label: '菜单图标',
    prop: 'icon',
    align: 'center'
  },
  {
    label: '路由名称',
    prop: 'parentName',
    align: 'center'
  },
  {
    label: '路由地址',
    prop: 'path',
    align: 'center'
  },  {
    label: '组件路径',
    prop: 'url',
    align: 'center'
  },
  {
    label: '权限字段',
    prop: 'menuCode',
    align: 'center'
  },  
  {
    id: 7,
    label: '操作',
    align: 'center',
    width: 310,
    slotName: 'action'
  }

]

import {ref} from 'vue'
export const sysformConfig = ref({
    fromtiem: [
      {
        label: '栋数名称',
        type: 'input',
        field: 'buildNme'
      },
      {
        label: '单元名称',
        type: 'input',
        field: 'unitName'
      },
      {
        label: '房屋编号',
        type: 'input',
        field: 'houseNum'
      },
      {
        label: '使用状态',
        type: 'select',
        field: 'status',
        options: [
            {
                value: '0',
                label: '未使用',
              },
              {
                value: '1',
                label: '已使用',
              },
        ]
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
import {ref} from 'vue'
export const UnitformConfig = ref({
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
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
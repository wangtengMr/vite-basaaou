import {ref} from 'vue'
export const liveruserformConfig = ref({
    fromtiem: [
      {
        label: '姓名',
        type: 'input',
        field: 'loginName'
      },
      {
        label: '电话',
        type: 'input',
        field: 'phone'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
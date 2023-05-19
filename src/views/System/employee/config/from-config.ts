import {ref} from 'vue'
export const formConfig = ref({
    fromtiem: [
      {
        label: '姓名',
        type: 'input',
        field: 'loginame'
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
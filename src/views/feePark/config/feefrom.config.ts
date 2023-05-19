import {ref} from 'vue'
export const feeParkformConfig = ref({
    fromtiem: [
      {
        label: '姓名',
        type: 'input',
        field: 'userName'
      },
      {
        label: '车位名称',
        type: 'input',
        field: 'parkName'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
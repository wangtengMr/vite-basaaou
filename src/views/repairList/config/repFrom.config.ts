import {ref} from 'vue'
export const repFromformConfig = ref({
    fromtiem: [
      {
        label: '报修内容',
        type: 'input',
        field: 'repairContent'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
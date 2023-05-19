import {ref} from 'vue'
export const notisformConfig = ref({
    fromtiem: [
      {
        label: '标题',
        type: 'input',
        field: 'title'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
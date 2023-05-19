import {ref} from 'vue'
export const USERformConfig = ref({
    fromtiem: [
      {
        label: '标题',
        type: 'input',
        field: 'title'
      },
      {
        label: '内容',
        type: 'input',
        field: 'usercomplsit'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
import {ref} from 'vue'
export const roleformConfig = ref({
    fromtiem: [
      {
        label: '角色名称',
        type: 'input',
        field: 'roleName'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
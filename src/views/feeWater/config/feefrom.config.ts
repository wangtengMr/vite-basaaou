import {ref} from 'vue'
export const feefsformConfig = ref({
    fromtiem: [
      {
        label: '姓名',
        type: 'input',
        field: 'userName'
      },
      {
        label: '房屋编号',
        type: 'input',
        field: 'houseNum'
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
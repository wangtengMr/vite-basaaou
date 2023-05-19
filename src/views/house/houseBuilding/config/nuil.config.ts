import {ref} from 'vue'
export const muilformConfig = ref({
    fromtiem: [
      {
        label: '栋数名称',
        type: 'input',
        field: 'name'
      },
      {
        label: '栋数类型',
        type: 'select',
        field: 'type',
        options: [
            {
                value: '0',
                label: '普通房',
              },
              {
                value: '1',
                label: '电梯房',
              },
        ]
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
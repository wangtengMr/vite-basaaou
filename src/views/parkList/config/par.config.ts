import {ref} from 'vue'
export const parkiformConfig = ref({
    fromtiem: [
      {
        label: '车位名称',
        type: 'input',
        field: 'buildNme'
      },
      {
        label: '车位类型',
        type: 'select',
        field: 'parkStatus',
        options: [
            {
                value: '0',
                label: '地下',
              },
              {
                value: '1',
                label: '地上',
              },
        ]
      },
      {
        label: '使用状态',
        type: 'select',
        field: 'parkType',
        options: [
            {
                value: '0',
                label: '未使用',
              },
              {
                value: '1',
                label: '已使用',
              },
        ]
      },
      {
        type: 'slot',
        slotName: 'button'
      }
    ]
  })
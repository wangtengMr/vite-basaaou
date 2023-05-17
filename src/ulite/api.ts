import instance from "@/ulite/http"

export const login  = (params:any) =>instance.post('user/login',params)

//user/getInfo?userId=4
export const getInfo = (id:any) =>instance.get(`user/getInfo?userId=${id}`)
//user/getMenuList
export const getMenuList = () =>instance.get('user/getMenuList')

//user/list?loginName=&phone=&curentPage=1&pageSize=10&total=0
export const getlistName = () =>instance.get('user/list?loginName=&phone=&curentPage=1&pageSize=10&total=0')

//角色列表数据role/list?pageSize=10&currentPage=1&roleName=&total=0
export const getlistRole = () =>instance.get('role/list?pageSize=10&currentPage=1&roleName=&total=0')

//权限管理 menu/list
export const getpoysList = () =>instance.get('menu/list')

//HouseBuilding/list?name=&type=&pageSize=10&currentPage=1&total=0
export const houseBuilding = () =>instance.get('HouseBuilding/list?name=&type=&pageSize=10&currentPage=1&total=0')

//houseUnit/list?buildNme=&unitName=&currentPage=1&pageSize=10&total=0
export const houseUnit = () =>instance.get('houseUnit/list?buildNme=&unitName=&currentPage=1&pageSize=10&total=0')

//houseList/list?buildNme=&status=&unitName=&houseNum=&currentPage=1&pageSize=10&total=0
export const houseLists = () =>instance.get('houseList/list?buildNme=&status=&unitName=&houseNum=&currentPage=1&pageSize=10&total=0')

//parkList/list?currentPage=1&pageSize=10&parkName=&parkStatus=&parkType=&total=0
export const parkList = () =>instance.get('parkList/list?currentPage=1&pageSize=10&parkName=&parkStatus=&parkType=&total=0')

//liveUser/list?loginName=&phone=&currentPage=1&pageSize=10&total=0 "liveUser"
export const liveUser = () =>instance.get('liveUser/list?loginName=&phone=&currentPage=1&pageSize=10&total=0')

//userComplaint/list?currentPage=1&pageSize=10&title=&complaintContent=&total=0 投诉管理 userComplaintList
export const userComplaint = () =>instance.get('userComplaint/list?currentPage=1&pageSize=10&title=&complaintContent=&total=0')

//userRepair/list?total=0&currentPage=1&pageSize=10&userId=&repairContent= 维修管理 repairList
export const userRepair = () =>instance.get('userRepair/list?total=0&currentPage=1&pageSize=10&userId=&repairContent=')

//sysNotice/list?currentPage=1&pageSize=10&title=&total=0 公告列表 noticeList
export const sysNotice = () =>instance.get('sysNotice/list?currentPage=1&pageSize=10&title=&total=0')

//收费管理

// 1
//feePower/list?userName=&houseNum=&currentPage=1&pageSize=10&total=0  ‘feePower’
export const feePowers = () =>instance.get('feePower/list?userName=&houseNum=&currentPage=1&pageSize=10&total=0')

// 2
//feeWater/list?total=0&currentPage=1&pageSize=10&userName=&houseNum= 'feeWater'


//3
//feePark/list?currentPage=1&pageSize=10&userName=&parkName=&total=0  'feePark'
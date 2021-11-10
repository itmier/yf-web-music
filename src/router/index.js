/*
 * @Author: 王云飞
 * @Date: 2021-11-09 15:36:03
 * @LastEditTime: 2021-11-09 16:04:13
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
import YFDiscover from '@/pages/discover'
import YFMine from '@/pages/mine'
import YFFriend from '@/pages/friend'
const routes = [
  {
    path:'/',
    exact: true,
    component: YFDiscover
  },
  {
    path:'/mine',
    component: YFMine
  },
  {
    path:'/friend',
    component: YFFriend
  }
]
export default routes
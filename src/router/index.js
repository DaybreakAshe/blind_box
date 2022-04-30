// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入组件
import page1 from '../components/page1/page1'
import page2 from '../components/page2/page2'
import page3 from '../components/page3/page3'

const router = new VueRouter({
    routes: [{
        path: '/page1',
        component: page1
    }, {
        path: '/page2',
        component: page2
    },
    {
        path: '/page3',
        component: page3
    }]
})

// 输出router
export default router;
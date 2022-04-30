// ����·��ģ�鲢ʹ����
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// �������
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

// ���router
export default router;
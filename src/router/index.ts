import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { 
    path: '/', 
    name: 'home',
    redirect:'/all_question'
  },
  { 
    path: '/all_question', 
    name: 'all_question',
    component: () => import('@/views/question/all_question.vue') 
  },
  { 
    path: '/check_question', 
    name: 'check_question',
    component: () => import('@/views/question/check_question.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
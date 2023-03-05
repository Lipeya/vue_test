import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsertView from '../views/InsertView.vue'
import LoginView from '../views/LoginView.vue'
import UserListView from '../views/UserListView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import SearchListView from '../views/SearchListView.vue'
import BookView from '../views/BookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // views나 components나 같은 컴포넌트지만, 관심사 분리를 위해 폴더 구조 분리
    // views : 직접적으로 화면에 띄워지는 컴포넌트
    // components : 그외의 것?
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path:'/vue_insert', component : InsertView},
  { path:'/vue_login', component : LoginView},
  { path:'/user_list', component: UserListView},
  { path:'/user_info', component: UserInfoView},
  { path:'/search_list', component : SearchListView},
  { path:'/book', component:BookView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

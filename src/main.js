import { createApp } from 'vue'
import App from './App.vue'
// router와 store라는게 추가됨
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

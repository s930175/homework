import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
//嘗試做登入表單驗證

// router.beforeEach((to, from, next)=>{
//     const isLogin = localStorage.getItem('token') == 'ImLogin' ;
//     if( isLogin ){
//       next();
//     } else {
//       if( to.path !== '/login')
//         next('/login');
//       else
//         next();
//     }
//   });
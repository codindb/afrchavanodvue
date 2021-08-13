import * as VueRouter from 'vue-router'

// Pages 
import HomePage from '../pages/Home.vue'
const NotFoundPage = () => import('../pages/NotFound.vue') // Lazy Loading of Pages when using this syntax
const EasterEggPage= () => import('../pages/EasterEgg.vue') // Lazy Loading of Pages when using this syntax

const routes = [
   {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomePage,
      // children: [
      //    {
      //       path: 'home/:taskID',
      //       component: HomePage
      //    }
      // ]
   },
   { 
      path: '/onenagros',
      name: 'OnEnAGros', 
      component: EasterEggPage
   },
   {
      path: '/notfound',
      name: 'NotFound',
      component: NotFoundPage
    },
    {
      path: '/:wrongPath(.*)',
      redirect: (to) => {
        return { name: 'NotFound' }
      }
    }
 ];
 
 const router = VueRouter.createRouter({
   history: VueRouter.createWebHistory(),
   routes,
 });
 
 export default router;
 
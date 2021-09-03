import * as VueRouter from 'vue-router'

// Pages 
import HomePage from '../pages/Home.vue'
const NotFoundPage = () => import('../pages/NotFound.vue') // Lazy Loading of Pages when using this syntax
const UnderConstructionPage = () => import('../pages/UnderConstruction.vue') // Lazy Loading of Pages when using this syntax
const EasterEggPage= () => import('../pages/EasterEgg.vue') // Lazy Loading of Pages when using this syntax
const SingleActivityPage= () => import('../pages/SingleActivity.vue') // Lazy Loading of Pages when using this syntax
const SingleWorkshopPage= () => import('../pages/SingleWorkshop.vue') // Lazy Loading of Pages when using this syntax
const SingleKidsActivityPage= () => import('../pages/SingleKidsActivity.vue') // Lazy Loading of Pages when using this syntax
const KidsCampPage= () => import('../pages/KidsCamp.vue') // Lazy Loading of Pages when using this syntax
const MissionPage= () => import('../pages/Mission.vue') // Lazy Loading of Pages when using this syntax
const MembersPage= () => import('../pages/Members.vue') // Lazy Loading of Pages when using this syntax
const InscriptionPage= () => import('../pages/Inscription.vue') // Lazy Loading of Pages when using this syntax

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
      path: '/activites/:id',
      name: 'Activite',
      component: SingleActivityPage,
   },
   {
      path: '/ateliers/:id',
      name: 'Atelier',
      component: SingleWorkshopPage,
   },
   {
      path: '/enfants/:id',
      name: 'Enfants',
      component: SingleKidsActivityPage,
   },
   {
      path: '/centre-loisirs',
      name: 'CentreLoisirs',
      component: KidsCampPage,
   },
   {
      path: '/mission',
      name: 'Mission',
      component: MissionPage,
   },
   {
      path: '/equipe',
      name: 'Equipe',
      component: MembersPage,
   },
   {
      path: '/inscription',
      name: 'Inscription',
      component: InscriptionPage,
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
      path: '/construction',
      name: 'UnderConstruction',
      component: UnderConstructionPage
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
   // always scroll to top when using router links
   scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },
 });
 
 export default router;
 
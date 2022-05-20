
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path:'Login',name:'Login-register',component:()=>import('pages/Login.vue')},
      { path:'Welcome',name:'Welcome-page',component:()=>import('pages/WelcomePage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

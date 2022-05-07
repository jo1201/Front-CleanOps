
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'IndexPage',component: () => import('pages/IndexPage.vue') },
      { path:'Login',name:'Login-register',component:()=>import('pages/Login.vue')}
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

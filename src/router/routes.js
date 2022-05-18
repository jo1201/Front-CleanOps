
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
    /* children: [
      { path:'Login',name:'Login-register',component:()=>import('src/layouts/Login.vue')},
    ] */
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
            <q-img
              src="~assets/Logo-render2.png"
              style="height: 70px; max-width: 70px"
            />
          Clean-Ops
        </q-toolbar-title>
        <div>
          <q-btn-group push>
            <q-btn push to="/Login" label="Iniciar sesión" icon="login"/>
            <q-btn push to="/Home" label="Principal" icon="home" />
          </q-btn-group>
        </div>
      </q-toolbar>
    </q-header>

   <!--  <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list >
        <q-item-label
          header
        >
        Menu de opciones
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
/* import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Pagina de inicio',
    caption: '¿Quienes somos ?',
    icon: 'home',
    link: 'IndexPage'
  },
  {
    title: 'Inicio de sesión',
    caption: 'ponte al dia con tu trabajo',
    icon: 'login',
    link: 'Login-register'
  }
] */

export default defineComponent({
  name: 'MainLayout',

  /* components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  } */
  
})
</script>

<template>
	 <q-layout view="hHh Lpr lFf">
     <q-page-container class="bg-grey-2">
       <q-page padding class="row items-center justify-center">
         <div class="shadow-3">
            <q-card flat class="bg-white " >
              <q-card-section>
                <q-avatar size="100px" class="absolute-center shadow-3 ">
                  <img class="responsive" src="" />
                </q-avatar>
              </q-card-section>
              <q-card-section>
                <div class="q-pt-lg">
                  <div class="col text-h6 ellipsi flex justify-center">
                    <h5 class="text-uppercase q-my-none">Iniciar Sesión
                    </h5>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                 class="q-gutterd-nd">
                  <q-input
                        rounded filled
                        v-model="lname"
                        label="Cedula"
                        :rules="[
                          val => val !== null && val !== ''|| 'Porfavor ingrese la cedula',
                          val => val.length>=7 && val.length<=9 || 'La cedula tiene que ser de 7 a 9 digitos']"
                      />
                      <br>
                      <q-input
                        rounded filled
                        type="password"
                        v-model="password"
                        label="Contraseña"
                        :rules="[
                          val => val !== null && val !== ''|| 'Porfavor ingrese la contraseña',
                          val => val.length>=4 && val.length <= 8 || 'La contraseña tiene que ser maximo de 4 a 8 caracteres']"
                      />
                      <div class="q-pa-md q-gutter-y-md column items-start">
                        <q-btn-group push>
                          <q-btn push color="secondary" label="Iniciar" type="submit" icon="login" />
                          <q-btn push color="secondary" label="Limpiar" type="reset" icon="cleaning_services" />
                        </q-btn-group>
                      </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
       </q-page>
     </q-page-container>
   </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name:'Login-register',
  data() {
    return {
      lname: null,
      password: null,
    }
  },

  methods: {
    onSubmit() {
      console.log("click submit");
    },
    onReset() {
      this.lname = null;
      this.password = null;
    }
  }

})
</script>

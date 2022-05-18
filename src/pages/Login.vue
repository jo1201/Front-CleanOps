<template>
  <q-layout>
    <q-page padding class="row bg-grey-2 items-center justify-center">
      <div class="shadow-2">
        <q-card>
          <q-card-section>
            <q-avatar size="100px" class="absolute-center shadow-2">
              <img class="responsive" src="~assets/assetsv0.2/Logo.svg" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutterd-nd">
              <div class="text-h6 text-center q-pt-lg q-pb-sm">Acceder</div>
              <q-input
                style="padding-bottom: 35px"
                rounded
                filled
                v-model="lname"
                mask="#########"
                label="Numero de cedula"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Porfavor ingrese la cedula,solo acepta caracteres numericos',
                  (val) =>
                    (val.length >= 7 && val.length <= 9) ||
                    'La cedula tiene que ser de 7 a 9 digitos',
                ]"
              />
              <q-input
                rounded
                filled
                mask="NNNNNNNNN"
                type="password"
                v-model="password"
                label="Contraseña"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Porfavor ingrese la contraseña,solo acepta caracteres alfanumericos',
                  (val) =>
                    (val.length >= 4 && val.length <= 9) ||
                    'La contraseña tiene que ser maximo de 4 a 8 caracteres',
                ]"
              />
              <div class="q-pa-md q-gutter-y-md column items-start">
                <q-btn-group push>
                  <q-btn
                    push
                    color="secondary"
                    label="Iniciar"
                    type="submit"
                    icon="login"
                  />
                  <q-btn
                    push
                    color="secondary"
                    label="Limpiar"
                    type="reset"
                    icon="cleaning_services"
                  />
                </q-btn-group>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
    <q-footer>
      <div class="text-center">Todos los derechos reservados © 2022</div>
    </q-footer>
  </q-layout>
</template>
<style>
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login-register",
  data() {
    return {
      lname: null,
      password: null,
    };
  },

  methods: {
    onSubmit() {
      console.log(this.lname);
      console.log(this.password);
    },
    onReset() {
      this.lname = null;
      this.password = null;
    },
  },
});
</script>

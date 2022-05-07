<template>
	 <q-layout view="hHh Lpr lFf">
     <q-page-container class="bg-grey-2">
       <q-page padding class="row items-center justify-center">
         <div class="shadow-3">
            <q-card flat class="bg-white " >
              <q-card-section>
                <q-avatar size="100px" class="absolute-center shadow-4" >
                  <img/>
                </q-avatar>
              </q-card-section>
              <q-card-section>
                <div class="q-pt-lg">
                  <div class="col text-h6 ellipsi flex justify-center">
                    <h2 color="primary" class="text-h5 text-uppercase q-my-none text-weight-regular">Login up
                    </h2>
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
                        label="Idcard"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please type your idcard',
                          (val) =>
                            (val.length < 0) || 'Please type idcard',
                        ]"
                      />
                      <br>
                      <q-input
                        rounded filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please type your password',
                          (val) =>
                            (val.length<0 && val.length>8) || 'Please type a real age',
                        ]"
                      />
                      <div class="q-pa-md q-gutter-y-md column items-start">
                        <q-btn-group push>
                          <q-btn push color="primary" label="Login" type="submit" icon="login" />
                          <q-btn push color="primary" label="Clean" type="reset" icon="cleaning_services" />
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

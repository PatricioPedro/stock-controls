<template>
  <q-page padding>
    <q-form @submit.prevent="handleLogin" class="column justify-center q-pa-sm q-gutter-md">
      <div class="full-width text-center text-h5">Login</div>
      <q-input v-model="form.email" label="Email" />
      <q-input v-model="form.password" label="Password" />
      <q-btn :loading="loading" label="Sign In" type="submit" outline rounded color="primary" />
      <q-btn label="Sign Up" flat color="primary" to="/register"/>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

import { useQuasar } from 'quasar'

import useAuthUser from "src/composables/userAuthApi";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const { login } = useAuthUser();

    const $q = useQuasar()

    const loading = ref(false);

    const form = ref({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        loading.value = true;
        await login(form.value);
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: error.message
        })
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    return {
      handleLogin,
      form,
      loading,
    };
  },
});
</script>

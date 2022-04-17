<template>
  <q-page padding>
    <q-form @submit.prevent="handleRegister" class="column justify-center q-pa-sm q-gutter-md">
      <div class="full-width text-center text-h5">Register</div>
      <q-input v-model="form.name" label="Name" />
      <q-input v-model="form.email" label="Email" />
      <q-input v-model="form.password" label="Password" />
      <q-btn :loading="loading" label="Save" type="submit" outline rounded color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

import { useQuasar } from 'quasar'

import useAuthUser from "src/composables/userAuthApi";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const { register } = useAuthUser();

    const $q = useQuasar()
    const $router = useRouter()
    const loading = ref(false);

    const form = ref({
      email: "",
      password: "",
      name: ""
    });

    const handleRegister = async () => {
      try {
        loading.value = true;
        await register(form.value);

        $router.push({
          name: 'email-confirmation',
          query: {email: form.value.email}
        })
         
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: error.message
        })
      } finally {
        loading.value = false;
      }
    };

    return {
      handleRegister,
      form,
      loading,
    };
  },
});
</script>

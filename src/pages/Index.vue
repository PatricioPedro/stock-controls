<template>
  <q-page class="flex flex-center">
     <p v-if="user">
        {{ user.user_metadata.name }}
     </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

import useAuthUser from 'src/composables/userAuthApi'

export default defineComponent({
  name: 'PageIndex',
  setup () {
     
     const {user} = useAuthUser()

     return {
       user
     }
  }
})
</script>

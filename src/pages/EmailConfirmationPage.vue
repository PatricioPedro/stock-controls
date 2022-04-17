<template>
  <q-page padding>
    <p class="text-subtitle2">
      Thanks!!
    </p>
    <p class="text-body1">
      Your register was success, please confirm your mail address to have access into app <strong>{{
          $route.query.email
        }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmPage",
  setup() {
 
    return {
    };
  },
});
</script>

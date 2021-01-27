<template>
  <v-app>
    <v-main> <Calc /> </v-main>
  </v-app>
</template>

<script>
import Calc from "./views/Calc";

export default {
  name: "App",

  components: {
    Calc,
  },

  data: () => ({
    //
  }),
};
</script>

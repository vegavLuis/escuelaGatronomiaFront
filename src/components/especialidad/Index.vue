<template>
  <div>
    <h2 class="text-center pt-12 pb-6 tiro-devnagari">Especialidad</h2>
    <v-row>
      <v-col cols="12" md="6">
        <ChefInternacionalVue />
      </v-col>
      <v-col cols="12" md="6">
        <ChefRepostero />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ChefInternacionalVue from "./ChefInternacional.vue";
import ChefRepostero from "./ChefRepostero.vue";
export default {
  name: "EscuelaIndex",
  components: {
    ChefInternacionalVue,
    ChefRepostero,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

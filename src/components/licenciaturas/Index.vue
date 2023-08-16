<template>
  <div>
    <v-container>
    <h2 class="text-center pt-12 pb-6 tiro-devnagari">Licenciatura</h2>
      <LicEnGastronomiaVue id="licenciaturaEnGastronomia"/>
      <LicEnAdmin id="licenciaturaEnAdministracion"/>
    </v-container>
  </div>
</template>

<script>
import LicEnGastronomiaVue from "./LicEnGastronomia.vue";
import LicEnAdmin from './LicEnAdmin.vue'
export default {
  name: "EscuelaIndex",
  components: {
    LicEnGastronomiaVue,
    LicEnAdmin
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div>
    <v-container>
      <h2 class="text-center pt-12 pb-6 tiro-devnagari">Bachillerato</h2>
      <v-row>
        <v-col cols="12" sm="6" md="12">
          <BachilleratoGastronomiaVue id="bachilleratoGastronomia"/>
        </v-col>
        <v-col cols="12" sm="6" md="12">
          <BachilleratoGeneralVue id="bachilleratoGeneral"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BachilleratoGastronomiaVue from "./BachilleratoGastronomia.vue";
import BachilleratoGeneralVue from "./BachilleratoGeneral.vue";
export default {
  name: "EscuelaIndex",
  components: {
    BachilleratoGastronomiaVue,
    BachilleratoGeneralVue,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

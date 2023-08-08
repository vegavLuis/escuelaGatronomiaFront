<template>
  <div>
    <v-row v-for="item in data" :key="item.encabezado">
      <v-col cols="12" md="6">
        <img :src="item.src" class="imagen" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0">
          <h3 class="primary--text extraBold">
            {{ item.encabezado }}
          </h3>
          <!-- <p class="success--text semiBold">RVOE: {{ item.rvoe }}</p> -->
          <p class="extraBold info--text">{{ item.duracion }}</p>
          <p class="medium mb-0">
            Incluye: <span class="extraBold">{{ item.inclye }}</span>
          </p>
          <p class="medium mb-0">
            Aprendizaje:
            <span class="extraBold">{{ item.aprendizaje }}</span>
          </p>
          <p class="medium">
            Modalidades:
            <span class="extraBold">{{ item.modalidades }}</span>
          </p>
          <!-- <p class="semiBold primary--text">{{ item.insumos }}</p> -->
          <v-btn class="my-4 pa-5 extraBold" color="info">
            <span class="boton">INFORMES</span>
          </v-btn>
          <div class="carta pa-8">
            <h5 class="primary--text">{{ item.perfil }}</h5>
            <p class="medium success--text mt-2">
              El licenciado en gastronomía será capaz de preservar, difundir y
              transmitir la cultura gastronómica en todos sus enfoques con sus
              conocimientos e información integral obtenida tanto teóricas como
              practicas en el procesamiento de alimentos y bebidas
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EscuelaLicEnAdmin",
  data() {
    return {
      data: [
        {
          src: require("@/assets/images/imagenLicEnGastronomia.jpg"),
          encabezado: `Licenciatura en Administración de Empresas Turísticas`,
          rvoe: "20171490",
          duracion: "DURACIÓN DE 3 AÑOS 4 MESES (PLAN CUATRIMESTRAL)",
          inclye: " Inglés y francés.",
          aprendizaje: "60% práctico y 40% teórico.",
          modalidades: "Escolarizada y ejecutiva.",
          insumos: "Insumos y préstamo de equipo incluidos.",
          perfil: "Perfil de egreso para Licenciatura:",
          // contexto: `Al egresar de la   serás capaz de difundir y transmitir la cultura gastronómica en todos sus enfoques tanto teóricos como prácticos en el proceso de alimentos y bebidas. Tendrás conocimientos y herramientas para emprender y gestionar negocios en la industria gastronómica.`,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.boton {
  font-size: 16px;
}
.carta {
  border: 1px solid black;
}
</style>

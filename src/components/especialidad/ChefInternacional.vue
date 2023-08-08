<template>
  <div>
    <v-row v-for="item in data" :key="item.titulo">
      <v-card color="transparent" class="pa-2" elevation="0">
      <v-col cols="12" sm="6" md="12" class="cajaImagen ma-0 pa-0">
        <img :src="item.src" class="imagen" />
      </v-col>
      <v-col class="pl-8 caja2">
        <v-card elevation="0" width="auto">
          <h3>
            {{ item.titulo }}
          </h3>
          <p class="extraBold info--text">
            {{ item.duracion }}
          </p>
          <p class="medium success--text">{{ item.especialidad }}</p>
          <p class="medium success--text">
            Aprendizaje: <span class="extraBold">{{ item.aprendizaje }}</span>
          </p>
          <p class="medium success--text">
            Modalidades: <span class="extraBold">{{ item.modalidades }}</span>
          </p>
          <p class="medium success--text">
            Al término se entrega:
            <span class="extraBold">{{ item.termino }}</span>
          </p>
          <p class="semiBold primary--text">{{ item.insumos }}</p>
          <v-btn class="my-4 pa-5 extraBold" color="info">
            <span class="boton">INFORMES</span>
          </v-btn>
        </v-card>
      </v-col>
      <div class="caja pa-8 mt-8">
        <h5 class="primary--text">{{ item.perfil }}</h5>
        <p class="medium success--text mt-2">
          Al egresar de la
          <span class="primary--text extraBold"
            >Especialidad Chef Internacional</span
          >
          obtendrás conocimientos para elaborar, combinar e identificar
          alimentos salados. Podrás administrar y asesorar negocios de tu rama,
          mismos con los cuales podrás desarrollar tus habilidades de innovación
          y creatividad.
        </p>
      </div>
    </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EscuelaChefInternacional",
  data() {
    return {
      data: [
        {
          src: require("@/assets/images/ImagenEspecialidadRepostero.jpg"),
          titulo: "Chef Internacional",
          duracion: "DURACIÓN DE 2 AÑOS",
          especialidad:
            "Es una especialidad gastronómica incorporada a la SEP.",
          aprendizaje: "60% práctico y 40% teórico.",
          modalidades: "Escolarizada y ejecutiva.",
          termino:
            "Diploma por parte de la SEP en el área de alimentos y bebidas.",
          insumos: "Insumos y préstamo de equipo incluidos.",
          perfil: "Perfil de egreso para Chef Internacional:",
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
.caja {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.cajaImagen {
  /* border: 1px 0 solid rgba(0, 0, 0, 0.2); */
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.caja2 {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

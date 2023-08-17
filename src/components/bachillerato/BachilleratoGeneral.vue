<template>
  <div>
    <v-row v-for="item in data" :key="item.titulo">
      <v-col cols="12" sm="12" md="6" order="last" order-md="6" order-lg="6">
        <v-card elevation="0" data-aos="zoom-in" data-aos-duration="1000">
          <h3 class="primary--text">{{ item.titulo }}</h3>
          <p class="success--text semiBold">RVOE: {{ item.rvoe }}</p>
          <p class="extraBold info--text">{{ item.duracion }}</p>
          <p class="medium mb-0">
            Aprendizaje:
            <span class="extraBold">{{ item.aprendizaje }}</span>
          </p>
          <p class="medium mb-0">
            Modalidades:
            <span class="extraBold">{{ item.modalidades }}</span>
          </p>
          <p class="medium success--text">
            Al egresar se te hará entrega:
            <span class="success--text extraBold">
              {{ item.termino }}
            </span>
          </p>
          <p class="semiBold primary--text">{{ item.insumos }}</p>
          <v-btn class="my-4 pa-5 extraBold" color="info">
            <span class="boton">INFORMES</span>
          </v-btn>
          <div class="caja pa-8 mt-8">
            <h5 class="primary--text">{{ item.perfil }}</h5>
            <p>
              Al egresar del
              <span>Bachillerato General</span>
              tendrás habilidades intelectuales, capacidad para liderar y
              expresar tus ideas con claridad.
            </p>
            <p>
              Podrás analizar y resolver problemas a partir de tus conocimientos
              y experiencias. Dominaras contenidos de enseñanza los cuales te
              ayudaran a continuar tus estudios en la universidad.
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" order-md="12" order-lg="12">
        <img :src="item.src" class="imagen" data-aos="zoom-in" data-aos-duration="1000"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "EscuelaBachilleratoGeneral",
  data() {
    return {
      data: [
        {
          src: require("@/assets/images/imagenBachilleratoGastro.jpg"),
          titulo: "Bachillerato General",
          rvoe: "20181034",
          duracion: "DURACIÓN DE 3 AÑOS (PLAN CUATRIMESTRAL)",
          aprendizaje: "60% práctico y 40% teórico.",
          modalidades: "Escolarizada y ejecutiva",
          termino: `Certificado de Bachillerato.`,
          // insumos: "Insumos y préstamo de equipo incluidos.",
          perfil: "Perfil de egreso para Bachillerato General:",
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
.caja {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

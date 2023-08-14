<template>
  <div>
    <v-container>
      <v-card elevation="0">
        <h2 class="text-center pt-12 pb-6 tiro-devnagari">Testimonios</h2>
      </v-card>
      <carousel-3d
        :disable3d="true"
        :controls-visible="true"
        :count="datos.length"
        :clickable="false"
        :space="365"
        class="ma-0 pa-0 d-flex"
      >
        <slide
          v-for="(item, i) in datos"
          :index="i"
          :key="i"
          class="sli text-center pa-5"
        >
          <p class="manrope">
            {{ item.comentario }}<br />
            <v-rating
              :value="5"
              readonly
              color="amber"
              size="16"
            ></v-rating><br />
            <span class="primary--text">{{ item.name }}</span>
          </p>
        </slide>
      </carousel-3d>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "EscuelaTestimonios",

  data() {
    return {
      datos: [
        {
          name: "CECILIA MARTINEZ MORALES",
          comentario:
            "Me gusta estudiar en esta escuela porque cuentan con chefs calificados para dar cada una de las clases, así como la facilidad que dan para brindarnos los insumos, uniforme y las herramientas necesarias para llevar a cabo cada clase, tomando mucho en cuenta los precios accesibles en las colegiaturas",
        },
        {
          name: "EVELYN RESENDIZ GOMEZ",
          comentario:
            "Me gusta estudiar en EACG por la facilidad de los horarios y que cuentan con los insumo , más a parte su colegiatura es muy accesible.",
        },
        {
          name: "ERIKA RAMÍREZ MORALES",
          comentario:
            "Por lo cual yo decidí estudiar en la escuela fue por qué me gusta mucho el mundo de la cocina y se me hizo una escuela interesante y por otro lado por qué es accesible la colegiatura",
        },
        {
          name: "ARACELI PADILLA LOZADA",
          comentario:
            "Mi experiencia en la escuela de alta cocina y gastronomía supero mis expectativas… excelentes profesores, buenas instalaciones y un agradable ambiente…estoy por concluir una especialidad en chef repostero … muy recomendable… 👌🏻👌🏻👌🏻😉",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.carousel-3d-container {
  .carousel-3d-slide {
    padding: 0px;
  }
}
.sli {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
</style>

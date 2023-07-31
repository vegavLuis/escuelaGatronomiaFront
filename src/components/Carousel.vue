<template>
  <div>
    <v-carousel
      height="100vh"
      width="100vw"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="imagenes"
      >
        <v-card
          color="rgba(0,0,0,.3)"
          width="100%"
          height="100%"
          class="d-flex justify-center align-center"
        >
          <v-card color="rgba(167, 16, 23, 0.85)" elevation="0" class="mx-4 pa-2 text-center card-titulo">
            <h1 class="titulo white--text">Escuela de Alta Cocina y Gastromonía</h1>
          </v-card>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "EscuelaCarousel",
  components: {},
  data() {
    return {
      items: [
        {
          src: require("../assets/images/imagenCarousel1.jpg"),
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.card-titulo{
  margin-top: 230px;
}
.titulo {
  justify-content: center;
  font-family: 'Tiro Devanagari Hindi';
  font-style: italic;
  font-weight: normal;
}
</style>

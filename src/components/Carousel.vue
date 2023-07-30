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
      <v-card color="rgba(0,0,0,.3)" width="100%" height="100%" class="d-flex justify-center align-center">
        <h1 class="titulo">Escuela de alta cocina y gastromonia</h1>
      </v-card>
    </v-carousel-item>
    </v-carousel>
    <v-card height="1000px">
      zxczx
    </v-card>



  </div>
</template>

<script>
export default {
  name: "EscuelaCarousel",
  components:{
  },
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
.titulo{
  justify-content: center;
}
</style>

<template>
  <div>
    <Carousel />
    <Licenciatura />
    <Especialidad />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Licenciatura from "../components/licenciaturas/Index.vue";
import Especialidad from "../components/especialidad/Index.vue";
export default {
  name: "Home",

  components: {
    Carousel,
    Licenciatura,
    Especialidad,
  },
};
</script>

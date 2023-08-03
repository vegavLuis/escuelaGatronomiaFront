<template>
  <div>
    <Carousel />
    <Licenciatura />
    <Especialidad />
    <Index />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Licenciatura from "../components/licenciaturas/Index.vue";
import Especialidad from "../components/especialidad/Index.vue";
import Index from "../components/bachillerato/Index.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    Licenciatura,
    Especialidad,
    Index,
  },
};
</script>

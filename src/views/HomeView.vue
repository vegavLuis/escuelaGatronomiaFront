<template>
  <div>
    <Carousel/>
    <Licenciatura/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Licenciatura from "../components/licenciaturas/Index.vue"
export default {
  name: "Home",

  components: {
    Carousel,
    Licenciatura
  },
};
</script>

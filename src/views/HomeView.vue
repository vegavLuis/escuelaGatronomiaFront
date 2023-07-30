<template>
  <div>
    <Carousel/>
    <Licenciatura/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Licenciatura from '@/components/Licenciatura.vue';
export default {
  name: "Home",

  components: {
    Carousel,
    Licenciatura,
  },
};
</script>

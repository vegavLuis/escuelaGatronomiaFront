<template>
  <div>
    <Carousel />
    <Licenciatura />
    <Especialidad />
    <Index />
    <Calendario/>
    <Testinmonios/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Licenciatura from "../components/licenciaturas/Index.vue";
import Especialidad from "../components/especialidad/Index.vue";
import Index from "../components/bachillerato/Index.vue";
import Calendario from "@/components/Calendario.vue"
import Testinmonios from '@/components/Testimonios.vue'
export default {
  name: "Home",
  components: {
    Carousel,
    Licenciatura,
    Especialidad,
    Index,
    Calendario,
    Testinmonios
  },
};
</script>

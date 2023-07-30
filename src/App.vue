<template>
  <v-app>
    <v-card>
      <Barra/>
      <router-view />
    </v-card>
  </v-app>

</template>

<script>
import Barra from "./components/Barra.vue";
export default {
  name: "App",
  components: {
    Barra,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {},
  mounted() {},
  created() {},
};
</script>
<style>
* {
  font-family: "Manrope";
}
.barra1.active {
  background-color: rgba(0, 0, 0, 0.95) !important;
}
.titulos {
  font-size: 16px;
  font-weight: 500;
}
h1 {
  font-size: 61px;
}
h2 {
  font-size: 48px;
}
h3 {
  font-size: 39px;
}
h4 {
  font-size: 31px;
}
h5 {
  font-size: 25px;
}
h6 {
  font-size: 20px;
}
p {
  font-size: 16px;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 23px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 19px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 17px;
  }
  p {
    font-size: 16px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
}
@media only screen and (min-width: 961px) and (max-width: 1264px) {
  h1 {
    font-size: 47px;
  }
  h2 {
    font-size: 39px;
  }
  h3 {
    font-size: 33px;
  }
  h4 {
    font-size: 37px;
  }
  h5 {
    font-size: 23px;
  }
  h6 {
    font-size: 19px;
  }
  p {
    font-size: 16px;
  }
}
</style>

<template>
  <v-app>
    <v-overlay :value="overlay" z-index="1000" opacity="1">
      <v-img src="@/assets/logo.svg" />
      <v-progress-linear
        color="primary"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </v-overlay>
    <v-btn
      fab
      fixed
      bottom
      right
      large
      color="green"
      dark
      href="https://wa.me/5568753836"
      target="”_blank”"
      class="whats"
    >
      <!-- <v-badge
        color="primary"
        content="¿Como podemos ayudarte?"
        left
        class="tol"
      >
      </v-badge> -->
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <Barra />
    <router-view />
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
      overlay: true,
    };
  },
  methods: {
    oveon() {
      this.overlay = setTimeout(() => {
        this.overlay = false;
      }, 3600);
    },
  },
  mounted() {
    this.oveon();
  },
  created() {},
};
</script>
<style>
* {
  font-family: "Manrope";
}
.whats {
  animation-name: whats;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
/* .tol {
  animation-name: tol;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
} */
@keyframes whats {
  0% {
    transform: scale(1, 1) rotate(0deg);
  }
  50% {
    transform: scale(0.98, 0.98) rotate(2deg);
  }
}
/* @keyframes tol {
  0% {
    transform: scale(0, 0);
    animation-play-state: paused;
  }
  100% {
    transform: scale(1, 1);
    animation-play-state: paused;
  }
} */
.tiro-devnagari {
  font-family: "Trio Devanagari Hindi";
  font-style: italic;
}
.barra1.active {
  background-color: rgba(0, 0, 0, 0.95) !important;
}
.semiBold {
  font-weight: 600;
}
.extraBold {
  font-weight: 800;
}
.medium {
  font-weight: 500;
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

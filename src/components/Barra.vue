<template>
  <div>
    <v-app-bar
      dark
      color="transparent"
      elevation="0"
      height="150px"
      hide-on-scroll
      class="barra1"
      app
    >
      <!-- IMAGES -->
      <v-card height="100%" color="transparent" elevation="0">
        <!-- <v-img
          alt="Logotipo"
          class="shrink ml-2 hidden-md-and-up"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="80"
        /> -->
        <v-img src="@/assets/logo.svg" class="imagen hidden-md-and-up" />
        <v-img src="@/assets/logo.svg" class="imagen hidden-sm-and-down pl-9" />
        <!-- <v-img
          alt="Logotipo"
          class="shrink hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/logo.svg"
          width="100"
        /> -->
      </v-card>
      <v-spacer></v-spacer>
      <!-- MENU CON DESPLIEGUE -->
      <div class="mr-2">
        <v-menu offset-y v-for="item in listaConDespliegue" :key="item.title">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              elevation="0"
              class="hidden-sm-and-down"
              text
            >
              <span class="titulos">
                {{ item.title }}<v-icon>mdi-chevron-down</v-icon></span
              >
            </v-btn>
          </template>
          <v-list>
            <v-list-item link v-for="sub in item.prueba" :key="sub.index">
              <v-list-item-title @click="scrollInto(sub.element)">{{
                sub.sub
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- ITEMS SIN DESPLIEGUE -->
        <v-btn
          v-for="(item, i) in listaSinDespliegue"
          :key="i"
          :color="item.color"
          :elevation="item.elevation"
          class="hidden-sm-and-down"
          @click="scrollInto(item.element)"
        >
          <span class="blue--whithe titulos">{{ item.titulo }}</span>
        </v-btn>
      </div>
      <!-- BOTON MENU BURGER -->
      <v-btn class="mr-2 hidden-md-and-up btonBlack" icon @click="abrir" light>
        <v-icon> mdi-menu </v-icon>
      </v-btn>
    </v-app-bar>
    <!-- NAVIGATION DRAGER -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <!-- LISTA CON DESPLIEGUE -->
        <v-list-group
          v-for="item in listaConDespliegue"
          :key="item.title"
          v-model="item.active"
        >
          <!-- :prepend-icon="item.action"
        no-action -->
          <template v-slot:activator>
            <v-list-item-content>
              <span class="titulos" @click="scrollInto(item.element)">{{
                item.title
              }}</span>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.prueba" :key="child.title">
            <v-list-item-content>
              <v-list-item-title @click="cerrar">
                <a @click="scrollInto(child.element)">
                  <span class="titulo">{{ child.sub }}</span>
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- LISTA SIN DESPLIEGUE -->
        <v-btn
          color="transparent"
          elevation="0"
          block
          class="pl-0"
          @click="cerrar"
          v-for="item in listaSinDespliegue"
          :key="item.titulo"
        >
          <v-list-item>
            <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon> -->
            <a
              @click="scrollInto(item.element)"
              style="text-decoration: none"
              class="black--text"
            >
              <span class="titulos tit-clic">
                {{ item.titulo }}
              </span>
            </a>
          </v-list-item>
        </v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "EscuelaBarra",
  components: {},
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(["listaSinDespliegue", "listaConDespliegue"]),
  },
  mounted() {
    const nav = document.querySelector(".barra1");
    const bton = document.querySelector(".btonBlack");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("active", window.scrollY > 0);
      // nav.classList.toggle("btonW", window.scrollY > 0);
      bton.classList.toggle("whi", window.scrollY > 0);
    });
  },
  methods: {
    scrollInto(sub) {
      // console.log(sub)
      const section = document.querySelector(`#${sub}`);
      section.scrollIntoView({
        behavior: "smooth",
      });
    },

    cerrar() {
      this.drawer = false;
    },
    abrir() {
      this.drawer = true;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.tit-clic:active {
  color: #a71017;
}

.imagen {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

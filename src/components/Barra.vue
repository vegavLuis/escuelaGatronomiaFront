<template>
  <div>
    <v-app-bar
      color="transparent"
      dark
      elevation="0"
      height="150px"
      class="barra1"
      app
    >
      <!-- IMAGES -->
      <div class="">
        <v-img
          alt="Logotipo"
          class="shrink ml-2 hidden-md-and-up"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="80"
        />
        <v-img
          alt="Logotipo"
          class="shrink hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/logo.png"
          width="100"
        />
      </div>
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
              <span class="titulos"
                >{{ item.title }}<v-icon>mdi-chevron-down</v-icon></span
              >
            </v-btn>
          </template>
          <v-list>
            <v-list-item link v-for="sub in item.prueba" :key="sub.index">
              <v-list-item-title>{{ sub }}</v-list-item-title>
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
        >
          <span class="blue--whithe titulos">{{ item.titulo }}</span>
        </v-btn>
      </div>
      <!-- BOTON MENU BURGER -->
      <v-btn class="mr-2 hidden-md-and-up" icon @click="abrir">
        <v-icon> mdi-menu </v-icon>
      </v-btn>
    </v-app-bar>
    <!-- NAVIGATION DRAGER -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
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
            <span class="titulos">
              {{ item.titulo }}
              <a href="https://google.com"> </a>
            </span>
          </v-list-item>
        </v-btn>
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
              <span class="titulos">{{ item.title }}</span>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.prueba" :key="child.title">
            <v-list-item-content>
              <v-list-item-title @click="cerrar">
                <span class="titulo">{{ child }}</span>
                <a href="https://google.com"> </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
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
  
  methods: {
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
                                                                  
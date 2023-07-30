import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listaSinDespliegue: [
      {
        titulo: "CALENDARIO DE CURSOS",
        color: "transparent",
        elevation: "0",
      },
      {
        titulo: "TESTIMONIOS",
        color: "transparent",
        elevation: "0",
      },
      {
        titulo: "CONTACTO",
        color: "info",
      },
    ],
    listaConDespliegue: [
      {
        title: "LICENCIATURAS",
        prueba: [
          "Licenciatura en Gastronomía",
          "Licenciatura en Administración de Empresas Turísticas",
        ],
      },
      {
        title: "BACHILLERATOS",
        prueba: ["Bachillerato con Gastronomía", "Bachillerato General"],
      },
    ],
  },
  getters: {
    listaSinDespliegue: (state) => state.listaSinDespliegue,
    listaConDespliegue: (state) => state.listaConDespliegue,
  },
  mutations: {},
  actions: {},
  modules: {},
});

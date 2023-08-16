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
        element:"calendarioDeCursos"
      },
      {
        titulo: "TESTIMONIOS",
        color: "transparent",
        elevation: "0",
        element:"testimonios"
      },
      {
        titulo: "CONTACTO",
        color: "info",
        element:"contacto"
      },
    ],
    listaConDespliegue: [
      {
        title: "LICENCIATURAS",
        prueba: [
          {sub: "Licenciatura en Gastronomía", element:"licenciaturaEnGastronomia"},
          {sub: "Licenciatura en Administración de Empresas Turísticas", element:"licenciaturaEnAdministracion"}
        ],
      },
      {
        title: "BACHILLERATOS",
        prueba: [
          {sub: "Bachillerato con Gastronomía", element: "bachilleratoGastronomia"}, 
          {sub: "Bachillerato General", element: "bachilleratoGeneral"}
        ],
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

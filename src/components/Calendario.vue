<template>
  <div>
    <v-container>
      <h2 class="text-center pt-12 pb-6 tiro-devnagari">
        Calendario de Cursos
      </h2>
      <v-card
        class="text-center text-capitalize tiro-devnagari white--text py-4"
        color="primary"
      >
        <h3>
          {{ today }}
        </h3>
      </v-card>
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="600">
            <v-calendar
            class="calendario"
              locale="es"
              ref="calendar"
              v-model="focus"
              color="info"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
            ></v-calendar>
            <v-menu
            class="calendario"
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <!-- <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn> -->
                  <!-- <v-toolbar-title></v-toolbar-title> -->
                  <!-- <v-spacer></v-spacer> -->
                  <!-- <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn> -->
                  <!-- <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn> -->
                  {{ selectedEvent.name }}
                  <v-spacer></v-spacer>
                  <v-btn icon @click="selectedOpen = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text class="black--text">
                  <p>INICIO: {{ selectedEvent.inicio }}</p>
                  <p>PRECIO ONLINE: {{ selectedEvent.costoOnline }}</p>
                  <P>PRECIO PRESENCIAL: {{ selectedEvent.costoPresencial }}</P>
                  <!-- <span v-html="selectedEvent.details"></span> -->
                </v-card-text>
                <!-- <v-card-actions>
                  <v-btn text color="secondary" >
                    Cancel
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    focus: "",
    today: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
    }),
    type: "month",
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        start: "2023-08-05",
        name: "MIXIOTES DE RES Y POLLO",
        inicio: "08:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2019-01-09 11:59",
      },
      {
        start: "2023-08-05",
        name: "PASTEL ARCOIRIS",
        inicio: "08:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-10",
        name: "PROFITEROLES RELLENOS DE CREMA PASTELERA Y CHOCOLATE",
        inicio: "14:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-12",
        name: "PIPIÁN ROJO Y VERDE",
        inicio: "08:00 HRS",
        costoOnline: "$300",
        costoPresencial: "$400",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-12",
        name: "PASTEL IMPOSIBLE",
        inicio: "08:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-17",
        name: "COCHINITA PIBIL, PANUCHOS Y DOBLADITAS",
        inicio: "14:00 HRS",
        costoOnline: "$300",
        costoPresencial: "$400",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-19",
        name: "TORTAS AHOGADAS",
        inicio: "08:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-19",
        name: "TARTA DE GALLETA OREO",
        inicio: "08:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },  
      {
        start: "2023-08-21",
        name: "PAN DE CAJA INTEGRAL CON AVENA",
        inicio: "14:00 HRS",
        costoOnline: "$200",
        costoPresencial: "$300",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-22",
        name: "GALLETAS DOMINO Y DE CHOCOLATE",
        inicio: "14:00 HRS",
        costoOnline: " $250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-23",
        name: "CONCHAS Y CHILINDRINAS",
        inicio: "14:00 HRS",
        costoOnline: " $250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-24",
        name: "MOLE POBLANO Y OAXAQUEÑO",
        inicio: "14:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-24",
        name: "BUÑUELOS",
        inicio: "14:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-25",
        name: "BARBACOA DE RES Y POLLO",
        inicio: "14:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-25",
        name: "PASTEL 3 LECHES",
        inicio: "14:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-26",
        name: "CHILES EN NOGADA",
        inicio: "08:00 HRS",
        costoOnline: "$400",
        costoPresencial: "$500",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-26",
        name: "PASTEL DE PINGÜINO",
        inicio: "08:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-28",
        name: "PAN DE ELOTE Y CALABAZA",
        inicio: "14:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-29",
        name: "MUFFIN DE FRUTAS",
        inicio: "14:00 HRS",
        costoOnline: "$200",
        costoPresencial: "$300",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-30",
        name: "DULCES TÍPICOS MEXICANOS",
        inicio: "14:00 HRS",
        costoOnline: "$300",
        costoPresencial: "$400",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-30",
        name: "CARNITAS",
        inicio: "14:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-08-31",
        name: "SOPA DE TORTILLA, CALDO TLALPEÑO Y MOLE DE OLLA",
        inicio: "14:00 HRS",
        costoOnline: "$300",
        costoPresencial: "$400",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-08-31",
        name: "CHURROS Y DONAS",
        inicio: "14:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-09-01",
        name: "TRILOGÍA DE AGUACHILE CON FRUTAS",
        inicio: "14:00 HRS",
        costoOnline: "$400",
        costoPresencial: "$500",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
      {
        start: "2023-09-02",
        name: "TRILOGÍA DE POZOLE",
        inicio: "08:00 HRS",
        costoOnline: "$350",
        costoPresencial: "$450",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      },
      {
        start: "2023-09-02",
        name: "PASTEL DE NITO",
        inicio: "08:00 HRS",
        costoOnline: "$250",
        costoPresencial: "$350",
        color: "primary",
        // details: "este es el detalle",
        // hora: "08:00",
        // end: "2023-08-11",
      }, 
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>
<style scoped>
.calendario{
  font-family: 'Trio Devanagari Hindi' !important;
}
</style>
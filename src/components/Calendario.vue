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
      <v-sheet height="600">
        <v-calendar
          locale="es"
          v-model="focus"
          color="info"
          :events="events"
          :event-color="getEventColor"
          @click:event="showEvent(events)"
          class="text-center"
        >
          <!-- @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
        @change="updateRange" -->
        </v-calendar>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "EscuelaCalendario",

  data() {
    return {
      focus: "",
      today: new Date().toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
      }),
      //   today: new Date().getFullYear(),
      type: "month",
      events: [
        {
          name: "Pizza kids",
          start: "2023-08-05",
          hora: "14:00",
          //   end: "2019-01-09 11:59",
          costoOnline: "250",
          costoPresencial: "350",
          color:"primary"
        },
      ],
    };
  },

  methods: {
    showEvent(events) {
      console.log(events);
      const fecha = events.start;
      console.log(fecha);
      // const date1 = fecha.getMonth();
      // console.log(date1)
    },
    getEventColor (events) {
        return events.color
      },
  },
  computed: {},
};
</script>

<style lang="scss" scoped >
.v-application .pl-1 {
  padding-left: 12px !important;
}
</style>

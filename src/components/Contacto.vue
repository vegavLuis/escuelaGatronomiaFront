<template>
  <div>
    <v-row no-gutters class="pt-12">
      <v-col cols="6">
        <v-card color="primary" class="pa-8 white--text">
          <h3 class="tiro-devnagari medium">Contáctanos</h3>
          <v-row class="pt-6">
            <v-col cols="12" class="pb-0 mb-0">
              <p class="tiro-devnagari-none medium pb-0 mb-0">
                Nombre y Apellido
              </p>
              <v-text-field
                background-color="#E0E0E0"
                filled
                required
                class="pb-0 mb-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 mb-0">
              <p class="tiro-devnagari-none medium pb-0 mb-0">
                Correo Electrónico
              </p>
              <v-text-field
                background-color="#E0E0E0"
                filled
                required
                class="pb-0 mb-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 mb-0">
              <p class="tiro-devnagari-none medium pb-0 mb-0">Asunto</p>
              <v-text-field
                background-color="#E0E0E0"
                filled
                required
                class="pb-0 mb-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 mb-0">
              <p class="tiro-devnagari-none medium pb-0 mb-0">
                Número Telefónico
              </p>
              <v-text-field
                background-color="#E0E0E0"
                filled
                required
                class="pb-0 mb-0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0 mb-0">
              <p class="tiro-devnagari-none medium pb-0 mb-0">Tu Mensaje</p>
              <v-textarea
                background-color="#E0E0E0"
                filled
                required
                class="pb-0 mb-0"
              ></v-textarea>
            </v-col>
            <v-btn color="info"> ENVIAR MENSAJE </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          color="secondary"
          class="pa-8 d-flex align-center justify-space-around flex-column"
          dark
          height="100%"
        >
          <h3 class="tiro-devnagari medium">Información de Contacto</h3>
          <v-row v-for="item in datos" :key="item.id" class="text-center mt-6">
            <v-col cols="12">
              <v-btn fab color="info">
                <v-icon>{{ item.icon }}</v-icon> </v-btn
              ><br />
              <p class="mt-4 mb-0">{{ item.numero }}</p>
              <p class="mb-0">{{ item.primerTexto }}</p>
              <p class="mb-0">{{ item.segundoTexto }}</p>
            </v-col>
          </v-row>
          <a
            href="https://wa.me/5511105630"
            class="white--text lign-start"
            target="”_blank”"
            >Desarrollado por Luis Vega</a
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "EscuelaContacto",
  data() {
    return {
      datos: [
        {
          icon: "mdi-phone",
          numero: "Número Telefónico:",
          primerTexto: "55 26 42 25 96",
          segundoTexto: "55 68 75 38 36",
        },
        {
          icon: "mdi-email",
          primerTexto: "Correo Electrónico:",
          segundoTexto: "controlescolar.eacglosreyes@gmail.com",
        },
        {
          icon: "mdi-map-marker",
          primerTexto: "Ubicación:",
          segundoTexto:
            "Calle 9, Mz. 79, Lt 5, Col. Valle de Los Reyes, 56430, Los Reyes La Paz, Edo. de México.",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.informacion {
  display: inline-flex;
  justify-content: center;
  align-content: center;
}
</style>

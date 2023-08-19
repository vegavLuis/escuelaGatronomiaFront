<template>
  <div>
    <v-row no-gutters class="pt-12">
      <v-col cols="12" md="6">
        <v-card color="primary" class="pa-8 white--text">
          <h3 class="tiro-devnagari medium">Contáctanos</h3>
          <v-form
            @submit.prevent="enviar()"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row class="pt-6">
              <v-col cols="12" class="pb-0 mb-0">
                <p class="tiro-devnagari-none medium pb-0 mb-0">
                  Nombre y Apellido
                </p>
                <v-text-field
                  background-color="#E0E0E0"
                  filled
                  :rules="nameRules"
                  required
                  class="pb-0 mb-0"
                  autofocus
                  v-model.trim="datosGuardar.nombreApellido"
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
                  :rules="correoRules"
                  class="pb-0 mb-0"
                  v-model.trim="datosGuardar.mail"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 mb-0">
                <p class="tiro-devnagari-none medium pb-0 mb-0">Asunto</p>
                <v-text-field
                  background-color="#E0E0E0"
                  filled
                  required
                  :rules="asuntoRules"
                  class="pb-0 mb-0"
                  v-model.trim="datosGuardar.asunto"
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
                  type="number"
                  :rules="telefonoRules"
                  v-model.trim="datosGuardar.numero"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0 mb-0">
                <p class="tiro-devnagari-none medium pb-0 mb-0">Tu Mensaje</p>
                <v-textarea
                  background-color="#E0E0E0"
                  filled
                  required
                  :rules="mensajeRules"
                  class="pb-0 mb-0"
                  v-model.trim="datosGuardar.mensaje"
                ></v-textarea>
              </v-col>
              <v-btn color="info" type="submit" :disabled="validarBoton">
                ENVIAR MENSAJE
              </v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
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
            href="https://wa.me/5513169074"
            class="white--text mt-12"
            target="”_blank”"
            >Desarrollado por Luis Vega</a
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "EscuelaContacto",
  data() {
    return {
      nameRules: [(v) => !!v || "El nombre y apellido es requerido"],
      correoRules: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser valido",
      ],
      asuntoRules: [(v) => !!v || "El asunto es requerido"],
      telefonoRules: [(v) => !!v || "El telefono es requerido"],
      mensajeRules: [(v) => !!v || "El mensaje es requerido"],
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
      datosGuardar: {
        nombreApellido: "",
        mail: "",
        asunto: "",
        numero: "",
        mensaje: "",
      },
    };
  },
  mounted() {},
  computed: {
    validarBoton() {
      if (
        this.datosGuardar.nombreApellido.trim() === "" ||
        this.datosGuardar.mail.trim() === "" ||
        this.datosGuardar.asunto.trim() === "" ||
        this.datosGuardar.numero.trim() === "" ||
        this.datosGuardar.mensaje.trim() === ""
      ) {
        return (this.btnDisable = true);
      }
    },
  },
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    enviar() {
      console.log(this.datosGuardar);
      this.axios.post("/enviar", this.datosGuardar);
      this.datosGuardar.nombreApellido = "";
      this.datosGuardar.mail = "";
      this.datosGuardar.asunto = "";
      this.datosGuardar.mensaje = "";
      this.datosGuardar.numero = "";
      this.resetValidation()
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((e) => {
      //   console.log(e, "este es error");
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.informacion {
  display: inline-flex;
  justify-content: center;
  align-content: center;
}
</style>

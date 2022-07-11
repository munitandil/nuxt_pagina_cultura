<template>
  <!-- START 404 SECTION -->
  <section class="background_bg">
    <div class="container">
      <div class="row justify-content-center" v-if="error.statusCode === 404">
        <div class="col-md-6 text-center">
          <div class="error_txt">{{ error.statusCode }}</div>
          <h5>uups! No se ha encontrado la pagina!</h5>
          <p>Esta página ha sido movida, renombrada, o no existe!</p>
          <nuxt-link to="/" class="btn btn-outline-black"
            ><span class="ti-arrow-left"></span> Volver al inicio</nuxt-link
          >
        </div>
      </div>
      <div class="row justify-content-center" v-if="error.statusCode === 302">
        <div class="col-md-6 text-center">
          <DSILink
            pClass="navbar-brand"
            pCustomLabel=" "
            pPath="HOME"
            pTipoLink="I"
            pTitle="Logo de la municipalidad de tandil"
          >
            <img
              class="logo_dark"
              src="~assets/images/logo_muni_blanco.gif"
              alt="logo"
            />
            <img
              class="logo_default"
              src="~assets/images/logo_tandil.png"
              alt="logo"
            />
          </DSILink>
          <p>
            Está novedad no se ha encontrado, por favor búsque está novedad en
            el siguiente link
          </p>
          <DSILink
            pClass="btn btn-outline-black"
            pCustomLabel=" "
            pPath="NOVEDADES"
            pTipoLink="I"
            pTitle="Listado de Novedades"
          >
            Novedades
          </DSILink>
        </div>
      </div>
    </div>
  </section>
  <!-- END 404 SECTION -->
</template>

<script>
import DSILink from "@/components/DSILink";
export default {
  components: {
    DSILink,
  },
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: {
    title: "Municipalidad de Tandil - Error",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Error pagina no encontrada description",
      },
    ],
  },
};
</script>

<style scoped>

</style>
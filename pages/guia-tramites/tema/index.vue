<template>
  <div>
    <Header />
    <Temas />
  </div>
</template>
<script>
import Temas from "@/components/guia-tramites/temas.vue";
import Header from "@/components/Header";

export default {
  components: { Temas, Header },
  head: {
    title: "Municipalidad de Tandil - Temas de Guía de Trámites",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Temas de Guía de Trámites realizan en el municipio de Tandil",
      },
    ],
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.f_loadDataSidebar();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  methods: {
    f_loadDataSidebar: function () {
      this.$store.dispatch("guiasTramites/loadAllGuias").catch((error) => {
        console.log(
          "Ocurrio un error al cargarlos datos del sidebar en guias de tramite. Error: " +
            error
        ); // undefined
      });
    },
  },
};
</script>
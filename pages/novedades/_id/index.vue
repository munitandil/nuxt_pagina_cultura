<template>
   <div>
      <Header />
      <NovedadDetalle />
   </div>
</template>

<script>
import NovedadDetalle from "@/components/novedades/detalleNovedad.vue";
import Header from "@/components/Header";

export default {
  components: { NovedadDetalle, Header },
  /*
  ** programatically start the loader so we force the page to take x seconds to load
  */
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
};
</script>
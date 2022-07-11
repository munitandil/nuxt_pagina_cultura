<template>
  <div>
    <Header />
    <GuiaTramitesDetalle :id="id" />
  </div>
</template>
<script>
import GuiaTramitesDetalle from "@/components/guia-tramites/detalle.vue";
import Header from "@/components/Header";

export default {
  components: { GuiaTramitesDetalle, Header },
  
  data() {
    return {
      id: null,
    };
  },
  /*
  ** programatically start the loader so we force the page to take x seconds to load
  */
  mounted () {
    this.id = this.$route.params.id
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
};
</script>
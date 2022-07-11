<template>
  <div>
    <Header />
    <Tema :idTema="id"></Tema>
  </div>
</template>
<script>
import Tema from "@/components/guia-tramites/tema.vue";
import Header from "@/components/Header";

export default {
  components: { Tema, Header },
  data() {
    return {
      id: null,
    };
  },
/*
  ** programatically start the loader so we force the page to take x seconds to load
  */
  mounted () {
    this.id = this.$route.params.idTema;
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
};
</script>
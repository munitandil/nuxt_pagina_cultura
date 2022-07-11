<template>
  <div>
    <Header /> 
    <BannerPage :beadcrumb="beadcrumbPage" :title="'Tags'"></BannerPage>

    <TagsGuiaTramitesResultList
      :tipoBusqueda="tipo"
      :tagBuscar="tag"
      v-if="tipo == 'GUIASTRAMITE'"
    />

    <TagsNovedadesResultList
      :tipoBusqueda="tipo"
      :tagBuscar="tag"
      v-else-if="tipo == 'NOVEDADES'"
    />
    <p v-else>buscando.....</p>
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import TagsGuiaTramitesResultList from "@/components/guia-tramites/tagGuiaTramiteSearchResult.vue";
import TagsNovedadesResultList from "@/components/novedades/tagNovedadesSearchResult.vue";
import Header from "@/components/Header";
export default {
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to !== from) {
        location.reload();
      }
    },
  },
  components: { BannerPage, TagsGuiaTramitesResultList, TagsNovedadesResultList, Header},
  data() {
    return {
      tipo: null,
      tag: null,
      beadcrumbPage: [],
    };
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.tipo = this.$route.query.tipo;
    this.tag = this.$route.query.tag;
    this.setBeadcrumb();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  methods: {
    setBeadcrumb() {
      if (this.tipo == "GUIASTRAMITE") {
        this.beadcrumbPage = [
          { path: "HOME", link: true },
          { path: "GUIADETRAMITES", link: true },
          {
            currentPage: "Resultado de la búsqueda",
          },
        ];
      } else if (this.tipo == "NOVEDADES") {
        this.beadcrumbPage = [
          { path: "HOME", link: true },
          { path: "NOVEDADES", link: true },
          {
            currentPage: "Resultado de la búsqueda",
          },
        ];
      } else {
        this.beadcrumbPage = [
          { path: "HOME", link: true },
          {
            currentPage: "Resultado de la búsqueda",
          },
        ];
      }
    },
  },
};
</script>
<template>
  <div>
    <Header />
    <BannerPage :beadcrumb="beadcrumbPage" :title="datos.titulo"></BannerPage>
    <!-- <NovedadDetalle /> -->

    <CulturaEvento :titulo="datos.titulo" :descripcion="datos.descripcion" :rubro="datos.rubro.toUpperCase()"
      :folleto="datos.folleto" :link_externo="datos.link_externo" :fecha_desde="datos.fecha_desde"
      :fecha_hasta="datos.fecha_hasta"
      :mapa="'http://mapa.tandil.gov.ar/IdeTandil/qgis2web/MapaWeb1/index.html#15/-37.3289/-59.1368'" />

  </div>
</template>

<script>
// import NovedadDetalle from "@/components/novedades/detalleNovedad.vue";
import CulturaEvento from "@/components/cultura/CulturaEvento.vue";
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";

export default {
  components: { CulturaEvento, Header, BannerPage },
  /*
  ** programatically start the loader so we force the page to take x seconds to load
  */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },

  data() {
    return {
      datos: {
        "titulo": "Dia de la liberación nacional del queso",
        "descripcion":
          "Non quis labore labore laboris deserunt magna labore et aliquip. Reprehenderit dolor ullamco culpa quis fugiat nostrud non est dolor amet mollit aliqua. Cillum dolore velit in sit dolor nostrud aliqua adipisicing cillum sint ipsum. Ad deserunt quis cillum commodo ex eu minim id deserunt irure minim amet. Pariatur est velit id labore nisi consectetur sit deserunt mollit aliquip officia.Consectetur id qui sint in et est ea exercitation labore magna dolor nulla et.Quis incididunt consequat pariatur dolore consectetur nostrud cillum.Elit do exercitation cupidatat incididunt. Ad do enim nulla pariatur et dolor exercitation.Commodo laboris sunt non qui elit nisi occaecat.Veniam incididunt voluptate dolore cillum nostrud ex ex laborum commodo tempor anim pariatur.Consectetur minim sunt sit eiusmod ut sint voluptate magna do voluptate.",
        "rubro": "Cultura",
        "categoria": "Juventud",
        "folleto": "https://www.ciudadanosviajeros.com.ar/wp-content/uploads/2022/05/257396846_4377564918979123_5622039836406764709_n.jpg",
        "link_externo": "https://www.figma.com/proto/F3UebxpeAprTcjvWWoUgai/Detalle-Evento?node-id=5%3A35&scaling=min-zoom&page-id=0%3A1",
        "mapa": null,
        "fecha_desde": "20/05/2021",
        "fecha_hasta": "25/05/2021"
      },
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Detalle de evento",
        },
      ],
    }
  }
};
</script>
<style>
.cultura_text_color {
  color: #B14549 !important;
}
</style>
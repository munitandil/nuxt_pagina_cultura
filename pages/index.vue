<template>
  <div>
    <Header />
    <div class="dsi-container">
      <!-- <InfoTopHome /> -->
      <!-- START SECTION BANNER -->
      <Banner />
      <!-- END SECTION BANNER -->
      <!-- <InfoStandoutTopHome /> -->

      <!-- START SECTION NOVEDADES -->
      <NovedadesHome />
      <!-- END SECTION NOVEDADES -->
      <!-- START SECTION NOVEDADES -->
      <!--<ProgramaHome />  -->
      <!-- END SECTION NOVEDADES -->

      <AgendaCulturaHome />

      <!-- START SECTION DESTACADO -->
      <DestacadoHome />
      <!-- END SECTION DESTACADO -->

      <!-- START SECTION LOGOS -->
      <!-- <LogosHome /> -->
      <!-- END SECTION LOGOS -->

      <!-- Home Popup Section -->
      <!-- <DialogPopupHome /> -->
      <!-- End Screen Load Popup Section -->
      <!-- <MuestraMapa /> -->
      <!-- <CarouTere /> -->
      <!-- START SECTION SERVICE -->



      <!-- Modificar pero usable -->
      <Top6Home />


      <!-- END SECTION SERVICE -->

    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import Top6Home from "@/components/Top6Home";
import NovedadesHome from "@/components/novedades/novedadesHome";
import DestacadoHome from "@/components/novedades/destacadoHome";
//import ProgramaHome from "@/components/novedades/programasHome";
//import LogosHome from "@/components/LogosHome"; 
import InfoStandoutTopHome from "@/components/InfoStandoutTopHome";
import InfoTopHome from "@/components/InfoTopHome";
import DialogPopupHome from "@/components/DialogPopupHome";

import Header from "@/components/Header";
import CarouTere from "@/components/CarouTere.vue";
import MuestraMapa from "@/components/MuestraMapa.vue";
import AgendaCulturaHome from "@/components/cultura/AgendaCulturaHome.vue";

export default {
  components: {
    Header,
    Banner,
    Top6Home,
    NovedadesHome,
    DestacadoHome,
    // ProgramaHome,
    // LogosHome,
    InfoTopHome,
    InfoStandoutTopHome,
    DialogPopupHome,
    CarouTere,
    MuestraMapa,
    AgendaCulturaHome
  },
  head: {
    title: "Municipalidad de Tandil - Cultura Inicio",
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>

<style>

.heading_s5::before {
  background-color: #B14549 !important;
}
</style>

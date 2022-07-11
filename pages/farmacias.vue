<template>
  <div>
    <Header />
    <div class="dsi-farmacias-container">
      <BannerPage
        :beadcrumb="beadcrumbPage"
        :title="'Farmacias de Turnos'"
      ></BannerPage>
      <div class="heading_s5">
        <h5>Fuente:</h5>
        <p>
          <a
            href="https://farmaciasdeturnotandil.com.ar/"
            title="Colegio de Farmacéuticos Tandil"
            target="_blank"
            >https://farmaciasdeturnotandil.com.ar/</a
          >
        </p>
      </div>
      <div class="dsi-container-iframe">
        <iframe
          src="https://farmaciasdeturnotandil.com.ar/embed"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen
          scrolling="yes"
          class="dsi-farmacias-iframe"
        ></iframe>
      </div>
      <div class="cta_section_small light_gray_bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12">
              <h2 class="">
                <a
                  href="tel:08009991628"
                  title="Línea rotativa gratuita para que hagas tus consultas"
                  ><i class="icon ion-ios-telephone"></i> 0800-999-1628</a
                >
              </h2>
              <p class="mb-md-0">
                El Colegio de Farmacéuticos te ofrece una línea rotativa gratuita
                para que hagas tus consultas durante las 24 hs., los 365 días del
                año.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Farmacias de Turnos",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Listado de farmacias de turnos en el municipio de Tandil",
      },
    ],
  },
  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Farmacias de Turnos",
        },
      ],
    };
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

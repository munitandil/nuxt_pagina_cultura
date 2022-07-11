<template>
  <div>
    <Header />
    <div class="dsi-info-ciudad">
      <BannerPage
        :beadcrumb="beadcrumbPage"
        :title="'Información de la Ciudad'"
      ></BannerPage>
      <!-- START SECTION SHOP DETAIL -->
      <section class="small_pb">
        <div class="container">
          <div id="dsi-info-detalle">
            <div class="row">
              <div
                class="col-lg-5 col-md-6 mb-4 mb-md-0 animation"
                data-animation="fadeInUp "
                data-animation-delay="0.1s"
              >
                <div class="product-image">
                  <iframe
                     src="http://mapa.tandil.gov.ar/IdeTandil/qgis2web/MapaWeb1/index.html#13/-37.2299/-59.1615"
                    width="100%"
                    height="550"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>                           
            </div>
          </div>
        </div>
      </section>

   
      

      <div
        class="modal fade bd-example-modal-opcion1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        
      </div>
      <!-- FIN MODAL PANEL-->

      <!-- END SECTION FOTOS -->
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Información de la ciudad",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion de la ciudad de tandil",
      },
    ],
  },

  data() {
    return {
      image1: require("@/assets/images/tandil_foto2.jpeg"),
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Tandil",
        },

        {
          currentPage: "Información de la Ciudad",
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
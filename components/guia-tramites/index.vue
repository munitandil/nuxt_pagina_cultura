<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Guía de Trámites'"
    ></BannerPage>
    <section class="small_pb">
      <SearchFormIndex />
      <div class="container small_pb">
        <div class="row">
          <div class="col-lg-9 mt-4 pt-5">
            <!-- START SECTION ABOUT US -->
            <div class="container">
              <div class="row align-items-center">
                <div
                  class="col-md-12 col-sm-12 animation"
                  data-animation="fadeInRight "
                  data-animation-delay="0.2s "
                >
                  <div class="heading_s3 mb-md-3">
                    <h2>Qué es Guía de Trámites</h2>
                  </div>
                  <p>
                    La Guía permite agilizar y acceder a toda la información por
                    medio de la web www.tandil.gov.ar, pudiendo el Ciudadano
                    concretar la consulta desde el lugar en donde se encuentre
                    ante una eventual duda en la realización de un trámite, los
                    365 días del año y durante las 24 horas.
                  </p>
                  <blockquote class="blockquote quote_style2">
                    <p>
                      Su función es dar respuesta a las consultas de los
                      Ciudadanos acerca de cómo y dónde realizarlos, horarios de
                      atención, teléfonos de contacto, direcciones, etc.
                    </p>
                  </blockquote>
                  <p>
                    Es una única y completa fuente de información sobre trámites
                    que se pueden realizar en el Municipio de Tandil.
                  </p>
                </div>
              </div>
            </div>
            <!-- END SECTION ABOUT US -->
            <!-- START SECTION INFO -->
            <div class="container">
              <div class="row">
                <div
                  class="col-md-12 animation"
                  data-animation="fadeInUp "
                  data-animation-delay="0.1s "
                >
                  <div class="small_padding">
                    <div class="row justify-content-center">
                      <div class="col-md-12 mb-md-0 mb-3">
                        <div class="icon_box icon_box_style_1 row">
                          <div
                            class="col-sm-12 col-md-2 col-lg-2 box_icon mb-3"
                          >
                            <i class="ti-info"></i>
                          </div>
                          <div
                            class="col-sm-12 col-md-10 col-lg-10 icon_box_content"
                          >
                            <p>Se puede encontrar información sobre:</p>
                            <ul>
                              <li>Trámites por Secretaría.</li>
                              <li>Trámites recientemente actualizados.</li>
                              <li>Trámites más consultados.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div class="col-md-12">
                          <div class="clearfix medium_divider"></div>
                        </div>
                      </div>
                      <div class="col-md-12 mb-md-0 mb-3">
                        <div class="icon_box icon_box_style_1 row">
                          <div
                            class="col-sm-12 col-md-2 col-lg-2 box_icon mb-3"
                          >
                            <i class="ti-search"></i>
                          </div>
                          <div
                            class="col-sm-12 col-md-10 col-lg-10 icon_box_content"
                          >
                            <p>
                              Se puede buscar trámites por palabras claves y
                              descargar formularios en caso de corresponder para
                              el trámite de su interés.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div class="col-md-12">
                          <div class="clearfix medium_divider"></div>
                        </div>
                      </div>
                      <div class="col-md-12 mb-md-0 mb-3">
                        <div class="icon_box icon_box_style_1 row">
                          <div
                            class="col-sm-12 col-md-2 col-lg-2 box_icon mb-3"
                          >
                            <i class="ti-comment-alt"></i>
                          </div>
                          <div
                            class="col-sm-12 col-md-10 col-lg-10 icon_box_content"
                          >
                            <p>Trámites a consultar:</p>
                            <ul>
                              <li>Licencia de Conducir Original.</li>
                              <li>Ingreso a la Docencia Municipal.</li>
                              <li>Habilitación Municipal de Microempresas.</li>
                              <li>Libreta del Trabajador Agrario.</li>
                              <li>etc..</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END SECTION INFO -->
          </div>
          <div class="col-lg-3 mt-4 pt-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/guia-tramites/sidebar.vue";
import BannerPage from "@/components/BannerPage.vue";
import SearchFormIndex from "@/components/guia-tramites/searchFormIndex.vue";
export default {
  components: { Sidebar, BannerPage, SearchFormIndex },
  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          path: "SERVICIOS_TRAMITES",
          link: true,
        },
        {
          currentPage: "Guias de Trámite",
        },
      ],
    };
  },
};
</script>
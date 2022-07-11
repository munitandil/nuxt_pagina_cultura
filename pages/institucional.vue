<template>
  <div>
    <Header />
    <BannerPage :beadcrumb="beadcrumbPage" title="Institucional"></BannerPage>
    <section class="small_pt small_pb">
      <div class="gray_bg cta_section_small">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-8 text_black">
              <h2 class="">Funcionarios del Municipio de Tandil</h2>
              <p class="mb-md-0">
                Estructura de la gestión administrativa municipal
              </p>
            </div>
            <div class="col-md-4 text-md-right">
              <DSILink
                pCustomLabel=" "
                pCustomLink="https://gobiernoabierto.tandil.gov.ar/transparencia/funcionarios/"
                pTipoLink="E"
                pClass="btn btn-outline-black"
                pTitle="Ver más información sobre los funcionarios del municipio de tandil"
              >
                ver mas...
              </DSILink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="small_pt small_pb">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-6 col-md-9 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div class="heading_s1 text-center">
              <h2>Secretarías</h2>
              <p>Dentro del esquema de funcionamiento municipal existen Secretarías de las que dependen Direcciones, Departamentos y Oficinas</p>
            </div>
          </div>
        </div>
        <div
          class="dsi-search-sec animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
        >
          <div class="search_box2">
            <form>
              <div class="row">
                <div class="radius_input col-md-6 offset-md-6">
                  <input
                    id="dsi-filter-sec-list"
                    onkeyup="filterSecretariasList()"
                    type="text"
                    class="form-control"
                    required=""
                    placeholder="buscar..."
                  />
                </div>
                <button type="submit" name="submit" value="Submit" onclick="submitButtonClick(event)">
                  <i class="ion-ios-search-strong"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12">
          <div class="cleafix"></div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-md-4 mb-2 pb-2">
            <div class="dsi_blog_container row">
              <div class="blog-item col-md-6" v-for="item in getAllSecretarias" :key="item.nro_row">
                <CardInstitucional 
                    :pNombreSec="item.nombre"
                    :pNroRow="item.nro_row"
                    :pDesc="item.resena"
                    :pIdSecr="item.id_secr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
import BannerPage from "@/components/BannerPage.vue";
import CardInstitucional from "@/components/institucional/cardInstitucional.vue";
import Header from "@/components/Header";
import { mapGetters } from "vuex";
export default {
  components: { BannerPage, DSILink , CardInstitucional, Header},
  head: {
    title: "Municipalidad de Tandil - Institucional",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Infromación Institucional sobre el municipio de Tandil",
      },
    ],
  },
  computed: {
    ...mapGetters({
      getAllSecretarias: "secretarias/getAllSecretarias",
    }),
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.setBeadcrumb();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  data() {
    return {
      beadcrumbPage: [],
    };
  },
  methods: {
    setBeadcrumb() {
      this.beadcrumbPage = [
        { path: "HOME", link: true },
        {
          currentPage: "Institucional",
        },
      ];
    },
  },
};
</script>

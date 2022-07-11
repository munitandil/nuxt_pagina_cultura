<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Guía de Trámites por Tema'"
    ></BannerPage>
    <section class="dsi-result-search-list">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mt-lg-0 mt-4 pt-3 pt-lg-0 pr-5 pl-5">
            <div v-if="resultList && resultList.length > 0">
              <div class="mb-md-5">
                <div class="heading_s3 dsi-tag-title-region">
                  <h3 v-if="temaDetalle">
                    Tema: <span>{{ temaDetalle.descripcion }}</span>
                  </h3>
                </div>
                <div class="list_none dsi-guias-tramites-x-tema">
                  <paginate
                    name="resultList"
                    :list="resultList"
                    :per="10"
                    class="dsi-list-result row"
                    v-if="resultList.length"
                  >
                    <li
                      v-for="item in paginated('resultList')"
                      :key="item.id_tram"
                      class="col-md-12"
                    >
                      <p class="dsi-tipo-result-item">Guías de Trámites</p>
                      <h5>
                        <DSILink
                          pCustomLabel=" "
                          :pCustomLink="'/guia-tramites/' + item.id_tram"
                          pTipoLink="I"
                          :pTitle="item.nombre_tramite"
                        >
                          {{ item.nombre_tramite }}
                        </DSILink>
                      </h5>
                      <p class="dsi-info-secretaria">
                        {{ item.secretaria }} - {{ item.direccion_municipal }}
                      </p>
                      <p class="dsi-info-desc" v-html="item.desc_tramite"></p>
                    </li>
                  </paginate>
                </div>
              </div>

              <div class="col-12 mt-4">
                <paginate-links
                  :show-step-links="true"
                  :hide-single-page="true"
                  :limit="4"
                  for="resultList"
                  :classes="{
                    ul: ['pagination', 'justify-content-center'],
                    li: 'page-item',
                    a: 'page-link',
                  }"
                  v-if="resultList.length"
                ></paginate-links>
              </div>
            </div>
            <p v-else>No se han encontrado Guias de Trámites para este tema.</p>
          </div>
          <div class="col-lg-3 mt-lg-0 mt-4 pt-3 pt-lg-0">
            <Sidebar showFormSearch />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
import BannerPage from "@/components/BannerPage.vue";
import Sidebar from "@/components/guia-tramites/sidebar.vue";
import { mapGetters } from "vuex";
export default {
  watchQuery: true,
  components: { DSILink, BannerPage, Sidebar },
  props: ["idTema"],
  head: {
    title: "Municipalidad de Tandil - Listado de Guías de Trámites por tema",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Listado de Guías de Trámites por tema",
      },
    ],
  },
  data() {
    return {
      showFormSearch: true,
      resultList: [],
      paginate: ["resultList"],
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          path: "GUIADETRAMITES",
          link: true,
        },
        {
          currentPage: "Listado por tema",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      temaDetalle: "guiasTramites/getTemaDetalle",
      resultSearch: "guiasTramites/getGuiasTramitexTema",
    }),
  },
  created() {
    let idTema = this.$route.params.idTema;
    this.f_loadSearch(idTema);
    this.f_loadTemaDetalle(idTema);
  },
  methods: {
    f_loadTemaDetalle: function (idTema) {
      this.$store.dispatch("guiasTramites/getSearchTema" , idTema).catch((error) => {
          //console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
          this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al recuperar el detalle del tema con id: " +
              idTema +
              ". Error: " +
              error,
          });
        });
    },

    f_loadSearch: function (idTema) {
      this.$store.dispatch("guiasTramites/getSearchGuiasXTema" , idTema).then((res) => {
          this.resultList = this.resultSearch;
        }).catch((error) => {
          console.log( "Ocurrio un error al recuperar la lista del guias para el tema con id: " +idTema +". Error: " + error); // undefined
          /* this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al recuperar la lista del guias para el tema con id: " +
              idTema +
              ". Error: " +
              error,
          }); */
        });
    },
  },
};
</script>
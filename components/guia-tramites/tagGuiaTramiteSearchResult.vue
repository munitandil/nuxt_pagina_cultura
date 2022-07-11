<template>
  <section class="dsi-result-search-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mt-lg-0 mt-4 pt-3 pt-lg-0 pr-5 pl-5">
          <div class="heading_s3 dsi-tag-title-region col-md-12">
            <h3>TAGS: {{ tagSearch }}</h3>
          </div>

          <div v-if="resultList && resultList.length > 0">
            <div class="list_none dsi-guias-tramites-x-tag">
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
          <p v-else>No se han encontrado Guias de Trámites para este tag.</p>
        </div>
        <div class="col-lg-3 mt-lg-0 mt-4 pt-3 pt-lg-0">
          <Sidebar showFormSearch />
        </div>
      </div>
    </div>
  </section>
</template> 
<script>
import { mapGetters } from "vuex";
import DSILink from "@/components/DSILink";
import Sidebar from "@/components/guia-tramites/sidebar.vue";
export default {
    watchQuery: true,
  props: ["tipoBusqueda", "tagBuscar", "resutlList"],
  components: { DSILink, Sidebar },
  head: {
    title: "Municipalidad de Tandil - Listado de Guías de Trámites por tag",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Listado de Guías de Trámites por tag",
      },
    ],
  },
  data() {
    return {
      tagSearch: null,
      typeSearch: null,
      resultList: [],
      paginate: ["resultList"],
    };
  },
  computed: {
    ...mapGetters({
      getGuiasTramitexTag: "guiasTramites/getGuiasTramitexTag",
    }),
  },
  created() {
    this.tagSearch = this.tagBuscar;
    this.typeSearch = this.tipoBusqueda;
    this.f_searchGuiasTramitesXTag(this.tagSearch);
  },
  methods: {
    f_searchGuiasTramitesXTag(p_tag) {
      this.$store
        .dispatch("guiasTramites/getSearchGuiasXTag", p_tag)
        .then((res) => {
          this.resultList = this.getGuiasTramitexTag;
        })
        .catch((error) => {
          console.log("Ocurrio un error al recuperar la lista del guias para el tag : " +p_tag +". Error: " + error); // undefined
          /* this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al recuperar la lista del guias para el tag : " +
              p_tag +
              ". Error: " +
              error,
          }); */
        });
    },
  },
};
</script>
    
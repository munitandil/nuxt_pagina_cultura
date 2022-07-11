<template>
  <div>
    <Header />
    <div class="dsi-home-container-search-list">
      <BannerPage :beadcrumb="beadcrumbPage" :title="'Buscar'"></BannerPage>
      <section class="dsi-result-search-list">
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-md-8 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div class="search_form pt-3 pb-4">
                <h3>¿Qué estás buscando?</h3>
                <form
                  action=""
                  method="post"
                  class="position-relative"
                  @submit.prevent="submit()"
                >
                  <div class="row">
                    <div class="dsi-tipo-busqueda form-group col-md-3">
                      <div class="custome_select">
                        <select class="form-control" v-model="tipo">
                          <option value="ALL">En todo el sitio</option>
                          <option value="NOVEDADES">Novedades</option>
                          <option value="GUIASTRAMITE">Guias de Trámites</option>
                        </select>
                      </div>
                    </div>
                    <div class="dsi-input-container col-md-9">
                      <input
                        name="text"
                        id="text"
                        data-email="required"
                        type="text"
                        placeholder="buscar..."
                        v-model="text"
                        class="form-control"
                      />
                      <button type="submit" class="btn search_icon">
                        <i class="ion-ios-search-strong"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row mb-md-5">
            <div class="dsi_heading_s3 col-md-12">
              <p>Resultados de la búsqueda</p>
            </div>
            <div
              v-if="resultList && resultList.length > 0"
              class="dsi-container-search-list"
            >
              <div class="list_none dsi-result-search-list">
                <paginate
                  name="resultList"
                  :list="resultList"
                  :per="10"
                  class="dsi-list-result row"
                  v-if="resultList.length"
                >
                  <li
                    v-for="item in paginated('resultList')"
                    :key="item.link"
                    class="col-md-12"
                  >
                    <p class="dsi-tipo-result-item">{{ item.tipo_desc }}</p>
                    <h5>
                      <DSILink
                        pCustomLabel=" "
                        :pCustomLink="item.link"
                        :pTipoLink="item.tipo_link"
                        :pTitle="item.nombre"
                      >
                        {{ item.nombre }}
                      </DSILink>
                    </h5>
                    <p class="dsi-info-desc" v-html="item.descripcion"></p>
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
            <p v-else class="dsi-no-data-found">
              No se han encontrado resultados.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template> 
<script>
import DSILink from "@/components/DSILink";
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
import { mapGetters } from "vuex";
export default {
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to !== from) {
        location.reload();
      }
    },
  },
  components: { BannerPage, DSILink, Header },
  head: {
    title: "Municipalidad de Tandil - Resultados de la búsqueda",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Resultados de la búsqueda",
      },
    ],
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.setItem(this.$route.query.tipo, this.$route.query.texto);
    this.setBeadcrumb();
    this.f_search();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  computed: {
    ...mapGetters({
      getResultSearch: "search/getResultSearch",
    }),
  },
  data() {
    return {
      tipo: null,
      text: null,
      resultList: [],
      paginate: ["resultList"],
      beadcrumbPage: [],
    };
  },
  methods: {
    f_search() {
      this.$store
        .dispatch("search/f_search", [this.tipo, this.text])
        .then((res) => {
          this.resultList = this.getResultSearch;
        })
        .catch((error) => {
          //console.log("Error al realizar la busqueda de dato: ", error); // undefined
          this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al realizar la busqueda para el tipo: " +
              this.tipo +
              " y el texto: " +
              this.text +
              ". Error: " +
              error,
          });
        });
    },
    submit() {
      this.$router.push({
        path: "/buscar",
        query: { tipo: this.tipo, texto: this.text },
      });
    },
    setItem(tipoSearch, textToSearch) {
      this.tipo = tipoSearch;
      this.text = textToSearch;
    },
    setBeadcrumb() {
      if (this.tipo == "NOVEDADES") {
        this.beadcrumbPage = [
          { path: "HOME", link: true },
          { path: "NOVEDADES", link: true },
          {
            currentPage: "Resultado de la búsqueda",
          },
        ];
      } else if (this.tipo == "GUIASTRAMITE") {
        this.beadcrumbPage = [
          { path: "HOME", link: true },
          { path: "GUIADETRAMITES", link: true },
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
<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Temas de las Guía de Trámites'"
    ></BannerPage>
    <section class="dsi-result-search-list">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mt-lg-0 mt-4 pt-3 pt-lg-0 pr-5 pl-5">
            <div
              class="widget animation dsi-sidebar-guia-tramites-categ"
              data-animation="fadeInUp "
              data-animation-delay="0.3s "
            >
              <ul class="list_none widget_categories border_bottom_dash">
                <li v-for="item in getAllTemas" :key="item.id_tema">
                  <DSILink
                    pCustomLabel=" "
                    :pCustomLink="'/guia-tramites/tema/' + item.id_tema"
                    pTipoLink="I"
                    :pTitle="item.tema"
                  >
                    <span class="categories_name">{{ item.tema }}</span>
                    <span class="categories_num">({{ item.cant }})</span>
                  </DSILink>
                </li>
              </ul>
            </div>
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
import Sidebar from "@/components/guia-tramites/sidebar.vue";
import { mapGetters } from "vuex";
export default {
  components: { DSILink, Sidebar},
  head: {
    title: "Municipalidad de Tandil - Listado de Tema de las Guías de Trámites",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Listado de Tema de las Guías de Trámites",
      },
    ],
  },
  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          path: "GUIADETRAMITES",
          link: true,
        },
        {
          currentPage: "Temas de las Guía de Trámites",
        },
      ],
    };
  },
  created() {
    this.f_loadDataSidebar();
  },
  computed: {
    ...mapGetters({
      getAllTemas: "guiasTramites/getAllTemas",
    }),
  },
  methods: {
    f_loadDataSidebar: function () {
      this.$store.dispatch("guiasTramites/loadAllGuias").catch((error) => {
        console.log( "Ocurrio un error al cargarlos datos del sidebar en guias de tramite. Error: " + error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al cargarlos datos del sidebar en guias de tramite: " +
            ". Error: " +
            error,
        }); */
      });
    },
  },
};
</script>
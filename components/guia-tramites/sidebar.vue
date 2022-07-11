<template>
  <div class="sidebar">
    <SearchFormSideBar :showFormSearch="this.showFormSearch" />
    <div
      class="widget animation dsi-guias-tramite-mas-visitadas"
      data-animation="fadeInUp "
      data-animation-delay="0.2s "
    >
      <h5 class="widget_title">Trámites más consultados</h5>
      <ul class="list_none widget_archive border_bottom_dash">
        <li v-for="item in getGuiasMostViewed" :key="item.id_tram">
          <DSILink
            pCustomLabel=" "
            :pCustomLink="'/guia-tramites/' + item.id_tram"
            pTipoLink="I"
            :pTitle="item.nombre"
          >
            <span class="archive_year">{{ item.nombre }}</span>
          </DSILink>
        </li>
      </ul>
    </div>
    <div
      class="widget animation dsi-sidebar-guia-tramites-categ"
      data-animation="fadeInUp "
      data-animation-delay="0.3s "
    >
      <h5 class="widget_title">Trámites por tema</h5>
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
    <TagGuiaTramiteList />
  </div>
</template>
<script>
import SearchFormSideBar from "@/components/guia-tramites/searchFormSideBar.vue";
import TagGuiaTramiteList from "@/components/guia-tramites/tagGuiaTramiteList.vue";
import DSILink from "@/components/DSILink";
import { mapGetters } from "vuex";
export default {
  props: {
    showFormSearch: {
      type: Boolean,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return false;
      },
    },
  },
  components: { SearchFormSideBar, TagGuiaTramiteList, DSILink },
  mounted() {
    this.f_loadDataSidebar();
  },
  computed: {
    ...mapGetters({
      getAllTemas: "guiasTramites/getAllTemas",
      getGuiasMostViewed: "guiasTramites/getGuiasMostViewed",
    }),
  }, 
  methods: {    
    f_loadDataSidebar: function () {
      this.$store.dispatch("guiasTramites/loadAllGuias").catch((error) => {
        console.log("Ocurrio un error al cargarlos datos del sidebar en guias de tramite. Error: " +error); // undefined
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
<template>
  <div
    class="widget animation"
    data-animation="fadeInUp "
    data-animation-delay="0.3s"
    v-if="listTags && listTags.length > 0"
  >
    <h5 class="widget_title">Tags</h5>
    <div class="tags">
      <DSILink
        pCustomLabel=" "
        :pCustomLink="'/tag?tipo=GUIASTRAMITE&tag=' + item.tag"
        pTipoLink="I"
        v-for="item in listTags"
        :key="item.tag_id"
        :pTitle="item.tag"
        >{{ item.tag }}</DSILink
      >
    </div>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
import { mapGetters } from "vuex";
export default {
  components: { DSILink },
  computed: {
    ...mapGetters({
      listTags: "guiasTramites/getAllTagsForSidebar",
    }),
  },
  created() {
    this.f_loadListTags();
  },
  methods: {
    f_loadListTags: function () {
      this.$store.dispatch("guiasTramites/getAllListTags").catch((error) => {
        console.log("Ocurrio un error al recuperar la lista de tags para las guias de tramites: Error: ", error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al recuperar la lista de tags para las guias de tramites" +
            ". Error: " +
            error,
        }); */
      });
    },
  },
};
</script>
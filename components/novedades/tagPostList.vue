<template>
  <div
    class="widget animation"
    data-animation="fadeInUp "
    data-animation-delay="0.3s"
    v-if="getAllTags && getAllTags.length !== 0"
  >
    <h5 class="widget_title">Tags</h5>
    <div class="tags">
      <DSILink
        pCustomLabel=" "
        :pCustomLink="'/tag?tipo=NOVEDADES&tag=' + item"
        pTipoLink="I"
        v-for="item in getAllTags"
        :key="item"
        :pTitle="item"
        >{{ item }}
      </DSILink>
    </div>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
import { mapGetters } from "vuex";
export default {
  components: { DSILink },
  created() {
    this.f_loadTags();
  },
  computed: {
    ...mapGetters({
      getAllTags: "posts/getAllTags",
    }),
  },
  methods: {
    f_loadTags: function () {
      this.$store.dispatch("posts/getAllTags").catch((error) => {
        console.log("Ocurrio un error al los tags de la novedades en el sidebar. Error: " + error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al los tags de la novedades en el sidebar " +
            ". Error: " +
            error,
        }); */
      });
    },
  },
};
</script>
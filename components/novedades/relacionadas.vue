<template>
  <div
    class="related_post border-top animation"
    data-animation="fadeInUp "
    data-animation-delay="0.2s"
    v-if="novedadesRelacionadasList && novedadesRelacionadasList.length !== 0"
  >
    <div class="comment-title mb-2 mb-sm-4">
      <h5>Otras Novedades</h5>
    </div>
    <div class="row">
      <div
        class="col-md-6 mb-md-6 mb-2 pb-2"
        v-for="item in novedadesRelacionadasList"
        :key="item.id"
      >
        <CardDestacada
          :pId="item.id"
          :pTitulo="item.titulo"
          :pBajada="item.bajada"
          :pImagen="item.imagen"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardDestacada from "@/components/novedades/cardDestacada.vue";
import { mapGetters } from "vuex";
export default {
  components: { CardDestacada },
  props: ["pParentId"],
  watch: {
    pParentId: function (newVal, oldVal) {
      // watch it
      //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.f_searchRelacionadas(newVal);
    },
  },
  computed: {
    ...mapGetters({
      novedadesRelacionadasList: "posts/getNovedadesRelacionadas",
    }),
  },
  methods: {
    f_searchRelacionadas: function (id) {
      this.$store.dispatch("posts/getSearchRelacionadas", id).catch((error) => {
        console.log("Ocurrio un error al recuperar los novadades relacionadas de la novedad id: " +id +". Error: " +error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al recuperar los novadades relacionadas de la novedad id: " +
            id +
            ". Error: " +
            error,
        }); */
      });
    },
  },
};
</script>


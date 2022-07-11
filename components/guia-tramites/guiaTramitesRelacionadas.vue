<template>
  <div
    class="related_post border-top animation dsi-guias-tramites-relacionados"
    data-animation="fadeInUp "
    data-animation-delay="0.2s"
    v-if="getGuiaTramiteRelacionadas && getGuiaTramiteRelacionadas.length > 0"
  >
    <div class="comment-title mb-2 mb-sm-4">
      <h5>Trámites relacionados</h5>
    </div>
    <div class="row">
      <div
        class="col-lg-12 col-md-12 mb-md-4 mb-2 pb-2"
        v-for="item in getGuiaTramiteRelacionadas"
        :key="item.id_tram"
      >
        <div class="blog_post blog_style1 row">
          <div class="col-sm-12 col-md-1 col-lg-1 blog_img">
            <i class="ti-files"></i>
          </div>
          <div class="col-sm-12 col-md-11 col-lg-11 bg-white">
            <div class="blog_text">
              <p>
                {{ item.secretaria }} -
                {{ item.direccion_municipal }}
              </p>
              <h6 class="blog_title">
                <DSILink
                  pCustomLabel=" "
                  :pCustomLink="'/guia-tramites/' + item.id_tram"
                  pTipoLink="I"
                  :pTitle="item.nombre_tramite"
                >
                  {{ item.nombre_tramite }}
                </DSILink>
              </h6>
              <p v-html="item.desc_tramite"></p>
              <DSILink
                pCustomLabel=" "
                :pCustomLink="'/guia-tramites/' + item.id_tram"
                pTipoLink="I"
                pClass="text-capitalize"
                pTitle="Más detalle del trámite"
              >
                Más detalle
                <i class="ti-angle-double-right align-middle"></i>
              </DSILink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
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
      getGuiaTramiteRelacionadas: "guiasTramites/getGuiaTramiteRelacionadas",
    }),
  },
  methods: {
    f_searchRelacionadas: function (id) {
      this.$store
        .dispatch("guiasTramites/getSearchRelacionadas", id)
        .catch((error) => {
          console.log("Ocurrio un error al recuperar las guias de tramites relacionadas de la guia de tramite id: " +id +". Error: " +error); // undefined
          /* this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al recuperar las guias de tramites relacionadas de la guia de tramite id: " +
              id +
              ". Error: " +
              error,
          }); */
        });
    },
  },
};
</script>


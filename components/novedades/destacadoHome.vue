<template>
  <!-- START SECTION DESTACADO -->
  <section
    class="small_pt small_pb"
    v-if="getPostsStandout.length !== 0"
  >
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 animation"
          data-animation="fadeInUp"
          data-animation-delay="0.1s"
        >
            <div class="heading_s5">
              <h5>Programas</h5>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="clearfix small_divider"></div>
        </div>
      </div>
      <div
        class="row blog_wrap justify-content-center animation"
        data-animation="fadeInUp"
        data-animation-delay="0.2s"
      >
        <div
          class="col-lg-4 col-md-6 mb-md-4 mb-2 pb-2"
          v-for="item in getPostsStandout"
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
  </section>
  <!-- END SECTION DESTACADO -->
</template>
<script>
import CardDestacada from "@/components/novedades/cardDestacada.vue";
import { mapGetters } from "vuex";
export default {
  components: { CardDestacada },
  computed: {
    ...mapGetters({
      getPostsStandout: "posts/getPostsStandout",
    }),
  },
};
</script>
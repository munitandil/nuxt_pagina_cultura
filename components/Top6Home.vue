<template>
  <section class="gray_bg small_pb dsi-top6-container">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-lg-6 col-md-9 animation"
          data-animation="fadeInUp"
          data-animation-delay="0.1s"
        >
          <div class="heading_s1 text-center">
            <h2>Trámites y Servicios</h2>
          </div>
          <p class="text-center">Trámites y Servicios</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="clearfix small_divider"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div
            class="row animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div
              class="col-md-4 col-sm-6 mb-lg-5 mb-3 text-center"
              v-for="item in getListTop6"
              :key="item.id_item"
            >
              <Card
                :pTitulo="item.descr"
                :pIcono="item.icon"
                :pLink="item.link"
                :pDescripcion="item.info_extra"
                :pTipoLink="item.tipo_link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "@/components/servicios_tramites/cardPPL";
import { mapGetters } from "vuex";
export default {
  components: { Card },
  computed: {
    ...mapGetters({
      getListTop6: "serTram/getListTop6",
    }),
  },
};
</script>
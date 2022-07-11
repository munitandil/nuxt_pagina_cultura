<template>
  <section class="gray_bg small_pb">
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
          <p class="text-center">Trámites y Servicios más consultados</p>
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
       <!--   <div class="col-sm-12 col-md-3 mt-lg-0 mt-4 pt-3 pt-lg-0 ">
           <div class="dsi-others-services">
          <div class="heading_s5">
            <h5>Más...</h5>
          </div>
          <ul
            class="blog_small_post blog_list border_bottom_solid list_style_5"
          >
            <li>
              <div class="dsi_blog_postcontent_wrap">
                <div class="post_info">
                  <div class="blog_heading">
                    <h6><a href="#">Autogestion</a></h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="dsi_blog_postcontent_wrap">
                <div class="post_info">
                  <div class="blog_heading">
                    <h6><a href="#">Reclamos</a></h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="dsi_blog_postcontent_wrap">
                <div class="post_info">
                  <div class="blog_heading">
                    <h6><a href="#">Inscripción Proveedores</a></h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="dsi_blog_postcontent_wrap">
                <div class="post_info">
                  <div class="blog_heading">
                    <h6><a href="#">PASE</a></h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="dsi_blog_postcontent_wrap">
                <div class="post_info">
                  <div class="blog_heading">
                    <h6><a href="#">Alerta Tandil</a></h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>
        </div>  -->
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
<template>
  <section class="banner_section p-0" >
    <div
      id="carouselExampleControls"
      class="banner_content_wrap slide_height_500 carousel slide light_arrow2"
      data-ride="carousel"
    >
      <div class="carousel-inner">
       <!-- aqui 
        <div v-if="getBanners.length > 0">
          <div
            v-for="(item, index) in getBanners"
            :key="item.id"
            :class="
              `${index}` == 0
                ? 'carousel-item background_bg active overlay_bg2 '
                : 'carousel-item background_bg overlay_bg2 '
            "
            :style="bannerBgImage(item.imagen)"
          >
            <div
              class="dsi_banner_slide_content banner_content_bottom"
              v-if="item.oculta"
            >
              <div class="dsi-container">
                <div class="dsi-banner-item row align-items-center text-left">
                  <div class="col-lg-12 col-sm-12">
                    <div
                      class="banner_content2 animation text_white"
                      data-animation="fadeIn"
                      data-animation-delay="0.8s"
                    >
                      <h2
                        class="animation font-weight-normal"
                        data-animation="fadeInDown"
                        data-animation-delay="1s"
                        v-if="item.titulo"
                      >
                        {{ item.titulo }}
                      </h2>
                      <p
                        class="animation mb-4"
                        data-animation="fadeInUp"
                        data-animation-delay="1.5s"
                        v-if="item.volanta"
                      >
                        {{ item.volanta }}
                      </p>
                      <DSILink
                        pCustomLabel=" "
                        :pCustomLink="'/novedades/' + item.id"
                        pTipoLink="I"
                        pClass="btn btn-outline-light btn-xs mb-2 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="1.8s"
                        v-if="item.titulo"
                      >
                        más info...
                      </DSILink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   aqui -->
        
       <!--  <div :class="'carousel-item overlay_bg ' + `${getBanners.length}` == 0 ? 'active' : '' "> -->
        <div class="carousel-item overlay_bg active ">
          <div class="video_wrap">
            <video src="~assets/images/video_tandil_web.mp4" autoplay loop muted>
              Tu navegador no admite el elemento <code>video</code>.
            </video>
          </div>
        </div> 
      </div>

      <!-- <ol class="carousel-indicators indicators_style2 m-0">
        <li
          v-for="(item, index) in getBanners"
          :key="item.id"
          data-target="#carouselExampleControls"
          :data-slide-to="`${index}`"
          :class="`${index}` == 0 ? 'active' : ''"
        ></li>
      </ol> -->
      <!-- <a
        v-if="getBanners.length > 0"
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <i class="ti-arrow-left"></i>
      </a>
      <a
        v-if="getBanners.length > 0"
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <i class="ti-arrow-right"></i>
      </a> -->
    </div>
  </section>
</template>

<script>
import DSILink from "@/components/DSILink";
import { mapGetters } from "vuex";
export default {
  components: { DSILink },
  computed: {
    ...mapGetters({
      getBanners: "posts/getBannerHome",
    }),
  },
  methods: {
    bannerBgImage(image) {
      return 'background: url("' + image + '") center center / cover';
    },
  },
};
</script>
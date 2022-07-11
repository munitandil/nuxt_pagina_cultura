<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Servicios y Trámites'"
    ></BannerPage>
    <!-- SECCION SERVICIOS -->
    <section class="small_pt">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-8 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div class="heading_s1 text-center">
              <h2>Servicios</h2>
            </div>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              accusamus blanditiis laborum, autem animi officia
            </p>
          </div>
        </div>
        <div
          class="row animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
        >
          <div class="col-md-6">
            <CardFull />
          </div>
          <div class="col-md-6">
            <CardFull />
          </div>
          <div class="col-md-6">
            <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
            <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
        </div>
      </div>
    </section>
    <!-- END SECTION SERVICIOS -->

    <!-- SECCION TRAMITES -->
    <section class="small_pt">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-8 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div class="heading_s1 text-center">
              <h2>Trámites</h2>
            </div>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              accusamus blanditiis laborum, autem animi officia
            </p>
          </div>
        </div>
        <div
          class="row animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
        >
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
            <CardFull />
          </div>
          <div class="col-md-6">
             <CardFull />
          </div>
          <div class="col-md-6">
            <CardFull />
          </div>
        </div>
      </div>
    </section>
    <!-- END SECTION TRAMITES -->
  </div>
</template>
<script>
import CardFull from "./cardFull.vue";
import BannerPage from "@/components/BannerPage.vue";

export default {
  components: { BannerPage, CardFull },
  data() {
    return {
      beadcrumbPage: [{ path: "INICIO", link: true }],
    };
  },
};
</script>
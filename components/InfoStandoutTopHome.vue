<template>
    <section class="pt-0 small_pb overlap_box dsi-info-card-home" v-if="getPostsHomeTop3.length !== 0">  
        <div class="container">
            <div class="row justify-content-center">
                <div :class="(getPostsHomeTop3.length == 1 ? 'col-md-6 offset-md-1' : ( (getPostsHomeTop3.length == 2) ? 'col-md-6 col-sm-6 mb-lg-5 mb-4' : 'col-md-4 col-sm-6 mb-lg-5 mb-4')) " v-for="item in getPostsHomeTop3" :key="item.id">
                    <div class="icon_box icon_box_style_11 box_shadow3  bg-white animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                        <div class="box_icon mb-3">
                            <!-- <i class="ti-info-alt"></i> -->
                            <img src="@/assets/images/info-a.png" alt="Información importante" class="dsi-img-info"/>
                        </div>
                        <div class="icon_box_content">
                            <h5>{{item.titulo}}</h5>
                            <p>{{item.bajada}}</p>
                           
                            <DSILink
                                pCustomLabel=" "
                                :pCustomLink="'/novedades/' + item.id"
                                pTipoLink="I"
                                pClass="btn btn-default btn-xs mb-2"
                                pTitle="Ver más datos de la novedad"
                                >
                                ver mas...
                            </DSILink>
                        </div>
                    </div>
                </div>
            </div>
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
      getPostsHomeTop3: "posts/getPostsHomeTop3",
    }),
  }
};
</script>
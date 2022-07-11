<template>
    <section class="banner_section p-0" v-if="getPostsInfoTop.length !== 0">
        <div class="dsi-ultima-noticia alert alert_style1 alert-primary" v-for="item in getPostsInfoTop" :key="item.id">
            <div class="container">
                <div class="row align-items-center">
                    <div class="box_icon col-md-1 text-center">
                        <!-- <i class="ti-info-alt"></i> -->
                        <img src="@/assets/images/info-a.png" alt="Información importante" class="dsi-img-info"/>
                    </div>
                    <div class="col-md-11">
                        <p><strong>Informate</strong> {{item.volanta}}</p>
                        <div class="dsi-bttn-region">
                            <DSILink
                                pCustomLabel=" "
                                :pCustomLink="'/novedades/' + item.id"
                                pTipoLink="I"
                                pClass="btn btn-outline-default btn-xs"
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
      getPostsInfoTop: "posts/getPostsInfoTop",
    }),
  }
};
</script>
<template>
  <!-- START SECTION NOTICIAS -->
  <section class="small_pt small_pb" v-if="getPostsHome.length !== 0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section_featured">
            <div class="heading_s5">
              <h5>Novedades</h5>
            </div>
            <div class="tab-content tab_content_slider">
              <div
                class="tab-pane fade active show"
                id="politics"
                role="tabpanel"
                aria-labelledby="politics-tab"
              >
                <div class="row">               
                  <div class="col-md-12">
                    <ul class="blog_small_post blog_grid list_none">
                      <li
                        class="col-md-4"
                        v-for="item in getPostsHome"
                        :key="item.id"
                      >
                        <CardDestacada
                          :pId="item.id"
                          :pTitulo="item.titulo"
                          :pBajada="item.bajada"
                          :pImagen="item.imagen"                          
                        />
                      </li>
                    </ul>
                    <div class="border-top border-bottom py-2 mt-4 text-center">
                      <DSILink
                        pPath="NOVEDADES"
                        pTipoLink="I"
                        pCustomLabel="Ver más"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END SECTION NOTICIAS -->
</template>

<script>
import CardMiniImportant from "@/components/novedades/cardMiniImportant.vue";
import CardDestacada from "@/components/novedades/cardDestacada.vue";
import DSILink from "@/components/DSILink";
import CardMini from "./cardMini.vue";
import { mapGetters } from "vuex";

export default {
  components: { CardMiniImportant, CardMini, DSILink, CardDestacada },
  computed: {
    ...mapGetters({
      getPostsHome: "posts/getPostsHome",
    }),
  },
};
</script>
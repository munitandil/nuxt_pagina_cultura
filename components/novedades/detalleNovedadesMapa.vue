<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="
        getDetalleNovedad ? getDetalleNovedad.titulo : 'Detalle de la Novedad'
      "
      :volanta="getDetalleNovedad ? getDetalleNovedad.volanta : ''"
    ></BannerPage>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="dsi-detalle-novedad" v-if="getDetalleNovedad">
              <div
                class="single_post animation"
                data-animation="fadeInUp "
                data-animation-delay="0.1s"
              >
                <div
                  class="dsi-list-image-post-detail mb-md-5 mb-4"
                  v-if="listImages"
                >
                  <no-ssr>
                    <!-- important to add no-ssr-->
                    <carousel
                      v-if="listImages"
                      :autoplay="false"
                      :items="1"
                      :nav="true"
                      :loop="true"
                      :dots="true"
                      :responsive="{
                        0: { items: 1, nav: true },
                        600: { items: 1, nav: true },
                      }"
                    >
                      <img
                        :src="item"
                        alt="image222"
                        v-for="item in listImages.split('|#|')"
                        :key="item"
                      />
                    </carousel>
                  </no-ssr>
                </div>
                <div class="blog_content bg-white">
                  <!-- <div class="dsi-zoom-letter-container">
                    <div
                      class="dsi-zoomin-letter"
                      onclick="zoomIn('dsi-detalle-novedad')"
                    >
                      A+
                    </div>
                    <div
                      class="dsi-zoomout-letter"
                      onclick="zoomOut('dsi-detalle-novedad')"
                    >
                      A-
                    </div>
                  </div> -->
                  <div class="dsi-blog-text" id="dsi-detalle-novedad">
                    <ul class="list_none blog_meta">
                      <li>
                        <a href="#"
                          ><i class="ion-calendar"></i>
                          {{ getDetalleNovedad.fecha }}</a
                        >
                      </li>
                    </ul>
                    <p>{{ getDetalleNovedad.bajada }}</p>
                    <div
                      class="dsi-texto-novedad"
                      v-if="getDetalleNovedad.texto"
                      v-html="f_escapeHtml(getDetalleNovedad.texto)"
                    ></div>
                    <div class="fit-videos" v-if="getDetalleNovedad.video">
                      <iframe
                        width="540"
                        height="304"
                        src="https://www.youtube.com/embed/7e90gBu4pas"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div
                      class="dsi-descargas-novedades light_gray_bg"
                      v-if="getDetalleNovedad.doc"
                    >
                      <div class="comment-title mb-2 mb-sm-4">
                        <h5>Descargas</h5>
                      </div>
                      <ul>
                        <li
                          v-for="item in getDetalleNovedad.doc.split('|#|')"
                          :key="item"
                        >
                          <DSILink
                            pCustomLabel=" "
                            :pCustomLink="item"
                            pTipoLink="E"
                            pTitle="Descargar archivo"
                          >
                            <i
                              class="icon icon-file-pdf"
                              v-if="item.split('.').pop() === 'pdf'"
                            ></i>
                            <i
                              class="icon icon-file-word"
                              v-else-if="item.split('.').pop() === 'doc'"
                            ></i>
                            <i
                              class="icon icon-image"
                              v-else-if="
                                item.split('.').pop() === 'png' ||
                                item.split('.').pop() === 'jpeg' ||
                                item.split('.').pop() === 'jpg'
                              "
                            ></i>
                            <i class="icon icon-file-text" v-else></i>
                            <p>
                              Descargar <br /><span>{{
                                item.split("/").pop()
                              }}</span>
                            </p>
                          </DSILink>
                        </li>
                      </ul>
                    </div>
                    <div class="py-4 blog_post_footer">
                      <div
                        class="row justify-content-between align-items-center"
                      >
                        <div class="col-md-8 mb-3 mb-md-0">
                          <div class="tags" v-if="getDetalleNovedad.l_tag">
                            <DSILink
                              v-for="item in getDetalleNovedad.l_tag.split(
                                '|#|'
                              )"
                              pCustomLabel=" "
                              :pCustomLink="'/tag?tipo=NOVEDADES&tag=' + item"
                              pTipoLink="I"
                              :key="item.tag"
                              :pTitle="item"
                            >
                              {{ item }}
                            </DSILink>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <ShareNetwork
                            v-for="network in networks"
                            :network="network.network"
                            :key="network.network"
                            :style="{ backgroundColor: network.color }"
                            :url="sharing.url"
                            :title="sharing.title"
                            :description="sharing.description"
                            :quote="sharing.quote"
                            :hashtags="sharing.hashtags"
                            :twitterUser="sharing.twitterUser"
                            class="dsi-shared-news"
                          >
                            <i :class="network.icon"></i>
                          </ShareNetwork>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <OtrasNovedades :pParentId="getDetalleNovedad.id" />
            </div>
            <div class="dsi-no-result" v-else>
              <p>No se han encontrado datos.</p>
            </div>
          </div>
          <div class="col-lg-3 mt-lg-0 mt-4 pt-3 pt-lg-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from "@/components/novedades/sidebarPost.vue";
import OtrasNovedades from "@/components/novedades/relacionadas.vue";
import BannerPage from "@/components/BannerPage.vue";
import DSILink from "@/components/DSILink";
import { mapGetters } from "vuex";
export default {
  watchQuery: true,
  components: { Sidebar, BannerPage, DSILink, OtrasNovedades },

  /*
  async fetch() {
 this.$store.dispatch("posts/getSearchDetalle", this.$route.params.id)
        .then((res) => {
         // console.log('data----',res)
          //console.log('this.$route---',window.location.origin + this.$route.fullPath)
            let detalle = res.data.items[0];
             this.titlePage = "Titulo de la Novedad " + detalle.titulo;
              this.metaDescription = "Detalle de la Novedad: " + detalle.titulo;
                this.metaKeywords = "";
          this.listImages =
            detalle.imagen + (detalle.img ? "|#|" + detalle.img : "");
          if (detalle) {
            this.sharing.url = process.env.baseUrlPageWeb + this.$route.fullPath;
            this.sharing.title = detalle.titulo;
            this.sharing.description = detalle.volanta;
            this.sharing.hashtags = detalle.tag
              ? detalle.tag.replaceAll("|#|", ",")
              : "";
          }
        })
}, */

  head() {
    return {
      title: "Municipalidad de Tandil - " + this.titlePage,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.metaDescription,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.metaKeywords,
        },
      ],
    };
  },

  data() {
    return {
      titlePage: "",
      metaDescription: "",
      metaKeywords: "",
      listImages: null,
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          path: "NOVEDADES",
          link: true,
        },
        {
          currentPage: "Detalle",
        },
      ],
      sharing: {
        url: "https://www.tandil.gov.ar/novedades",
        title: "Muncinipalidad de Tandil - Novedades",
        description: "Listados de Novedades",
        quote: "Municipalidad de Tandil",
        hashtags: null,
        twitterUser: "GobiernoTandil",
      },
      networks: [
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      getDetalleNovedad: "posts/getDetalleNovedad",
    }),
  },
  mounted() {
    let id = this.$route.params.id;
    this.f_searchDetalle(id);
    //this.$fetch()
  },

  methods: {
    f_escapeHtml(str){
      return textToHTML(str);
    },
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + str,
        "text/html"
      );
      return dom.body.textContent;
    },
    f_searchDetalle: function (id) {
      this.$store
        .dispatch("posts/getSearchDetalle", id)
        .then((res) => {
          //console.log('data----',res)
          //console.log('this.$route---',window.location.origin + this.$route.fullPath)
          let detalle = res.data.items[0];

          this.titlePage = "titulo de la noticia " + detalle.titulo;
          this.metaDescription = "Detalle de la Novedad: " + detalle.titulo;
          this.metaKeywords = "";

          this.listImages =
            detalle.imagen + (detalle.img ? "|#|" + detalle.img : "");
          if (detalle) {
            this.sharing.url =
              process.env.baseUrlPageWeb + this.$route.fullPath;
            this.sharing.title = detalle.titulo;
            this.sharing.description = detalle.volanta;
            this.sharing.hashtags = detalle.tag
              ? detalle.tag.replaceAll("|#|", ",")
              : "";
          }
        })
        .catch((error) => {
          //console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
          this.$nuxt.error({
            statusCode: 302,
            message:
              "Ocurrio un error al recuperar el detalle de la novedad id: " +
              id +
              ". Error: " +
              error,
          });
        });
    },
  },
};
</script>
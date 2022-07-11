<template>
  <div>
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Guía de Trámites'"
    ></BannerPage>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
        <!--     <div class="dsi-zoom-letter-container">
              <div class="dsi-zoomin-letter" onclick="zoomIn('dsi-guia-tramite-detalle')">A+</div> 
              <div class="dsi-zoomout-letter" onclick="zoomOut('dsi-guia-tramite-detalle')">A-</div>
            </div> -->
            <div  class="dsi-result-page" v-if="getDetalleGuiaTramite">
              <div
                class="single_post animation"
                data-animation="fadeInUp "
                data-animation-delay="0.1s"
                id="dsi-guia-tramite-detalle"
              >
                <div class="blog_content bg-white">
                  <div class="blog_img">
                    <i class="ti-files"></i>
                  </div>
                  <p class="dsi-info-secretaria">
                    {{ getDetalleGuiaTramite.secretaria }} -
                    {{ getDetalleGuiaTramite.direccion_municipal }}
                  </p>
                  <div class="dsi-tema-desc">
                    <span>Tema</span>: {{ getDetalleGuiaTramite.tema_desc }}
                 </div>
                  <div class="blog_text">
                    <h2>{{ getDetalleGuiaTramite.nombre_tramite }}</h2>
                    <div class="dsi-desc-tramite"
                        v-html="f_convertStrToHtml(getDetalleGuiaTramite.desc_tramite)">
                    </div>

                    <div class="dsi-guia-tramite-requisitos">
                      <h2 class="dsi-title">
                        <div class="heading_s1">
                          <h6>Requisitos</h6>
                        </div>
                      </h2>
                      <div class="dsi-body">
                        <ul v-if="getDetalleGuiaTramite.requisitos">
                          <li
                            v-for="item in getDetalleGuiaTramite.requisitos.split('|#|')"
                            :key="item"
                            v-html="f_convertStrToHtml(item)"
                          >
                          </li>
                        </ul>
                         <p class="dsi-sin-especificar" v-else>Sin Especificar</p>
                      </div>
                    </div>
                    <div class="dsi-guia-tramite-normativa">
                      <h2 class="dsi-title">
                        <div class="heading_s1">
                          <h6>Normativa</h6>
                        </div>
                      </h2>
                      <div class="dsi-body">
                          <ul v-if="getDetalleGuiaTramite.normativa">
                          <li
                            v-for="item in getDetalleGuiaTramite.normativa.split('|#|')"
                            :key="item"
                            v-html="f_convertStrToHtml(item)"
                          >
                          </li>
                        </ul>
                        <p class="dsi-sin-especificar" v-else>Sin Especificar</p>
                      </div>
                    </div>
                    <div class="dsi-guia-tramite-doc-requerida">
                      <h2 class="dsi-title">
                        <div class="heading_s1">
                          <h6>Documentación Requerida</h6>
                        </div>
                      </h2>
                      <div class="dsi-body" >
                        <ul v-if="getDetalleGuiaTramite.documento">
                          <li
                            v-for="item in getDetalleGuiaTramite.documento.split('|#|')"
                            :key="item"
                            v-html="f_convertStrToHtml(item)"
                          >
                          </li>
                        </ul>
                        <p class="dsi-sin-especificar" v-else>Sin Especificar</p>
                      </div>
                    </div>
                    <div
                      class="cta_section_small light_gray_bg dsi-guia-tramite-otros-datos"
                    >
                      <div class="container">
                        <div class="row align-items-center">
                          <ul>
                            <li>
                              <span class="dsi-label">Costo</span>:
                              <div class="dsi-content-text dsi-tramite-costo"
                                   v-html="f_convertStrToHtml(getDetalleGuiaTramite.costo)"
                                   v-if="getDetalleGuiaTramite.costo"
                               ></div>
                               <p class="dsi-empty-option" v-else><strong>-</strong></p>
                            </li>
                            <!--li>
                              <span class="dsi-label">Regularidad</span>:
                              <div class="dsi-content-text dsi-tramite-plazo" 
                              v-html="f_convertStrToHtml(getDetalleGuiaTramite.regularidad)"
                              v-if="getDetalleGuiaTramite.regularidad"></div>
                              <p class="dsi-empty-option" v-else><strong>-</strong></p>
                            </li-->
                            <li>
                              <span class="dsi-label"
                                >Para acceder al trámite</span>:
                              <a
                                :href="getDetalleGuiaTramite.link_web"
                                v-if="getDetalleGuiaTramite.link_web"
                                >{{ getDetalleGuiaTramite.link_web }}</a
                              >
                              <div v-else class="dsi-content-text dsi-tramite-modalidad" 
                              v-html="f_convertStrToHtml(getDetalleGuiaTramite.modalidad)"> </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="dsi-guia-tramite-contacto">
                      <blockquote class="blockquote quote_style2">
                        <ul>
                          <li>
                            <span class="dsi-label">Email/s</span>:
                            {{ getDetalleGuiaTramite.mail }}
                          </li>
                          <li>
                            <span class="dsi-label">Teléfono/s</span>:
                            {{ getDetalleGuiaTramite.te }}
                          </li>
                          <li>
                            <span class="dsi-label">Domicilio</span>:
                            {{ getDetalleGuiaTramite.domilicio }}
                          </li>
                          <li>
                            <span class="dsi-label">Responsable/s</span>:
                            <ul
                              class="dsi-responable-lista"
                              v-if="getDetalleGuiaTramite.responsable"
                            >
                              <li
                                v-for="item in getDetalleGuiaTramite.responsable.split(
                                  '|#|'
                                )"
                                :key="item"
                              >
                                {{ item }}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </blockquote>
                    </div>
                    <div class="py-4 blog_post_footer">
                      <div
                        class="row justify-content-between align-items-center"
                      >
                        <div class="col-md-8 mb-3 mb-md-0">
                          <div class="tags" v-if="getDetalleGuiaTramite.tag">
                            <DSILink
                              v-for="item in getDetalleGuiaTramite.tag.split(
                                '|#|'
                              )"
                              pCustomLabel=" "
                              :pCustomLink="
                                '/tag?tipo=GUIASTRAMITE&tag=' + item
                              "
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
              <GuiasTramitesRelacionadas
                :pParentId="getDetalleGuiaTramite.id_tram"
              />
            </div>
            <div class="dsi-no-result" v-else>
              <p>No se han encontrado datos.</p>
            </div>
          </div>
          <div class="col-lg-3 mt-lg-0 mt-4 pt-3 pt-lg-0">
            <Sidebar showFormSearch />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "../guia-tramites/sidebar.vue";
import BannerPage from "@/components/BannerPage.vue";
import DSILink from "@/components/DSILink";
import GuiasTramitesRelacionadas from "@/components/guia-tramites/guiaTramitesRelacionadas.vue";
import { mapGetters } from "vuex";
export default {
  watchQuery: true,
  components: { Sidebar, BannerPage, DSILink, GuiasTramitesRelacionadas },
  props: ["id"],
  head: {
    title: "Municipalidad de Tandil - Detalle de una Guías de Trámites",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Detalle de una Guías de Trámites page description",
      },
    ],
  },
  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          path: "GUIADETRAMITES",
          link: true,
        },
        {
          currentPage: "Detalle",
        },
      ],
      sharing: {
        url: "https://news.vuejs.org/issues/180",
        title: "Prueba",
        description: "Esto es una prueba",
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
      getDetalleGuiaTramite: "guiasTramites/getDetalleGuiaTramite",
    }),
  },
  created() {
    let id = this.$route.params.id;
    this.f_searchDetalle(id);
  },
  methods: {
    f_convertStrToHtml : function(mystring){
       var s = "";   
        if (!mystring || mystring.length == 0) return "";   
        s = mystring.replace(/&/g, ">");   
        s = s.replace(/</g, "<");   
        s = s.replace(/>/g, ">");   
        s = s.replace(/ /g, " ");   
        s = s.replace(/\'/g, "'");   
        s = s.replace(/\"/g, "\"");   
        s = s.replace(/\n/g, "<br>");   
        return s;  
    },
    f_searchDetalle: function (id) {
      this.$store
        .dispatch("guiasTramites/getSearchDetalle", id)
        .then((res) => {
          //console.log('data----',res)
          //console.log('this.$route---',window.location.origin + this.$route.fullPath)
          let detalle = res.data.items[0];
          if (detalle) {
            this.sharing.url = window.location.origin + this.$route.fullPath;
            this.sharing.title = detalle.nombre_tramite;
            this.sharing.description = detalle.desc_tramite;
            this.sharing.hashtags = detalle.tag
              ? detalle.tag.replaceAll("|#|", ",")
              : "";
          }
        })
        .catch((error) => {
          //console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
          this.$nuxt.error({
            statusCode: 404,
            message:
              "Ocurrio un error al recuperar el detalle de la guia de tramite id: " +
              id +
              ". Error: " +
              error,
          });
        });
    },
  },
};
</script>
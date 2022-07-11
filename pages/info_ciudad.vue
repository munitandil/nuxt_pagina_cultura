<template>
  <div>
    <Header />
    <div class="dsi-info-ciudad">
      <BannerPage
        :beadcrumb="beadcrumbPage"
        :title="'Información de la Ciudad'"
      ></BannerPage>
      <!-- START SECTION SHOP DETAIL -->
      <section class="small_pb">
        <div class="container">
          <div id="dsi-info-detalle">
            <div class="row">
              <div
                class="col-lg-5 col-md-6 mb-4 mb-md-0 animation"
                data-animation="fadeInUp "
                data-animation-delay="0.1s"
              >
                <div class="product-image">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.4077895355445!2d-59.136010493923216!3d-37.33066281408246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f96556d5f3f%3A0xada6694d7dee96b1!2sMunicipalidad%20de%20Tandil!5e0!3m2!1ses-419!2sar!4v1611581165514!5m2!1ses-419!2sar"
                    width="100%"
                    height="550"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
              <div
                class="col-lg-7 col-md-6 animation"
                data-animation="fadeInUp "
                data-animation-delay="0.2s"
              >
                <div class="pr_detail">
                  <div class="product-description">
                    <div class="product-title">
                      <h4><a href="#">TANDIL</a></h4>
                    </div>
                    <div class="product_price float-left">
                      <ins>Provincia de Buenos Aires, Argentina.</ins>
                    </div>
                    <div class="clearfix"></div>
                    <hr />
                    <p>
                      Estamos ubicados al sudeste de la provincia de Buenos
                      Aires, en la República Argentina. Nuestra superficie, de
                      casi 5 mil kilómetros cuadrados, alberga una población de
                      más de 140 mil habitantes.
                    </p>
                    <p>
                      El ritmo de la ciudad va de la mano del trabajo conjunto
                      entre el sector público y el privado; esté último
                      caracterizado por la diversidad de nuestras actividades
                      económicas, como la agricultura, la ganadería, el turismo,
                      la industria metalmecánica y la alimenticia, el desarrollo
                      de tecnología y de software.
                    </p>
                    <p>
                      Ese carácter emprendedor que nos distingue se asocia de
                      manera natural con el desarrollo de la formación académica
                      de excelencia de nuestros jóvenes, motorizada por la
                      Universidad Nacional del Centro de la provincia de Buenos
                      Aires, una de las más importantes del país.
                    </p>
                    <p>
                      Pero Tandil también se posiciona como un lugar especial
                      para el descanso, con paisajes y paseos inigualables,
                      enmarcados en el sistema serrano más antiguo de la
                      Argentina. Lo que se complementa perfectamente con una
                      adecuada infraestructura para el alojamiento temporal y
                      permanente, apto para la práctica de actividades
                      recreativas al aire libre y el esparcimiento, junto a una
                      gran actividad cultural y deportiva.
                    </p>
                    <p>
                      Todos los años, durante los días de la Semana Santa, miles
                      de turistas llegan a la ciudad para compartir una
                      experiencia única, que combina la fe religiosa con
                      actividades culturales, artísticas y nuestras ferias, en
                      las que se destaca la producción artesanal y la
                      gastronomía.
                    </p>
                    <p>
                      Justamente la cocina es un punto sobresaliente de nuestra
                      identidad; chacinados, quesos y el insipiente crecimiento
                      de la producción de la cerveza artesanal hacen de nuestras
                      mesas un lugar de encuentro y disfrute.
                    </p>
                    <p>
                      l 4 de abril de 2023 vamos a cumplir nuestros primeros 200
                      años de vida. Mirando hacia nuestro pasado y,
                      especialmente pensando en el futuro, cuando nos preguntan
                      ¿Qué es Tandil?, nos gusta decir que somos una tierra de
                      emprendedores, orgullosos de nuestras tradiciones y
                      nuestra gente, siempre dispuestos a recibir a quienes
                      deseen conocer nuestro lugar en el mundo.
                    </p>
                  </div>
                  <hr />
                  <ul class="product-meta">
                    <li>
                      Funcación:
                      <a href="#">4 de abril de 1823 (Martín Rodríguez)</a>
                    </li>
                    <li>Superficie: <a href="#" rel="tag">52 34 km²</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="medium_divider clearfix"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div
                  class="tab-style1 animation"
                  data-animation="fadeInUp "
                  data-animation-delay="0.3s"
                >
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item active">
                      <a
                        class="nav-link"
                        id="Flag-tab"
                        data-toggle="tab"
                        href="#Flag"
                        role="tab"
                        aria-controls="Flag"
                        aria-selected="false"
                        >Bandera</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="Maps-tab"
                        data-toggle="tab"
                        href="#Maps"
                        role="tab"
                        aria-controls="Maps"
                        aria-selected="false"
                        >Mapas</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="Delegaciones-tab"
                        data-toggle="tab"
                        href="#Delegaciones"
                        role="tab"
                        aria-controls="Delegaciones"
                        aria-selected="false"
                        >Delegaciones</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content shop_info_tab">
                    <div
                      class="tab-pane fade show active"
                      id="Flag"
                      role="tabpanel"
                      aria-labelledby="Flag-tab"
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <div class="product-image">
                              <img
                                src="~assets/images/bandera_tandil_curvas.png"
                              />
                            </div>
                          </div>
                          <div class="col-lg-7 col-md-6">
                            <div class="pr_detail">
                              <div class="product-description">
                                <div class="product-title">
                                  <h4><a href="#">Bandera de la ciudad</a></h4>
                                </div>
                                <div class="product_price float-left">
                                  <ins
                                    >TANDIL - Provincia de Buenos Aires,
                                    Argentina.</ins
                                  >
                                </div>
                                <div class="clearfix"></div>
                                <hr />
                                <p>
                                  Tandil cuenta desde hace un par de décadas con
                                  una bandera identitaria, cuyo diseño fue
                                  realizado por Daniela Delceggio, quien ganó un
                                  concurso público realizado oportunamente.
                                </p>
                                <p>
                                  El diseño de la Bandera de Tandil respondió a
                                  la necesidad de lograr un referente gráfico
                                  simple, que, sin necesidad de explicación,
                                  exprese valores pasados, presentes y futuros
                                  de la ciudad y su población.
                                </p>
                                <p>
                                  En lo simbólico, buscó lograr la
                                  representación del ser tandilense en un
                                  sentido amplio e integrador.
                                </p>
                                <div class="heading_s3">
                                  <h5>Fundamentos de su creación</h5>
                                </div>
                                <p>
                                  Necesidad de la ciudad de poseer una fuerte
                                  identidad simbólica, que es un aspecto
                                  organizador de todo esquema de representación,
                                  visibilidad y clarificación, perteneciendo y
                                  participando en el escenario global nacional.
                                </p>
                                <p>
                                  Plasmar una política activa de imagen
                                  institucional de la ciudad de Tandil tanto
                                  desde lo conceptual hasta lo operativo,
                                  rotulando y dando marco a las presentaciones
                                  locales, zonales y nacionales.
                                </p>
                                <div class="heading_s3">
                                  <h5>Bandera como identificación local</h5>
                                </div>
                                <p>
                                  La propia autora del diseño lo explica: En
                                  esta producción gráfica se busca generar una
                                  imagen que contenga las características de la
                                  ciudad de Tandil, y que la población
                                  tandilense se identifique con ella.
                                </p>
                                <p>
                                  Este símbolo, obtendrá fuerza al imponer un
                                  significado y sentido a quién la ve. La fuerza
                                  la logra a través de dos cualidades visuales:
                                  que cada uno de sus elementos, tiene su propio
                                  significado y que interactúan entre sí,
                                  ensamblándose como fragmentos organizados,
                                  para generar un discurso sintético e
                                  instantáneo, que relacione la imagen con la
                                  identidad local, dejando al descubierto ideas,
                                  valores, creencias e intereses.
                                </p>
                                <div class="heading_s3">
                                  <h5>
                                    Simbología de los elementos incluidos en el
                                    diseño
                                  </h5>
                                </div>
                                <div class="heading_s3">
                                  <h6>Piedra</h6>
                                </div>
                                <p>
                                  Reviste importante valor simbólico en casi
                                  todas las culturas. Por su dureza e
                                  inalterabilidad la piedra se pone en relación
                                  con las potencias eternas, inmarcesibles y
                                  divinas, y como manifestación de fuerza
                                  concentrada. Sin embargo, y pese a su dureza,
                                  no se contempla como algo rígido y muerto,
                                  sino que parece capaz de transmitir vida.
                                </p>
                                <div class="heading_s3">
                                  <h6>Cielo</h6>
                                </div>
                                <p>
                                  Se encuentra el simbolismo de cielo =
                                  masculino activo, tierra = femenina, pasiva;
                                  la fecundación de la tierra por el cielo sería
                                  entonces necesaria para el nacimiento de todos
                                  los seres que pueblan la tierra.
                                </p>
                                <div class="heading_s3">
                                  <h6>Sol</h6>
                                </div>
                                <p>
                                  Como el sol alumbra a todos con una misma luz,
                                  simboliza la justicia. En lo religioso, todo
                                  el simbolismo de la Pascua guarda una estrecha
                                  semejanza con la simbología solar, comparando
                                  al Redentor con el Sol, como sol de justicia.
                                  El sol es el símbolo de la vida, la fuente de
                                  toda existencia.
                                </p>
                                <div class="heading_s3">
                                  <h6>Color verde</h6>
                                </div>
                                <p>
                                  Color del reino vegetal, el agua, la vida, de
                                  la renovación anual de la naturaleza, la
                                  esperanza.
                                </p>
                                <div class="heading_s3">
                                  <h6>Color gris</h6>
                                </div>
                                <p>
                                  Símbolo de la riqueza minera local, explotada
                                  desde la época de la inmigración europea,
                                  cuyas comunidades se asentaron en la zona para
                                  tal fin.
                                </p>
                                <div class="heading_s3">
                                  <h6>Engranaje</h6>
                                </div>
                                <p>
                                  Fuerza, trabajo e industrialización en una
                                  ciudad cuyos comienzos se forjaron por manos
                                  fuertes y cuyo desarrollo generó una industria
                                  próspera.
                                </p>
                                <div class="heading_s3">
                                  <h6>Hojas</h6>
                                </div>
                                <p>
                                  El agro, ya que la agricultura y la ganadería
                                  fueron y son actividades que promueven el
                                  desarrollo de la ciudad basadas en el
                                  aprovechamiento de la fertilidad de la tierra.
                                </p>
                                <div class="heading_s3">
                                  <h6>Curvas</h6>
                                </div>
                                <p>
                                  Cerros redondeados por la erosión de los
                                  elementos naturales, cuyo origen data de 2500
                                  millones de años.
                                </p>
                                <div class="heading_s3">
                                  <h6>Blanco y celeste</h6>
                                </div>
                                <p>
                                  Unión a la Nación Argentina, indicando
                                  pertenencia y colaboración en el desarrollo
                                  político, social y económico de un país
                                  fuerte, reconocido a nivel mundial.
                                </p>
                                <div class="heading_s3">
                                  <h6>Piedra Movediza</h6>
                                </div>
                                <p>
                                  Icono identificatorio de la ciudad a nivel
                                  mundial, ya que, si bien pasaron más de 90
                                  años de su caída, sigue vigente y es una de
                                  las mayores atracciones turísticas de la
                                  ciudad.
                                </p>
                                <div class="heading_s3">
                                  <h6>Morfología</h6>
                                </div>
                                <p>
                                  Los elementos adoptados para la construcción
                                  de este símbolo municipal, fueron
                                  seleccionados para representar de forma
                                  figurativa a los diferentes aspectos
                                  identificatorios de la ciudad de Tandil,
                                  siendo cada uno y en su conjunto, formas
                                  armónicas que conviven en un soporte flexible
                                  o rígido. A través de sus curvas y planos que
                                  ellas generan, se logra un equilibrio visual y
                                  sintético para representar el espíritu de la
                                  ciudad.
                                </p>

                                <div class="heading_s3">
                                  <h5>Resumen descriptivo</h5>
                                </div>
                                <p>
                                  "Bandera de Tandil, como síntesis de una
                                  cuidad forjada por el agro, la industria, el
                                  turismo y su monumental Piedra Movediza, que
                                  dignificaron el pasado, construyeron un
                                  presente promisorio y llenan de esperanzas
                                  alentadoras hacia un futuro mejor propio y de
                                  la Nación Argentina".
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="Maps"
                      role="tabpanel"
                      aria-labelledby="Maps-tab"
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3">
                            <div class="tab-style6">
                              <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                  <a
                                    class="nav-link active"
                                    id="home-tab6"
                                    data-toggle="tab"
                                    href="#google-map"
                                    role="tab"
                                    aria-controls="google-map"
                                    aria-selected="true"
                                    ><i class="icon icon-earth"></i>Google
                                    Maps</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link"
                                    id="profile-tab6"
                                    data-toggle="tab"
                                    href="#mapa1"
                                    role="tab"
                                    aria-controls="mapa1"
                                    aria-selected="false"
                                    ><i class="icon icon-image"></i>Mapa Tandil
                                    para todos</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link"
                                    id="contact-tab6"
                                    data-toggle="tab"
                                    href="#mapa2"
                                    role="tab"
                                    aria-controls="mapa2"
                                    aria-selected="false"
                                    ><i class="icon icon-image"></i>Mapa Tandil
                                    Turístico</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-9">
                            <div class="tab-content">
                              <div
                                class="tab-pane fade show active"
                                id="google-map"
                                role="tabpanel"
                                aria-labelledby="home-tab6"
                              >
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38769.85892525342!2d-59.168382465927415!3d-37.33010232091713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f96556d5f3f%3A0xada6694d7dee96b1!2sMunicipalidad%20de%20Tandil!5e0!3m2!1ses-419!2sar!4v1611663294546!5m2!1ses-419!2sar"
                                  width="100%"
                                  height="600"
                                  frameborder="0"
                                  style="border: 0"
                                  allowfullscreen=""
                                  aria-hidden="false"
                                  tabindex="0"
                                ></iframe>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="mapa1"
                                role="tabpanel"
                                aria-labelledby="profile-tab6"
                              >
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-opcion1"
                                  ><img src="~assets/images/mapa_tandil.jpg"
                                /></a>
                              </div>
                              <div
                                class="tab-pane fade container"
                                id="mapa2"
                                role="tabpanel"
                                aria-labelledby="contact-tab6"
                              >
                                <div class="row">
                                  <a
                                    class="col-md-6"
                                    href="#"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-opcion2"
                                    ><img
                                      src="~assets/images/mapa_turistico.png"
                                      height="600"
                                  />opción 1</a>
                                  <a
                                    class="col-md-6"
                                    href="#"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-opcion3"
                                    ><img
                                      src="~assets/images/mini_guia_turistica.png"
                                      height="600"
                                  />opción 2</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="Delegaciones"
                      role="tabpanel"
                      aria-labelledby="Delegaciones-tab"
                    >
                      <p>
                        Como parte de la política de descentralización y
                        contacto directo y cercano con el ciudadano, Tandil
                        cuenta con delegaciones rurales en María Ignacia Vela y
                        Gardey.
                      </p>
                      <ul>
                        <li>
                          <div class="dsi-card-delegaciones">
                            <h2>Delegación María Ignacia Vela</h2>
                            <ul>
                              <li>
                                <div class="dsi-adrress">
                                  <span class="ti-location-pin"></span>
                                  <span>Tandil 575</span>
                                </div>
                              </li>
                              <li>
                                <div class="dsi-email">
                                  <span class="ti-email"></span>
                                  <a href="mailto:delegacion_vela@tandil.gov.ar"
                                    >delegacion_vela@tandil.gov.ar</a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="dsi-phone">
                                  <span class="ti-mobile"></span>
                                  <span
                                    ><a href="tel:2494491134"
                                      >(0249) 4491134</a
                                    ></span
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="dsi-scheduler">
                                  <span class="ti-timer"></span>
                                  <span>Lunes a Viernes de 7hs a 14hs.</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div class="dsi-card-delegaciones">
                            <h2>Delegación Gardey</h2>
                            <ul>
                              <li>
                                <div class="dsi-adrress">
                                  <span class="ti-location-pin"></span>
                                  <span>calle 14 Nro. 610</span>
                                </div>
                              </li>
                              <li>
                                <div class="dsi-email">
                                  <span class="ti-email"></span>
                                  <a href="mailto:gardey@tandil.gov.ar"
                                    >gardey@tandil.gov.ar</a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="dsi-phone">
                                  <span class="ti-mobile"></span>
                                  <span
                                    ><a href="tel:2494493045">(0249) 4493045</a>
                                    interno 31</span
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="dsi-scheduler">
                                  <span class="ti-timer"></span>
                                  <span>Lunes a Viernes de 7hs a 13hs.</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade bd-example-modal-opcion2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Descargar Mapa Tandil Turístico
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="~assets/images/mapa_turistico.png" />
            </div>
            <div class="modal-footer">
              <a
                href="~assets/images/mapa_turistico.png"
                type="button"
                class="btn btn-default btn-sm"
                download="MapaTandilTuristico.png"
                rel="noopener noreferrer"
                target="_blank"
                >Descargar</a
              >
              <button type="button" class="btn btn-black" data-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

       <div
        class="modal fade bd-example-modal-opcion3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Descargar Mini Guia Tandil Turístico
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="~assets/images/mini_guia_turistica.png" />
            </div>
            <div class="modal-footer">
              <a
                href="~assets/images/mini_guia_turistica.png"
                type="button"
                class="btn btn-default btn-sm"
                download="MiniGuiaMapaTandilTuristico.png"
                rel="noopener noreferrer"
                target="_blank"
                >Descargar</a
              >
              <button type="button" class="btn btn-black" data-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-opcion1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Descargar Mapa Tandil
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="~assets/images/mapa_tandil.jpg" width="900" />
            </div>
            <div class="modal-footer">
              <a
                href="~assets/images/mapa_tandil.jpg"
                type="button"
                class="btn btn-default btn-sm"
                download="MapaTandil.jpg"
                rel="noopener noreferrer"
                target="_blank"
                >Descargar</a
              >
              <button type="button" class="btn btn-black" data-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- FIN MODAL PANEL-->

      <!-- END SECTION FOTOS -->
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Información de la ciudad",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion de la ciudad de tandil",
      },
    ],
  },

  data() {
    return {
      image1: require("@/assets/images/tandil_foto2.jpeg"),
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Tandil",
        },

        {
          currentPage: "Información de la Ciudad",
        },
      ],
    };
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
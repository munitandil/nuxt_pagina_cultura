<template>
  <div>
    <Header />
    <div class="dsi-legal-tecnica">
      <BannerPage
        :beadcrumb="beadcrumbPage"
        :title="'Secretaría Legal y Técnica'"
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
                    <div class="product-image dsi-legal-tecnico-edificio">
                        <img src="@/assets/images/legalytecnica.jpg"  alt="Legal y Técnica" >
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
                            <h4><a href="#">Secretaría Legal y Técnica</a></h4>
                            </div>
                            <div class="product_price float-left">
                            <ins>Tandil Provincia de Buenos Aires, Argentina.</ins>
                            </div>
                            <div class="clearfix"></div>
                            <hr />
                            <ul class="contact_info list_none">
                                <li><span class="ti-location-pin"></span>
                                    <address data-uw-styling-context="true">Chacabuco 383 • Tandil</address>
                                </li> 
                                <li><span class="ti-mobile"></span>
                                    <a href="tel:2494420708" title="Teléfono Legal y Técnica" class="" data-uw-styling-context="true">2494420708</a>
                                </li>
                                <li><span class="ti-email"></span>
                                    <a href="mailTo:seclegal@tandil.gov.ar" title="Email Legal y Técnica" class="" data-uw-styling-context="true">seclegal@tandil.gov.ar</a>
                                </li>	
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="medium_divider clearfix"></div>
              </div>
            </div>            
            <div id="accordion-5" class="accordion accordion_style2">
                <div class="card">
                  <div class="card-header" id="heading-5-One">
                    <h6 class="mb-0"> 
                        <a data-toggle="collapse" href="#collapse-5-One" aria-expanded="true" aria-controls="collapse-5-One" class="">
                            Todos tenemos derechos como consumidores y usuarios, conocelos
                        </a> 
                    </h6>
                  </div>
                  <div id="collapse-5-One" class="collapse show" aria-labelledby="heading-5-One" data-parent="#accordion-5" style="">
                    <div class="card-body">
                        En nuestro país el derecho del consumidor se consolida con la sanción de la <strong>Ley Nº 24.240 y con la reforma constitucional de 1994 (arts. 42 y 43)</strong> que protege a todos aquellos que diariamente ejercemos la función de consumidores y usuarios. Eligiendo y decidiendo a la hora de comprar alimentos, ropa, electrodomésticos, un auto. Cuando contratamos un seguro, cuando hablamos por teléfono, cuando llamamos a un electricista o a un plomero para que arregle nuestra casa.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-5-Two">
                    <h6 class="mb-0"> 
                        <a class="collapsed" data-toggle="collapse" href="#collapse-5-Two" aria-expanded="false" aria-controls="collapse-5-Two">
                            Derechos como consumidores
                        </a>
                    </h6>
                  </div>
                  <div id="collapse-5-Two" class="collapse" aria-labelledby="heading-5-Two" data-parent="#accordion-5" style="">
                    <div class="card-body">                         
                        <p>
                            Cuando realizamos esa tarea, se establece una relación de consumo entre quien realiza la venta o presta el servicio y quien la recibe. Esa relación en la mayoría de los casos, es desigual, porque el consumidor no cuenta con los conocimientos necesarios para reconocer la totalidad de las características o cualidades de un producto o servicio. Así, como no le resulta posible negociar las condiciones de la mayoría de los contratos que firma, ya que los mismos son predispuestos. Por este motivo es que precisa la protección del Estado que mediante la elaboración de normas equilibra esa desigualdad.
                        </p>
                        <p>
                            En función de lo expuesto, te invitamos para que a través de esta página conozcas los derechos y los deberes que tenemos como consumidores y usuarios, y de esa manera, podamos entre todos hacerlos valer, generando un consumo más conciente. Ayudémonos!.
                        </p>
                        <p>
                            El consumidor se encuentra protegido en todas las etapas de la relación contractual: antes de contratar, al momento de contratar, después de contratar.
                            Ante el consumidor son responsables solidariamente todos los que intervienen en la cadena de producción y comercialización del bien adquirido o del servicio contratado.
                            El consumidor tiene derecho a: recibir una información adecuada, derecho a la seguridad y a la salud, derechos a la libertad de elección, derecho a ser tratado dignamente, derecho a la educación para el consumo, entre otros.
                        </p>
                    </div>
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
                        class="nav-link active"
                        id="tierra-tab"
                        data-toggle="tab"
                        href="#tierra"
                        role="tab"
                        aria-controls="tierra"
                        aria-selected="false"
                        >Área de Tierras</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="mediacion-tab"
                        data-toggle="tab"
                        href="#mediacion"
                        role="tab"
                        aria-controls="medicacion"
                        aria-selected="false"
                        >Oficina de Mediación</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="familia-tab"
                        data-toggle="tab"
                        href="#familia"
                        role="tab"
                        aria-controls="familia"
                        aria-selected="false"
                        >Oficina de Bien de Familia</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content shop_info_tab">
                    <div
                      class="tab-pane fade show active"
                      id="tierra"
                      role="tabpanel"
                      aria-labelledby="tierra-tab"
                    >
                      <div class="container">
                        <div class="row">                      
                          <div class="col-md-12">
                            <div class="pr_detail">
                              <div class="product-description">                             
                                <p>
                                  El área de tierras tiene como objetivo brindar información y regularizar la situación de dominio de  inmuebles de los vecinos de Tandil.
                                </p>                              
                                <div class="heading_s1">
                                    <h6>¿Qué es regularizar dominio?:</h6>
                                </div>
                                <div class="list_style_5">
                                    <ul>
                                        <li>Mediante la Ley 10.830 y a través de Escribanía General de Gobierno se puede escriturar de forma totalmente gratuita un inmueble.</li>
                                        <li>Pueden acceder a escriturar de esta forma quienes posean una vivienda única y cuenten con los antecedentes de la compra. No es necesario tener los impuestos pagos del inmueble (si hicieran el trámite de forma privada esto sería un requisito a cumplir).</li>
                                        <li>Se beneficiarán escriturando un inmueble que al momento de la entrega de la escritura será un contribuyente sin deuda y con obligación de ahí en adelante de pagar los impuestos a su nombre.</li>
                                        <li>Esta escrituración social debe ser analizada por un profesional idóneo quien determina que la situación familiar es de interés social.</li>                        
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="mediacion"
                      role="tabpanel"
                      aria-labelledby="mediacion-tab"
                    >
                     <div class="container">
                        <div class="row">                      
                          <div class="col-md-12">
                            <div class="pr_detail">
                              <div class="product-description">
                                <p>
                                    El área de Mediación Comunitaria tiene como eje el Programa Alternativo de Resolución de Conflictos en el cual interviene un mediador como facilitador neutral de la comunicación. A través de él las partes pueden resolver el problema de manera pacífica para el beneficio común.
                                </p>
                                <p>
                                    La mediación es una instancia extrajudicial, voluntaria, confidencial, gratuita y flexible en cuanto a sus formas y tiene como fin lograr un acuerdo entre las partes poniendo énfasis en el cuidado vincular de las partes.
                                </p>       
                                <div class="heading_s1">
                                    <h6>Mediación: otra mirada para la resolución de conflictos cotidianos.</h6>
                                </div>
                                <p>
                                    "Hablando se entiende la gente", dice el dicho. Sin embargo no siempre es real, la dificultad para sentar a negociar a las partes enfrentadas en un conflicto de la vida cotidiana es común.
                                </p>
                                <p>
                                    La mediación propone técnicas y modelos diferentes con el objetivo de ayudar a los litigantes a encontrar una salida.
                                </p>
                                <p>
                                    La mediación es, por lo tanto, un mecanismo alternativo para la resolución de conflictos.
                                </p>
                                <p>
                                    La idea central es que las personas recuperen la capacidad de resolver los conflictos sin llegar a una instancia judicial. A través de técnicas específicas y respetando la confidencialidad, el mediador contribuirá a encontrar soluciones creativas que permitan que las partes en conflicto recompongan relaciones, logren acuerdos, mejoren su convivencia democrática.
                                </p>
                                <p>
                                    La mediación comunitaria es un acto de buena convivencia y el mediador un puerto que contribuye a que la gente a viva mejor. Sus metas son la promoción de la salud social, la prevención, la resolución y la transformación de conflictos en la sociedad.
                                </p>
                                <p>
                                    El mediador tiene sensibilidad social, vocación de servicio, aptitud para relacionarse, capacidad de escuchar. Es fiable, solidario, responsable, pacífico, ético y democrático.
                                </p>
                                <p>
                                    Entre los objetivos de los mediadores, figuran:
                                </p>
                                <div class="list_style_5">
                                    <ul>
                                        <li>contribuir a la pacificación social.</li>
                                        <li>diferenciar los métodos de resolución pacífica de conflictos.</li>
                                        <li>detectar y resolver en forma precoz los conflictos de la convivencia.</li>
                                        <li>contribuir a la formación de una conducta ciudadana basada en la justicia y en la solidaridad.</li>
                                        <li>fortalecer el sentido de solidaridad y pertenencia.</li>
                                        <li>fomentar el diálogo y el encuentro.</li>
                                    </ul>
                                </div>
                                <div class="clearfix"></div>
                                <hr />  
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="heading_s1">
                                            <h6>¿En qué casos podemos utilizar la mediación?</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-md-5 mb-4">
                                    <div class="col-md-12">
                                        <blockquote class="blockquote">
                                        <p>La mediación es una herramienta con la que podemos contar en los siguientes conflictos:</p>
                                        <div>
                                            <ul>
                                                <li class="blockquote-footer">familiares</li>
                                                <li class="blockquote-footer">contractuales - vecinales - medianera - ruidos molestos</li>
                                                <li class="blockquote-footer">ambientales</li>
                                                <li class="blockquote-footer">institucionales</li>
                                                <li class="blockquote-footer">de convivencia</li>
                                                <li class="blockquote-footer">y todo conflicto vincular-relacional en el que se pueda evitar acudir a la justicia.</li>                                                
                                            </ul>
                                        </div>
                                        </blockquote>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="familia"
                      role="tabpanel"
                      aria-labelledby="familia-tab"
                    >
                     <div class="container">
                        <div class="row">                      
                          <div class="col-md-12">
                            <div class="pr_detail">
                              <div class="product-description">                              
                                <p>
                                  Desde esta área los vecinos de Tandil pueden acceder de forma totalmente gratuita a la afectación de su vivienda familiar como Bien de Familia.
                                </p>                              
                                <p>
                                    Afectar la vivienda como BIEN DE FAMILIA significa que estará protegida ante posibles embargos. Este resguardo es de suma importancia ya que se está asegura el techo familiar.
                                </p>
                                <div class="heading_s1">
                                    <h6>Bien de familia</h6>
                                </div>
                                <p>
                                    El Bien de familia protege la vivienda familiar y garantiza que no pueda ser ejecutada ni rematada por deudas posteriores a su inscripción. Brinda al propietario una protección patrimonial del inmueble que habita con su familia o en el que desarrolla su actividad económica por cuenta propia.
                                    Cualquier vivienda -urbana o rural- puede ser Bien de Familia.                                    
                                    La vivienda que es Bien de Familia puede ser ejecutada solo por deudas originadas por falta de pago de impuestos inmobiliarios, municipales y expensas. En ningún caso puede utilizarse como garantía, ni sirve como aval de un préstamo bancario, aunque sí se puede hipotecar.
                                </p>
                                <div class="heading_s1">
                                    <h6>Quienes pueden realizar el trámite</h6>
                                </div>
                                <p>
                                    La inscripción de un inmueble como Bien de Familia la realiza el propietario. En caso de ser más de un propietario lo deben realizar todos ellos, siempre y cuando tengan el parentesco exigido por la ley.
                                </p>
                                <div class="heading_s1">
                                    <h6>Quienes son beneficiarios</h6>
                                </div>
                                <p>
                                    Los beneficiarios del régimen pueden ser el cónyuge, sus descendientes o ascendientes o hijos adoptivos, aunque no convivan con el propietario.                                    
                                    En caso de no poseer dichos parientes, podrán ser beneficiarios los colaterales hasta el tercer grado de consaguinidad -por ejemplo sobrino o tío-, con la condición de que vivan con el propietario.
                                </p>
                                <div class="heading_s1">
                                    <h6>Qué necesitas para hacer el trámite</h6>
                                </div>                                
                                <div class="list_style_5">
                                    <ul>
                                        <li>Título de propiedad –original-.</li>
                                        <li>Constancia de CUIT o CUIL.</li>
                                        <li>Documento de Identidad de los Constituyentes y de los Beneficiarios.</li>
                                        <li>Partidas que acrediten el vínculo de parentesco invocado o libreta de familia.</li>                        
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
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

     
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Secretaría Legal y Técnica",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Información sobre la secretaría de legal y técnica",
      },
    ],
  },

  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Servicios",
        },

        {
          currentPage: "Secretaría Legal y Técnica",
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
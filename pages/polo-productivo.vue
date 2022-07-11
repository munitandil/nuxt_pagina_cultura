<template>
  <div class="dsi-polo-productivo">
    <Header />
      <BannerPage :beadcrumb="beadcrumbPage" :title="'Polo Productivo'"></BannerPage>
      <section class="small_pt overflow_hide small_pb">
          <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0 animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                    <div class="dsi-polo-productivo-logo">
                      <img src="@/assets/images/polo_productivo_social.png" alt="about_img6"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                      
                      <h4>¿Qué es el Polo Productivo Social de Tandil?</h4>
                      <p> El Polo Productivo Social es un espacio donde apostamos al trabajo como forma de inclusión social, compuesto por diferentes unidades productivas que se propone brindar formación y acompañamiento, a la vez de generar empleo a través de una producción local y sostenible con fines de auto consumo, compra estatal y comercialización.</p>
                </div>
              </div>
            
          </div>
      </section>
      <section class="small_pt overflow_hide small_pb">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                  <div class="col-lg-6 col-md-6 animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                      <div id="accordion" class="accordion">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">¿Cuál es su misión? </a> </h6>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div class="card-body">El Programa es llevado adelante por la Secretaría de Desarrollo Humano y Hábitat del Municipio de Tandil y busca generar y fortalecer emprendimientos productivos, promoviendo la igualdad de oportunidades para la inserción socio-laboral de los sectores más vulnerables de la sociedad desde una perspectiva de derechos.</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">¿A quiénes está destinado?</a> </h6>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div class="card-body">Personas mayores de edad que se encuentren en condiciones de vulnerabilidad social, desempleados en búsqueda de una oportunidad laboral o cuyos ingresos provengan de planes y programas de seguridad social y que se propongan adquirir herramientas para comenzar un trayecto hacia un empleo digno.
      Emprendedores y emprendedoras que posean conocimientos en los rubros (textil, carpintería, herrería, gastronomía y producción de alimentos) en búsqueda de fortalecer sus micro-emprendimientos sumando nuevos conocimientos y habilidades.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                      <div class="col-lg-6 col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    <div class="row overflow_hide dsi-contacto">
                        <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-android-pin"></i>
                                  <h5 class="counter_text">Dirección<span class="counter"></span></h5>
                                  <p> 14 de Julio 1147 </p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-android-call"></i>
                                  <h5 class="counter_text">Teléfono<span class="counter"></span></h5>
                                  <p> 02494 284940 </p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-help"></i>
                                  <h5 class="counter_text"><span class="counter">Funcionamiento</span></h5>
                                  <p>Lunes a Viernes<br> de 7 a 19hs.</p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-android-contacts"></i>
                                  <h5 class="counter_text">Atención<span class="counter"></span></h5>
                                  <p>Lunes a Viernes<br> de 8 a 12hs.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
      </section>
      <section class="small_pt small_pb">  
        <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-4 col-sm-6 mb-md-0 mb-3">
                      <div class="icon_box icon_box_style_5">
                          <div class="box_icon mb-3">	
                              <i class="icon icon-books"></i>
                          </div>
                          <div class="icon_box_content">
                              <h5>Formación</h5>
                              <p>Aprendemos produciendo. 
      Generamos espacios para construir saberes de manera colectiva a través de la fabricación de productos de interés social y comercial, con el asesoramiento técnico de capacitadores y capacitadoras.
      </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-md-0 mb-3">
                      <div class="icon_box icon_box_style_5">
                          <div class="box_icon mb-3">	
                             <i class="fa fa-cogs" aria-hidden="true"></i>
                          </div>
                          <div class="icon_box_content">
                              <h5>Producción</h5>
                              <p> Aplicamos los conocimientos adquiridos, nos asociamos a través de proyectos autogestionados y establecemos encadenamientos productivos para elaborar y comercializar productos innovadores y creativos que mantengan una relación con la cadena de valor y los mercados. Brindamos talleres de producción textil, carpintería, herrería, gastronomía y producción de alimentos agroecológicos
      </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-md-0 mb-3">
                      <div class="icon_box icon_box_style_5">
                          <div class="box_icon mb-3">	
                             <i class="fa fa-leaf" aria-hidden="true"></i>
                          </div>
                          <div class="icon_box_content">
                              <h5>Sustentabilidad</h5>
                              <p>Compromiso con la salud y el medio ambiente
      Desde una mirada de sustentabilidad promovemos proyectos innovadores relacionados con la economía circular, las buenas prácticas agroecológicas y el cuidado del medio ambiente.
      </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
      <section class="small_pt small_pb">
        <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 mb-md-4 mb-2 pb-2">
                    <div class="blog_post blog_style1">
                        <div class="blog_img">
                            <div class="fit-videos">
                                  <iframe width="100%" height="304" src="https://www.youtube.com/embed/AurUqFQjxFw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                              </div>
                          </div>
                          <div class="blog_content bg-white">
                            <div class="dsi-blog_text">
                                  <h6 class="blog_title"><a href="#"> Contenido General </a></h6>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mb-md-4 mb-2 pb-2">
                    <div class="blog_post blog_style1">
                        <div class="blog_img">
                            <div class="fit-videos">
                                  <iframe width="100%" height="304" src="https://www.youtube.com/embed/sUW1hezo-AA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                              </div>
                          </div>
                          <div class="blog_content bg-white">
                            <div class="dsi-blog_text">
                                  <h6 class="blog_title"><a href="#"> Carpintería </a></h6>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mb-md-4 mb-2 pb-2">
                    <div class="blog_post blog_style1">
                        <div class="blog_img">
                            <div class="fit-videos">
                                  <iframe width="100%" height="304" src="https://www.youtube.com/embed/NBPL9M47cyU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                              </div>
                          </div>
                          <div class="blog_content bg-white">
                            <div class="dsi-blog_text">
                                  <h6 class="blog_title"><a href="#"> Herrería</a></h6>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mb-md-4 mb-2 pb-2">
                    <div class="blog_post blog_style1">
                        <div class="blog_img">
                              <div class="fit-videos">
                                  <iframe width="100%" height="304" src="https://www.youtube.com/embed/qwMG4wsQ7Ko" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                              </div>
                          </div>
                          <div class="blog_content bg-white">
                            <div class="dsi-blog_text">
                                  <h6 class="blog_title"><a href="#"> Costura</a></h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

        <!-- START SECTION CONTACT -->
      <section class="small_pt small_pb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <div class="heading_s1 text-center">
                      <h2>Contacto</h2> 
                      <p>Si queres participar o conocer nuestros productos.</p>
                    </div>            
                </div>
                <div class="col-lg-12 col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">            
                      <div class="clearfix medium_divider d-xl-none"></div>
                      <div class="field_form">
                            <form ref="dsiFormQuery" method="post" name="enq" @submit.prevent="onSubmit"  class="needs-validation" novalidate>
                              <div class="row">
                                  <!-- Msg del Formulario -->
                                  <div class="form-group  col-lg-12" v-if="errorConsultaMsg.length > 0">                                   
                                      <div class="alert alert-danger" role="alert"> {{errorConsultaMsg}}</div>
                                  </div>
                                  <div class="form-group  col-lg-12" v-if="consultaEnviadaMsg.length > 0">
                                      <div class="alert alert-success" role="alert">{{consultaEnviadaMsg}}</div>
                                  </div>
                                   <!-- Fin Msg del Formulario -->
                                  <div class="form-group col-lg-6">
                                      <input maxlength="200" required="required" placeholder="Ingrese su Nombre *" id="first-name" class="form-control" name="name" type="text" v-model="nombre">
                                      <div class="invalid-feedback">Debe completar este campo.</div>
                                  </div>
                                  <div class="form-group col-lg-6">
                                      <input maxlength="200" required="required" placeholder="Ingrese su Apellido *" id="last-name" class="form-control" name="lastname" type="text" v-model="apellido">
                                      <div class="invalid-feedback">Debe completar este campo.</div>
                                  </div>
                                  <div class="form-group col-lg-6">
                                      <input maxlength="200" required="required" placeholder="Ingrese su Email *" id="email" class="form-control" name="email" type="email" v-model="email">
                                      <div class="invalid-feedback">Debe ingresar un email válido.</div>
                                  </div>
                                  <div class="form-group col-lg-6">
                                      <input maxlength="40" required="required" placeholder="Ingrese su Nro. de teléfono. *" id="phone" class="form-control" name="phone" type="phone" v-model="telefono" @keypress="onlyNumber">
                                      <div class="invalid-feedback">Debe completar este campo.</div>
                                  </div>
                                  <div class="form-group col-lg-6 ">
                                    <div class="dsi-form-motivo-consulta">
                                      <label>Motivo de la consulta *</label>
                                      <div class="chek-form ">
                                          <div class="custome-radio ">
                                                <input class="form-check-input" type="radio" name="radioMotivo" id="exampleRadios3" value="Quiero participar" v-model="motivo"  >
                                                <label class="form-check-label" for="exampleRadios3">Quiero participar</label>
                                          </div>
                                          <div class="custome-radio">
                                                <input class="form-check-input" type="radio" name="radioMotivo" id="exampleRadios4" value="Quiero comprar un producto ó encargar un trabajo" v-model="motivo" >
                                                <label class="form-check-label" for="exampleRadios4">Quiero comprar un producto ó encargar un trabajo</label>                                                
                                                <div class="invalid-feedback">Debe seleccionar alguna opción.</div>
                                          </div>                                          
                                         
                                      </div>
                                    </div>
                                  </div>
                                  <div class="form-group col-lg-6 ">
                                      <div class="dsi-form-area-interes">
                                        <label>Área de Interés *</label>
                                        <div class="chek-form  mb-3">                              
                                            <div class="custome-checkbox form-check ">
                                                <input class="form-check-input" type="checkbox" name="checkboxArea" id="herreria-checkbox" value="Herrería" v-model="area" >
                                                <label class="form-check-label" for="herreria-checkbox">Herrería</label>
                                            </div>
                                            <div class="custome-checkbox form-check">
                                                <input class="form-check-input" type="checkbox" name="checkboxArea" id="carpinteria-checkbox" value="Carpintería" v-model="area" >
                                                <label class="form-check-label" for="carpinteria-checkbox">Carpintería</label>
                                            </div>
                                            <div class="custome-checkbox form-check">
                                                <input class="form-check-input" type="checkbox" name="checkboxArea" id="textil-checkbox" value="Textil" v-model="area" >
                                                <label class="form-check-label" for="textil-checkbox">Textil</label>
                                            </div>
                                            <div class="custome-checkbox form-check">
                                                <input class="form-check-input" type="checkbox" name="checkboxArea" id="alimento-checkbox" value="Sala elaboradora de alimentos" v-model="area" >
                                                <label class="form-check-label" for="alimento-checkbox">Sala elaboradora de alimentos</label>
                                            </div>
                                            <div class="custome-checkbox form-check">
                                                <input class="form-check-input" type="checkbox" name="checkboxArea" id="huerta-checkbox" value="Huerta agroecólogica" v-model="area" >
                                                <label class="form-check-label" for="huerta-checkbox">Huerta agroecólogica</label>
                                                <div class="invalid-feedback">Debe seleccionar al menos una opción.</div>
                                            </div>                                            
                                          </div>
                                      </div>
                                  </div>
                                  <div class="form-group col-lg-12 text-center" v-if="show">
                                      <div class="form-group col-md-6 offset-md-4 text-center">
                                        <recaptcha 
                                            @error="onError"
                                            @success="onSuccess"
                                            @expired="onExpired"
                                            />
                                      </div>
                                      <div class="form-group col-lg-12 text-center">
                                          <button type="submit" title="Enviar su consultar!" class="btn btn-success" id="submitButton" name="submit" value="Submit">Enviar</button>
                                      </div>
                                  </div>
                                  <div class="form-group col-lg-12 text-center" v-else>
                                          <button @click.prevent="newQuery" type="button" title="Nueva consulta" class="btn btn-default" id="nuevaConsulta" name="nuevaConsult" value="">Nueva Consulta</button>                             
                                  </div>
                              </div>
                          </form>		
                      </div>                      
                </div>
            </div>
        </div>
      </section>
      <!-- END SECTION CONTACT -->
      
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";

export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Polo Productivo",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion acerca del polo Productivo de la ciudad de tandil",
      },
    ],
  },

  data() {
    return {
      show:true, 
      nombre:"",
      apellido:"",
      email:"",
      telefono:"",
      motivo:"",
      area: [],
      errorConsultaMsg: "",
      consultaEnviadaMsg: "",
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Polo Productivo",
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
  methods: {
    onlyNumber ($event) {
   //console.log($event.keyCode); //keyCodes value
   let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
      $event.preventDefault();
   }
},
    checkEmail(email) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        return true
    },
    validarData(){
      if (this.nombre.trim() === "" || this.apellido.trim() === "" ||
          this.email.trim() === "" || this.telefono.trim() === "" ||
          this.motivo.trim() === "" || this.area.length === 0 ||
          !this.checkEmail(this.email)) {
            return false
      }
      return true
    },
    onError (error) {
      console.log('Error happened:', error)
      this.errorConsultaMsg="Debe completar el recaptcha."
    },
    f_enviar() {
     
      this.$store
        .dispatch("poloProductivo/enviarConsulta", { 
            'nombre':(this.nombre || '').substring(0, 200),
            'apellido': (this.apellido || '').substring(0, 200),
            'telefono': (this.telefono || '').substring(0, 40) ,
            'email': (this.email || '').substring(0, 200),
            'motivo': this.motivo,
            'areas': this.area.join(';')
          })
        .then((res) => {
          this.consultaEnviadaMsg="Su consulta ha sido enviada correctamente."         
          this.errorConsultaMsg=""   

        })
        .catch((error) => {
          this.errorConsultaMsg="Ocurrio un error al enviar su consulta, pruebe nuevamente más tarde."
          this.consultaEnviadaMsg=""
          return false
        });
        return true
    },
    async onSubmit(event) {
      try {
        this.show=true
        this.errorConsultaMsg=""
        this.consultaEnviadaMsg=""     
        if (await this.validarData()){
            const token = await this.$recaptcha.getResponse()
            const res = await this.f_enviar()
            this.show = false
           
        }else{
          this.errorConsultaMsg="Debe completar los campos obligarios del formulario para enviar la consulta."
        }
        await this.$recaptcha.reset()
      } catch (error) {
     //   console.log('Login error:', error)
        this.errorConsultaMsg="Debe completar el recaptcha."
      }
    },
     onSuccess (token) {
    //  console.log('Succeeded:', token)
    },
    onExpired () {
    //  console.log('Expired')
      this.errorConsultaMsg="Ha expirado el recaptcha."
    },
    newQuery() {
        this.nombre=""
                this.apellido=""
                this.email=""
                this.telefono=""
                this.motivo=""
                this.area=[]
                this.show = true
                this.errorConsultaMsg=""
        this.consultaEnviadaMsg=""    
        this.$refs.dsiFormQuery.reset()
    }
  }
};
</script>      
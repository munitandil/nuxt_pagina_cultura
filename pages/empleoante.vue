<template>
  <div class="dsi-empleo">
    <Header />
      <BannerPage :beadcrumb="beadcrumbPage" :title="' Oficina de Empleo'"></BannerPage>
      <section class="small_pt overflow_hide small_pb">
          <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0 animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                    <div class="dsi-polo-productivo-logo">
                      <img src="@/assets/images/empleo.png" alt="about_img6"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                      
                      <h4>¿Qué es la Oficina de Empleo de Tandil?</h4>
                      <p> La Oficina de Empleo es una propuesta del Ministerio de Trabajo, Empleo y Seguridad Social de la Nación conjuntamente con el Municipio de Tandil. Se implementa a través de la Secretaría de Desarrollo Productivo y Relaciones Internacionales del Municipio.</p>
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
                          <div class="card-body">Es un espacio cuya finalidad es brindar servicios tanto a las personas que buscan lograr o mejorar su inserción en el empleo, como a las empresas que necesitan contratar personal, consiguiendo la vinculación de la oferta laboral capacitada, con las demandas de recursos humanos del sector productivo.</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">¿A quiénes está destinado?</a> </h6>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div class="card-body">Personas mayores de edad que se encuentren en la búsqueda activa de empleo, y que se propongan adquirir herramientas para comenzar un trayecto hacia un empleo digno. .</div>
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
                                  <p> Pasaje Fournier 27 </p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-android-call"></i>
                                  <h5 class="counter_text">Teléfono<span class="counter"></span></h5>
                                  <p> 02494 438-6746 </p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-help"></i>
                                  <h5 class="counter_text"><span class="counter"> Correo Electrónico</span></h5>
                                  <p>empleo@tandil.gov.ar</p>
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
                              <h5>Formación para el Trabajo</h5>
                              <p>Organizamos y coordinamos cursos y talleres para que todos y todas puedan adquirir las habilidades necesarias para insertarse en el mundo del trabajo.
- Talleres de orientación laboral y apoyo a la búsqueda de empleo.
- Cursos de formación profesional
- Cursos de gestión empresarial
- Asistencia técnica y apoyo económico para generar emprendimientos laborales
independientes
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
                              <h5>Inserción Laboral</h5>
                              <p> Impulsamos la generación de empleo a través de programas de Entrenamientos para el Trabajo, Programas de Inserción Laboral y acciones de intermediación laboral con empresas para cubrir posiciones requeridas.
- Entrenamientos Para el Trabajo: Prácticas en empresas de lunes a viernes, 4 horas diarias con incentivos económicos para adquirir experiencia directamente en el puesto de trabajo.
- Programa de Inserción Laboral (PIL): incentivos económicos a empresas que contraten personas de nuestros registros de postulantes.
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
                              <h5>Empresas</h5>
                              <p>Si tenés o sos parte de una Pyme de la ciudad y necesitas cubrir una posición, tenemos programas con beneficios y un registro de personas que desean formar parte de tu equipo. 
Contamos con un servicio para empresas que se encuentren en la búsqueda de personal para un puesto determinado y de manera gratuita brindamos:
- Relevamiento de perfil requerido por la empresa.
- Elaboración de Diseño del Puesto.
- Reclutamiento de candidatos idóneos para el perfil solicitado.
- Proceso de Preselección.
      </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
      <section class="small_pt small_pb">
       </section>

        <!-- START SECTION CONTACT -->
      <section class="small_pt small_pb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <div class="heading_s1 text-center">
                      <h2>Registrate</h2> 
                      <p>Si queres participar  <a href="https://forms.gle/HKtVqP2N3TYqe3iG6" target="_blank">Acá </a> podés completar el formulario de registro con toda tu información para formar parte del registro de aspirantes a puestos de trabajo  </a> </p>
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
    title: "Municipalidad de Tandil - Oficina de Empleo",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion acerca de la oficina de Empleo de la ciudad de tandil",
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
          currentPage: "Empleo",
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
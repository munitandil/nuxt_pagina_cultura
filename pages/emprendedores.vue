<template>
  <div class="dsi-emprendedores">
    <Header />
      <BannerPage :beadcrumb="beadcrumbPage" :title="'Comunidad Emprendedora'"></BannerPage>
      <section class="small_pt overflow_hide small_pb">
          <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0 animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                    <div class="dsi-polo-productivo-logo">
                      <img src="@/assets/images/emprendedores.png" alt="about_img6"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                      
                      <h4>¿Qué es la Comunidad Emprendedora?</h4>
                      <p> La Comunidad Emprendedora es el área de la Secretaría de Desarrollo Productivo y Relaciones Internacionales del Municipio de Tandil, donde se llevan adelante programas de asistencia, capacitación y seguimiento a los emprendedores de nuestra ciudad.</p>
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
                          <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">¿Cuáles son sus Políticas? </a> </h6>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div class="card-body"> Actualmente, se está implementando el programa FEL (Fortalecimiento Económico Local) y Promicro (Programa Municipal de Fomento a la Microempresa), se está organizando el cronograma de visitas a los barrios a través de la "Comunidad Emprendedora Barrial", se coordinan dos salas elaboradoras y se encuentra abierto el concurso "Nosotras hacemos". 
.</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">¿ Que es la Comunidad Emprendedora Barrial?</a> </h6>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div class="card-body">Es un espacio de intercambios socio-productivos entre emprendedores/as de un mismo barrio, de acercar las propuestas y programas que la Secretaría de Desarrollo Productivo lleva adelante y de fomentar la actividad económica que llevan adelante los microemprendimientos de la ciudad. </div>
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
                                  <p> 2494- 438 6746  </p>
                              </div>
                          </div>
                          <div class="col-6 couter_border counter_border_black">
                              <div class="box_counter counter_style1 counter_dark text-center">
                                  <i class="ion-help"></i>
                                  <h5 class="counter_text"><span class="counter"> Correo Electrónico</span></h5>
                                  <p>emprendedores@tandil.gov.ar </p>
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
                              <h5>Asistencias No Reembolsables</h5>
                              <p>Son asistencias destinadas a microemprendimientos y emprendimientos de la ciudad, que deben constar de un servicio o de un proceso productivo que otorgue valor agregado al producto final. Tienen el objetivo de potenciar a los emprendimientos con una ayuda económica destinada a la compra de insumos, herramientas y/o para la ampliación del espacio laboral. 
. Para inscribirte al programa completa el primer formulario a través de este <a href="https://docs.google.com/forms/d/e/1FAIpQLSfasPMZxuaDeaHD8zBcMxgvq3htQU7ZF_SGj3h4sgwSGbacjQ/viewform">link </a>
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
                              <h5>Salas Elaboradoras de Alimentos y Cocinas Domiciliarias</h5>
                              <p> Se coordina el funcionamiento de dos salas comunitarias para aquellos/as emprendedores/as que produzcan alimentos y no dispongan de un espacio físico que reúna las condiciones necesarias para ser habilitado bromatológicamente. Funcionan en Av. Colón 1112 y en la sede de UTHGRA. Además se trabaja en la regulación de cocinas de emprendimientos domiciliarios.
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
                              <h5>Concurso Nosotras Hacemos</h5>
                              <p> La propuesta, que forma parte del Programa Mujeres Transformadoras 2022, premiará a tres emprendimientos del mundo urbano y a tres del mundo rural que requieran de un proceso productivo para la elaboración del producto final. 
Será variables a tener en cuenta la innovación, trayectoria y potencial de crecimiento del proyecto.  
La inscripción permanecerá abierta hasta el 8 de abril y se hace a través de la página del municipio. Las interesadas en participar deberán completar el formulario disponible en <a href="https://www.autogestion.tandil.gov.ar/apex/f?p=111:2"> www.tandil.gov.ar </a>  y presentar un video de 1 a 3 minutos para contar qué hacen y cómo.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
      <section class="small_pt small_pb">
       
      </section>

        
  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";

export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Comunidad Emprendedora",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion acerca de la comunidad emprendedora de la ciudad de tandil",
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
          currentPage: "Emprendedores",
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
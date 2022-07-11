<template>
  <div class="dsi-empleo">
    <head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="Anil z" name="author">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Anger is creative business agency, corporate, simple and clean template, Based on Bootstrap responsive multipurpose business agency and portfolio HTML template with unique home page demos">
    <meta name="keywords" content="creative, fullscreen, business, photography, portfolio, one page, bootstrap responsive, start-up, ui/ux, html template, css3, studio, branding, creative design, multipurpose, multi-purpose, parallax, personal, masonry, grid, coming soon, carousel, agency">

    <!-- SITE TITLE -->
    <title>Inicio - Turismo Tandil</title>
    <!-- Favicon Icon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
    <!-- Animation CSS -->
    <link rel="stylesheet" href="assets/css/animate.css">
    <!-- Latest Bootstrap min CSS -->
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=K2D:100,200,300,400,500,600,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <!-- Icon Font -->
    <link href="assets/css/ico-moon.css" rel="stylesheet">
    <!-- Icon Font CSS -->
    <link rel="stylesheet" href="assets/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/themify-icons.css">
    <!-- FontAwesome CSS -->
    <link rel="stylesheet" href="assets/css/all.min.css">
    <!--- owl carousel CSS-->
    <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css">
    <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.default.min.css">
    <!-- Magnific Popup CSS -->
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <!-- Style CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <!-- Demo Travel Style CSS -->
    <!--link rel="stylesheet" href="demo-travel/css/demo-travel.css"-->
    <link rel="stylesheet" href="demo-travel/css/demo-ico.css">
    <link rel="stylesheet" href="assets/css/dsi-turismo.css">

    <link rel="stylesheet" id="layoutstyle" href="assets/color/theme-green.css">
</head>
    <Header />
      <BannerPage :beadcrumb="beadcrumbPage" :title="' Oficina de Empleo'"></BannerPage>
     <!-- LOADER -->
    <div class="preloader">
        <div class="loader_grid">
            <div class="loader_box loader_box1"></div>
            <div class="loader_box loader_box2"></div>
            <div class="loader_box loader_box3"></div>
            <div class="loader_box loader_box4"></div>
            <div class="loader_box loader_box5"></div>
            <div class="loader_box loader_box6"></div>
            <div class="loader_box loader_box7"></div>
            <div class="loader_box loader_box8"></div>
            <div class="loader_box loader_box9"></div>
        </div>
    </div>
    <!-- END LOADER -->

   
   

   
    <!-- START SECTION TIMELINE -->
    <section id="roadmap" class="light_gray_bg ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8 col-md-10">
                    <div class="heading_s4 text-center">
                        <span class="sub_title">Proximos</span>
                        <h2>Eventos en tandil</h2>
                    </div>
                    <p class="text-center animation" data-animation="fadeInUp" data-animation-delay="0.3s">Les mostramos la agenda turística que ofrece tandil</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="small_divider clearfix"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                    <div class="roadmap carousel_slider owl-carousel owl-theme" data-margin="20" data-dots="false" data-nav="true" data-responsive='{"0":{"items": "1"}, "480":{"items": "2"}, "767":{"items": "3"}, "991":{"items": "4"}, "1199":{"items": "5"}}'>
                        <div class="item">
                            <div class="roadmap_box rd_complete">
                                <div class="roadmap_inner">
                                    <h6>Abril 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box rd_complete current">
                                <div class="roadmap_inner">
                                    <h6>Febrero 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box">
                                <div class="roadmap_inner">
                                    <h6>Junio 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box">
                                <div class="roadmap_inner">
                                    <h6>Julio 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box">
                                <div class="roadmap_inner">
                                    <h6>Octubre 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box">
                                <div class="roadmap_inner">
                                    <h6>Diciembre 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="roadmap_box">
                                <div class="roadmap_inner">
                                    <h6>Enero 2021</h6>
                                    <div class="dsi-list-event">
                                        <ul>
                                            <li>Evento 1</li>
                                            <li>otro Evento 2</li>
                                            <li>Evento</li>
                                        </ul>
                                    </div>
                                    <a href="demo-travel/evento_detalle.html" class="dsi-link-more">ver más...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END SECTION TIMELINE -->
    <a href="#" class="scrollup" style="display: none;"><i class="ion-ios-arrow-up"></i></a>  
      
      
      
      
      
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
 
   <script src="assets/js/jquery-1.12.4.min.js"></script>
    <!-- jquery-ui -->
    <script src="assets/js/jquery-ui.js"></script>
    <!-- popper min js -->
    <script src="assets/js/popper.min.js"></script>
    <!-- Latest compiled and minified Bootstrap -->
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- owl-carousel min js  -->
    <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
    <!-- magnific-popup min js  -->
    <script src="assets/js/magnific-popup.min.js"></script>
    <!-- waypoints min js  -->
    <script src="assets/js/waypoints.min.js"></script>
    <!-- parallax js  -->
    <script src="assets/js/parallax.js"></script>
    <!-- countdown js  -->
    <script src="assets/js/jquery.countdown.min.js"></script>
    <!-- fit video  -->
    <script src="assets/js/jquery.fitvids.js"></script>
    <!-- jquery.counterup.min js -->
    <script src="assets/js/jquery.counterup.min.js"></script>
    <!-- isotope min js -->
    <script src="assets/js/isotope.min.js"></script>
    <!-- jquery.dd.min js -->
    <script src='assets/js/jquery.elevatezoom.js'></script>
    <!-- scripts js -->
    <script src="assets/js/scripts.js"></script>

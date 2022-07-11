<template>
  <div class="dsi-parque-industrial">
    <Header />
      <BannerPage :beadcrumb="beadcrumbPage" :title="'Parque Industrial'"></BannerPage>
      <section class="small_pt overflow_hide small_pb">
          <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0 animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                    <div class="dsi-polo-parque-industrial-logo">
                      <img src="@/assets/images/apit.png" alt="about_img6"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                      
                      <h4>¿Qué es el PIT de Tandil?</h4>
                      <br>
                      <p> Ubicado estratégicamente y con todos los servicios necesarios para la radicación de distintas firmas, Tandil cuenta con un predio generado para potenciar el desarrollo y la radicación industrial, facilitando el desarrollo de negocios y la innovación productiva.</p>

<p>Por distintos motivos productivos, de capacidad de su gente, de logística, de ubicación y de fomento de la gestión asociada entre lo público y privado, Tandil es un lugar ideal para la inversión productiva. </p>

<p>Desde el Municipio se impulsó y fortaleció en los últimos años el Area Parque Industrial de Tandil, con el objetivo central de potenciar el desarrollo y la radicación industrial dentro del área favoreciendo a las empresas el acceso a espacios planificados, con los servicios y mantenimientos necesarios para el desarrollo de sus negocios. </p>

<p>El área se encuentra comprendida por dos zonas: un predio de 100 hectáreas ubicada en la ruta nacional 226 y el otro de aproximadamente 80 hectáreas localizado al norte de la mencionada ruta.

Conocé la potencialidad, oportunidades de inversión y los servicios que ofrece el Parque Industrial Tandil ingresando a la <a href="https://www.tandilpit.com.ar/" target="_blank" >www.tandilpit.com.ar </a> </p>
                </div>
              </div>
            
          </div>
      </section>

  </div>
</template>
<script>
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";

export default {
  components: { BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Parque Industrial",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Informacion acerca del Parque Industrial de tandil",
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
          currentPage: "Parque Industrial ",
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

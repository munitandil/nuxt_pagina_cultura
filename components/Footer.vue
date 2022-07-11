<template>
  <footer class="footer_dark">
    <div class="top_footer small_pt">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-12">
            <div class="footer_logo">
              <DSILink pCustomLabel=" " pPath="HOME" pTipoLink="I" pTitle="Logo de la municipalidad de tandil"
                ><img
                  alt="logoMunicipalidad"
                  src="@/assets/images/logo_muni_blanco.gif"
                  style="width: 230px"
              /></DSILink>
            </div>
            <NetworkSocial pUbicacion="FOOTER" />
          </div>
          <!--<div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <h6 class="widget_title">Links Internos</h6>
            <ul class="list_none widget_links_style1">
              <li v-for="item in menuFooter" :key="item.id_item">
                <DSILink
                  :pCustomLabel="item.descr"
                  :pCustomLink="item.link"
                  :pTipoLink="item.tipo_link"
                />
              </li>
            </ul>
          </div> -->
          <div>
          <p > </p>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <h6 class="widget_title">Contactanos</h6>
            
            <ul class="contact_info contact_info_light list_none">
              <li>
                <span class="ti-location-pin"></span>
                <address>Municipio de Tandil • Belgrano 485 • Tandil</address>
              </li>
              <li>
                <span class="ti-email"></span>
                <DSILink
                  pCustomLabel="Teléfonos Útiles"
                  pPath="CONTACTO"
                  pTipoLink="I"
                />
              </li>
            </ul>
          </div>
        </div>
       <!-- <TelefonosImportantes customClass="dsi-telefonos-importante" /> -->
      </div>
    </div>
    <div class="bottom_footer bg-dark">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright m-md-0 text-center text-md-left">
              © {{ new Date().getFullYear() }} Todos los derechos reservados
              Municipalidad de Tandil.
            </p>
          </div>
          <div class="col-md-6">
            <p class="developer-by m-md-0 text-center text-md-right">
             <a href="#" title="Desarrollado por: Dirección de Sistemas Informáticos - Municipalidad de Tandil">
              Desarrollado por: <img
                  alt="logoDsi"
                  src="@/assets/images/logo_dsi_con_fondo.png"
                  style="width: 100px"
              />
              </a> 
             <!--  <a href="#" title="Desarrollado por: Dirección de Sistemas Informáticos - Municipalidad de Tandil">
              Desarrollado por: <img
                  alt="logoDsi"
                  src="@/assets/images/logo_dsi_bn.png"
                  style="width: 100px"
              />
              </a> -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import TelefonosImportantes from "@/components/PhoneImportant.vue";
import DSILink from "@/components/DSILink";
import NetworkSocial from "@/components/NetworkSocial.vue";
export default {
  name: "Footer",
  components: { TelefonosImportantes, DSILink, NetworkSocial },
  computed: {
    ...mapGetters({
      menuFooter: "paths/getMenuFooter",
    }),
  },
};
</script>
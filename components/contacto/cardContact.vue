<template>
  <div class="container" >
    <div class="dsi-contact-item row">
      <div class="dsi-left-content col-md-4">
        <div class="dsi-title col-md-12">
          <p>
            <strong>{{ pArea }}</strong>
          </p>
        </div>
        <div class="dsi-subtitle col-md-12">
          <p>{{ pSec }}</p>
        </div>
        <div class="dsi-social-network col-md-12">
          <!--div id="dsi-link1" class="dsi-download-contact-vcf"></div-->
          <ul
            class="list_none social_icons rounded_social text-center mt-2 mt-md-0"
          >
            <li v-if="pFB && pFB.length > 0">
              <DSILink
                pCustomLabel=" "
                :pCustomLink="
                  'https://www.facebook.com/' + pFB.replaceAll('@', '')
                "
                pTipoLink="E"
                pClass="sc_facebook"
              >
                <i class="ion-social-facebook"></i>
              </DSILink>
            </li>
            <li v-if="pTW && pTW.length > 0">
              <DSILink
                pCustomLabel=" "
                :pCustomLink="
                  'https://www.twitter.com/' + pTW.replaceAll('@', '')
                "
                pTipoLink="E"
                pClass="sc_twitter"
              >
                <i class="ion-social-twitter"></i>
              </DSILink>
            </li>
            <li v-if="pIG && pIG.length > 0">
              <DSILink
                pCustomLabel=" "
                :pCustomLink="
                  'https://www.instagram.com/' + pIG.replaceAll('@', '')
                "
                pTipoLink="E"
                pClass="sc_instagram"
              >
                <i class="ion-social-instagram-outline"></i>
              </DSILink>
            </li>
            <li>
              <!--a
                href="whatsapp://send?text=Direccion%20Belgrano%20485%0ATeléfonos%20%0ACONMUTADOR%20(0249)%20443-2049%20al%2054"
                class="dsi-whatapp-shared sc_android"
                ><i class="icon ion-ios-telephone"></i
              ></a-->
              <DSILink
                pCustomLabel=" "
                :pCustomLink="
                  'whatsapp://send?text=' +
                  infoShared.replaceAll(' ', '%20').replaceAll('|#|', '%0A')
                "
                pTipoLink="E"
                pClass="dsi-whatapp-shared sc_android"
              >
                <i class="icon ion-ios-telephone"></i>
              </DSILink>
            </li>
          </ul>
        </div>
      </div>
      <div class="dsi-body-item col-md-8 row">
        <div class="dsi-adrress col-md-12">
          <span class="ti-location-pin"></span>
          <label v-if="pDireccion && pDireccion.length > 0">{{
            pDireccion
          }}</label>
          <label v-else>-</label>
        </div>
        <div class="dsi-phone col-md-12">
          <span class="ti-mobile"></span>
          <label>FIJO</label>:
          <span v-if="pTel && pTel.length > 0">
            <ul class="row dsi-list-telefono">
              <li v-for="item in pTel.split(';')" :key="item" class="col-md-6">
                <DSILink
                  pCustomLabel=" "
                  :pCustomLink="'tel:' + item"
                  pTipoLink="E"
                >
                  {{ item }}
                </DSILink>
              </li>
            </ul>
          </span>
          <span v-else> - </span>
        </div>
        <div class="dsi-phone col-md-12">
          <span class="ti-mobile"></span>
          <label>INTERNO</label>:
          <span v-if="pTelInterno && pTelInterno.length > 0">
            {{ pTelInterno }}
          </span>
          <span v-else> - </span>
        </div>
        <div class="dsi-phone col-md-12">
          <span class="ti-mobile"></span>
          <label>MOVIL</label>:
          <span>
            <span v-if="pCelular && pCelular.length > 0">
              <DSILink
                pCustomLabel=" "
                :pCustomLink="'tel:' + pCelular"
                pTipoLink="E"
              >
                {{ pCelular }}
              </DSILink>
            </span>
            <span v-else> - </span>
          </span>
        </div>
        <div class="dsi-scheduler col-md-12">
          <span class="ti-timer"></span>
          <label v-if="pHorario && pHorario.length > 0">{{ pHorario }}</label>
          <label v-else>Sin especificar</label>
        </div>
        <div class="col-md-12 dsi-email">
          <ul class="row dsi-list-email" v-if="pEmailOficial">
            <li              
              v-for="item in pEmailOficial.split(';')"
              :key="item"             
            >
              <span class="ti-email"></span>
              <DSILink
                pCustomLabel=" "
                :pCustomLink="'mailto:' + item"
                pTipoLink="E"
              >
                {{ item }}
              </DSILink>
            </li>
          </ul>
        </div>
        <div class="col-md-12 dsi-email">
          <ul class="row dsi-list-otro-email" v-if="pOtroEmail">
            <li              
              v-for="item in pOtroEmail.split(';')"
              :key="item"             
            >
              <span class="ti-email"></span>
              <DSILink
                pCustomLabel=" "
                :pCustomLink="'mailto:' + item"
                pTipoLink="E"
              >
                {{ item }}
              </DSILink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DSILink from "@/components/DSILink";
export default {
  components: { DSILink },
  props: [
    "pId",
    "pArea",
    "pSec",
    "pDireccion",
    "pTel",
    "pTelInterno",
    "pCelular",
    "pHorario",
    "pEmailOficial",
    "pOtroEmail",
    "pFB",
    "pIG",
    "pTW",
  ],
  data() {
    return {
      infoShared:
        this.pArea +
        " - " +
        this.pSec +
        "|#|Dirección: " +
        this.pDireccion +
        "|#|Teléfonos: " +
        (this.pTel ? "Fijo: " + this.pTel : "") +
        (this.pTelInterno ? " - Interno: " + this.pTelInterno : "") +
        (this.pCelular ? " - Cel: " + this.pCelular : "") +
        (this.pEmailOficial ? "|#|Email: " + this.pEmailOficial : "") +
        (this.pHorario ? "|#|Horario de contacto: " + this.pHorario : ""),
    };
  },
};
</script>
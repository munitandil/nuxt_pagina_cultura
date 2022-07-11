<template>
  <div class="icon_box icon_box_style_1">
    <!-- <a :href="pLink" class="dsi-link-top6" target="_blank" v-if="pTipoLink == 'E'" :title="pTitulo">
      <div class="box_icon mb-3">
        <i class="icon icon-embed2"></i>
      </div>
      <div class="icon_box_content">
        <h5>{{pTitulo}}</h5>
        <p>
          {{pDescripcion}}
        </p>
      </div>
    </a> -->
   <DSILink pCustomLabel=" " :pCustomLink="pLink" :pTipoLink="pTipoLink" :pTitle="pTitulo" pClass="dsi-link-top6">
          <div class="box_icon mb-3">
            <i class="icon icon-embed2" v-if="pIcono === 'default'"></i>
            <i class="dsi-icon" v-else-if="pIcono.split('.').length === 1">{{pIcono}}</i>
            <i class="dsi-icon-img" v-else><img :src="require('assets/images/'+pIcono)" alt="Imagen del Servicio"/></i>
          </div>
          <div class="icon_box_content">
            <h5>{{pTitulo}}</h5>
             <p v-html="pDescripcion"></p>
          </div>
    </DSILink>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
export default {
  components: { DSILink },
  props: ["pTitulo", "pDescripcion", "pIcono", "pLink", "pTipoLink"],
};
</script>
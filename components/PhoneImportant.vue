<template>
<!--     <div :class="'row justify-content-center mt-30 animation ' + customClass" data-animation="fadeInUp" data-animation-delay="0.2s">
 -->    
  <div :class="'row justify-content-center mt-30  ' + customClass">
        <div class="col-md-2 col-sm-6 col-6 mb-md-0 mb-3 text-center" v-for="item in listPhones" :key="item.id_tel">
            <DSILink pCustomLabel=" " :pCustomLink="'tel:'+item.telefono"  pTipoLink="E" :pTitle="'Tel: '+item.titulo+' - '+item.telefono">
                <div class="icon_box icon_box_style_3 ">
                    <div class="box_icon mb-3 text_white">
                        <i class="icon ion-ios-telephone"></i>
                    </div>
                    <div class="icon_box_content">
                        <h5>{{item.titulo}}</h5>
                        <p>{{item.telefono}}</p>
                    </div>
                </div>
            </DSILink>                                        
        </div>                
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import DSILink from "@/components/DSILink";
export default {  
  components: {
    DSILink
  }, 
  props:["customClass"],
  computed: {
    ...mapGetters({     
      listPhones: "phones/getAllPhones"
    }),
  }
};
</script>
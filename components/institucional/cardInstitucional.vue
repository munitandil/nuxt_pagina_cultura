<template>
  <div class="icon_box icon_box_style_5 box_shadow3 radius_box_10 bg-white">
    <div class="icon_box_content">
      <div class="heading_s2">
        <h5>{{pNombreSec}}</h5>
      </div>
      <div :id="'accordion-'+pNroRow" class="accordion accordion_style2">
        <div class="card">
          <div class="card-header" :id="'heading-'+pNroRow+'-1'">
            <h6 class="mb-0">
              <a
                class="collapsed"
                data-toggle="collapse"
                :href="'#collapse-'+pNroRow+'-1'"
                aria-expanded="false"
                :aria-controls="'collapse-'+pNroRow+'-1'"
                >Objetivo</a
              >
            </h6>
          </div>
          <div
            :id="'collapse-'+pNroRow+'-1'"
            class="collapse"
            :aria-labelledby="'heading-'+pNroRow+'-1'"
            :data-parent="'#accordion-'+pNroRow"
          >
            <div class="card-body">
              <p>
                {{pDesc}}
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" :id="'heading-'+pNroRow+'-2'">
            <h6 class="mb-0">
              <a
                class="collapsed"
                data-toggle="collapse"
                :href="'#collapse-'+pNroRow+'-2'"
                aria-expanded="false"
                :aria-controls="'collapse-'+pNroRow+'-2'"
                >Áreas de la Secretaría</a
              >
            </h6>
          </div>
          <div
            :id="'collapse-'+pNroRow+'-2'"
            class="collapse"
            :aria-labelledby="'heading-'+pNroRow+'-2'"
            :data-parent="'#accordion-'+pNroRow"
          >
            <div class="card-body">
              <div class="list_style_5 color_blue mb-3">
                <ul>
                  <li v-for="item in getNivel2XSec(pIdSecr)" :key="item">
                    <p>{{item}}</p>
                    <div class="dsi_list_style_none" v-if="getNivel3XSec(item).length > 0">
                      <ul>
                        <li v-for="item2 in getNivel3XSec(item)" :key="item2">
                         {{item2}} 
             
<!--                             <nuxt-link
  :to="{ path: 'contacto', query: { search: `${item2}`}}">
   {{item2}}
</nuxt-link>  -->

                        </li>
                      </ul>
                    </div>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["pNombreSec", "pNroRow", "pDesc","pIdSecr"],

  computed: {
    ...mapGetters({
      getNivel2XSec: "secretarias/getNivel2XSec",
      getNivel3XSec: "secretarias/getNivel3XSec"
    }),
  }
};
</script>

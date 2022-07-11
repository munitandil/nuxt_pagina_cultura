<template>
  <div>
    <div class="dsi-offline" v-if="$nuxt.isOffline">Usted esta sin conexión a Internet</div>
    <!-- <div id="demo_content" class="demo_switcher">
      <div class="demo">
        <ul class="list_none">
          <li class="">
            <a
              href="javascript:void(0);"
              class="dsi-configuracion-icon color_icon"
              ><i class="ion-gear-b"></i
            ></a>
            <div class="color-switch">
              <h6 class="text-white">Modo Oscuro</h6>
              <ToggleTheme />
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <!--div class="container">
      <div class="col-lg-12 text-right">
         <div class="container">
           <div id="google_translate_element"></div>
         </div>
      </div>         
    </div -->
<!--     <Header /> -->
    <Nuxt />
    <Footer />
    <a href="#" class="scrollup" style="display: none"
      ><i class="ion-ios-arrow-up"></i
    ></a>
  </div>
</template>
<script>
//import Header from "../components/Header";
import Footer from "../components/Footer";
import ToggleTheme from "@/components/ToggleTheme.vue";
export default {
  components: {
  //  Header,
    Footer,
    ToggleTheme,
  },
};
</script>
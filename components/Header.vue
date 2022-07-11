<template>
    <header class="header_wrap dark_skin hover_menu_style2">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <div class="col-lg-4 ">
                     <DSILink pClass="navbar-brand" pCustomLabel=" " pPath="HOME" pTipoLink="I" pTitle="Logo de la municipalidad de tandil">
                        <img class="logo_dark" src="~assets/images/logo_muni_blanco.gif" alt="logo" />
                        <img class="logo_default" src="~assets/images/logo_tandil.png" alt="logo" />
                     </DSILink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="ion-android-menu"></span> </button>
                </div>
                <div class="col-lg-8">
                    <div class="col-md-12 dsi-top-header border-0 light_skin d-none d-md-block">
                        <div class="container">
                            <div class="row align-items-right">
                                <div class="col-md-12">
                                    <SearchFormHeader pClass="search_box"/>                                   
                                    <ul class="list_none social_icons text-center text-md-right mt-2 mt-md-0">
                                        <li>                                            
                                            <NetworkSocial />                                           
                                        </li>
                                        <li>
                                            <div class="dsi-divider-left"></div>
                                            <DSILink pClass="sc_email" pCustomLabel=" " pPath="CONTACTO" pTipoLink="I" pTitle="Telefonos, email, Contactos">
                                                <i class="ti-email"></i>
                                            </DSILink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                      <ul class="navbar-nav">                           
                                <div v-for="menuItem in getPathNivelInicial" :key="menuItem.id_item">
                                    <MenuItem :link_externo="menuItem.tipo_link" :clases="'nav-link'" :descr="menuItem.descr" :link="menuItem.link" 
                                    :idString="menuItem.id_string"  v-if="hasChildren(menuItem.id_string) === 0" />
                                    
                                    <MenuItemChildren :nivel="menuItem.nivel" :descr="menuItem.descr" :link="menuItem.link" 
                                    :idString="menuItem.id_string" v-else />
                                </div>                           
                            <li class="dsi-search-menu-sm">
                                <div class="dsi-divider"></div>
                                <SearchFormHeader pClass="search_box2"/>
                            </li>
                            <li class="dsi-social-menu-sm">
                                <ul class="list_none social_icons text-center text-md-right mt-2 mt-md-0">
                                    <li>
                                        <NetworkSocial />                                            
                                    </li>
                                    <li>
                                        <div class="dsi-divider-left"></div>
                                        <DSILink pClass="sc_email" pCustomLabel=" " pPath="CONTACTO" pTipoLink="I" pTitle="Telefonos, email, Contactos">
                                            <i class="ti-email"></i>
                                        </DSILink>
                                    </li>
                                </ul>                               
                            </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>


<script>
import { mapGetters } from 'vuex'
import MenuItem from "@/components/MenuItem.vue";
import MenuItemChildren from "@/components/MenuItemChildren.vue"
import DSILink from "@/components/DSILink";
import SearchFormHeader from "@/components/SearchFormHeader.vue";
import NetworkSocial from "@/components/NetworkSocial.vue"
export default {
  components: {
    MenuItem,
    MenuItemChildren,
    DSILink,
    SearchFormHeader,
    NetworkSocial
  },
  computed: {
    ...mapGetters({
          getPathNivelInicial: 'paths/getPathNivelInicial',
          hasChildren: 'paths/hasChildren'
        })
  },
};
</script>
<template>
  <div>
    <Header />
    <BannerPage :beadcrumb="beadcrumbPage" :title="'Contactanos'"></BannerPage>
    <section class="small_pb">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-6 col-md-9 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div class="heading_s1 text-center">
              <h2>Teléfonos Útiles</h2>
            </div>
          </div>
        </div>

        <TelefonosImportantes />
      </div>
    </section>
    <section class="small_pb">
      <div class="container">
        <ListCardContact :pTextToSearch="this.search" />
      </div>
    </section>
    <MapContact />
  </div>
</template>

<script>
import TelefonosImportantes from "@/components/PhoneImportant.vue";
import ListCardContact from "@/components/contacto/listCardContact.vue";
import MapContact from "@/components/contacto/mapContact.vue";
import BannerPage from "@/components/BannerPage.vue";
import Header from "@/components/Header";
export default {
  components: { TelefonosImportantes, ListCardContact, MapContact, BannerPage, Header },

  head: {
    title: "Municipalidad de Tandil - Contactanos",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Listado de contactos de la municipalidad de Tandil",
      },
    ],
  },
  data() {
    return {
      search: '',
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Contactanos",
        },
      ],
    };
  },
  /*
   ** programatically start the loader so we force the page to take x seconds to load
   */
  mounted() {
    this.search= this.$route.query.search,
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>

<template>
  <div>
    <Header />
    <BannerPage
      :beadcrumb="beadcrumbPage"
      :title="'Ejes de Gestión'"
    ></BannerPage>
    <section class="small_pb">
      <div class="container">
        <h1>Página en construcción</h1>
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
    title: "Municipalidad de Tandil - Ejes de Gestón",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Información sobre los ejes de la gestión en el municipio de tandil",
      },
    ],
  },
  data() {
    return {
      beadcrumbPage: [
        { path: "HOME", link: true },
        {
          currentPage: "Ejes de Gestón",
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

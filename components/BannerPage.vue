<template>
  <!-- START SECTION BANNER -->
  <section
    class="page-title-light breadcrumb_section background_bg overlay_bg4 dsi-banner-header-page"
    :style="{
      background:
        'url(' +
        //require('assets/images/breadcrumb_bg.jpg') +
        require('assets/images/wallpaper-2.jpeg') +
        ') center center / cover',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="page-title">
            <p class="dsi-volanta">{{ volanta }}</p>
            <h1 class="dsi-title">{{ title }}</h1>
            <p class="dsi-subtitle">{{ subtitle }}</p>
          </div>
        </div>
        <div class="col-sm-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-sm-end">
              <li
                class="breadcrumb-item"
                v-for="item in getBeadcrumb(beadcrumb)"
                :key="item.label"
              >
                <nuxt-link
                  v-if="item.isLink"
                  :to="item.link"
                  class="breadcrumb-item"
                  >{{ item.label }}
                </nuxt-link>
                <span v-else>{{ item.label }}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <!-- END SECTION BANNER -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["beadcrumb", "title", "subtitle", "volanta"],
  computed: {
    ...mapGetters({
      getPath: "paths/getPath",
    }),
  },
  methods: {
    getBeadcrumb(beadcrumbList) {
      let result = [];
      //console.log(this.$store.getters['paths/getPath'])
      beadcrumbList.forEach((element) => {
        let path = null;
        if (element.path) {
          path = this.getPath(element.path);
        } else if (element.currentPage) {
          path = { link: "#", descr: element.currentPage, isLink: false };
        }
        //console.log(path)
        if (path) {
          result.push({
            link: path.link,
            label: path.descr,
            isLink: element.link,
          });
        }
      });
      //console.log(result)
      return result;
    },
  },
};
</script>

<style>
</style>
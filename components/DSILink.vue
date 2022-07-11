<template>
  <nuxt-link
    exact
    :title="titleLink"
    :to="link"
    :class="pClass"
    v-if="tipoLink == 'I' && publicar == 'S'"
    >{{ label }}<slot></slot>
  </nuxt-link>
  <a
    :href="link"
    :class="pClass"
    target="_blank"
    :title="titleLink"
    v-else-if="publicar == 'S' && tipoLink == 'E'"
    >{{ label }}<slot></slot>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: [
    "pPath",
    "pClass",
    "pCustomLabel",
    "pCustomLink",
    "pTipoLink",
    "pTitle",
  ],
  data() {
    return {
      link: null,
      label: null,
      tipoLink: null,
      titleLink: null,
      publicar: "S",
    };
  },
  computed: {
    ...mapGetters({
      getPath: "paths/getPath",
    }),
  },
  created() {
    try {
      if (this.pPath) {
        let path = this.getPath(this.pPath);
        if (path) {
          this.link = path.link;
          this.tipoLink = path.tipo_link;
          this.publicar = path.publicar;
          if (this.pCustomLabel) {
            this.label = this.pCustomLabel;
            this.titleLink = this.pTitle ? this.pTitle : this.pCustomLabel;
          } else {
            this.label = path.descr;
            if (path.descr) {
              this.titleLink = path.descr;
            } else {
              this.titleLink = this.pTitle;
            }
          }
        } else if (path == undefined) {
          this.link = "#";
          this.label = null;
          this.tipoLink = null;
          this.titleLink = null;
          this.publicar = "N";
        }
      } else if (this.pCustomLink) {
        this.link = this.pCustomLink;
        this.label = this.pCustomLabel;
        this.tipoLink = this.pTipoLink;
        this.titleLink = this.pTitle;
        this.publicar = "S";
      }
    } catch (e) {
      console.log("Error al mostrar el link: " + e.response);
    }
  },
};
</script>
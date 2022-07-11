<template>
  <li v-if="isEnabled(idString)">
    <nuxt-link
      exact
      :title = "descr"
      :to="{ path: link }"
      :class="clases"
      v-if="link_externo !== 'E'"
      >{{ descr }}</nuxt-link
    >
    <a
      :href="link"
      :class="clases"
      target="_blank"
      :title="descr"
      v-else
      >{{ descr }}</a
    >
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MenuItem",
  props: ["idString", "link", "descr", "clases", "link_externo"],
  computed: {
    ...mapGetters({
       hasChildren: "paths/hasChildren",
      isEnabled: "paths/isEnabled"
    }),
  },
};
</script>
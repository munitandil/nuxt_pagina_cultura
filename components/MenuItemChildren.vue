<template>
  <li class="dropdown" v-if="isEnabled(idString)">
    <nuxt-link
      exact
      :to="'#'"
      data-toggle="dropdown"
      :class="nivel > 0
          ? 'dropdown-item menu-link dropdown-toggler'
          : 'nav-link dropdown-toggle'
      "
      >{{ descr }}</nuxt-link
    >
    <div class="dropdown-menu">
      <ul>
        <div
          v-for="menuItem in getChildrenNextNivel(idString)"
          :key="menuItem.id_item"
        >
          <MenuItem
            :clases="'dropdown-item nav-link nav_item'"
            :descr="menuItem.descr"
            :link="menuItem.link"
            :idString="menuItem.id_string"
            :link_externo="menuItem.tipo_link"
            v-if="hasChildren(menuItem.id_string) === 0"
          />
          <MenuItemChildren
            :descr="menuItem.descr"
            :link="menuItem.link"
            :idString="menuItem.id_string"
            :link_externo="menuItem.tipo_link"
            :nivel="menuItem.nivel"
            v-else
          />
        </div>
      </ul>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MenuItemChildren",
  props: ["idString", "link", "descr", "link_externo", "nivel"],
  computed: {
    ...mapGetters({
      hasChildren: "paths/hasChildren",
      getChildrenNextNivel: "paths/getChildrenNextNivel",
      isEnabled: "paths/isEnabled"
    }),
  },
};
</script>
<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        class="dsi-theme-switch-checkbox"
        @click="toggleTheme()"
      />
      <div class="slider round"></div>
    </label>
    <em v-if="theme == 'light'">Habilitar Modo Oscuro</em>
    <em v-else>Modo Oscuro</em>
  </div>
</template>

<script>
export default {
  created() {
    this.setInitialTheme();
    this.theme = this.getStorageItemTheme();
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {
      if (process.browser) {
        if (this.theme == "dark") {
          this.theme = "light";
          document.body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        } else {
          this.theme = "dark";
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      }
    },
    getStorageItemTheme() {
      let result = "light";
      if (process.browser) {
        result = localStorage.getItem("theme");
      }
      return result || "light";
    },
    setInitialTheme() {
      if (process.browser) {
        let themeSel = localStorage.getItem("theme");
        if (themeSel) {
          document.body.setAttribute("data-theme", themeSel);
          if (themeSel == "dark") {
            document
              .querySelector("input.dsi-theme-switch-checkbox")
              .setAttribute("checked", true);
          }
        } else {
          document.body.setAttribute("data-theme", "light");
        }
      }
    },
  },
};
</script>
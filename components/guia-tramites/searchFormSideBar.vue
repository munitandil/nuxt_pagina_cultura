<template>
  <div
    class="widget animation"
    data-animation="fadeInUp "
    data-animation-delay="0.1s"
    v-if="showFormSearch"
  >
    <div class="newsletter_form">
      <form @submit.prevent="submit()">
        <div class="outline_input-black">
          <input
            required=""
            placeholder="buscar en guía de trámites..."
            type="text"
            v-model="textSearch"
          />
        </div>
        <button
          type="submit"
          title="Buscar"
          class="btn btn-submit border-0"
          name="submit"
          value="Submit"
        >
          <span class="ti-search"></span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showFormSearch: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },
  data() {
    return {
      textSearch: null,
    };
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/buscar",
        query: { tipo: "GUIASTRAMITE", texto: this.textSearch },
      });
    },
  },
};
</script>
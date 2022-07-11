<template>
  <div class="container small_pb">
    <div class="row">
      <div class="col-lg-12">
        <div
          class="cta_section_small radius_box_10 gray_bg animation"
          data-animation="fadeInUp "
          data-animation-delay="0.2s "
        >
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="newsletter_form">
                <form @submit.prevent="submit()">
                  <div class="radius_input">
                    <input type="text " required=" " placeholder="buscar en guía de trámites... "  v-model="textSearch" />
                  </div>
                  <button
                    type="submit "
                    title="Subscribe "
                    class="btn btn-default"
                    name="submit "
                    value="Submit "
                  >
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
<template>
  <div class="sidebar">
    <div
      class="widget animation"
      data-animation="fadeInUp "
      data-animation-delay="0.1s"
    >
      <div class="newsletter_form">
        <form @submit.prevent="submit()">
          <div class="outline_input-black">
            <input
              required=""
              placeholder="buscar en novedades..."
              type="text"
              v-model="textSearch"
            />
          </div>
          <button
            type="submit"
            title="Subscribe"
            class="btn btn-submit border-0"
            name="submit"
            value="Submit"
          >
            <span class="ti-search"></span>
          </button>
        </form>
      </div>
    </div>
    <div
      class="widget animation"
      data-animation="fadeInUp "
      data-animation-delay="0.2s"
      v-if="getLastPosts && getLastPosts.length !== 0"
    >
      <h5 class="widget_title">Ultimas Noticias</h5>
      <ul class="recent_post border_bottom_dash list_none">
        <li v-for="item in getLastPosts" :key="item.id">
          <div class="post_footer">
            <div class="post_img">
              <DSILink
                pCustomLabel=" "
                :pCustomLink="'/novedades/' + item.id"
                pTipoLink="I"
                pTitle="Imagen Preview de la novedad"
              >
                <img :src="item.imagen" alt="letest_post1" width= "60px"/>
              </DSILink>
            </div>
            <div class="post_content">
              <h6>
                <DSILink
                  :pCustomLabel="item.titulo"
                  :pCustomLink="'/novedades/' + item.id"
                  pTipoLink="I"
                />
              </h6>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <TagPostList />
    <Twitter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DSILink from "@/components/DSILink";
import Twitter from "@/components/novedades/twitter";
import TagPostList from "@/components/novedades/tagPostList";
export default {
  components: { DSILink, Twitter, TagPostList },
  created() {
    this.f_loadLastPosts();
  },
  computed: {
    ...mapGetters({
      getLastPosts: "posts/getLastPosts",
    }),
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
        query: { tipo: "NOVEDADES", texto: this.textSearch },
      });
    },
    f_loadLastPosts: function () {
      this.$store.dispatch("posts/getLastPosts").catch((error) => {
        console.log("Ocurrio un error al cargar las ultimas novedades en el sidabar. Error: " +error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al cargar las ultimas novedades en el sidabar " +
            ". Error: " +
            error,
        }); */
      });
    },
  },
};
</script>
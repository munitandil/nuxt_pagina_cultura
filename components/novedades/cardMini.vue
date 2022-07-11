<template>
  <div class="blog_postcontent_wrap">
    <div class="sp_post">
      <DSILink
        pCustomLabel=" "
        :pCustomLink="'/novedades/' + pId"
        pTipoLink="I"
      >
        <div class="post_thumb">
          <img :src="pImagen" alt="blog_small_img1_350X198" />
        </div>
      </DSILink>
      <div class="blog_postcontent" v-if="pTags && pTags.length !== 0">
        <div class="blog_tags">
          <DSILink
            v-for="item in pTags.split('|#|').slice(0, 2)"
            pCustomLabel=" "
            :pCustomLink="'/tag?tipo=NOVEDADES&tag=' + item"
            pTipoLink="I"
            :key="item"
            pClass="blog_tags_cat blog_bg_dsi_color"
          >
            {{ item }}
          </DSILink>
        </div>
      </div>
    </div>
    <div class="post_info">
      <div class="blog_heading">
        <h6>
          <DSILink
            pCustomLabel=" "
            :pCustomLink="'/novedades/' + pId"
            pTipoLink="I"
          >
            {{ pTitulo }}
          </DSILink>
        </h6>
        <p>
          {{ pBajada }}
        </p>
      </div>
      <DSILink
        pCustomLabel=" "
        :pCustomLink="'/novedades/' + pId"
        pTipoLink="I"
        pClass="text-capitalize"
      >
        más detalle
      </DSILink>
    </div>
  </div>
</template>
<script>
import DSILink from "@/components/DSILink";
export default {
  components: { DSILink },
  props: ["pId", "pTitulo", "pBajada", "pImagen", "pTags"],
};
</script>
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
      <div class="blog_postcontent">
        <div class="blog_tags">
          <a
            class="blog_tags_cat blog_bg_danger"
            href="demo-construction/blog.html"
            >fashion</a
          >
          <a
            class="blog_tags_cat blog_bg_warning"
            href="demo-construction/blog.html"
            >travel</a
          >
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
      </div>
      <p>
        {{ pBajada }}
      </p>
      <DSILink
        pCustomLabel=" "
        :pCustomLink="'/novedades/' + pId"
        pTipoLink="I"
        pClass="text-capitalize  btn btn-default btn-sm"
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
  props: ["pId", "pTitulo", "pBajada", "pImagen","pTags"],
};
</script>
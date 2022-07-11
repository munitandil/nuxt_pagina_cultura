<template>
  <div class="blog_post blog_style1">
    <div class="blog_img">
      <a href="#">
        <img
          :src="img"
          alt="Preview de la noticia"
        />
      </a>
    </div>
    <div class="blog_content bg-white">
      <div class="blog_text">
        <h6 class="blog_title">
           <nuxt-link :to="'/novedades/'+ id" >{{title}}</nuxt-link>
        </h6>
        <p>
          {{resumen}}
        </p>
        <nuxt-link :to="'/novedades/'+ id" class="text-capitalize" >ver mas...</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "id", "img", "resumen"],
}
</script>
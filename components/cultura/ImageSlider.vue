<template>
    <client-only>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <ul class="list_none carousel_slide4 owl-carousel owl-theme custom-images" data-margin="15"
                        data-dots="false" data-autoplay="true" data-nav="true" data-loop="true">
                        <li v-for="img of images" :key="img.title">
                            <DSILink v-if="img.link" pTipoLink="I" :pCustomLink="img.link">
                                <img src="https://imagenes.tandil.gov.ar/i/www_tandil/IMG-20220527-WA0008.jpg"
                                    alt="asas" />
                            </DSILink>
                            <img v-else :src="img.path" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </client-only>
</template>
<script>
export default {
    props: ["images"],
}
</script>
<style>
.custom-images li img {
    height: 30vh;
    object-fit: cover;
}
</style>
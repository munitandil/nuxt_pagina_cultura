<template>
    <section class="small_pt">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0 animation" data-animation="fadeInLeft"
                    data-animation-delay="0.2s">
                    <div>
                        <img :src="folleto" alt="about_img6" />
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                    <div class="heading_s3 mb-3">
                        <!-- <span class="sub_title" :class="cultura_text_color">{{
                                rubro
                        }}</span> -->
                        <h3>{{ titulo }}</h3>
                    </div>

                    <div class="row justify-content-around my-5" v-if="fecha_desde && fecha_hasta">
                        <div class="text-center">
                            <h5 class="sub_title cultura_text_color">DESDE</h5>
                            <h6>{{ fecha_desde }}</h6>

                        </div>
                        <div class="text-center">
                            <h5 class="sub_title cultura_text_color">HASTA</h5>
                            <h6>{{ fecha_hasta }}</h6>
                        </div>
                    </div>

                    <div class="d-flex mb-3 col-12 justify-content-center align-items-baseline"
                        v-if="link_externo && link_externo.length > 0">
                        <h6 class="mr-2">Link externo:</h6>
                        <strong> <a target="_blank" :href="link_externo">Ver más</a></strong>
                    </div>

                </div>
            </div>

            <div class="mt-5" v-if="descripcion">
                <h4 class="cultura_text_color">Descipción:</h4>
                <p>{{ descripcion }}</p>
            </div>


            <div class="my-5">
                <h4 class="cultura_text_color">Actividad diaria</h4>
                <p>Elit do exercitation cupidatat incididunt. Ad do enim nulla pariatur et dolor exercitation. Commodo
                    laboris sunt non qui elit nisi occaecat. Veniam incididunt voluptate dolore cillum nostrud ex ex
                    laborum commodo tempor anim pariatur. Consectetur minim sunt sit eiusmod ut sint voluptate magna do
                    voluptate.</p>
            </div>

            <FragmentoMapa v-if="mapa && mapa.length > 0" class="col-12" :link="mapa" />
        </div>
    </section>
</template>
<script>
import FragmentoMapa from "@/components/FragmentoMapa.vue";

export default {
    props: ['titulo', 'descripcion', 'rubro', 'folleto', 'link_externo', 'fecha_desde', 'fecha_hasta', 'mapa'],

    components: { FragmentoMapa },
}

</script>
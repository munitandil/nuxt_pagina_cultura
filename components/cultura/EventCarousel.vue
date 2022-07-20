<template>
    <client-only>
        <div class="container">
            <div class="row col-12">
                <div class="col-md-12 mb-md-12 mb-4 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <ul class="list_none carousel_slide3 owl-carousel owl-theme" data-margin="15" data-dots="false"
                        data-autoplay="false" data-nav="true" data-loop="false">

                        <li v-for="item in list_items" :key="item.id" class="li-custom blog_style1">

                            <DSILink class="custom-title" pTipoLink="I" :pTitle="item.title" :pCustomLink="item.link">
                                {{ item.title }}
                            </DSILink>

                            <ul class="custom-event-list">
                                <li v-for="event in item.display_events.slice(0, 3)" :key="event.title">
                                    <DSILink v-if="event.link != null" pTipoLink="I" :pTitle="event.title"
                                        :pCustomLink="event.link">
                                        {{ event.title }}
                                    </DSILink>
                                    <p v-else>{{ event.title }}</p>
                                </li>
                            </ul>

                            <DSILink class="dsi-link-more custom-link" pTipoLink="I" :pTitle="item.title"
                                :pCustomLink="item.link">
                                Ver más...
                            </DSILink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Botones -->
            <div class="container-fluid">
                <div class="row mb-3 mb-sm-5">
                    <div class="col-md-12 text-center">
                        <ul class="list_none">
                            <li v-for="button in buttons" :key="button.title" class="carousel-btn btn btn-default mt-4">
                                <DSILink class="text-white" pTipoLink="I" :pTitle="button.title"
                                    :pCustomLink="button.link">
                                    {{ button.title }}
                                </DSILink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </client-only>
</template>

<script>
import DSILink from '@/components/DSILink.vue';

export default {
    ssr: true,
    props: ["list_items", "buttons"],
    components: { DSILink },
    mounted() {

        // Al jquery linkearse antes que el renderizado del componente, lo retraso 
        setTimeout(() => {
            this.$nextTick(() => {
                let $owl = $(".owl-carousel")
                    .owlCarousel({
                        margin: 15,
                        nav: true,
                        navText: ["<", ">"],
                        dots: false,
                        rows: true,
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 2,
                                nav: true
                            },
                            900: {
                                items: 3,
                                nav: true
                            }
                        }
                    });

                $owl.trigger("refresh.owl.carousel");
            });
        }, 2500);
    },
}
</script>
<style>
.li-custom {
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.custom-title {
    font-weight: bold;
    text-align: center;
    font-size: 1.25rem;
}

.custom-event-list li {
    margin: 5% 0;
    height: 10%;
    overflow: hidden;
}

.custom-event-list {
    height: 25vh;
    width: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.custom-event-list * {
    font-weight: 500;
}
</style>

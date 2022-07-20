<template data-animation="fadeInUp" data-animation-delay="0.1s" class="animation">
    <section class="col-12 small_pt small_pb gray_bg">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-6 col-md-9 cultura_color">
                <div class="heading_s1 text-center">
                    <h2>Proximos eventos</h2>
                </div>
            </div>
        </div>
        <Carousel class="cultura_color" :list_items="this.dates.displayList" :buttons="buttonsList" />

        <ImageSlider class="mt-5 pt-5" :images="images" />
    </section>
</template>
<script>
import Carousel from '@/components/cultura/EventCarousel.vue';
import ImageSlider from '@/components/cultura/ImageSlider.vue';

export default {
    components: {
        Carousel,
        ImageSlider,
    },
    head: {
        title: "Municipalidad de Tandil - Minerva guía del Estudiante Virtual",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Información acerca de las instituciones y carreras educativas de Tandil",
            },
        ],
    },
    data() {
        return {
            dates: {},

            // Placeholder buttons
            "buttonsList": [
                {
                    "title": "Cine",
                    "link": "/agenda?categoria=1"
                },
                {
                    "title": "Teatro",
                    "link": "/agenda?categoria=2"
                },
                {
                    "title": "Danza",
                    "link": "/agenda?categoria=3"
                },
                {
                    "title": "Otro",
                    "link": "/agenda?categoria=4"
                }
            ],


            // Images placeholder
            "images": [
                {
                    "path": "../assets/images/Cultura/277319562_1111760466063260_7345088346143391124_n.jpg",
                    "link": "https://google.com"
                },
                {
                    "path": "../assets/images/Cultura/277319562_1111760466063260_7345088346143391124_n.jpg",
                    "link": "https://google.com"
                },
                {
                    "path": "../assets/images/Cultura/277319562_1111760466063260_7345088346143391124_n.jpg",
                    "link": "https://google.com"
                },
                {
                    "path": "../assets/images/Cultura/277319562_1111760466063260_7345088346143391124_n.jpg",
                    "link": "https://google.com"
                },
                {
                    "path": "../assets/images/Cultura/277319562_1111760466063260_7345088346143391124_n.jpg",
                    "link": "https://google.com"
                }
            ]
        }
    },
    methods: {
        getRecentDates() {
            this.$store
                .dispatch("eventos-cultura/eventosAgenda")
                .then((res) => {
                    this.dates = this.parseDays(res);
                })
                .catch((error) => {
                    if (error.status == 400) {
                        console.log("no se encontró datos.");
                        this.resultList = [];
                    }
                });
        },
        parseDays(res) {
            let retObj = {
                displayList: [],
            };
            res.items.forEach((day) => {
                let date = this.parseDate(day.fecha);
                let link = "/eventos/" + day.id_evento;
                let event = {
                    title: day.titulo,
                    link: link,
                };
                this.insertEvent(retObj, date, event);
            });
            return retObj;
        },
        insertEvent(struct, date, event) {
            let inserted = false;
            for (let i = 0; i < struct.displayList.length; i++) {
                if (struct.displayList[i].date == date) {
                    struct.displayList[i].display_events.push(event);
                    inserted = true;
                }
            }
            if (inserted == false) {

                let aux_date = new Date(date);
                let name_month = aux_date.toLocaleString("default", { month: "long" });
                let total_day = aux_date.getDate() + 1;
                let result = name_month + " " + total_day;

                let link =
                    "agenda?titulo&categoria&desde=" + date + "&hasta=" + date;

                let display_events = [event];
                let newDay = {
                    date: date,
                    title: result,
                    link: link,
                    display_events: display_events,
                };
                struct.displayList[struct.displayList.length] = newDay;
            }
        },

        parseDate(full_date) {
            return full_date.slice(0, 10);
        },
    },

    /*
     ** programatically start the loader so we force the page to take x seconds to load
     */
    mounted() {
        this.getRecentDates();
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 3000);
        });
    },

};
</script>
<style>
/* Clases necesarias para cambiarle el color al carousel */
.cultura_color .carousel-btn {
    background-color: #B14549 !important;
    border-color: #B14549 !important;
}

.cultura_color .owl-prev,
.cultura_color .owl-next {
    color: #B14549 !important;
}

.cultura_color .heading_s1::before {
    background-color: #B14549 !important;
}

.cultura_color .li-custom :hover {
    color: #B14549 !important;
}
</style>
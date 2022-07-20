<template>
    <div>
        <Header />
        <BannerPage :beadcrumb="beadcrumbPage" :title="'Cronograma de eventos'"></BannerPage>
        <div class="container mt-5">
            <div class="row">
                <InputBar class="mt-4" @cargarFiltros="this.submitSearch" :categorias="this.categorias"
                    :pCategoria="categoria" :pTitulo="titulo" :pDesde="fecha_desde" :pHasta="fecha_hasta" />
            </div>
            <h6 class="pt-5 mt-2">{{ this.resultadoQuery }}</h6>
        </div>
        <div class="d-flex flex-column py-5 align-items-center bg_gray">
            <div class="col-10 col-md-7">
                <paginate name="agendaItems" :list="agendaItems" :per="5" v-if="agendaItems.length"
                    class="dsi-list-result row">
                    <AgendaItem class="cultura_colors mb-5 col-12" v-for="item in paginated('agendaItems')"
                        :key="item.id_evento" :title="item.titulo" :description="item.desc_tarea" :date="item.fecha"
                        :id="item.id_evento" :category="item.categoria" />
                </paginate>
                <h4 class="py-5" v-else>No se han encontrado eventos.</h4>
            </div>
            <div class="col-12 mt-4 mb-5 pb-5">
                <paginate-links :show-step-links="true" :hide-single-page="true" :limit="4" for="agendaItems" :classes="{
                    ul: ['pagination', 'justify-content-center'],
                    li: 'page-item',
                    a: ['page-link', 'page-link-cultura'],
                }" v-if="agendaItems.length">
                </paginate-links>
            </div>
        </div>
    </div>
</template>
<script>
import AgendaItem from "@/components/cultura/busqueda/AgendaItem.vue";
import InputBar from "@/components/cultura/busqueda/InputBar.vue";
import Header from "@/components/Header.vue";
import BannerPage from "@/components/BannerPage.vue";


export default {
    components: {
        AgendaItem,
        InputBar,
        Header,
        BannerPage
    },

    head: {
        title: "Municipalidad de Tandil - Cultura y educación",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Información acerca de la cultura de Tandil y sus instituciones.",
            },
        ],
    },

    watch: {
        $route(to, from) {
            // react to route changes...
            if (to !== from) {
                location.reload();
            }
        },
    },

    data() {
        return {
            titulo: "",
            categoria: "0",
            fecha_desde: "",
            fecha_hasta: "",
            categorias: [
                { value: 1, name: "CINE" },
                { value: 2, name: "TEATRO" },
                { value: 3, name: "DANZA" },
                { value: 4, name: "OTROS" }
            ],
            agendaItems: [],
            paginate: ['agendaItems'],
            resultadoQuery: "",

            beadcrumbPage: [
                { path: "HOME", link: true },
                {
                    currentPage: "Búsqueda en agenda",
                },
            ],
        }
    },

    methods: {
        submitSearch(params) {
            if (params.categoria == 0 || params.categoria == "0") {
                params.categoria = "";
            }

            this.$router.push({
                path: "agenda",
                query: {
                    titulo: params.titulo, categoria: params.categoria,
                    desde: params.fecha_desde, hasta: params.fecha_hasta
                },
            });
        },

        showSearch(titulo, categoria, desde, hasta) {
            let query = "Mostrando resultados para: ";

            if (categoria != "0") query += "Eventos tipo " + this.getCategoryName(categoria) + ", ";
            else query += "Todos los eventos, "

            query += "del " + this.formatDate(desde) + " hasta " + this.formatDate(hasta);

            if (titulo != "") query += " , con título como " + ` '${titulo}' `;

            this.resultadoQuery = query;
        },

        getCategoryName(cat) {
            let catInt = parseInt(cat);
            switch (catInt) {
                case 1:
                    return "CINE";
                case 2:
                    return "TEATRO";
                case 3:
                    return "DANZA";
                default:
                    return "OTRO";
            }
        },

        formatDate(string) {
            let year = string.slice(0, 4);
            let month = string.slice(5, 7);
            let day = string.slice(8, 10);

            return day + "/" + month + "/" + year
        },

        insertIntoInputs(titulo, categoria, desde, hasta) {
            this.titulo = titulo;
            this.categoria = categoria;
            this.fecha_desde = desde;
            this.fecha_hasta = hasta;
        },

        f_search(titulo, categoria, desde, hasta) {
            categoria == "0" || categoria == 0 ? categoria = "" : categoria;

            let query = {
                fecha1: this.alterDate(desde),
                fecha2: this.alterDate(hasta),
                titulo: titulo,
                categoria: categoria
            }

            this.getEvents(query);
        },
        alterDate(date) {
            let date_aux = date.slice(8, 10) + date.slice(4, 7) + "-" + date.slice(0, 4);
            return date_aux;
        },
        getFormattedDateToday() {
            let today = new Date();
            return today.toJSON().slice(0, 10);
        },
        getFormattedDateFromCantDays(cantDias) {
            let later = new Date();
            later.setDate(later.getDate() + cantDias);
            return later.toJSON().slice(0, 10);
        },
        getEvents(params) {
            this.$store
                .dispatch("eventos-cultura/eventosPorFecha", params)
                .then((res) => {
                    this.agendaItems = res;
                })
                .catch((error) => {
                    if (error.status == 400) {
                        console.log("no se encontró datos.");
                        this.resultList = [];
                    }
                });
        },
    },

    created() {

        // Si el objeto no está vacio
        if (JSON.stringify(this.$route.query) !== '{}') {
            let queries = this.$route.query;

            let titulo;
            queries.titulo ? titulo = queries.titulo : titulo = "";
            let categoria;
            queries.categoria ? categoria = queries.categoria : categoria = "0";
            let desde;
            queries.desde ? desde = queries.desde : desde = this.getFormattedDateToday();
            let hasta;
            queries.hasta ? hasta = queries.hasta : hasta = this.getFormattedDateFromCantDays(5);

            this.showSearch(titulo, categoria, desde, hasta);
            this.insertIntoInputs(titulo, categoria, desde, hasta);
            this.f_search(titulo, categoria, desde, hasta);
        }
        // Si no entra por primera vez, osea que no tiene queries...
        else {
            let today = this.getFormattedDateToday();
            let later = this.getFormattedDateFromCantDays(5);

            let categoria = "0";
            let titulo = "";

            this.showSearch(titulo, categoria, today, later);
            this.insertIntoInputs(titulo, categoria, today, later);
            this.f_search(titulo, categoria, today, later);
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 3000);
        });
    },

}
</script>
<style>
.bg_gray {
    background-color: #f7f7f7;
}

.cultura_colors .btn-custom {
    border-color: #B14549 !important;
}

.cultura_colors {
    background-color: white;
}

.cultura_colors .btn-custom:hover {
    background-color: #B14549 !important;
    color: white !important;
}

.cultura_colors .title-custom>*:hover {
    color: #B14549 !important;
}

.pagination .page-item a {
    color: #B14549 !important;
}

.page-item.active .page-link,
.page-item .page-link:hover {
    background-color: #B14549 !important;
    border-color: #B14549 !important;
    color: white !important;
}

.custom-btn {
    background-color: transparent !important;
    color: #B14549 !important;
    border-color: #B14549 !important;
}

.custom-btn:hover {
    background-color: #B14549 !important;
    color: white !important;
}

.custom-highlight {
    color: #B14549;
}

.btn-outline-default {
    color: black !important;
}

.form-control:focus {
    border-color: #B14549;
}

.custom_select {
    color: #B14549 !important;
}
</style>
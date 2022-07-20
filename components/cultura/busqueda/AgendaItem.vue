<template>
    <div class="event_schedule">
        <!-- animation" data-animation="fadeInUp" data-animation-delay="0.1s" -->
        <div class="schedule_info">
            <ul>
                <li>
                    <h6 class="custom-highlight">{{ formattedCategory }}</h6>
                </li>
                <!-- <li><h6 >{{ hour_range }}</h6></li> -->
                <li>
                    <h6 class="date"><strong>{{ formattedDate }}</strong></h6>
                </li>
            </ul>
            <h3 class="title-custom">
                <DSILink :pCustomLink="'/eventos/' + id" pTipoLink="I">{{ title }}</DSILink>
            </h3>
            <div class="schedule_desc mt-2">
                <p>{{ description }}</p>
            </div>

            <DSILink :pCustomLink="'/eventos/' + id" pTipoLink="I" class="btn btn-outline-default rounded-0 btn-custom">
                Ver más...</DSILink>
        </div>
    </div>
</template>

<script>
import DSILink from '@/components/DSILink.vue';
export default {
    components: [DSILink],
    props: ["title", "hour_range", "description", "id", "category", "date"],
    computed: {
        formattedDate: function () {
            let date = new Date(this.date);
            let aux = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
                + "/" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
                + "/" + date.getFullYear();
            return aux;
        },
        formattedCategory: function () {
            let intCat = parseInt(this.category);
            switch (intCat) {
                case 1:
                    return "CINE";
                case 2:
                    return "TEATRO";
                case 3:
                    return "DANZA";
                default:
                    return "OTRO";
            }
        }
    },
    components: { DSILink, DSILink }
}
</script>
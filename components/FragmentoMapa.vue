<template>
    <iframe class="fragment" :src="link" frameborder="0" aria-hidden="false"></iframe>
</template>
<script>
export default {
    props: ['link'],
}
</script>
<style>
.fragment {
    height: 50vh;
}
</style>
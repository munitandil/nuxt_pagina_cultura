<template>
  <div class="dsi-form-search-container">    
    <div :class="pClass">
      <form @submit.prevent="submit()">
        <div class="radius_input">
          <input
            type="text"
            class="form-control"
            required=""
            placeholder="Buscar..."
            v-model="textSearch"
          />
        </div>
        <button type="submit" name="submit" value="Submit"><i class="ion-ios-search-strong"></i></button>
      </form>
    </div>    
  </div>
</template>
<script>
export default {  
  props:["pClass"],  
  data(){
      return {
        textSearch : null
      }
    },
    methods: {
      submit(){
        this.$router.push({path: '/buscar', query:{'tipo':'ALL','texto': this.textSearch}})
      }
    }
};
</script>
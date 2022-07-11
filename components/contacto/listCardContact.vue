<template>
  <div class="row mb-md-5 mb-3" v-if="listConatct && listConatct.length > 0">
    <div class="col-md-12">
      <div
        class="dsi-search-contact animation"
        data-animation="fadeInUp"
        data-animation-delay="0.2s"
      >
        <div class="row justify-content-center">
          <div
            class="col-lg-6 col-md-9 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
          >
            <div class="heading_s1 text-center">
              <h2>Nuestros Teléfonos</h2>
            </div>
          </div>
        </div>
        <div class="search_box2">
          <form>
            <div class="row">
              <div class="radius_input col-md-6 offset-md-6">
                <input
                  id="dsi-filter-contact-list"
                  onkeyup="filterContactList()"
                  onkeydown="return event.key != 'Enter';"
                  type="text"
                  class="form-control"
                  required=""
                  v-model="searchText"
                  placeholder="buscar teléfonos por dirección, área, secretaría, email, etc..."
                />
              </div>
              <button id="dsi-search-contact-submit" onclick="submitButtonClick(event)" type="submit" name="submit" value="Submit">
                <i class="ion-ios-search-strong"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12">
        <div class="cleafix"></div>
      </div>
      <div
        class="dsi-contact-responsive-v4 animation"
        data-animation="fadeInUp"
        data-animation-delay="0.3s"
      >
        <ul id="dsi-contact-ul" class="list_none row">
          <li
            class="dsi-item col-md-12 col-lg-6"
            v-for="item in listConatct"
            :key="item.nro_row"
          >
            <CardContact
              :pArea="item.area"
              :pSec="item.desc_secr"
              :pDireccion="item.desc_calle + ' ' + item.puerta"
              :pTel="item.fijo"
              :pTelInterno="item.interno"
              :pCelular="item.celular"
              :pHorario="item.horario"
              :pEmailOficial="item.oficial"
              :pOtroEmail="item.gmail"
              :pFB="item.fb"
              :pIG="item.ig"
              :pTW="item.tw"
              :pId="item.nro_row"
            />
          </li>
        </ul>
        <!--div class="dsi-search-empty">
                            <p>No existe una teléfono con esta descripción.</p>
                        </div-->
      </div>
    </div>
  </div>
</template>
<script>
import CardContact from "@/components/contacto/cardContact";
import { mapGetters } from "vuex";
export default {
  components: { CardContact },
  params:["pTextToSearch"],
  
  computed: {
    ...mapGetters({
      listConatct: "contacto/getAllContact",
    })
  },
  mounted() {
    this.f_searchContactList()
  },
  data(){
    return {
      searchText:this.pTextToSearch
    }
  },
  methods: {
    f_searchContactList: function () {
      this.$store.dispatch("contacto/loadAllContact").catch((error) => {
        console.log("Ocurrio un error al recuperar la lista de contactos. Error: ", error); // undefined
        /* this.$nuxt.error({
          statusCode: 404,
          message:
            "Ocurrio un error al recuperar la lista de contactos. Error: " +
            error,
        }); */
      });
    },
  },
  watch: {
    searchText (newValue) {
       this.$emit('input', newValue)
     },
     pTextToSearch (newValue) {
       this.searchText = newValue
     }
  },

};
</script>

const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _results: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    f_search(vuexContext, params) {
        let tipo = params[0]
        let text = params[1]
        return new Promise((resolve, reject) => {

            this.$axios.get("/api/buscar/" + tipo + ',' + text, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    //console.log('res===', res)
                    vuexContext.commit('setResult', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el resultado de la busqueda: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getResultSearch(state) {
        return state._results
    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setResult(state, list) {
        state._results = list
    }
}
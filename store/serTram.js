const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _top6: [],
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadTop6(vuexContext) {

        // Obtener una lista de los temas de las guias de tramites, me retorna el id, el nombre del tema y la cantidad de guias de tramites asociadas a cada tema
        try {

            let res = await this.$axios.get('/api/top6_cul', { headers: { 'Authorization': Basic } });

            vuexContext.commit('setTop6', res.data.items);

        } catch (e) {
            console.log('Error al cargar la lista de las Servicio y tramites Top6: ', e) // undefined
        }
        //console.log(res);
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getListTop6(state) {
        return state._top6
    },
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setTop6(state, list) {
        state._top6 = list
    }
}
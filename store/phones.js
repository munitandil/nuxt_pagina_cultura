const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _phones: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadAllPhones(vuexContext) {
        // Obtener las redes sociales del municipio

        try {
            let res = await this.$axios.get('/api/telefonosutiles_cul', { headers: { 'Authorization': Basic } });

            vuexContext.commit('setPhones', res.data.items);
        } catch (e) {
            console.log('Error al cargar los telefonos: ', e) // undefined
                // vuexContext.commit('setPhones', []);
        }
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getAllPhones(state) {
        return state._phones
    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setPhones(state, list) {
        state._phones = list
    }
}
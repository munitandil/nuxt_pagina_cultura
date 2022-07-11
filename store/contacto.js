const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _contacts: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadAllContact(vuexContext) {
        // Obtener las redes sociales del municipio

        try {
            let res = await this.$axios.get('/api/contactos', { headers: { 'Authorization': Basic } });
            vuexContext.commit('setContacts', res.data.items);
        } catch (e) {
            console.log('Error al cargar los contactos: ', e) // undefined
                //vuexContext.commit('setNetworkSocial', null);
        }
        //console.log(res);
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getAllContact(state) {
        return state._contacts
    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setContacts(state, list) {
        state._contacts = list
    }
}
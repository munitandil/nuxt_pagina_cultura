const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _networks: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;


// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadAllNetworkSocial(vuexContext) {
        // Obtener las redes sociales del municipio

        try {
            let res = await this.$axios.get('/api/redessociales_cul', { headers: { 'Authorization': Basic } });
            vuexContext.commit('setNetworkSocial', res.data.items);
        } catch (e) {
            console.log('Error al cargar las Redes Sociales: ', e) // undefined
                //vuexContext.commit('setNetworkSocial', null);
        }
        /*  await this.$axios.get('/api/redessociales').then(res => {
                 console.log('res--', res)
                 vuexContext.commit('setNetworkSocial', res.data.items);
             })
             .catch(error => {
                 console.log('Error al cargar las redes sociales ', error)
                 vuexContext.commit('setNetworkSocial', []);
             });*/

        //console.log(res);
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getAllNetworkSocial(state) {
        return state._networks
    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setNetworkSocial(state, list) {
        state._networks = list
    }
}
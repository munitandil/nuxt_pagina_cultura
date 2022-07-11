// Acciones
// Estas funciones o metodos sirven para llamar a las mutaciones
// A diferencia de las mutaciones pueden ser asincornas (llamadas a las APIs)
// Pueden contener algo de logica de negocio y ademas pueden llamar a varias mutaciones
export const actions = {

    /**
     * Esta funcion se ejecuta al inicializarse la APP
     * @param {*} vuexContext commit, dispatch, state
     * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app: app, $axios, env, store
     */
    async nuxtServerInit({ dispatch }, context) {
        await dispatch('posts/loadPosts');
        await dispatch('paths/loadPaths');
        await dispatch('networkSocial/loadAllNetworkSocial');
        await dispatch('phones/loadAllPhones');
        await dispatch('serTram/loadTop6');
        await dispatch('secretarias/loadAllInfoSecretarias');
    },
}
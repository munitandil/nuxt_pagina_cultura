const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _guias: [],
    _temas: [],
    _detalle: [],
    _relacionadas: [],
    _listTags: [],
    _tema: [],
    _guiasXTemas: [],
    _guiasXTag: [],
    _guiasMoreViewed: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadAllGuias(vuexContext) {
        // Obtener una lista de las guias de tramites, retorna solo un resumen de los datos
        try {
            let res = await this.$axios.get('/api/guias_tramites_all_lista', { headers: { 'Authorization': Basic } });
            vuexContext.commit('setGuias', res.data.items);
        } catch (e) {
            console.log('Error al cargar la lista de Guias de Tramites: ', e) // undefined
        }
        // Obtener una lista de los temas de las guias de tramites, me retorna el id, el nombre del tema y la cantidad de guias de tramites asociadas a cada tema
        try {
            let res = await this.$axios.get('/api/guias_tramites_temas_all_lista', { headers: { 'Authorization': Basic } });
            vuexContext.commit('setTemas', res.data.items);
        } catch (e) {
            console.log('Error al cargar la lista de Temas: ', e) // undefined
        }
        //console.log(res);
    },

    getAllListTags(vuexContext) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guia_tramite_tags", { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setTags', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },

    getSearchDetalle(vuexContext, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guia_tramite/" + id, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setDetalle', res.data.items[0])
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },

    getSearchRelacionadas(vuexContext, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guia_tramite_relacionados/" + id, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setRelacionadas', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },

    getSearchTema(vuexContext, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guia_tramite_tema/" + id, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setTema', res.data.items[0])
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },

    getSearchGuiasXTema(vuexContext, idTema) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guias_tramites_x_tema/" + idTema, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setGuiasXTema', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },

    getSearchGuiasXTag(vuexContext, tag) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/guias_tramites_x_tags/" + tag, { headers: { 'Authorization': Basic } })
                .then((res) => {
                    vuexContext.commit('setGuiasXTag', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    // console.log("Error al cargar el detalle de la Guias de Tramites: ", error); // undefined
                    reject(error.response.data.errors)
                })
        })
    },
}

//    Esta funcion permite ordenar el arrglo de paths por el campo orden
//    Se utiliza en la function sort de un arreglo
function compareMostViewed(a, b) {
    const bandA = a.cant_visitas;
    const bandB = b.cant_visitas;
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}


// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getAllGuiasSummary(state) {
        return state._guias
    },
    getAllTemas(state) {
        return state._temas;
    },
    getTemaDetalle(state) {
        return state._tema;
    },
    getGuiasMostViewed(state) {
        return state._guiasMoreViewed.slice(0, 5);
    },
    getDetalleGuiaTramite(state) {
        return state._detalle;
    },
    getGuiaTramiteRelacionadas(state) {
        return state._relacionadas;
    },
    getAllTagsForSidebar(state) {
        return state._listTags;
    },
    getGuiasTramitexTema(state) {
        return state._guiasXTemas;
    },
    getGuiasTramitexTag(state) {
        return state._guiasXTag;
    },
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setGuias(state, list) {
        state._guias = list
        const listGuias = state._guias
        listGuias.sort(compareMostViewed)
        state._guiasMoreViewed = listGuias
    },
    setTemas(state, list) {
        state._temas = list
    },
    setDetalle(state, detalle) {
        state._detalle = detalle
    },
    setRelacionadas(state, list) {
        state._relacionadas = list;
    },
    setTags(state, list) {
        state._listTags = list;
    },
    setTema(state, detalle) {
        state._tema = detalle;
    },
    setGuiasXTema(state, list) {
        state._guiasXTemas = list;
    },
    setGuiasXTag(state, list) {
        state._guiasXTag = list;
    }
}
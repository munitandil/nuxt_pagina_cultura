const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _posts: [],
    _postHome: [],
    _postStandout: [],
    _bannerHome: [],
    _alertaHome: [],
    _top3: [],
    _allTags: [],
    _lastPosts: [],
    _postByTag: [],
    _detalle: [],
    _relacionadas: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadPosts(vuexContext) {
        // Obtener una lista de novedades en el home
        try {
            let res = await this.$axios.get('/api/novedades_home_cul', {
                headers: {
                    'Authorization': Basic
                }
            });
            vuexContext.commit('setPostsHome', res.data.items);
        } catch (e) {
            console.log('Error al cargar la lista de novedades del home: ', e) // undefined
        }
        // Obtener una lista de novedades destacadas
        try {
            let res = await this.$axios.get('/api/novedades_programas_cul', {
                headers: {
                    'Authorization': Basic
                }
            });
            vuexContext.commit('setPostsStandout', res.data.items);
        } catch (e) {
            console.log('Error al cargar la lista de novedades destacadas: ', e) // undefined
        }

        // Obtener una lista de las novedades top3 en el home
        try {
            let res = await this.$axios.get('/api/novedades_alerta_home', {
                headers: {
                    'Authorization': Basic
                }
            });
            vuexContext.commit('setPostsHomeTop3', res.data.items);
        } catch (e) {
            console.log('Error al cargar las novedades top3 del home: ', e) // undefined
        }

        // Obtener una lista de novedades de alerta (home)
        try {
            let res = await this.$axios.get('/api/info_top', {
                headers: {
                    'Authorization': Basic
                }
            });
            vuexContext.commit('setPostsInfoTop', res.data.items);
        } catch (e) {
            console.log('Error al cargar la novedade alerta - Home Top: ', e) // undefined
        }

        // Obtener una lista banner en el home
        try {
            let res = await this.$axios.get('/api/banner_home', {
                headers: {
                    'Authorization': Basic
                }
            });
            vuexContext.commit('setBannerHome', res.data.items);
        } catch (e) {
            console.log('Error al cargar los banner del home: ', e) // undefined
        }
        //console.log(res);
    },

    getAllPost(vuexContext) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/novedades_cul", {
                    headers: {
                        'Authorization': Basic
                    }
                })
                .then((res) => {
                    vuexContext.commit('setPosts', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    reject(error.response.data.errors)
                })
        })
    },
    getAllTags(vuexContext) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/novedades/tags_home", {
                    headers: {
                        'Authorization': Basic
                    }
                })
                .then((res) => {
                    vuexContext.commit('setAllTags', res.data.items[0].tag.split('|#|'))
                    resolve(res)
                })
                .catch((error) => {
                    reject(error.response.data.errors)
                })
        })
    },
    getLastPosts(vuexContext) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/novedades_ultimas", {
                    headers: {
                        'Authorization': Basic
                    }
                })
                .then((res) => {
                    vuexContext.commit('setLastPost', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    reject(error.response.data.errors)
                })
        })
    },
    getPostsByTag(vuexContext, p_tag) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/novedades_x_tag/" + p_tag, {
                    headers: {
                        'Authorization': Basic
                    }
                })
                .then((res) => {
                    vuexContext.commit('setPostsByTag', res.data.items)
                    resolve(res)
                })
                .catch((error) => {
                    reject(error.response.data.errors)
                })
        })
    },
    getSearchDetalle(vuexContext, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/api/novedades/" + id, {
                    headers: {
                        'Authorization': Basic
                    }
                })
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
            this.$axios.get("/api/novedades_relacionadas/" + id, {
                    headers: {
                        'Authorization': Basic
                    }
                })
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
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getPosts(state) {
        return state._posts
    },
    getLastPost(state) {
        return state._posts.slice(Math.max(state._posts.length - 5, 1))
    },
    getPostsHomeTop3(state) {
        return state._top3
    },
    getPostsHome(state) {
        return state._postHome
    },
    getPostsStandout(state) {
        return state._postStandout
    },
    getPostsInfoTop(state) {
        return state._alertaHome
    },
    getBannerHome(state) {
        return state._bannerHome
    },
    getAllTags(state) {
        return state._allTags
    },
    getLastPosts(state) {
        return state._lastPosts
    },
    getPostsByTag(state) {
        return state._postByTag;
    },
    getDetalleNovedad(state) {
        return state._detalle;
    },
    getNovedadesRelacionadas(state) {
        return state._relacionadas;
    },
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setPosts(state, posts) {
        state._posts = posts
    },
    setPostsHomeTop3(state, posts) {
        state._top3 = posts
    },
    setPostsHome(state, posts) {
        state._postHome = posts
    },
    setPostsStandout(state, posts) {
        state._postStandout = posts
    },
    setPostsInfoTop(state, posts) {
        state._alertaHome = posts
    },
    setBannerHome(state, posts) {
        state._bannerHome = posts
    },
    setAllTags(state, tags) {
        state._allTags = tags
    },
    setLastPost(state, posts) {
        state._lastPosts = posts
    },
    setPostsByTag(state, posts) {
        state._postByTag = posts
    },
    setDetalle(state, detalle) {
        state._detalle = detalle
    },
    setRelacionadas(state, posts) {
        state._relacionadas = posts
    }
}
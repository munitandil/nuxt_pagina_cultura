const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async enviarConsulta(vuexContext, params) {
        params.Authorization = Basic
            // console.log('parmas---', params)       
        return new Promise((resolve, reject) => {
            this.$axios.post('/api/polo_productivo/consulta', {}, { headers: params })
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    console.log('error al enviar la consulta: --', error)
                    reject('Error al enviar la consulta')
                })
        })
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {

}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {

}
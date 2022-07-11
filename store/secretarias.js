const base64 = require('base-64');
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
    _secretarias: []
})

const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadAllInfoSecretarias(vuexContext) {
        try {
            let res = await this.$axios.get('/api/info_secretarias', { headers: { 'Authorization': Basic } });

            vuexContext.commit('setSecretarias', res.data.items);
        } catch (e) {
            console.log('Error al cargar las secretarias: ', e) // undefined
        }
    }
}

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getAllSecretarias(state) {
        let result = []
        state._secretarias.forEach(item => {
            if (!result.find(o => o.id_secr === item.id_secr)) {
                result.push(item)
            }
        })
        return result
    },
    getNivel2XSec: state => pIdSec => {
        const listSecretaria = state._secretarias.filter(item => item.id_secr === pIdSec)
        let listNiveles2 = []
        listSecretaria.forEach(item => {
            if (item.nivel2 && listNiveles2.indexOf(item.nivel2) === -1) {
                listNiveles2.push(item.nivel2)
            }
        });

        return listNiveles2

    },
    getNivel3XSec: state => pNivel2 => {
        const listSecretaria = state._secretarias.filter(item => item.nivel2 === pNivel2)
        let listNiveles3 = []
        listSecretaria.forEach(item => {
            if (item.nivel3 && listNiveles3.indexOf(item.nivel3) === -1) {
                listNiveles3.push(item.nivel3)
            }
        });

        return listNiveles3

    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setSecretarias(state, list) {
        state._secretarias = list
    }
}
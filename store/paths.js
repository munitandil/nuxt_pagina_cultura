const base64 = require('base-64');
// State
// repositorio central de paths, los paths son las paginas que hay en la pagina, puede estar habilitadas o no,
// y tambien pude haber paths que redirigen a paginas externas
// estos paths se usan en el menu principal y se pueden usar en cualquier parte de la pagina que requiera ir a otro paths
export const state = () => ({
    _paths: []
})
const tok = 'restapi:restapi';
const hash = base64.encode(tok);
const Basic = 'Basic ' + hash;

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
    async loadPaths(vuexContext) {
        // Obtener los posts
        try {
            let res = await this.$axios.get('/api/paths_cul', { headers: { 'Authorization': Basic } });

            //console.log(res.data.items);
            // Realizar un commit
            //vuexContext.commit('setPaths', res.data.items);
            let othersLinks = [{
                        id_menu: null,
                        nombre: null,
                        id_item: null,
                        id_item_padre: null,
                        nivel: 0,
                        descr: 'Contacto',
                        link: '/contacto',
                        tipo_link: 'I',
                        id_string: 'CONTACTO',
                        orden: '0',
                        publicar: 'S'
                    },
                    {
                        id_menu: null,
                        nombre: null,
                        id_item: null,
                        id_item_padre: null,
                        nivel: 0,
                        descr: 'Inicio',
                        link: '/',
                        tipo_link: 'I',
                        id_string: 'HOME',
                        orden: '0',
                        publicar: 'S'

                    },
                    {
                        id_menu: null,
                        nombre: null,
                        id_item: null,
                        id_item_padre: null,
                        nivel: 0,
                        descr: 'Buscador',
                        link: '/buscar',
                        tipo_link: 'I',
                        id_string: 'SEARCH',
                        orden: '0',
                        publicar: 'S'

                    },
                    {
                        id_menu: null,
                        nombre: null,
                        id_item: null,
                        id_item_padre: null,
                        nivel: 0,
                        descr: 'Tags',
                        link: '/tag',
                        tipo_link: 'I',
                        id_string: 'TAG',
                        orden: '0',
                        publicar: 'S'

                    }
                ]
                // console.log('lista api---', res.data.items)
            let aux = mergeArrayObjects(res.data.items, othersLinks)
                // console.log('aux list--', aux);
                // lo almaceno ya ordenado
            vuexContext.commit('setPaths', aux.sort(compare))

        } catch (e) {
            console.log('Error al cargar los PATHS. Error: ', e);
        }
    }
}

//funcion que permite hacer un merge de dos array de objectos

function mergeArrayObjects(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    return arr1;
}

//    Esta funcion permite ordenar el arrglo de paths por el campo orden
//    Se utiliza en la function sort de un arreglo
function compare(a, b) {
    const bandA = a.orden;
    const bandB = b.orden;
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}


var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
        to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);

    return function(str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    }
})();

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
    getPaths: state => {
        return state._paths
    },
    getPath: state => idString => {
        return state._paths.filter(path => normalize(path.id_string) === idString)[0]
    },
    getPathNivelInicial: state => {
        return state._paths.filter(path => path.nivel === 0 && path.id_menu == 1)
    },
    hasChildren: state => idString => {
        const padreItem = state._paths.filter(path => path.id_string === idString && path.id_menu == 1)
        if (padreItem[0]) {
            let idPadre = padreItem[0].id_item
            return state._paths.filter(path => path.id_item_padre === idPadre).length;
        } else return 0;
    },
    getChildrenNextNivel: state => idString => {
        const padreItem = state._paths.filter(path => path.id_string === idString && path.id_menu == 1)
        if (padreItem[0]) {
            let idPadre = padreItem[0].id_item
            return state._paths.filter(path => path.id_item_padre === idPadre)
        } else return null;
    },
    isEnabled: state => idString => {
        const padreItem = state._paths.filter(path => path.id_string === idString && path.id_menu == 1)
        if (padreItem[0]) {
            return padreItem[0].publicar === 'S';
        } else return false;
    },
    getMenuFooter: state => {
        return state._paths.filter(path => path.id_menu == 4)
    }
}

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
    setPaths(state, paths) {
        state._paths = paths
    },
    addPaths(state, paths) {
        state._paths.push(paths)
    }
}
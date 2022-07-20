// const base64 = require("base-64");
// State
// repositorio central de posts, la ideas es que los distintos componentes, consumas los posts que esta cargados en este repositorio
export const state = () => ({
  _results: [],
});

const tok = "restapi:restapi";
const hash = Buffer.from(tok).toString("base64");
const Basic = "Basic " + hash;
// const Basic = "Basic 1234";
// const base = "http://localhost:3000";

// Actions
// hacemos la funcion asyncrona, para esperar el tiempo de respuesta del endopoint
// solo las acciones pueden usar async-await
// estas acciones son llamadas desde los componentes
export const actions = {
  eventosAgenda(vuexContext, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/api/evento_cultura_home", {
          headers: { Authorization: Basic },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          // console.log("Error al cargar el resultado de la busqueda: ", error); // undefined
          //   reject(error.response.data.errors);
        });
    });
  },
  eventosPorFecha(vuexContext, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/api/evento_cul_filtros", {
          params,
          headers: { Authorization: Basic },
        })
        .then((res) => {
          resolve(res.data.items);
        })
        .catch((error) => {
          // console.log("Error al cargar el resultado de la busqueda: ", error); // undefined
          //   reject(error.response.data.errors);
        });
    });
  },
};

// Getters
// funciones publicas, con los cuales los componentes acceden al estado
export const getters = {
  getResultSearch(state) {
    return state.results;
  },
};

// Mutaciones
// los estados solo pueden modificarse por medio de las mutaciones, solamente
export const mutations = {
  setResult(state, list) {
    state.results = list;
  },
};

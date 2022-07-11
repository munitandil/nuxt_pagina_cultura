/*
 Funcion que permite buscar en el arreglo de paths en el store, si el path al cual el usuario 
 quiere entrar, esta habilitado o no
*/
function isEnabledPage(pathList, pathRouter) {
    const padreItem = pathList.filter(path => path.link === pathRouter)
        //console.log('result---', padreItem)
    if (padreItem && padreItem[0]) {
        return padreItem[0].publicar === 'S';
    } else return false;
}


/*
 Este middelware, permite chequear si un path al que
 el usuario quiere entrar esta hailitado o no, en caso de no estar habilitado lo redirije al inicio 
*/
export default function({ redirect, store, req, res, route, error }) {

    var urlPath = '/' + route.path.split('/')[1];
    //console.log('route.path---' + route.path)
    // console.log('urlPath search--' + urlPath)
    if (urlPath.toUpperCase() == '/PANEL') {
        //si la ruta es /panel, lo redirigo al panel administrador
        redirect(process.env.urlPanelAdmin);
    } else if (urlPath.toUpperCase() == '/WEBMAIL-MT') {
        //si la ruta es /webmail-mt, lo redirigo al webmail
        redirect(process.env.urlWebMail);
    } else if (!isEnabledPage(store.state.paths._paths, urlPath)) {
        //  console.log('no esta habilitada');
        error({
            statusCode: 404,
            message: 'Página no existe'
        });
    }
    return;
}
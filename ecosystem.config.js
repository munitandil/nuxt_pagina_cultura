module.exports = {
    apps: [{
        name: 'PaginaWebMunicipalidadTandil',
        exec_mode: 'cluster',
        watch: true,
        instances: 4, // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        max_memory_restart: "400M",
        args: 'start'
    }]
}
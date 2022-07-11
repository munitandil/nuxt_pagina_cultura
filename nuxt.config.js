const axios = require('axios')
const base64 = require('base-64');

export default {
    buildDir: 'nuxt-dist',
    target: 'server',
    loading: '@/components/LoadingBar.vue',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Municipalidad de Tandil',
        htmlAttrs: {
            lang: 'es-AR'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Actualidad y Eventos de Tandil'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'turismo, tandil, novedades, sierras, cultura, tramites, servicios, municipalidad, gestion, contactos, licencia de conducir, habilitacion de comercio, factura on line, rentas, rentas on line, informacion'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/adm-favicon.ico'
            },
            {
                rel: 'apple-touch-icon',
                href: '/adm-favico-180x180.png'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i'
            }
        ],
        script: [{
                src: "/js/jquery-1.12.4.min.js"
            },
            {
                src: "/js/jquery-ui.js"
            },
            {
                src: "/js/popper.min.js"
            },
            {
                src: "/js/bootstrap.min.js"
            },
            {
                src: "/js/owl.carousel.min.js"
            },
            {
                src: "/js/magnific-popup.min.js"
            },
            {
                src: "/js/popper.min.js"
            },
            {
                src: "/js/waypoints.min.js"
            },
            {
                src: "/js/parallax.js"
            },
            {
                src: "/js/jquery.countdown.min.js"
            },
            {
                src: "/js/jquery.fitvids.js"
            },
            {
                src: "/js/jquery.counterup.min.js"
            },
            {
                src: "/js/isotope.min.js"
            },
            {
                src: "/js/jquery.elevatezoom.js"
            },
            {
                src: "/js/scripts.js"
            },
            {
                src: "/js/vcard2.js"
            },
            {
                src: "/js/dsi-script.js"
            }
        ]
    },
    router: {
        middleware: ['validEanbledPage'],
        routeNameSplitter: '/',
        linkActiveClass: 'dsi-active-link',
        linkExactActiveClass: 'dsi-exact-active-link',
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~assets/css/animate.css",
        "~assets/bootstrap/css/bootstrap.min.css",
        "~assets/css/ico-moon.css",
        "~assets/css/ionicons.min.css",
        "~assets/themify-icons/themify-icons.css",
        "~assets/css/all.min.css",
        "~assets/owlcarousel/css/owl.carousel.min.css",
        "~assets/owlcarousel/css/owl.theme.css",
        "~assets/owlcarousel/css/owl.theme.default.min.css",
        "~assets/css/magnific-popup.css",
        "~assets/css/style.css",
        "~assets/css/responsive.css",
        "~assets/css/demo-construction.css",
        // "~assets/color/theme-blue.css",
        "~assets/css/demo-blog.css",
        "~assets/css/demo-events.css",
        "~assets/css/demo-travel.css",
        "~assets/css/theme-dark.css"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-paginate.js',
        {
            src: 'plugins/owl.js',
            ssr: false
        }, // Only works on client side,     
        {src: 'plugins/owl.js', ssr: false} ,// Only works on client side 
    ],
    
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/google-analytics'
    ],

    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    },
    publicRuntimeConfig: {
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID
        }
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'vue-social-sharing/nuxt',
        '@nuxtjs/sitemap',
        '@nuxtjs/recaptcha',
    ],
    recaptcha: {
        hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
        // language: String, // Recaptcha language (v2)
        siteKey: process.env.RECAPTCHA_SITE_KEY, // Site key for requests
        version: 2, // Version
        size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
    },


    sitemap: {
        hostname: process.env.baseUrlPageWeb || 'http://localhost:3000',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        gzip: true,
        exclude: ['/404'],
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes: async() => {
            var routers = []
            const tok = 'restapi:restapi';
            const hash = base64.encode(tok);
            const Basic = 'Basic ' + hash;

            /*  Busco las novedades */
            let apiUrl = process.env.apiBaseUrl + '/novedades' // or API url
            let res = await axios.get(`${apiUrl}`, { headers: { 'Authorization': Basic } })
            res.data.items.map(v => routers.push(`/novedades/${v.id}`))

            /*  Busco las guias de tramites */
            apiUrl = process.env.apiBaseUrl + '/guias_tramites_all_lista' // or API url
            res = await axios.get(`${apiUrl}`, { headers: { 'Authorization': Basic } })
            res.data.items.map(v => routers.push(`/guia-tramites/${v.id_tram}`))

            /*  Busco los temas de las guias de tramites */
            apiUrl = process.env.apiBaseUrl + '/guias_tramites_temas_all_lista' // or API url
            res = await axios.get(`${apiUrl}`, { headers: { 'Authorization': Basic } })
            res.data.items.map(v => routers.push(`/guia-tramites/tema/${v.id_tema}`))

            return routers
        }
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/api': {
            target: process.env.apiBaseUrl,
            pathRewrite: {
                '^/api': '',
            },
            secure: false,
            logLevel: "debug",
            changeOrigin: true,
            headers: {
                Connection: "keep-alive"
            }
        },
    },
    server: {
        port: process.env.serverPort || 3000, // default: 3000
        host: process.env.serverIp || 'localhost', // default: localhost,
        timing: false
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {

        extend(config, {
            loaders: {
                vue
            }
        }) {
            vue.transformAssetUrls.div = ['data-img-src']
        }
    },
}
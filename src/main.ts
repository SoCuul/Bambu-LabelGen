import { createApp } from 'vue'
import App from '@/App.vue'
import { anu } from 'anu-vue'

// Anu lib import
import 'uno.css'
import 'anu-vue/dist/style.css'
import '@anu-vue/preset-theme-default/dist/style.css'

// Vue toastify
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// Other stylesheets
import '@/style.css'

createApp(App)
    .use(anu as any, {
        registerComponents: false,
        initialTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '250, 100%, 62%',
                    success: '141, 93%, 35%',

                    accent: '141 93% 35%',
                    lighterGrey: '232, 6%, 35%'
                },
                cssVars: {
                    'body-bg-c': '241, 7%, 8%'
                }
            }
        }
    })
    .use(Vue3Toastify, {
        theme: 'dark',
        position: 'bottom-right',
        clearOnUrlChange: false
    } as ToastContainerOptions)
    .mount('#app')
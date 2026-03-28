import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import './style.css'
import App from './App.vue'
import router from './routes/routes.js'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
})

app.use(router)

app.mount('#app')

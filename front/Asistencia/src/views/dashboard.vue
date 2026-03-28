<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Sistema de Asistencia
        </q-toolbar-title>
        <div v-if="authStore.isAuthenticated">
          {{ authStore.user.email }}
          <q-btn flat dense icon="logout" label="Salir" @click="onLogout" class="q-ml-sm" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md flex flex-center">
        <q-card class="q-pa-lg text-center" style="min-width: 400px; max-width: 600px;">
          <q-card-section>
            <div class="text-h4 text-primary q-mb-md">¡Bienvenido!</div>
            <div class="text-body1">
              Has iniciado sesión exitosamente.<br>
              Tu correo es: <strong>{{ authStore.user.email }}</strong>
            </div>
          </q-card-section>
          
          <q-card-section>
            <div class="text-caption text-grey">
              <em>Prueba a recargar la página. ¡La sesión se mantendrá gracias a Pinia y LocalStorage!</em>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

const router = useRouter()
const authStore = useAuthStore()

const onLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

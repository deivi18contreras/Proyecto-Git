<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Iniciar Sesión</div>
            <div class="text-grey-8">Ingresa tus credenciales para continuar</div>
          </q-card-section>
          
          <q-card-section>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                filled
                v-model="email"
                type="email"
                label="Correo Institucional"
                lazy-rules
                :rules="[
                  val => val && val.length > 0 || 'Por favor ingresa tu correo',
                  val => val.endsWith('@sanjose.edu.co') || 'El correo debe terminar en @sanjose.edu.co'
                ]"
              />

              <q-input
                filled
                v-model="password"
                type="password"
                label="Contraseña"
                lazy-rules
                :rules="[
                  val => val && val.length > 0 || 'Por favor ingresa tu contraseña'
                ]"
              />

              <!-- C2: Mostrar mensaje de error (Criterio de aceptación HUS-01-T2) -->
              <div v-if="errorMessage" class="text-negative text-center text-weight-bold q-mb-md">
                {{ errorMessage }}
              </div>

              <div>
                <q-btn label="Ingresar" type="submit" color="primary" class="full-width" />
              </div>

              <!-- C3: Habilitar enlace de recuperación de contraseña (Criterio de aceptación HUS-01-T2) -->
              <div class="text-center q-mt-md">
                <router-link to="/recuperar" class="text-primary cursor-pointer" style="text-decoration: none;">
                  ¿Olvidaste tu contraseña? Recuperar aquí
                </router-link>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()
const authStore = useAuthStore()

const onSubmit = async () => {
  try {
    // Aquí se llamaría al servicio de login real en el backend en una fase posterior
    // Por ahora usamos el store para simular la persistencia y control de rutas
    if (email.value.endsWith('@sanjose.edu.co')) {
      errorMessage.value = ''
      authStore.login(email.value)
      console.log('Login exitoso con', email.value)
      router.push('/dashboard')
    } else {
      errorMessage.value = 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
    }
  } catch (error) {
    errorMessage.value = 'Ocurrió un error al intentar iniciar sesión.'
  }
}
</script>

<style scoped>
.my_card {
  width: 100%;
  max-width: 400px;
}
</style>

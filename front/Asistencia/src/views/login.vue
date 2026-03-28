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

              <div>
                <q-btn label="Ingresar" type="submit" color="primary" class="full-width" />
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

const router = useRouter()
const authStore = useAuthStore()

const onSubmit = () => {
  if (email.value.endsWith('@sanjose.edu.co')) {
    authStore.login(email.value)
    console.log('Login exitoso con', email.value)
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.my_card {
  width: 100%;
  max-width: 400px;
}
</style>

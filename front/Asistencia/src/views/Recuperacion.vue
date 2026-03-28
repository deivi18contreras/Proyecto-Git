<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Recuperar Contraseña</div>
            <div class="text-grey-8" v-if="step === 1">Ingresa tu correo institucional</div>
            <div class="text-grey-8" v-if="step === 2">Ingresa tu nueva contraseña</div>
          </q-card-section>
          
          <!-- PASO 1: Ingresar Correo -->
          <q-card-section v-if="step === 1">
            <q-form @submit="nextStep" class="q-gutter-md">
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
              <div>
                <q-btn label="Continuar" type="submit" color="primary" class="full-width" />
              </div>
              <div class="text-center q-mt-md">
                <router-link to="/login" class="text-primary" style="text-decoration: none;">
                  Volver al inicio de sesión
                </router-link>
              </div>
            </q-form>
          </q-card-section>

          <!-- PASO 2: Nueva Contraseña (Sin seguridad/tokens) -->
          <q-card-section v-else-if="step === 2">
            <q-form @submit="resetPassword" class="q-gutter-md">
              <q-input
                filled
                v-model="newPassword"
                type="password"
                label="Nueva Contraseña"
                lazy-rules
                :rules="[val => val && val.length >= 6 || 'Mínimo 6 caracteres']"
              />
              <q-input
                filled
                v-model="confirmPassword"
                type="password"
                label="Confirmar Contraseña"
                lazy-rules
                :rules="[val => val === newPassword || 'Las contraseñas no coinciden']"
              />
              <div>
                <q-btn label="Cambiar Contraseña" type="submit" color="primary" class="full-width" />
              </div>
            </q-form>
          </q-card-section>

          <!-- PASO 3: Éxito -->
          <q-card-section v-else class="text-center">
            <q-icon name="check_circle" color="positive" size="4rem" />
            <div class="text-h6 q-mt-md">¡Contraseña Actualizada!</div>
            <p class="text-grey-8">Tu contraseña ha sido cambiada exitosamente (Simulación local).</p>
            <q-btn label="Ir al Login" color="primary" to="/login" class="q-mt-md full-width" />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)
const email = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const nextStep = () => {
  // Pasamos al siguiente recuadro directamente
  step.value = 2
}

const resetPassword = () => {
  // Aquí se haría la petición al backend en un caso real
  console.log('Cambiando contraseña para:', email.value, 'a:', newPassword.value)
  step.value = 3
}
</script>

<style scoped>
.my_card {
  width: 100%;
  max-width: 400px;
}
</style>

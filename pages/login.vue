<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const loader = ref(true);

onMounted(() => {
  loader.value = false;
});

</script>

<template>

  <transition name="fade">
    <div v-if="loader" class="overlay">
      <div class="loader">
        <img alt="Loading SendGo" class="w-[40px]" src="/assets/images/logo-mini.svg" />
        <span class="icon-[svg-spinners--3-dots-scale] w-[40px] h-[40px]"></span>
      </div>
    </div>
  </transition>

  <div>
    <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div class="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)]">
          <div class="mb-8">
            <h3 class="text-gray-800 text-3xl font-bold text-center" style="color: #b1b0b0;">Inicio de sesión</h3>
            <img src="/assets/images/logo.svg" alt="logo SendGo"/>
          </div>
          <div class="mb-5">
            <label>Usuario</label>
            <IconField>
              <InputText class="w-full mt-2"/>
              <InputIcon class="pi pi-user" />
            </IconField>
          </div>
          <div class="mb-5">
            <label>Contraseña</label>
            <IconField>
              <InputText class="w-full mt-2"/>
              <InputIcon class="pi pi-eye" />
            </IconField>
          </div>
          <div class="flex justify-end">
            <div class="text-sm">
              <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold">¿Olvidaste tu contraseña? </a>
            </div>
          </div>
          <div class="!mt-8">
            <Button label="Iniciar" class="w-full"/>
          </div>

          <p class="text-sm !mt-8 text-center text-gray-800">No tienes una cuenta
            <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Regístrate aquí</a>
          </p>
        </div>
        <div class="flex justify-center md:justify-start">
          <img src="/assets/images/login-bg.png" class="w-[70%] md:w-full" alt="SendGo Iniciar" />
        </div>
      </div>
    </div>
  </div>

</template>

<style>

</style>
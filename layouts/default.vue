<script lang="ts" setup>

import MainMenu from "~/components/mainMenu.vue";

const loader = ref(true);
const menuMain = ref(true);
const menuMainMobile = ref(false);
const menu = ref();
const items = ref([
  {
    label: 'Opciones',
    items: [
      {
        label: 'Salir',
        icon: 'pi pi-sign-out'
      }
    ]
  }
]);

onMounted(() => {
  loader.value = false;
});

const toggle = (event) => {
  menu.value.toggle(event);
};
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

  <Menubar>
    <template #start>
      <div class="hidden md:flex justify-between gap-2 w-[255px]">
        <img alt="logo SendGo" class="w-[150px] pl-3" src="/assets/images/logo.svg" />
        <Button icon="pi pi-bars" severity="secondary" text @click="menuMain = !menuMain"/>
      </div>
      <div class="flex md:hidden gap-2 w-[80vw]">
        <div class="w-[10vw]">
          <Button class="w-20" icon="pi pi-bars" severity="secondary" text @click="menuMainMobile = !menuMainMobile"/>
        </div>
        <div class="flex justify-center w-[70vw]">
          <img alt="logo SendGo" class="w-[150px]" src="/assets/images/logo.svg" />
        </div>
      </div>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <Avatar image="https://avatar.iran.liara.run/username?username=Edinson Mendoza" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"/>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </template>
  </Menubar>

  <div class="my-sidebar hidden md:block w-[270px]" v-if="menuMain">
    <div class="flex flex-column h-full">
      <mainMenu />
    </div>
  </div>

  <Drawer class="" v-model:visible="menuMainMobile">
    <template #container="{ closeCallback }">
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between px-6 pt-4 shrink-0">
          <span class="inline-flex items-center gap-2">
            <img alt="logo SendGo" class="w-[130px]" src="/assets/images/logo.svg" />
          </span>
          <span>
            <Button icon="pi pi-times" outlined rounded type="button" @click="closeCallback"></Button>
          </span>
        </div>

        <mainMenu />

      </div>
    </template>
  </Drawer>

  <div class="flex pt-[55px]" :class="menuMain ? 'md:justify-self-end' : ''">
    <div class="w-full" :class="menuMain ? 'md:w-[calc(100vw-270px)]' : 'md:w-full'">
      <nuxt-page />
    </div>
  </div>

</template>

<style>

html {
  background-color: #f3f4f6;
}

.my-sidebar {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background: #ffffff;
  color: #334155;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

}

.p-menubar {
  padding: 0.5rem 2rem;
  position: fixed;
  z-index: 102;
  width: 100%;
}

.p-menubar-mobile {
  position: fixed !important;
  top: 0;
}
</style>

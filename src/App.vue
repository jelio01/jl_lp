<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import theHeaderVue from "./components/TheHeader.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";
import { onMounted } from "vue";
import { useThemeTWStore } from "./store/themeTWStore";
//import isbot from "isbot";

const theme = useThemeTWStore();
//const bot = isbot(navigator.userAgent);

onMounted(() => {
  if (
    theme.getThemeMode === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
    theme.setTheme("dark");
  } else {
    document.documentElement.classList.remove("dark");
    theme.setTheme("light");
  }
});
</script>

<template>
  <ReloadPrompt />
  <theHeaderVue />
  <div id="top"></div>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>
  <vue-cookie-accept-decline
    :debug="true"
    :disableDecline="true"
    :showPostponeButton="false"
    @clicked-accept="cookieClickedAccept"
    elementId="myPanel1"
    position="bottom"
    ref="myPanel1"
    transitionName="slideFromBottom"
    type="bar"
  >
    <!-- Optional 
      <template #postponeContent>&times;</template>
    -->
    <template #postponeContent>Coole Sache!</template>

    <!-- Optional -->
    <template #message> Diese Seite nutzt keine Cookies. </template>

    <!-- Optional 
     <template #declineContent>Opt Out</template>
    -->
    <!-- Optional -->
    <template #acceptContent>Geht klar.</template>
  </vue-cookie-accept-decline>
</template>

<script lang="ts">
const cookieClickedAccept = () => {
  console.log("Danke :)");
};
</script>
<style lang="css">
#themeSwitch {
  color: white;
}
@media (max-width: 1280px) {
  #co {
    max-width: 95%;
  }
}

h1,
div {
  cursor: default;
}

.fade-center-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
fade-leave-to {
  opacity: 0;
}
</style>

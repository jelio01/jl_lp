<script setup lang="ts">
import { useThemeTWStore } from "../store/themeTWStore";
import { VueCookieNext } from "vue-cookie-next";

const theme = useThemeTWStore();

const switchTheme = () => {
  if (theme.getThemeMode === "dark") {
    document.documentElement.classList.remove("dark");
    theme.setTheme("light");
    VueCookieNext.setCookie("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    theme.setTheme("dark");
    VueCookieNext.setCookie("theme", "dark");
  }
};

const share = () => {
  if (navigator.share) {
    navigator.share({
      title: "Jens Lindner",
      text: "Hey, Look up that guy ...",
      url: "https://jens-lindner-intro.netlify.app/",
    });
  }
};
</script>

<template>
  <!-- Jumbotron -->
  <div
    id="headerImg"
    class="center relative origin-center overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat text-center"
    :style="`
      background-image: url('./img/${theme.getTopImg}.jpg');
      height: 700px;
    `"
  >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full origin-center overflow-hidden bg-slate-900 bg-opacity-30 dark:bg-black dark:bg-opacity-30"
    ></div>
    <div class="stickyTheme">
      <button
        id="themeSwitch"
        type="button"
        :title="theme.getTitle"
        @click="switchTheme()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="theme.getTextSkyTW + ' h-6 w-6'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="theme.getIcon"
          />
        </svg>
      </button>
    </div>
    <div class="stickyShare">
      <button
        id="share"
        :class="theme.getTextSkyTW"
        @click="share"
        title="Teilen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="theme.getTextSkyTW + ' h-6 w-6'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </button>
    </div>
  </div>
  <!-- Jumbotron -->
</template>
<style scoped>
.stickyTheme {
  position: fixed;
  z-index: 10;
  top: 30px;
  right: 50px;
}
.stickyShare {
  position: fixed;
  z-index: 10;
  top: 70px;
  right: 50px;
}
</style>

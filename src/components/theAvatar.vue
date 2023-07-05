<script setup lang="ts">
import sourceData from "../data/data.json";
import { useThemeTWStore } from "../store/themeTWStore";

const theme = useThemeTWStore();
const titleTWLength = theme.getTextColorTWLength;
</script>

<template>
  <!-- Container for demo purpose -->
  <div class="container my-12 mx-auto" id="avatarCon">
    <!-- Section: Design Block -->
    <section class="mb-8 text-center text-gray-800">
      <div>
        <div class="">
          <div
            class="block h-full rounded-lg bg-white shadow-lg dark:bg-slate-900"
          >
            <div class="flex justify-center">
              <div class="flex justify-center" style="margin-top: -75px">
                
                <img src="/my_lp_logo.png" id="jl_logo" class="mx-auto rounded-full shadow-xl"
                  alt=""
                  style="width: 150px"/>
              </div>
            </div>
            <div class="p-6 dark:text-slate-200 text-gray-600">
              <h5 class="mb-4 text-2xl font-bold">
                {{ sourceData.developer.name }}
              </h5>
              <p class="mb-6">
                 <div :class="theme.getTextColorTW(Math.floor(Math.random() * Math.floor(titleTWLength)))">
                  {{ sourceData.developer.title }}
                </div>
                <div :class="theme.getTextColorTW(Math.floor(Math.random() * Math.floor(titleTWLength)))">
                  {{ sourceData.developer.job }} /
                {{ sourceData.developer.hobby }}
                </div>
               
                
              </p>
              <ul class="mx-auto flex list-inside justify-center">
                <appLink v-for="profile in sourceData.developer.profiles" :key="profile.id" :to="profile.url" class="px-2" :title="profile.title"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    :viewBox="profile.svg.viewBox"
                    class="h-4 w-4 text-blue-600 dark:text-blue-200"
                    :id="'icon_' + profile.name"
                  >
                    <path fill="currentColor" :d="profile.svg.d" />
                  </svg>
                </appLink>
                
                  <appLink :to="sourceData.developer.contact.address" class="px-2" :title="sourceData.developer.contact.title"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    :viewBox="sourceData.developer.contact.svg.viewBox"
                    class="h-4 w-4 text-blue-600 dark:text-blue-200"
                    :id="'icon_' + sourceData.developer.contact.type"
                  >
                    <path
                      fill="currentColor"
                      :d="sourceData.developer.contact.svg.d1"
                    />
                    <path
                      fill="currentColor"
                      :d="sourceData.developer.contact.svg.d2"
                    />
                  </svg></appLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>
<style lang="scss" scoped>
#avatarCon {
  margin-bottom: 0px;
}
#jl_logo {
  animation: rotation 31s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>

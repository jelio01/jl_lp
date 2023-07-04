<script setup lang="ts">
import theAvatarVue from "./theAvatar.vue";
import sourceData from "../data/data.json";
import { VueCookieNext } from "vue-cookie-next";
import skills from "./TheSkills.vue";
import apiNews from "./multi/apiNews.vue";
import { useThemeTWStore } from "../store/themeTWStore";
import tipps from "@/components/TheTipps.vue";

const theme = useThemeTWStore();
const data: any | undefined = sourceData;
</script>

<template>
  <!-- Section: Design Block -->
  <section class="text-center text-gray-800 lg:text-left">
    <div class="px-6 py-12 md:px-6">
      <div class="grid items-center gap-6 lg:grid-cols-2">
        <theAvatarVue />
        <div class="mb-12 lg:mb-0">
          <div class="mt-12 lg:mt-0">
            <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight">
              <span class="text-blue-600 dark:text-blue-200">{{
                data.developer.keyNote
              }}</span>
            </h1>
            <div class="tracking-tight text-blue-600 dark:text-blue-200">
              Willkommen
              <span v-if="VueCookieNext.isCookieAvailable('test')"
                >zurück!</span
              >
              &#9996;
            </div>
            <p :class="theme.getTextGrayTW">
              {{ data.developer.intro }}
            </p>
            <p :class="theme.getTextGrayTW">
              {{ data.developer.introFin }}
            </p>
            <p :class="theme.getTextGrayTW + ' my-2'">
              {{ data.developer.togetherMessage }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid items-center gap-3 lg:grid-cols-1">
        <skills />
      </div>
    </div>
    <div class="pb-5 text-center">
      <tipps />
    </div>
    <div class="pb-5">
      <h1 :class="theme.getHTW + ' text-3xl'">Stay Educated!</h1>
      <h2 :class="theme.getHTW + ' text-2xl'">Lernen ist das halbe Leben.</h2>
      <p :class="theme.getTextGrayTW + ' text-center'">
        Mit den zwei nachfolgenden API-Komponenten kannst du Beitrage aus der
        Web-Entwicklung oder leckere Rezepte entdecken.
      </p>
      <div
        class="grid items-center justify-center gap-12 p-5 text-center lg:grid-cols-2"
      >
        <apiNews
          v-for="api in data.apis"
          :key="api.id"
          :type="api.type"
          :name="api.name"
          :description="api.description"
          :doc-url="api.docUrl"
          :api-url1="api.url1"
          :api-url2="api.url2"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
body {
  background-color: hsl(0, 0%, 96%);
}
</style>

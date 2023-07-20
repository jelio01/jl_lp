<script setup lang="ts">
import theAvatarVue from "./theAvatar.vue";
import sourceData from "../data/data.json";
import apiNews from "./multi/apiNews.vue";
import { useThemeTWStore } from "../store/themeTWStore";
import skillBox from "./multi/skillBox.vue";

const theme = useThemeTWStore();

const data: any | undefined = sourceData;
const topics: string[] = [
  "Berufserfahrung",
  "Grundkenntnisse",
  "Werkzeuge",
  "Themen",
  "Branchen",
  "Lernplattformen",
];

const apis: string[] = ["News", "Rezepte"];

const imageFileNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

const randomiIageFileNumbers = (ar: number[]) => {
  for (let i = ar.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ar[i], ar[j]] = [ar[j], ar[i]];
  }

  return ar;
};

const randomImageFile = [...randomiIageFileNumbers(imageFileNumbers)];
const randomApiImageFile = randomImageFile.slice(6);
</script>

<template>
  <!-- Section: Design Block -->
  <section class="text-center text-gray-800 lg:text-left">
    <div class="py-12">
      <div class="grid items-center gap-6 lg:grid-cols-2">
        <theAvatarVue />
        <div class="mb-4 lg:mb-0">
          <div class="lg:mt-0">
            <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight">
              <span class="text-blue-600 dark:text-blue-200">{{
                data.developer.keyNote
              }}</span>
            </h1>
            <p :class="theme.getTextGrayTW + ' my-2'">
              {{ data.developer.intro }}
            </p>
            <p :class="theme.getTextGrayTW + ' my-2'">
              {{ data.developer.introAI }}
            </p>
            <p :class="theme.getTextGrayTW + ' my-2'">
              {{ data.developer.introFin }}&nbsp;
              {{ data.developer.togetherMessage }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid items-center gap-3 lg:grid-cols-2">
        <skillBox
          v-for="top in topics"
          :topic="top"
          :fileNumber="randomImageFile[topics.indexOf(top)]"
        />
        <apiNews
          v-for="api in apis"
          :topic="api"
          :fileNumber="randomApiImageFile[apis.indexOf(api)]"
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

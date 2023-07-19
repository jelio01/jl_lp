<script setup lang="ts">
import { inject, ref, onBeforeMount } from "vue";
import { useThemeTWStore } from "../../store/themeTWStore";
import badge from "./badge.vue";
import Immutable from "immutable";
import sourceData from "../../data/data.json";

const theme = useThemeTWStore();
const badgeTWLength = theme.getBadgeTWLength;
const coloredTWLength = theme.getTextColorTWLength;

const badgeTW = ref(
  theme.getBadgeTW(Math.floor(Math.random() * Math.floor(badgeTWLength)))
);
const coloredTW = ref(
  theme.getTextColorTW(Math.floor(Math.random() * Math.floor(coloredTWLength)))
);
//--------------------------------------------------------
const titleFromApi = ref("");
const urlromApi = ref("");
//--------------------------------------------------------
const axios: any = inject("axios");
//--------------------------------------------------------
const props = defineProps({
  topic: { type: String, required: true },
  fileNumber: { type: Number, required: true },
});

const bgUrl: string = "url(/img/" + props.fileNumber + ".jpg)";

const name =
  props.topic === "News" ? sourceData.apis[0].name : sourceData.apis[1].name;
const apiUrl1 =
  props.topic === "News" ? sourceData.apis[0].url1 : sourceData.apis[1].url1;
const apiUrl2 =
  props.topic === "News" ? sourceData.apis[0].url2 : sourceData.apis[1].url2;

const imgCaption = sourceData.boxImgCap.filter(
  (e) => e.id === Number(props.fileNumber)
)[0].name;

onBeforeMount(() => {
  callApi();
});

//--------------------------------------------------------
const callApi = async () => {
  if (props.topic === "News") {
    axios.get(apiUrl1).then((response: { data: Array<number> }) => {
      const stories: any | undefined = Immutable.List(response.data);

      if (stories.size > 0) {
        const storyUrl = apiUrl2.replace(
          "<REPLACEME>",
          stories
            .get(Math.floor(Math.random() * Math.floor(stories.size)))
            .toString()
        );

        axios.get(storyUrl).then((response: { data: any }) => {
          titleFromApi.value = new String(response.data.title).replace(
            "Show HN:",
            ""
          );
          urlromApi.value = response.data.url;
          badgeTW.value = theme.getBadgeTW(
            Math.floor(Math.random() * Math.floor(badgeTWLength))
          );

          coloredTW.value = theme.getTextColorTW(
            Math.floor(Math.random() * Math.floor(coloredTWLength))
          );
        });
      }
    });
  } else if (props.topic === "Rezepte") {
    axios.get(apiUrl1).then((response: { data: any }) => {
      titleFromApi.value = response.data.meals[0].strMeal;
      urlromApi.value = response.data.meals[0].strSource;
      badgeTW.value = theme.getBadgeTW(
        Math.floor(Math.random() * Math.floor(badgeTWLength))
      );

      coloredTW.value = theme.getTextColorTW(
        Math.floor(Math.random() * Math.floor(coloredTWLength))
      );
    });
  }
};
</script>

<template>
  <figure v-if="titleFromApi.length > 0">
    <div
      class="m-2 rounded bg-white bg-cover text-center shadow-lg dark:bg-slate-900"
      :style="{ 'background-image': bgUrl, height: 400 + 'px' }"
    >
      <h1
        class="mt-5 ml-5 mr-5 border-b border-slate-600 pt-2 text-2xl font-bold leading-tight tracking-tight text-slate-600"
      >
        {{ name }}
      </h1>

      <div class="pt-10 lg:mb-0">
        <div class="lg:mt-0">
          <badge :message="titleFromApi" :link="urlromApi" :tw="badgeTW" />
        </div>
        <a
          class="mx-auto flex list-inside justify-center pt-5"
          @click="callApi"
          :title="name + ' aktualisieren'"
          :alt="name + ' aktualisieren'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            :class="coloredTW + 'h-6 w-6'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </a>
      </div>
    </div>
    <figcaption :class="theme.getTextGrayTW + ' text-center'">
      {{ imgCaption }}
    </figcaption>
  </figure>
  <div v-else class="text-center">
    <i class="text-yellow-600 dark:text-yellow-200"
      >API-Komponente nicht verfügbar</i
    >
  </div>
</template>
<style lang="scss" scoped>
a {
  width: fit-content;
}

a svg {
  cursor: pointer;
}
</style>

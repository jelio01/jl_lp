<script setup lang="ts">
import { inject, ref, onBeforeMount } from "vue";
import { useThemeTWStore } from "../../store/themeTWStore";
import badge from "./badge.vue";
import Immutable from "immutable";

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
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  docUrl: { type: String, required: true },
  apiUrl1: { type: String, required: true },
  apiUrl2: { type: String, required: true },
});

const docSourceNoProtocoll: string = new String(props.docUrl).replace(
  "https://",
  ""
);

onBeforeMount(() => {
  callApi();
});

//--------------------------------------------------------
const callApi = async () => {
  if (props.type === "News") {
    axios.get(props.apiUrl1).then((response: { data: Array<number> }) => {
      const stories: any | undefined = Immutable.List(response.data);

      if (stories.size > 0) {
        const storyUrl = props.apiUrl2.replace(
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
  } else if (props.type === "Meals") {
    axios.get(props.apiUrl1).then((response: { data: any }) => {
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
  <div v-if="titleFromApi.length > 0" class="mt-12 text-center">
    <h1 :class="theme.getHTW">
      {{ props.name }}
    </h1>
    <div class="lg:mb-0">
      <div class="lg:mt-0">
        <badge :message="titleFromApi" :link="urlromApi" :tw="badgeTW" />
      </div>
      <i :class="theme.textGrayTW"
        >(Quelle:
        <a :href="props.docUrl" target="_blank" :title="docSourceNoProtocoll">{{
          docSourceNoProtocoll
        }}</a
        >)</i
      >
      <a
        class="mx-auto flex list-inside justify-center pt-5"
        @click="callApi"
        :title="props.name + ' aktualisieren'"
        :alt="props.name + ' aktualisieren'"
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
  <div v-else>
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

<script setup lang="ts">
import { useThemeTWStore } from "../../store/themeTWStore";
import badge from "./badge.vue";
import sourceData from "../../data/data.json";

const theme = useThemeTWStore();

const props = defineProps({
  topic: { type: String, required: true },
  fileNumber: { type: Number, required: true },
});

const imgCaption = sourceData.boxImgCap.filter(
  (e) => e.id === Number(props.fileNumber)
)[0].name;

const bgUrl: string = "url(/img/" + props.fileNumber + ".jpg)";
let list: Array<{ id: number; name: string; url: string }>;

if (props.topic === "Berufserfahrung") {
  list = sourceData.developer.knowledge;
} else if (props.topic === "Grundkenntnisse") {
  list = sourceData.developer.basics;
} else if (props.topic === "Branchen") {
  list = sourceData.branches;
} else if (props.topic === "Lernplattformen") {
  list = sourceData.developer.learning;
} else if (props.topic === "Werkzeuge") {
  list = sourceData.developer.tools;
} else if (props.topic === "Themen") {
  list = sourceData.developer.topics;
}
</script>

<template>
  <figure>
    <div
      class="m-2 rounded bg-white bg-cover text-center shadow-lg dark:bg-slate-900"
      :style="{ 'background-image': bgUrl, height: 400 + 'px' }"
    >
      <h1
        class="text-shadow-sm mt-5 ml-5 mr-5 border-b border-slate-600 pt-2 text-2xl font-bold leading-tight tracking-tight text-slate-600"
      >
        {{ props.topic }}
      </h1>
      <div class="flex flex-wrap items-center justify-center p-2">
        <badge
          :message="item.name"
          :link="item.url"
          v-for="item in list"
          :key="item.id"
        />
      </div>
    </div>
    <figcaption :class="theme.getTextGrayTW + ' text-center'">
      {{ imgCaption }}
    </figcaption>
  </figure>
</template>

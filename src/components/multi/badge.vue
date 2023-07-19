<script setup lang="ts">
import { ref, onUpdated } from "vue";
const props = defineProps({
  message: { type: String, required: true },
  link: { type: String, required: true },
});

let linkTitle = ref("");

if (
  props.message.startsWith("YouTube") ||
  props.message.startsWith("Udemy") ||
  props.message.startsWith("Vue School") ||
  props.message.startsWith("JS Hero") ||
  props.message.startsWith("Bing")
) {
  linkTitle = ref("Lernen mit " + props.message);
} else {
  linkTitle = ref("Weiterführende Informationen zu " + props.message);
}

onUpdated(() => {
  linkTitle.value = props.message;
});
</script>

<template>
  <div
    class="hover:bg-white-300 m-2 inline-flex items-center rounded-full border-white bg-slate-100 bg-opacity-80 px-3 py-1 font-semibold text-gray-500 drop-shadow dark:bg-slate-100 dark:text-gray-500 dark:hover:bg-gray-200"
  >
    <span class="ml-1">
      <appLink :to="props.link" :title="linkTitle">{{ props.message }}</appLink>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from "vue";
const props = defineProps({
  message: { type: String, required: true },
  link: { type: String, required: true },
  tw: {
    type: String,
    required: true,
  },
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
} else if (props.message.startsWith("Dev")) {
  linkTitle = ref("Weiterführende Informationen zum " + props.message);
} else {
  linkTitle = ref("Weiterführende Informationen zu " + props.message);
}

onUpdated(() => {
  linkTitle.value = props.message;
});
</script>

<template>
  <div :class="props.tw">
    <span class="ml-1">
      <appLink :to="props.link" :title="linkTitle">{{ props.message }}</appLink>
    </span>
  </div>
</template>

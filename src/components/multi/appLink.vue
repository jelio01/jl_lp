<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const cProps = defineProps({
  // @ts-ignore
  ...RouterLink.props,
});

const isExternalLink = computed(
  () =>
    typeof cProps.to === "string" &&
    (cProps.to.startsWith("http") || cProps.to.startsWith("mailTo"))
);
</script>

<template>
  <a
    v-if="isExternalLink"
    :href="cProps.to"
    :title="cProps.title"
    :class="cProps.class"
    target="_blank"
    ><slot
  /></a>
  <router-link
    v-else
    :to="cProps.to"
    :title="cProps.title"
    :class="cProps.class"
    ><slot
  /></router-link>
</template>

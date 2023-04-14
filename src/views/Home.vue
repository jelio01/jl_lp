<script setup lang="ts">
import homeContent from "@/components/theHomeContent.vue";
import { useThemeTWStore } from "@/store/themeTWStore";

const theme = useThemeTWStore();
const aTWLength = theme.getTextColorTWLength;

const aiTW = theme.getTextColorTW(
  Math.floor(Math.random() * Math.floor(aTWLength))
);
</script>

<template>
  <div>
    <div
      id="co"
      class="container my-6 mx-auto mb-16 rounded-lg bg-slate-100 px-6 tracking-tight shadow-lg dark:bg-slate-700"
    >
      <homeContent id="home" />
    </div>
    <div class="mb-32 items-center p-5 text-center">
      <appLink
        :to="{ name: 'Impressum' }"
        title="Impressum & Datenschutz"
        :class="aiTW"
        >Impressum & Datenschutz</appLink
      >
    </div>
  </div>
</template>

<style scoped>
#share {
  cursor: pointer;
}
</style>

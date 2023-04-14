<script setup lang="ts">
import impressumContent from "@/components/theImpressumContent.vue";
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
      <impressumContent id="impressum" />
    </div>
    <div class="mb-32 items-center p-5 text-center">
      <appLink :to="{ name: 'Home' }" title="Hautseite" :class="aiTW"
        >Hauptseite</appLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeTWStore } from "../store/themeTWStore";
import refLinks from "@/data/data.json";

const theme = useThemeTWStore();
const tippsTWLength = theme.getTextColorTWLength;
</script>
<template>
    <section class="mb-8">
    <p :class="theme.getTextGrayTW">
      <ul>
        <li v-for="tipp in refLinks.tipps" :key="tipp.id">
          {{tipp.desc}}<br/>&#128073;&nbsp;
          <appLink :to="tipp.url" :class="theme.getTextColorTW(Math.floor(Math.random() * Math.floor(tippsTWLength)))" :title="tipp.name">{{ tipp.name }}</appLink>
        </li>
        </ul>
      </p>
  </section>
</template>

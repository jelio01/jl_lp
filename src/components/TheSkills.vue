<script setup lang="ts">
import sourceData from "../data/data.json";
import { useThemeTWStore } from "../store/themeTWStore";
import badge from "./multi/badge.vue";

const theme = useThemeTWStore();
const badgeThemeLength = theme.getBadgeTWLength;
const data: any | undefined = sourceData;
</script>

<template>
  <h1 :class="theme.getHTW">Aktuelle Interessen</h1>
  <div class="flex flex-wrap items-center justify-center">
    <badge
      :message="interest.name"
      :link="interest.url"
      :tw="
        theme.getBadgeTW(
          Math.floor(Math.random() * Math.floor(badgeThemeLength))
        )
      "
      v-for="interest in data.developer.interests"
      :key="interest.id"
    />
  </div>
  <h1 :class="theme.getHTW">Berufserfahrung in</h1>
  <div class="flex flex-wrap items-center justify-center">
    <badge
      :message="knowledge.name"
      :link="knowledge.url"
      :tw="
        theme.getBadgeTW(
          Math.floor(Math.random() * Math.floor(badgeThemeLength))
        )
      "
      v-for="knowledge in data.developer.knowledge"
      :key="knowledge.id"
    />
  </div>
  <h1 :class="theme.getHTW">Berührungspunkte mit</h1>
  <div class="flex flex-wrap items-center justify-center">
    <badge
      :message="basic.name"
      :link="basic.url"
      :tw="
        theme.getBadgeTW(
          Math.floor(Math.random() * Math.floor(badgeThemeLength))
        )
      "
      v-for="basic in data.developer.basics"
      :key="basic.id"
    />
  </div>
  <h1 :class="theme.getHTW">Branchen</h1>
  <div class="flex flex-wrap items-center justify-center">
    <badge
      :message="branches.name"
      :link="branches.url"
      :tw="
        theme.getBadgeTW(
          Math.floor(Math.random() * Math.floor(badgeThemeLength))
        )
      "
      v-for="branches in data.branches"
      :key="branches.id"
    />
  </div>
  <h1 :class="theme.getHTW">Wo ich lerne</h1>
  <div class="flex flex-wrap items-center justify-center">
    <badge
      :message="learning.name"
      :link="learning.url"
      :tw="
        theme.getBadgeTW(
          Math.floor(Math.random() * Math.floor(badgeThemeLength))
        )
      "
      v-for="learning in data.developer.learning"
      :key="learning.id"
    />
  </div>
</template>

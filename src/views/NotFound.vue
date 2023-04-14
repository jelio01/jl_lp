<script setup lang="ts">

import { useThemeTWStore } from "@/store/themeTWStore";

const theme = useThemeTWStore();
const aTWLength = theme.getTextColorTWLength;

const aiTW = theme.getTextColorTW(
  Math.floor(Math.random() * Math.floor(aTWLength))
);
</script>

<template>
    <div>
        <p class="items-center p-5 text-center text-5xl">
            <h1 :class="theme.getTextGrayTW">Seite existiert nicht</h1>
        </p>
        
        <p :class="aiTW">
            <div class="mb-32 items-center p-5 text-center">
                <RouterLink :to="{ path: '/home' }" :class="aiTW">Zurück zur  Hauptseite</RouterLink>
            </div>
        </p>
    </div>
</template>
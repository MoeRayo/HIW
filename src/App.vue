<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <header>
    <div class="">
      <TheNavigation />
    </div>
  </header>

  <RouterView />
</template>

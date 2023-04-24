<script setup lang="ts">
import { RouterLink } from 'vue-router';
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <header>
    <div class="">
      <TheNavigation/>
      <nav>

        <RouterLink to="/">Home</RouterLink>
        
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="">
      <TheHeader/>
      <nav>

        <RouterLink to="/">Home</RouterLink>
        
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>


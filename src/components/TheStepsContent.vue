<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    stepsTitle: {
      type: String as PropType<string>,
      required: true,
    },
    stepsContent: {
      type: String as PropType<string>,
      required: true,
    },
    stepNumber: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
<template>
  <div class="md:w-1/4 relative">
    <h2
      class="text-white text-2xl my-4 uppercase font-bold underline decoration-rose-100"
    >
      {{ stepsTitle }}
    </h2>
    <p class="text-white tracking-wide text-medium z-50">
      {{ stepsContent }}
    </p>
    <p class="text-8xl font-black text-rose-400 absolute top-16 right--8">
      {{ stepNumber }}
    </p>
  </div>
</template>

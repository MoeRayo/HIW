<script setup lang="ts">
import TheStepsContent from "@/components/TheStepsContent.vue";
</script>
<template>
  <div class="bg-rose-500 py-14 px-3">
    <div
      class="flex justify-center md:justify-around w-4/5 m-auto flex-col md:flex-row justify-center"
    >
      <TheStepsContent
        stepsContent="Talk to us! Whether you need a solution for a simple or heavy project, simply write us an email at hello@minerios.io, telling us how we can help you."
        stepNumber="1"
        stepsTitle="Talk to us"
      />

      <TheStepsContent
        stepsContent="We have a competent team and someone will reach out to you to understand how e may be of help and discuss more about how we can help you solve your cloud problems."
        stepNumber="2"
        stepsTitle="We fix a demo"
      />

      <TheStepsContent
        stepsContent="Just like that, we will work together to resolve all your problems and help you get back into delivering perium services to your users."
        stepNumber="3"
        stepsTitle="Get back to business"
      />

      <!-- <div class="w-1/4">
        <img
          src="@/assets/email.png"
          alt=""
          class="p-1 bg-rose-400 rounded-3xl"
        />
        <h2
          class="text-white text-2xl my-4 uppercase font-bold underline decoration-rose-100"
        >
          Send us a mail
        </h2>
        <p class="text-white tracking-wide text-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          sint rem quia iste dolorum libero qui, asperiores possimus suscipit
          deleniti? Ratione optio ad ut labore omnis, aspernatur obcaecati
          beatae molestiae.
        </p>
      </div>
      <div class="w-1/4">
        <img
          src="@/assets/email.png"
          alt=""
          class="p-1 bg-rose-400 rounded-3xl"
        />
        <h2
          class="text-white text-2xl my-4 uppercase font-bold underline decoration-rose-100"
        >
          Send us a mail
        </h2>
        <p class="text-white tracking-wide text-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          sint rem quia iste dolorum libero qui, asperiores possimus suscipit
          deleniti? Ratione optio ad ut labore omnis, aspernatur obcaecati
          beatae molestiae.
        </p>
      </div> -->
    </div>
  </div>
</template>

<template>
  <div class="p-4 h-full grid place-content-center gap-10 mx-auto">
    <div class="w-1/2 flex justify-center mx-auto">
      <img :src="Error404" alt="404 Page" />
    </div>

    <p class="md:text-2xl text-center">
      The page <b>{{ $route.fullPath }}</b> doesn't exist
    </p>

    <div class="mb-10 md:mb-0 flex justify-around items-center gap-5">
      <button @click="$router.back()"><i class="fa fa-arrow-left"></i> Go Back</button>
      <button @click="$router.push('/')"><i class="fa fa-home"></i> Go Home</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Error404 from "../assets/images/404.svg";
</script>

<style></style>

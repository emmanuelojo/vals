<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <div class="container relative w-screen h-screen">
    <div class="w-full flex justify-center">
      <ConfettiExplosion :duration="5000" :stageWidth="width" />
    </div>

    <div>
      <h1 class="header_text">Hurrayyyy!!</h1>
    </div>
    <div class="gif_container">
      <img src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Cute animated illustration" />
    </div>

    <div class="absolute bottom-0 left-0">
      <img src="/src/assets/images/bear.gif" />
    </div>

    <div class="absolute top-0 right-0">
      <img src="/src/assets/images/heart-string.gif" />
    </div>
  </div>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(189, 225, 122);
}

.header_text {
  font-family: "Nunito";
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
}

.gif_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

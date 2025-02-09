<script setup lang="ts">
import { useRouter } from "vue-router";
import { useWindowSize } from "@vueuse/core";

const router = useRouter();
const { width, height } = useWindowSize();

function nextPage() {
  // window.location.href = "yes.html";
  router.push("/yes");
}

function moveButton() {
  // var x = Math.random() * (window.innerWidth - document.getElementById("noButton").offsetWidth) - 85;
  // var y = Math.random() * (window.innerHeight - document.getElementById("noButton").offsetHeight) - 48;

  var x = Math.random() * (width.value - document.getElementById("noButton").offsetWidth) - 85;
  var y = Math.random() * (height.value - document.getElementById("noButton").offsetHeight) - 48;

  const formattedX = x < 0 ? 50 : x >= width.value - 200 ? 50 : x;
  const formattedY = y < 0 ? 50 : y >= height.value - 200 ? 50 : y;

  document.getElementById("noButton").style.position = "absolute";
  document.getElementById("noButton").style.left = `${formattedX}px`;
  document.getElementById("noButton").style.top = `${formattedY}px`;

  console.log(`x: ${x}px`);
  console.log(`y: ${y}px`);
}

const name = localStorage.getItem("name") ?? "boo";
</script>

<template>
  <div class="container">
    <div>
      <h1 class="header_text">Hey {{ name }},{{ width + " ;:: " + height }}</h1>
      <h1 class="header_text">Do you wanna go out with me?</h1>
      <h1 class="header_text">Are you free tommorow?</h1>
    </div>
    <div class="gif_container">
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
        alt="Cute animated illustration"
      />
    </div>
    <div class="buttons">
      <button class="btn" id="yesButton" @click="nextPage">Yes</button>
      <button class="btn" id="noButton" @mouseover="moveButton" @click="moveButton">No</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100%;
  border: 2px solid red;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border: 2px solid white;
}

#noButton {
  /* position: absolute; */
  /* margin-left: 150px; */
  transition: 0.5s;
}

#yesButton {
  /* position: absolute; */
  /* margin-right: 150px; */
}

.header_text {
  font-family: "Nunito";
  font-size: 40px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
}

.btn {
  background-color: #ffffff;
  color: rgb(233, 48, 48);
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.gif_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* @media only screen and (max-width: 320px) and (max-height: 568px) {
  body {
    height: 100vh;
  }

  .header_text {
    font-size: 20px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 10px 18px;
    font-size: 12px;
  }
}

@media only screen and (max-width: 414px) and (max-height: 736px) {
  body {
    height: 90vh;
  }

  .header_text {
    font-size: 28px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 15px 25px;
    font-size: 14px;
  }
} */
</style>

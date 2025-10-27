<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import codepenHomepage   from '@/components/codepen-homepage.vue'

const animation1 = ref({ name: '', description: '', html: '', css: '' });
const animation2 = ref({ name: '', description: '', html: '', css: '' });
const animation3 = ref({ name: '', description: '', html: '', css: '' });

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/show/animation/68f0eb2d306db32434f6c51f`);
    animation1.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  }

  try {
    const response = await axios.get(`http://localhost:3000/show/animation/68f0f871306db32434f6c529`);
    animation2.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  }

  try {
    const response = await axios.get(`http://localhost:3000/show/animation/68f20ec584f9961cdc2eca6f`);
    animation3.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  }
});
</script>

<script>
import codepen2 from '@/components/codepen2.vue';
import MouseScroll from "@/components/MouseScroll.vue";

export default {
  components: {
    codepen2,
    MouseScroll
  }
}
</script>

<template>

  <div class="HomeStart">
    <div class="alignStart">
      <h1 id="welcome">WELCOME</h1>
      <h1 id="on">ON</h1>
      <h1 id="animflow">ANIMFLOW</h1>
    </div>
    <div id="introText">
      <p>Welcome to AnimFlow, the platform dedicated to HTML and CSS animation presets.
        Whether you're a beginner or an experienced developer, you'll find a library of ready-to-use effects to easily
        enhance your web projects.
        Explore, test live, and customise each animation to suit your style. 🚀✨</p>
    </div>
    <div id="scrollDown">
      <MouseScroll />
    </div>

  </div>
  <div id="bestAnimationsTitle">
    <h2>Best animations of the moment </h2>
  </div>
  <div id="exampleAnimationTitle">
    <h3>Loading Circle</h3>
    <div id="line"></div>
  </div>
  <div class="codeSection">
    <div class="codeSnippetSection">
      <div class="codeSnippet">
        <pre>
      <code class="language-css">

      div {
        width: 50px;
        height: 50px;
        background: black;
        animation: move 2s linear;
      }

      @keyframes move {
        0% { transform: translateX(0); }
        100% { transform: translateX(200px); }
      }

      </code>
    </pre>
      </div>
      <div class="animation">

        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#E2007C" />
          <circle cx="170" cy="170" r="135" stroke="#404041" />
          <circle cx="170" cy="170" r="110" stroke="#E2007C" />
          <circle cx="170" cy="170" r="85" stroke="#404041" />
        </svg>

      </div>
    </div>
    <div id="codepen">
      <codepen-homepage :initial-data="animation1"/>
    </div>
  </div>


  <div id="exampleAnimationTitle">
    <h3>Loading Circle</h3>
    <div id="line"></div>
  </div>
  <div class="codeSection">
    <div class="codeSnippetSection">
      <div class="codeSnippet">
        <pre>
      <code class="language-css">

      div {
        width: 50px;
        height: 50px;
        background: black;
        animation: move 2s linear;
      }

      @keyframes move {
        0% { transform: translateX(0); }
        100% { transform: translateX(200px); }
      }

      </code>
    </pre>
      </div>
      <div id="animation">
      </div>
    </div>
    <div id="codepen">
      <codepen-homepage :initial-data="animation2"/>
    </div>
  </div>


  <div id="exampleAnimationTitle">
    <h3>Loading Circle</h3>
    <div id="line"></div>
  </div>
  <div class="codeSection">
    <div class="codeSnippetSection">
      <div class="codeSnippet">
        <pre>
      <code class="language-css">

      div {
        width: 50px;
        height: 50px;
        background: black;
        animation: move 2s linear;
      }

      @keyframes move {
        0% { transform: translateX(0); }
        100% { transform: translateX(200px); }
      }

      </code>
    </pre>
      </div>
      <div id="animation">
      </div>
    </div>
    <div id="codepen">
      <codepen-homepage :initial-data="animation3"/>
    </div>
  </div>







</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&display=swap');
/* Titres  */
@import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
/* Sous - Titres  */
@import url('https://fonts.googleapis.com/css2?family=GFS+Neohellenic:ital,wght@0,400;0,700;1,400;1,700&display=swap');
/* Textes  */
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
/* Code  */

.bbh-sans-hegarty-regular {
  font-family: "BBH Sans Hegarty", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.rammetto-one-regular {
  font-family: "Rammetto One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.gfs-neohellenic-regular {
  font-family: "GFS Neohellenic", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.google-sans-code {
  font-family: "Google Sans Code", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

:root {
  --darkblue: #14007a;
  --blue: #1a009c;
  --lightblue: rgb(74, 255, 255);
  --pink: rgb(255, 40, 113);
}

body {

  background-image: linear-gradient(45deg, var(--lightblue), var(--blue));
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}


.HomeStart {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 170px;
}

.alignStart {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.HomeStart h1 {
  font-size: 6rem;
  color: white;
  font-family: "BBH Sans Hegarty", sans-serif;
  /* letter-spacing: .7rem; */
}

#introText {
  width: 60%;
  margin-top: 60px;
  text-align: center;
  font-family: "GFS Neohellenic", sans-serif;
  font-size: 1.5rem;
  color: white;
}

#scrollDown {
  transform: translateY(55px);
}


#bestAnimationsTitle h2 {
  font: 900 3.5rem 'Rammetto One', cursive;
  color: white;
  margin-top: 100px;
}

#exampleAnimationTitle h3 {
  font: 900 3rem 'Rammetto One', cursive;
  color: white;
  margin-top: 80px;
  margin-left: 2rem;
}

#line {
  width: 40rem;
  height: 4px;
  background-color: white;
  margin-top: 10px;
  margin-left: 2rem;
}

.codeSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  padding-bottom: 30px;

}

.codeSnippetSection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;


}

.codeSnippet {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 10px;
  /* margin: 40px auto; */
  width: 40%;
  max-width: 800px;
  color: #00ffea;
  font-family: "Google Sans Code", monospace;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

code,
pre {
  user-select: text;
  cursor: text;
}


#animation {
  width: 150px;
  height: 150px;
  background: black;
  animation: move 2s linear infinite;
  margin-top: 20px;
}


@keyframes move {
  0% {
    transform: translateX(-300px);
  }

  100% {
    transform: translateX(100px);
  }
}


.animation {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

.loader {
  max-width: 15rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
}

circle {
  fill: none;
  stroke-width: 3.5;
  animation-name: preloader;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 170px 170px;
  will-change: transform;
}

circle:nth-of-type(1) {
  stroke-dasharray: 550px;
}

circle:nth-of-type(2) {
  stroke-dasharray: 500px;
}

circle:nth-of-type(3) {
  stroke-dasharray: 450px;
}

circle:nth-of-type(4) {
  stroke-dasharray: 300px;
}

circle:nth-of-type(1) {
  animation-delay: -0.15s;
}

circle:nth-of-type(2) {
  animation-delay: -0.3s;
}

circle:nth-of-type(3) {
  animation-delay: -0.45s;
}

circle:nth-of-type(4) {
  animation-delay: -0.6s;
}

@keyframes preloader {
  50% {
    transform: rotate(360deg);
  }
}
</style>

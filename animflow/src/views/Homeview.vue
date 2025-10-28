<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import codepenHomepage from '@/components/codepen-homepage.vue'

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
      <codepen-homepage :initial-data="animation1" />
    </div>
  </div>


  <div id="exampleAnimationTitle">
    <h3>Mail Button</h3>
    <div id="line"></div>
  </div>
  <div class="codeSection">
    <div class="codeSnippetSection">
      <div class="codeSnippet">
        <pre>
      <code class="language-css">

      .letter-image {
        margin-left: 5%;
        top: 50%;
        left: 100%;
        width: 200px;
        height: 200px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -10%);
        cursor: pointer;
      }

      .animated-mail {
        position: absolute;
        height: 150px;
        width: 200px;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        transition: 0.4s;
      }

      .animated-mail .body {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 100px 200px;
        border-color: transparent transparent #e95f55 transparent;
        z-index: 2;
      }

      .animated-mail .top-fold {
        position: absolute;
        top: 50px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 100px 0 100px;
        -webkit-transform-origin: 50% 0%;
        -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
        -moz-transform-origin: 50% 0%;
        -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
        transform-origin: 50% 0%;
        transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
        border-color: #cf4a43 transparent transparent transparent;
        z-index: 2;
      }

      .animated-mail .back-fold {
        position: absolute;
        bottom: 0;
        width: 200px;
        height: 100px;
        background: #cf4a43;
        z-index: 0;
      }

      .animated-mail .left-fold {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 0 50px 100px;
        border-color: transparent transparent transparent #e15349;
        z-index: 2;
      }

      .animated-mail .letter {
        left: 20px;
        bottom: 0px;
        position: absolute;
        width: 160px;
        height: 60px;
        background: white;
        z-index: 1;
        overflow: hidden;
        -webkit-transition: 0.4s 0.2s;
        -moz-transition: 0.4s 0.2s;
        transition: 0.4s 0.2s;
      }

      .animated-mail .letter .letter-border {
        height: 10px;
        width: 100%;
        background: repeating-linear-gradient(-45deg, #cb5a5e, #cb5a5e 8px, transparent 8px, transparent 18px);
      }

      .animated-mail .letter .letter-title {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 40%;
        background: #cb5a5e;
      }

      .animated-mail .letter .letter-context {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 20%;
        background: #cb5a5e;
      }

      .animated-mail .letter .letter-stamp {
        margin-top: 30px;
        margin-left: 120px;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        background: #cb5a5e;
        opacity: 0.3;
      }

      .shadow {
        position: absolute;
        top: 200px;
        left: 50%;
        width: 400px;
        height: 30px;
        transition: 0.4s;
        transform: translateX(-50%);
        -webkit-transition: 0.4s;
        -webkit-transform: translateX(-50%);
        -moz-transition: 0.4s;
        -moz-transform: translateX(-50%);
        border-radius: 100%;
        background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));
      }

      .letter-image:hover .animated-mail {
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
      }

      .letter-image:hover .animated-mail .top-fold {
        transition: transform 0.4s, z-index 0.2s;
        transform: rotateX(180deg);
        -webkit-transition: transform 0.4s, z-index 0.2s;
        -webkit-transform: rotateX(180deg);
        -moz-transition: transform 0.4s, z-index 0.2s;
        -moz-transform: rotateX(180deg);
        z-index: 0;
      }

      .letter-image:hover .animated-mail .letter {
        height: 180px;
      }

      .letter-image:hover .shadow {
        width: 250px;
      }

      </code>
    </pre>
      </div>
      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
    <div id="codepen">
      <codepen-homepage :initial-data="animation2" />
    </div>
  </div>


  <div id="exampleAnimationTitle">
    <h3>Speedy Truck</h3>
    <div id="line"></div>
  </div>
  <div class="codeSection">
    <div class="codeSnippetSection">
      <div class="codeSnippet">
        <pre>
      <code class="language-css">

      .loop-wrapper {
        position: relative;
        display: block;
        width: 325px;
        height: 250px;
        overflow: hidden;
        border-bottom: 3px solid #fff;
        color: #fff;
      }

      .mountain {
        position: absolute;
        right: -900px;
        bottom: -20px;
        width: 2px;
        height: 2px;
        box-shadow:
          0 0 0 50px #4DB6AC,
          60px 50px 0 70px #4DB6AC,
          90px 90px 0 50px #4DB6AC,
          250px 250px 0 50px #4DB6AC,
          290px 320px 0 50px #4DB6AC,
          320px 400px 0 50px #4DB6AC;
        transform: rotate(130deg);
        animation: mtn 20s linear infinite;
      }

      .hill {
        position: absolute;
        right: -900px;
        bottom: -50px;
        width: 400px;
        border-radius: 50%;
        height: 20px;
        box-shadow:
          0 0 0 50px #4DB6AC,
          -20px 0 0 20px #4DB6AC,
          -90px 0 0 50px #4DB6AC,
          250px 0 0 50px #4DB6AC,
          290px 0 0 50px #4DB6AC,
          620px 0 0 50px #4DB6AC;
        animation: hill 4s 2s linear infinite;
      }

      .tree,
      .tree:nth-child(2),
      .tree:nth-child(3) {
        position: absolute;
        height: 100px;
        width: 35px;
        bottom: 0;
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat;
      }

      .rock {
        margin-top: -17%;
        height: 2%;
        width: 2%;
        bottom: -2px;
        border-radius: 20px;
        position: absolute;
        background: #ddd;
      }

      .truck,
      .wheels {
        transition: all ease;
        width: 85px;
        margin-right: -60px;
        bottom: 0px;
        right: 50%;
        position: absolute;
        background: #eee;
      }

      .truck {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;
        background-size: contain;
        height: 60px;
      }

      .truck:before {
        content: " ";
        position: absolute;
        width: 25px;
        box-shadow:
          -30px 28px 0 1.5px #fff,
          -35px 18px 0 1.5px #fff;
      }

      .wheels {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;
        height: 15px;
        margin-bottom: 0;
      }

      .tree {
        animation: tree 3s 0.000s linear infinite;
      }

      .tree:nth-child(2) {
        animation: tree2 2s 0.150s linear infinite;
      }

      .tree:nth-child(3) {
        animation: tree3 8s 0.050s linear infinite;
      }

      .rock {
        animation: rock 4s -0.530s linear infinite;
      }

      .truck {
        animation: truck 4s 0.080s ease infinite;
      }

      .wheels {
        animation: truck 4s 0.001s ease infinite;
      }

      .truck:before {
        animation: wind 1.5s 0.000s ease infinite;
      }


      @keyframes tree {
        0% {
          transform: translate(1350px);
        }

        50% {}

        100% {
          transform: translate(-50px);
        }
      }

      @keyframes tree2 {
        0% {
          transform: translate(650px);
        }

        50% {}

        100% {
          transform: translate(-50px);
        }
      }

      @keyframes tree3 {
        0% {
          transform: translate(2750px);
        }

        50% {}

        100% {
          transform: translate(-50px);
        }
      }

      @keyframes rock {
        0% {
          right: -200px;
        }

        100% {
          right: 2000px;
        }
      }

      @keyframes truck {
        0% {}

        6% {
          transform: translateY(0px);
        }

        7% {
          transform: translateY(-6px);
        }

        9% {
          transform: translateY(0px);
        }

        10% {
          transform: translateY(-1px);
        }

        11% {
          transform: translateY(0px);
        }

        100% {}
      }

      @keyframes wind {
        0% {}

        50% {
          transform: translateY(3px)
        }

        100% {}
      }

      @keyframes mtn {
        100% {
          transform: translateX(-2000px) rotate(130deg);
        }
      }

      @keyframes hill {
        100% {
          transform: translateX(-2000px);
        }
      }

      </code>
    </pre>
      </div>
      <div class="loop-wrapper">
        <div class="mountain"></div>
        <div class="hill"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="rock"></div>
        <div class="truck"></div>
        <div class="wheels"></div>
      </div>
    </div>
    <div id="codepen">
      <codepen-homepage :initial-data="animation3" />
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

  max-height: 300px;     /* hauteur maximale du bloc */
  overflow-y: auto;       /* défilement vertical */
  overflow-x: auto;       /* défilement horizontal si besoin */
  scrollbar-width: thin;
}

code,
pre {
  user-select: text;
  cursor: text;
  white-space: pre;       /* garde la mise en forme */
  margin: 0;
}


.codeSnippet::-webkit-scrollbar {
  width: 6px;
}
.codeSnippet::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}
.codeSnippet::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5);
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


.letter-image {
  margin-left: 5%;
  top: 50%;
  left: 100%;
  width: 200px;
  height: 200px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -10%);
  cursor: pointer;
}

.animated-mail {
  position: absolute;
  height: 150px;
  width: 200px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  transition: 0.4s;
}

.animated-mail .body {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 200px;
  border-color: transparent transparent #e95f55 transparent;
  z-index: 2;
}

.animated-mail .top-fold {
  position: absolute;
  top: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 100px 0 100px;
  -webkit-transform-origin: 50% 0%;
  -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  -moz-transform-origin: 50% 0%;
  -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  transform-origin: 50% 0%;
  transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  border-color: #cf4a43 transparent transparent transparent;
  z-index: 2;
}

.animated-mail .back-fold {
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 100px;
  background: #cf4a43;
  z-index: 0;
}

.animated-mail .left-fold {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent #e15349;
  z-index: 2;
}

.animated-mail .letter {
  left: 20px;
  bottom: 0px;
  position: absolute;
  width: 160px;
  height: 60px;
  background: white;
  z-index: 1;
  overflow: hidden;
  -webkit-transition: 0.4s 0.2s;
  -moz-transition: 0.4s 0.2s;
  transition: 0.4s 0.2s;
}

.animated-mail .letter .letter-border {
  height: 10px;
  width: 100%;
  background: repeating-linear-gradient(-45deg, #cb5a5e, #cb5a5e 8px, transparent 8px, transparent 18px);
}

.animated-mail .letter .letter-title {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 40%;
  background: #cb5a5e;
}

.animated-mail .letter .letter-context {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 20%;
  background: #cb5a5e;
}

.animated-mail .letter .letter-stamp {
  margin-top: 30px;
  margin-left: 120px;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background: #cb5a5e;
  opacity: 0.3;
}

.shadow {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 400px;
  height: 30px;
  transition: 0.4s;
  transform: translateX(-50%);
  -webkit-transition: 0.4s;
  -webkit-transform: translateX(-50%);
  -moz-transition: 0.4s;
  -moz-transform: translateX(-50%);
  border-radius: 100%;
  background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));
}

.letter-image:hover .animated-mail {
  transform: translateY(50px);
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
}

.letter-image:hover .animated-mail .top-fold {
  transition: transform 0.4s, z-index 0.2s;
  transform: rotateX(180deg);
  -webkit-transition: transform 0.4s, z-index 0.2s;
  -webkit-transform: rotateX(180deg);
  -moz-transition: transform 0.4s, z-index 0.2s;
  -moz-transform: rotateX(180deg);
  z-index: 0;
}

.letter-image:hover .animated-mail .letter {
  height: 180px;
}

.letter-image:hover .shadow {
  width: 250px;
}



.loop-wrapper {
  position: relative;
  display: block;
  width: 325px;
  height: 250px;
  overflow: hidden;
  border-bottom: 3px solid #fff;
  color: #fff;
}

.mountain {
  position: absolute;
  right: -900px;
  bottom: -20px;
  width: 2px;
  height: 2px;
  box-shadow:
    0 0 0 50px #4DB6AC,
    60px 50px 0 70px #4DB6AC,
    90px 90px 0 50px #4DB6AC,
    250px 250px 0 50px #4DB6AC,
    290px 320px 0 50px #4DB6AC,
    320px 400px 0 50px #4DB6AC;
  transform: rotate(130deg);
  animation: mtn 20s linear infinite;
}

.hill {
  position: absolute;
  right: -900px;
  bottom: -50px;
  width: 400px;
  border-radius: 50%;
  height: 20px;
  box-shadow:
    0 0 0 50px #4DB6AC,
    -20px 0 0 20px #4DB6AC,
    -90px 0 0 50px #4DB6AC,
    250px 0 0 50px #4DB6AC,
    290px 0 0 50px #4DB6AC,
    620px 0 0 50px #4DB6AC;
  animation: hill 4s 2s linear infinite;
}

.tree,
.tree:nth-child(2),
.tree:nth-child(3) {
  position: absolute;
  height: 100px;
  width: 35px;
  bottom: 0;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg) no-repeat;
}

.rock {
  margin-top: -17%;
  height: 2%;
  width: 2%;
  bottom: -2px;
  border-radius: 20px;
  position: absolute;
  background: #ddd;
}

.truck,
.wheels {
  transition: all ease;
  width: 85px;
  margin-right: -60px;
  bottom: 0px;
  right: 50%;
  position: absolute;
  background: #eee;
}

.truck {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg) no-repeat;
  background-size: contain;
  height: 60px;
}

.truck:before {
  content: " ";
  position: absolute;
  width: 25px;
  box-shadow:
    -30px 28px 0 1.5px #fff,
    -35px 18px 0 1.5px #fff;
}

.wheels {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg) no-repeat;
  height: 15px;
  margin-bottom: 0;
}

.tree {
  animation: tree 3s 0.000s linear infinite;
}

.tree:nth-child(2) {
  animation: tree2 2s 0.150s linear infinite;
}

.tree:nth-child(3) {
  animation: tree3 8s 0.050s linear infinite;
}

.rock {
  animation: rock 4s -0.530s linear infinite;
}

.truck {
  animation: truck 4s 0.080s ease infinite;
}

.wheels {
  animation: truck 4s 0.001s ease infinite;
}

.truck:before {
  animation: wind 1.5s 0.000s ease infinite;
}


@keyframes tree {
  0% {
    transform: translate(1350px);
  }

  50% {}

  100% {
    transform: translate(-50px);
  }
}

@keyframes tree2 {
  0% {
    transform: translate(650px);
  }

  50% {}

  100% {
    transform: translate(-50px);
  }
}

@keyframes tree3 {
  0% {
    transform: translate(2750px);
  }

  50% {}

  100% {
    transform: translate(-50px);
  }
}

@keyframes rock {
  0% {
    right: -200px;
  }

  100% {
    right: 2000px;
  }
}

@keyframes truck {
  0% {}

  6% {
    transform: translateY(0px);
  }

  7% {
    transform: translateY(-6px);
  }

  9% {
    transform: translateY(0px);
  }

  10% {
    transform: translateY(-1px);
  }

  11% {
    transform: translateY(0px);
  }

  100% {}
}

@keyframes wind {
  0% {}

  50% {
    transform: translateY(3px)
  }

  100% {}
}

@keyframes mtn {
  100% {
    transform: translateX(-2000px) rotate(130deg);
  }
}

@keyframes hill {
  100% {
    transform: translateX(-2000px);
  }
}
</style>

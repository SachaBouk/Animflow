<script>
import Codepen2 from '@/components/codepen2.vue';

export default {
  components: {
    codepen2: Codepen2
  }
}
</script>

<template>

  <div class="HomeStart">
    <h1>WELCOME</h1>
    <h1>ON</h1>
    <h1>ANIMFLOW</h1>
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
      <codepen2 />
    </div>

  </div>




</template>


<style>
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
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  margin-top: 170px;
}

.HomeStart h1 {
  font-size: 6rem;
  color: white;
}

.codeSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  padding-bottom: 300px;

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
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
</style>

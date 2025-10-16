<template>
    <div class="code-editor-wrapper">
      <div class="code-editor">
        <div class="code">
          <div class="html-code">
            <h1><img src="./icons/htmlLogo.svg" alt="">HTML</h1>
            <textarea></textarea>
          </div>
          <div class="css-code">
            <h1><img src="./icons/cssLogo.svg" alt="">CSS</h1>
            <textarea></textarea>
          </div>
  
          <div class="controls">
            <button @click="runCode">▶️ Run</button>
            <button @click="pauseAnimation">⏸ Pause</button>
          </div>
        </div>
        <iframe id="result"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CodePen2",
    mounted() {
      this.html_code = this.$el.querySelector(".html-code textarea");
      this.css_code = this.$el.querySelector(".css-code textarea");
      this.result = this.$el.querySelector("#result");
  
      // Récupérer depuis le localStorage
      this.html_code.value = localStorage.getItem("html_code") || "";
      this.css_code.value = localStorage.getItem("css_code") || "";
  
      this.runCode();
  
      // Auto run pendant qu'on tape
      this.html_code.addEventListener("keyup", this.runCode);
      this.css_code.addEventListener("keyup", this.runCode);
    },
    methods: {
      runCode() {
        // Sauvegarde
        localStorage.setItem("html_code", this.html_code.value);
        localStorage.setItem("css_code", this.css_code.value);
  
        const doc = this.result.contentDocument || this.result.contentWindow.document;
        doc.open();
        doc.write(`
          <style>
            ${this.css_code.value}
  
            * {
              animation-iteration-count: infinite !important;
            }
  
            .paused * {
              animation-play-state: paused !important;
              transition: none !important;
            }
          </style>
          <body>
            ${this.html_code.value}
          </body>
        `);
        doc.close();
      },
      pauseAnimation() {
        const doc = this.result.contentDocument || this.result.contentWindow.document;
        doc.body.classList.toggle("paused");
      }
    }
  };
  </script>


<style>
:root {
    --darkblue: #14007a;
    --blue: #1a009c;
    --lightblue: rgb(74, 255, 255);
    --pink: rgb(255, 40, 113);
}


/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */

.code-editor-wrapper {
    font-family: sans-serif;
    background-image: linear-gradient(45deg, var(--lightblue), var(--blue));
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}


.code-editor {
    width: 80%;
    height: 70vh;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
}

.code {
    display: grid;
    grid-template-rows: repeat(3, 1fr);

    background-color: var(--darkblue);
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    overflow-y: hidden;
}

.code textarea {
    width: 100%;
    height: calc(100% - 3rem);
    background-color: var(--blue);
    color: var(--lightblue);
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    resize: vertical;
}

.css-code textarea{
    height: 130%;
}


.code textarea::-webkit-scrollbar {
    width: .4rem;
}

.code textarea::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: .4rem;
}

#result {
    width: 100%;
    height: 100%;
    border: none;
}


h1 {
    font: 600 1.2rem 'sans-serif';
    margin: 1rem 0;
    color: #fff;

}

h1>img {
    width: 1.3rem;
    margin-right: 1rem;
    vertical-align: middle;

}

.controls {
    justify-content: center;
    text-align: center;
    margin-top: 8rem;
}

.controls button {
    background-color: var(--lightblue);
    border: none;
    color: #fff;
    padding: .7rem 2rem;
    font-size: 1.1rem;
    border-radius: .5rem;
    cursor: pointer;
    margin: 0 1rem;
    transition: background-color .3s;
}

.controls button:hover {
    background-color: var(--pink);
}

</style>
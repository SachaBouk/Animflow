<template>
    <div class="code-editor-wrapper">
        <!-- <div v-if="!started" class="start-screen">
            <button @click="startEditor">Try it yourself !</button>
        </div> -->
        <div class="code-editor">
            <div class="code">
                <form>
                <div class="animation-form">
                        <textarea id="name" ref="nameInput" type="text" name="name" placeholder="Animation name"></textarea>
                        <textarea id="desc" ref="descriptionInput" type="text" name="description" placeholder="Description"></textarea>
                </div>
                <div class="html-code">
                    <h1><img src="./icons/htmlLogo.svg" alt="">HTML</h1>
                    <textarea id="html" ref="htmlInput" name="html"></textarea>
                </div>
                <div class="css-code">
                    <h1><img src="./icons/cssLogo.svg" alt="">CSS</h1>
                    <textarea id="css" ref="cssInput" name="css"></textarea>
                </div>

                <div class="controls">
                    <!-- <button class="back-btn" @click="goBack">↩️ Retour</button> -->
                    <button type="button" @click="runCode">Run</button>
                    <button type="button" @click="pauseAnimation">Pause</button>
                    <button type="submit">Create</button>
                </div>
            </form>
            </div>
            <iframe id="result"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "CodePen",
    mounted() {
        this.$nextTick(() => {
            // On initialise les éléments seulement après l'affichage
            this.html_code = this.$el.querySelector(".html-code textarea");
            this.css_code = this.$el.querySelector(".css-code textarea");
            this.result = this.$el.querySelector("#result");

            this.runCode();

            this.html_code.addEventListener("keyup", this.runCode);
            this.css_code.addEventListener("keyup", this.runCode);
        });
    },
    methods: {
        runCode() {
            if (!this.result) return;

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
        },
        goBack() {
            this.started = false;
            this.html_code = null;
            this.css_code = null;
            this.result = null;
        }
    }
};
</script>

<style scoped>
:root {
    --darkblue: #14007a;
    --blue: #1a009c;
    --lightblue: rgb(74, 255, 255);
    --pink: rgb(255, 40, 113);
}

.code-editor-wrapper {
    font-family: sans-serif;
    /* background-image: linear-gradient(45deg, var(--lightblue), var(--blue)); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2rem; */
    /* height: 100vh; */
}

.code-editor {
  width: 97%;
  height: 83vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--blue);
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid var(--lightblue);
  margin-top: 2rem;
  margin-bottom: 5rem;
}

.code {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: var(--darkblue);
  padding: 1rem;
  overflow-y: hidden;
  border-right: 2px solid var(--lightblue);

}

.animation-form {
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.animation-form form {
    width: 100%;
    display: flex;
    justify-content: space-around;
}


#name {
    width: 38%;
    height: 7rem;
}



#desc {
    width: 60%;
    height: 7rem;
}



.code textarea {
  width: 100%;
  height: calc(100% - 3rem);
  background-color: var(--blue);
  color: var(--lightblue);
  border: 1px solid var(--lightblue);
  padding: 1rem;
  font-size: 1.1rem;
  resize: vertical;
  border-radius: .5rem;
}

.css-code textarea {
  height: 17rem;
}

.code textarea::-webkit-scrollbar {
  width: .4rem;
}

.code textarea::-webkit-scrollbar-thumb {
  background-color: var(--pink);
  border-radius: .4rem;
}

.html-code{
  margin-bottom: 1rem;
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
  margin-top: 1rem;
}

.controls button {
  /* background-color: var(--lightblue); */
  border: 2px solid var(--lightblue);
  background-color: transparent;
  color: #fff;
  padding: .7rem 2rem;
  font-size: 1.1rem;
  border-radius: .5rem;
  cursor: pointer;
  margin: 0 1rem;
  transition: background-color .4s;
  font-family: "Rammetto One", sans-serif;

}

.controls button:hover {
  background-color: #fff;
  color: #14007a;
}

</style>

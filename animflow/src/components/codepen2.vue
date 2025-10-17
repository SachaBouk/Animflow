<template>
    <div class="code-editor-wrapper2">
        <div v-if="!started" class="start-screen">
            <button @click="startEditor">Try it yourself !</button>
        </div>
        <div v-else class="code-editor2">
            <div class="code2">
                <div class="html-code2">
                    <h1><img src="./icons/htmlLogo.svg" alt="">HTML</h1>
                    <textarea></textarea>
                </div>
                <div class="css-code2">
                    <h1><img src="./icons/cssLogo.svg" alt="">CSS</h1>
                    <textarea value=""></textarea>
                </div>

                <div class="controls2">
                    <button class="back-btn" @click="goBack">↩️ Retour</button>
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
    data() {
        return {
            started: false,
        };
    },
    mounted() {
    },
    methods: {
        startEditor() {
            this.started = true;
            this.$nextTick(() => {
                // On initialise les éléments seulement après l'affichage
                this.html_code = this.$el.querySelector(".html-code2 textarea");
                this.css_code = this.$el.querySelector(".css-code2 textarea");
                this.result = this.$el.querySelector("#result");

                this.html_code.value = localStorage.getItem("html_code2") || "";
                this.css_code.value = localStorage.getItem("css_code2") || "";

                this.runCode();

                this.html_code.addEventListener("keyup", this.runCode);
                this.css_code.addEventListener("keyup", this.runCode);
            });
        },
        runCode() {
            if (!this.result) return;
            localStorage.setItem("html_code2", this.html_code.value);
            localStorage.setItem("css_code2", this.css_code.value);

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

.code-editor-wrapper2 {
    font-family: sans-serif;
    /* background-image: linear-gradient(45deg, var(--lightblue), var(--blue)); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2rem; */
    /* height: 100vh; */
}


.start-screen {
    text-align: center;
}

.start-screen button {
    background-color: var(--pink);
    border: none;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.start-screen button:hover {
    background-color: var(--lightblue);
}


.code-editor2 {
    width: 80%;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
}

.code2 {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    background-color: var(--darkblue);
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    overflow-y: hidden;
}

.code2 textarea {
    width: 100%;
    height: calc(100% - 3rem);
    background-color: var(--blue);
    color: var(--lightblue);
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    resize: vertical;
}

.css-code2 textarea {
    height: 17rem;
}

.code2 textarea::-webkit-scrollbar {
    width: .4rem;
}

.code2 textarea::-webkit-scrollbar-thumb {
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

.controls2 {
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
}

.controls2 button {
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

.controls2 button:hover {
    background-color: var(--pink);
}

.controls2 .back-btn {
  background-color: var(--pink);
}

.controls2 .back-btn:hover {
  background-color: var(--lightblue);
}

</style>

<template>
  <div class="code-editor-wrapper">
    <div class="code-editor">
      <div class="code">
        <form @submit.prevent="handleSubmit">
          <div class="animation-form">
            <textarea id="name" v-model="form.name" name="name" placeholder="Animation name"></textarea>
            <textarea id="desc" v-model="form.description" name="description" placeholder="Description"></textarea>
          </div>

          <div class="html-code">
            <h1><img src="./icons/htmlLogo.svg" alt="">HTML</h1>
            <textarea id="html" v-model="form.html" name="html"></textarea>
          </div>

          <div class="css-code">
            <h1><img src="./icons/cssLogo.svg" alt="">CSS</h1>
            <textarea id="css" v-model="form.css" name="css"></textarea>
          </div>

          <div class="controls">
            <button type="button" @click="runCode">▶️ Run</button>
            <button type="button" @click="pauseAnimation">⏸ Pause</button>
            <button type="submit">✓ Edit</button>
          </div>
        </form>
      </div>
      <iframe id="result"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodepenEdit",
  props: {
    // Données venant du parent
    initialData: {
      type: Object,
      default: () => ({ name: '', description: '', html: '', css: '' })
    }
  },
  emits: ['submit'],

  data() {
    return {
      form: {
        name: '',
        description: '',
        html: '',
        css: ''
      },
      result: null
    };
  },

  watch: {
    // Quand le parent change les données (ex: après l'appel API)
    initialData: {
      immediate: true,
      handler(newData) {
        if (newData) {
          this.form = { ...newData };
          this.$nextTick(() => this.runCode());
        }
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.result = this.$el.querySelector("#result");
      this.runCode();
    });
  },

  methods: {
    runCode() {
      if (!this.result) return;

      const doc = this.result.contentDocument || this.result.contentWindow.document;
      doc.open();
      doc.write(`
        <style>
          ${this.form.css}
          * {
            animation-iteration-count: infinite !important;
          }
          .paused * {
            animation-play-state: paused !important;
            transition: none !important;
          }
        </style>
        <body>
          ${this.form.html}
        </body>
      `);
      doc.close();
    },

    pauseAnimation() {
      const doc = this.result.contentDocument || this.result.contentWindow.document;
      doc.body.classList.toggle("paused");
    },

    handleSubmit() {
      // On émet les nouvelles données au parent
      this.$emit('submit', this.form);
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
  width: 95%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 3rem;
  margin-bottom: 15rem;
}

.code {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: var(--darkblue);
  padding: 1rem;
  border-radius: 0 1rem 1rem 0;
  overflow-y: hidden;
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
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  resize: vertical;
}

.css-code textarea {
  height: 10rem;
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
  margin-top: 2rem;
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

.controls .back-btn {
  background-color: var(--pink);
}

.controls .back-btn:hover {
  background-color: var(--lightblue);
}
</style>

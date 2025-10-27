<template>
  <div class="code-editor-wrapper">
    <div v-if="!started" class="start-screen">
      <div class="wrapper">
        <button class="cta" @click="startEditor"><span>TRY IT YOURSELF</span>
          <span>
                        <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path class="one"
                                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                      fill="#FFFFFF"></path>
                                <path class="two"
                                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                      fill="#FFFFFF"></path>
                                <path class="three"
                                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                      fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </span>
        </button>
      </div>
    </div>
    <div v-else class="code-editor">
      <div class="code">
          <div class="html-code">
            <h1><img src="./icons/htmlLogo.svg" alt="">HTML</h1>
            <textarea id="html" v-model="form.html" name="html"></textarea>
          </div>

          <div class="css-code">
            <h1><img src="./icons/cssLogo.svg" alt="">CSS</h1>
            <textarea id="css" v-model="form.css" name="css"></textarea>
          </div>

          <div class="controls">
            <button class="back-btn" @click="goBack">Back</button>
            <button type="button" @click="runCode">▶️ Run</button>
            <button type="button" @click="pauseAnimation">⏸ Pause</button>
          </div>
      </div>
      <iframe id="result"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodepenHomepage",
  data() {
    return {
      started: false,
    };
  },
  props: {
    initialData: {
      type: Object,
      default: () => ({ name: '', description: '', html: '', css: '' })
    }
  },

  watch: {
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
    startEditor() {
      this.started = true;
      this.$nextTick(() => {
        this.html_code = this.$el.querySelector(".html-code textarea");
        this.css_code = this.$el.querySelector(".css-code textarea");
        this.result = this.$el.querySelector("#result");

        this.runCode();

        this.html_code.addEventListener("keyup", this.runCode);
        this.css_code.addEventListener("keyup", this.runCode);
      });
    },

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


.start-screen {
  margin-top: 1rem;
  text-align: center;
}

/* .start-screen button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    font-size: 1.5rem;
    font-family: "Rammetto One", sans-serif;
    padding: 1rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.start-screen button:hover {
    background-color: var(--lightblue);
} */

.wrapper {
  display: flex;
  justify-content: center;
}

.cta {
  display: flex;
  padding: 10px 45px;
  text-decoration: none;
  font-family: "Rammetto One", sans-serif;
  font-size: 2rem;
  color: #fff;
  background: linear-gradient(45deg, var(--lightblue), var(--blue));
  transition: 1s;
  box-shadow: 6px 6px 0 var(--darkblue);
  transform: skewX(-15deg);
  cursor: pointer;
}

.cta:focus {
  outline: none;
}

.cta:hover {
  transition: 0.5s;
  box-shadow: 10px 10px 0 var(--darkblue);
}

.cta span:nth-child(2) {
  transition: 0.5s;
  margin-right: 0px;
}

.cta:hover span:nth-child(2) {
  transition: 0.5s;
  margin-right: 45px;
}

span {
  transform: skewX(15deg)
}

span:nth-child(2) {
  width: 20px;
  margin-left: 30px;
  position: relative;
  top: 12%;
}


path.one {
  transition: 0.4s;
  transform: translateX(-60%);
}

path.two {
  transition: 0.5s;
  transform: translateX(-30%);
}

.cta:hover path.three {
  animation: color_anim 1s infinite 0.2s;
}

.cta:hover path.one {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.6s;
}

.cta:hover path.two {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.4s;
}

@keyframes color_anim {
  0% {
    fill: var(--lightblue);
  }

  50% {
    fill: var(--blue);
  }

  100% {
    fill: var(--darkblue);
  }
}


.code-editor {
  width: 80%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--blue);
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid var(--lightblue);
}

.code {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: var(--darkblue);
  padding: 1rem;
  overflow-y: hidden;
  border-right: 2px solid var(--lightblue);

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

.controls .back-btn {
  background-color: transparent;
  border: 2px solid var(--pink);
}

.controls .back-btn:hover {
  background-color: #fff;
  color: rgb(255, 40, 113);
}
</style>

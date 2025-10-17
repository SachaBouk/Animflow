<script>

import codepen from '@/components/codepen.vue';

export default {
  components: {
    codepen
  }
}

</script>

<script setup>

import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  const form = document.querySelector('form');
  form.onsubmit = async (e) => {
    //e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await axios.post('http://localhost:3000/create/animation', {
        name: formData.get('name'),
        description: formData.get('description'),
        html: formData.get('html'),
        css: formData.get('css')
      });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  }
});

</script>

<template>

    <div class="HomeStart">
        <h1>WELCOME</h1>
        <h1>ON</h1>
        <h1>TOOLS</h1>
    </div>

    <div class="createAnimation">
        <div id="title">
            <h2>Create your own animation</h2>
        </div>
 
            <codepen />

    </div>

</template>



<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

h2 {
    font: 600 4rem 'sans-serif';
    color: black;
    margin-top: 3rem;
    margin-left: 2rem;
}
</style>
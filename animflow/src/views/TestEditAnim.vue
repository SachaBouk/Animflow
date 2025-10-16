<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

const domName = document.getElementById('name');
const domDescription = document.getElementById('description');
const domHtml = document.getElementById('html');
const domCss = document.getElementById('css');

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/show/animation/${id}`);
    domName.value = response.data.name;
    domDescription.value = response.data.description;
    domHtml.value = response.data.html;
    domCss.value = response.data.css;
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('API Error:', error);
  }

  const form = document.querySelector('form');

  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await axios.put(`http://localhost:3000/edit/animation/${id}`, {
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

  <form>
    <input id="name" type="text" name="name" placeholder="Animation Name" required />
    <input id="description" type="text" name="description" placeholder="Description" required />
    <textarea id="html" name="html" placeholder="HTML Content" required></textarea>
    <textarea id="css" name="css" placeholder="CSS Content" required></textarea>
    <button type="submit">Edit Animation</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 170px;
}
</style>

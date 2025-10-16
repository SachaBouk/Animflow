<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  const form = document.querySelector('form');
  form.onsubmit = async (e) => {
    e.preventDefault();
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
<!--  <div id="createDiv"></div>-->

  <form>
    <input type="text" name="name" placeholder="Animation Name" required />
    <input type="text" name="description" placeholder="Description" required />
    <textarea name="html" placeholder="HTML Content" required></textarea>
    <textarea name="css" placeholder="CSS Content" required></textarea>
    <button type="submit">Create Animation</button>
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

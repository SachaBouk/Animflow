<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CodepenEdit from '@/components/codepenEdit.vue'

const animation = ref({ name: '', description: '', html: '', css: '' });

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/show/animation/${id}`);
    animation.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  }
});

const updateAnimation = async (updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3000/edit/animation/${id}`, updatedData);
    console.log('Animation updated :', response.data);
  } catch (error) {
    console.error('API Error:', error);
  }
};
</script>

<template>
  <codepen-edit id="editAnim" :initial-data="animation" @submit="updateAnimation" />
</template>


<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 170px;
}

#editAnim {
  margin-top: 170px;
}
</style>

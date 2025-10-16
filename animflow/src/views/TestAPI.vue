<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

/*

// Liste des routes API :

Créer une animation : POST /create/animation
Récupérer toutes les animations : GET /show/animation
Récupérer une animation par ID : GET /show/animation/:id
Mettre à jour une animation par ID : PUT /edit/animation/:id
Supprimer une animation par ID : DELETE /delete/animation/:id

Voilà bisous Sacha <3
*/

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/show/animation');
    console.log('API Response:', response.data);

    const apiResponseDiv = document.getElementById('api-response');

    response.data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = item.html;
      apiResponseDiv.appendChild(itemDiv);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = `Delete Animation ${item.name}`;
      deleteButton.onclick = () => deleteAnimation(item._id);
      apiResponseDiv.appendChild(deleteButton);

      const editButton = document.createElement('button');
      editButton.textContent = `Edit Animation ${item.name}`;
      editButton.onclick = () => editAnimation(item._id);
      apiResponseDiv.appendChild(editButton);
    });

    response.data.forEach(item => {
      const css = document.createElement('style');
      css.type = 'text/css';
      css.appendChild(document.createTextNode(item.css));
      document.head.appendChild(css);
    })

  } catch (error) {
    console.error('API Error:', error);
  }
});

const editAnimation = async (id) => {
    window.open(`/testEdit?id=${id}`, '_blank');
};

const deleteAnimation = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/delete/animation/${id}`);
    console.log('Delete Response:', response.data);
  } catch (error) {
    console.error('Delete Error:', error);
  }
};
</script>

<template>

  <h1>TestAPI</h1>
  <div id="api-response">

  </div>
</template>

<style scoped>
#api-response {
  margin-top: 170px;
}
</style>

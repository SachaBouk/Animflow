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
      const html_code = item.html;
      const css_code = item.css;

      const div = document.createElement('div');
      div.id = `animation-container-${item._id}`;
      div.style = `
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        padding: 8px;
        background-color: Black;
        border-radius: 8px;
        overflow: hidden;
      `
      apiResponseDiv.appendChild(div);

      const iframe = document.createElement('iframe');
      iframe.id = `result-${item._id}`;
      iframe.style.width = '300px';
      iframe.style.height = '300px';
      iframe.style.overflow = 'hidden';
      iframe.setAttribute('frameBorder', 0);
      div.appendChild(iframe);

      iframe.addEventListener('load', () => {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            ${css_code}
            * {
              animation-iteration-count: infinite !important;
            }
            body {
                overflow: hidden;
            }
            .paused * {
              animation-play-state: paused !important;
              transition: none !important;
            }
          </style>
        </head>
        <body>
          ${html_code}
        </body>
        </html>
      `);
        doc.close();
      });

      iframe.src = 'about:blank';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = `Delete Animation ${item.name}`;
      deleteButton.onclick = () => deleteAnimation(item._id);
      div.appendChild(deleteButton);

      const editButton = document.createElement('button');
      editButton.textContent = `Edit Animation ${item.name}`;
      editButton.onclick = () => editAnimation(item._id);
      div.appendChild(editButton);
    });

  } catch (error) {
    console.error('API Error:', error);
  }
});

const editAnimation = async (id) => {
  window.open(`/Edit?id=${id}`, '_self');
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
h1 {
  color: white;
  margin-top: 170px;
}
iframe {
  border: none;
}
#api-response {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>

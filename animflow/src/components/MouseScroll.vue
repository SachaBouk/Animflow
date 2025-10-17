<template>
    <div class="mouse-scroll-container">
      <!-- Souris -->
      <div class="mouse-shape">
        <div class="mouse-dot"></div>
      </div>
  
      <!-- Flèches vers le bas -->
      <div class="arrows">
        <span class="arrow arrow-1"></span>
        <span class="arrow arrow-2"></span>
        <span class="arrow arrow-3"></span>
      </div>
    </div>
  </template>
  
  <script setup>
  // Pas de JS nécessaire, tout est animé avec CSS
  </script>
  
  <style scoped>
  /* --- Container principal --- */
  .mouse-scroll-container {
    position: relative;
    transform: translateX(-50%);
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* --- Souris --- */
  .mouse-shape {
    width: 22px;
    height: 35px;
    border: 2px solid #14007a;
    border-radius: 10px;
    position: relative;
  }
  
  .mouse-dot {
    width: 2px;
    height: 6px;
    background: #14007a;
    margin: 6px auto 0 auto;
    animation: animated-mouse 1.4s ease-in-out infinite;
  }
  
  /* --- Flèches --- */
  .arrows {
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }
  
  .arrow {
    display: block;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid #14007a;
    border-right: 2px solid #14007a;
    transform: rotate(45deg);
    animation: mouse-scroll 1s infinite alternate;
  }
  
  .arrow + .arrow {
    margin-top: 2px;
  }
  
  .arrow-1 {
    animation-delay: 0.1s;
  }
  
  .arrow-2 {
    animation-delay: 0.2s;
  }
  
  .arrow-3 {
    animation-delay: 0.3s;
  }
  
  /* --- Animations --- */
  @keyframes animated-mouse {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(8px);
    }
  }
  
  @keyframes mouse-scroll {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  
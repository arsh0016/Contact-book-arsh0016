<template>
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold text-header">Contact Book</h1>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .text-center {
    margin-bottom: 40px;
  }
  
  .text-header {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    color: #ffffff;
    background: linear-gradient(45deg, #ffffff, #ffffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 
      2px 2px 5px rgba(255, 255, 255, 0.2), 
      3px 3px 10px rgba(0, 0, 0, 0.4), 
      4px 4px 15px rgba(255, 255, 255, 0.5);
    animation: fadeIn 2s ease-out, rotateText 3s infinite alternate;
    transform: rotateY(10deg) scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  
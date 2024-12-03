<template>
    <div class="search-container">
      <input
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        type="text"
        placeholder="Search contacts..."
        class="search-input"
      />
      <div v-if="search" class="clear-icon" @click="clearSearch">×</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      search: String,
    },
    methods: {
      clearSearch() {
        this.$emit('update:search', '');
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  
  .search-input {
    width: 100%;
    padding: 12px 20px;
    border-radius: 50px;
    border: 2px solid #007bff;
    font-size: 1rem;
    color: #333;
    outline: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
  }
  
  .search-input::placeholder {
    color: #bbb;
    font-style: italic;
  }
  
  .search-input:focus {
    border-color: #0056b3;
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.2);
  }
  
  .clear-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #007bff;
    cursor: pointer;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .clear-icon:hover {
    color: #0056b3;
  }
  </style>
  
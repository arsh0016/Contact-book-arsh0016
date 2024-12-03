<template>
    <div v-if="filteredContacts.length" class="contact-list">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        @click="navigateToContact(contact.id)"
        class="contact-card shadow-sm"
      >
        <div class="contact-details">
          <div class="contact-image">
            <img 
              v-if="contact.image" 
              :src="contact.image" 
              alt="Profile" 
              class="img-fluid rounded-circle" 
            />
            <div v-else class="default-image rounded-circle">
              <span>{{ contact.firstName[0] }}</span>
            </div>
          </div>
          <span class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</span>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-muted">
      <p class="fs-5 mt-3">No contacts found.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      filteredContacts: Array,
    },
    methods: {
      navigateToContact(id) {
        this.$router.push(`/contact/${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  
  .contact-card {
    background-color: #5A776C;
    border-radius: 12px;
    padding: 15px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
  }
  
  .contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .contact-details {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .contact-image {
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
  
  .contact-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .default-image {
    background-color: #d3d3d3;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
  }
  
  .contact-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: capitalize;
  }
  
  .view-text {
    font-size: 1rem;
    font-weight: 500;
    color: #007bff;
    transition: color 0.3s ease;
  }
  
  .view-text:hover {
    color: #0056b3;
  }
  
  .text-muted {
    font-size: 1.1rem;
    color: #6c757d;
  }
  </style>
  
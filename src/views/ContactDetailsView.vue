<template>
  <div class="container">
    <div v-if="contact" class="contact-card shadow-lg fade-in">
      <div class="card-header">
        <p class="mb-0">Contact Details</p>
      </div>
      <div class="card-body">
        <div class="image-container">
          <img
            v-if="contact.image"
            :src="contact.image"
            alt="Profile Image"
            class="profile-img"
          />
          <div v-else class="no-image">
            {{ contact.firstName ? contact.firstName.charAt(0).toUpperCase() : "" }}
          </div>
        </div>
        <div class="detail-row">
          <div class="label">First Name:</div>
          <div class="value">{{ contact.firstName }}</div>
        </div>
        <div class="detail-row">
          <div class="label">Last Name:</div>
          <div class="value">{{ contact.lastName }}</div>
        </div>
        <div class="detail-row">
          <div class="label">Email:</div>
          <div class="value">{{ contact.email }}</div>
        </div>
        <div class="detail-row">
          <div class="label">Phone:</div>
          <div class="value">{{ contact.phone }}</div>
        </div>
        <div class="detail-row">
          <div class="label">Birthdate:</div>
          <div class="value">{{ contact.birthdate }}</div>
        </div>
        <div class="button-container">
          <button @click="editContact" class="btn edit-btn">Edit</button>
          <button @click="deleteContact" class="btn delete-btn">Delete</button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-muted">
      <h1 class="mt-3">Contact Not Found</h1>
      <p class="fs-5">The contact you are looking for does not exist.</p>
      <button @click="$router.push('/')" class="btn btn-primary mt-3">
        Back to Contacts
      </button>
    </div>
  </div>
</template>

<script>
import { getContacts, saveContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contacts = getContacts();
    const id = Number(this.$route.params.id); 
    this.contact = contacts.find((contact) => contact.id === id); 
  },
  methods: {
    deleteContact() {
      const contacts = getContacts();
      const updatedContacts = contacts.filter((c) => c.id !== this.contact.id);
      saveContacts(updatedContacts);
      alert("Contact deleted successfully!");
      this.$router.push("/"); 
    },
    editContact() {
      this.$router.push(`/edit/${this.contact.id}`); 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 850px;
  margin: auto;
  padding: 30px;
  animation: fadeIn 1s ease-in-out;
}

.contact-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(to right, #9FBD9E, #9FBD9E);
  padding: 30px;
  color: white;
  font-size: 1.75rem;
  text-align: center;
  font-weight: 600;
}

.card-body {
  padding: 25px;
  font-family: 'Roboto', sans-serif;
}

.image-container {
  text-align: center;
  margin-bottom: 25px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.no-image {
  font-size: 3rem;
  color: #6c757d;
  font-weight: 500;
  height: 150px;
  line-height: 150px;
  text-align: center;
  background-color: #f4f4f4;
  width: 150px;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e1;
}

.label {
  font-weight: 500;
  color: #333;
  font-size: 1rem;
}

.value {
  font-size: 1rem;
  color: #555;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.edit-btn {
  background-color: #f4c542;
  color: white;
}

.edit-btn:hover {
  background-color: #d4a531;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.delete-btn:hover {
  background-color: #c82333;
}

.text-muted {
  color: #6c757d;
}

.text-center {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #212529;
}

p {
  font-size: 1.25rem;
}

.mt-3 {
  margin-top: 1rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .card-header {
    font-size: 1.5rem;
  }

  .card-body {
    padding: 15px;
  }

  .button-container {
    flex-direction: column;
  }
}
</style>

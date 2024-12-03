<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card shadow-lg rounded-3">
          <div class="card-header custom-header text-white text-center">
            <h4>Add New Contact</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit" class="d-flex">
              <div class="contact-details col-md-6">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      class="form-control"
                      placeholder="Enter first name"
                      v-model="form.firstName"
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      class="form-control"
                      placeholder="Enter last name"
                      v-model="form.lastName"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter email address"
                    v-model="form.email"
                  />
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      class="form-control"
                      placeholder="Enter phone number"
                      v-model="form.phone"
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="birthdate" class="form-label">Birthdate</label>
                    <input
                      type="date"
                      id="birthdate"
                      class="form-control"
                      v-model="form.birthdate"
                    />
                  </div>
                </div>

                <button type="submit" class="btn custom-btn w-100 mt-3">
                  Add Contact
                </button>
              </div>

              <div class="col-md-6">
                <div class="profile-picture mb-3 text-center">
                  <label for="profilePic" class="form-label">Profile Picture</label>
                  <div class="image-upload">
                    <input
                      type="file"
                      id="profilePic"
                      class="form-control d-none"
                      accept="image/*"
                      @change="handleImageUpload"
                    />
                    <div
                      class="upload-area"
                      @click="triggerFileInput"
                    >
                      <div v-if="!image" class="default-circle text-center d-flex flex-column justify-content-center align-items-center">
                        <span>Select Image</span>
                      </div>
                      <div v-else class="image-preview">
                        <img :src="image" alt="Profile" class="img-fluid rounded-circle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContacts, saveContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthdate: "",
      },
      image: null,
    };
  },
  methods: {
    onSubmit() {
      const contacts = getContacts();
      const newContact = {
        id: Date.now(),
        ...this.form,
        image: this.image,
      };
      contacts.push(newContact);
      saveContacts(contacts);

      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthdate: "",
      };
      this.image = null;

      alert("Contact added successfully!");
      this.$router.push(`/contact/${newContact.id}`);
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    triggerFileInput() {
      document.getElementById('profilePic').click();
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.custom-header {
  background: linear-gradient(to right, #9FBD9E, #9FBD9E);
  border-radius: 15px 15px 0 0;
  font-weight: 700;
  font-size: 1.5rem;
  padding:30px;
}

.contact-details {
  margin-right: 120px;
}

.contact-details .form-label {
  font-weight: 500;
  color: #333;
}

.contact-details input {
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-details input:focus {
  border-color: #2575fc;
  box-shadow: 0 0 10px rgba(37, 117, 252, 0.2);
}

.contact-details button {
  font-weight: bold;
  padding: 12px;
  background: #f5b700;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.contact-details button:hover {
  background: #f0a500;
}

.profile-picture {
  text-align: center;
  margin-right: 290px;
  position: relative;
  border-radius: 10%;
}

.upload-area {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 50%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.upload-area:hover {
  background-color: #e9e9e9;
}

.default-circle {
  font-size: 1rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.image-preview {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 50%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.select-image-text:hover {
  color: #2575fc;
}

@media (max-width: 768px) {
  .card-body {
    display: block;
  }

  .contact-details {
    margin-right: 0;
  }

  .card-header h4 {
    font-size: 1.25rem;
  }

  .upload-area {
    width: 120px;
    height: 120px;
  }
}
</style>

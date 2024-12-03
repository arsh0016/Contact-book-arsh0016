<template>
  <div class="container py-5">
    <ContactHeader />
    <ContactSearch :search="search" @update:search="search = $event" />
    <ContactList :filteredContacts="filteredContacts" />
  </div>
</template>

<script>
import { getContacts } from "../services/localStorageService";
import ContactHeader from '@components/ContactHeader.vue';
import ContactSearch from '@components/ContactSearch.vue';
import ContactList from '@components/ContactList.vue';

export default {
  data() {
    return {
      search: "",
      contacts: [],
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter((contact) =>
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  created() {
    this.contacts = getContacts();
    console.log(this.contacts);
  },
  components: {
    ContactHeader,
    ContactSearch,
    ContactList,
  },
};
</script>

<style scoped>
.container {
  background-color: #9FBD9E;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.btn-primary:active {
  background-color: #004085;
}

.input-group {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
}

.input-group input {
  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  transition: border 0.3s ease;
}

.input-group input:focus {
  border: 1px solid #007bff;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.2);
}

.list-group-item {
  cursor: pointer;
  border: 1px solid #e3e4e8;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f1f1f1;
}

.list-group-item span {
  color: #333;
}

.list-group-item.active {
  background-color: #00c6ff;
  color: #fff;
}

footer {
  background-color: #343a40;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;
}

footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .input-group {
    max-width: 100%;
  }
}
</style>

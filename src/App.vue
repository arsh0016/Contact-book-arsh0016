<template>
  <div id="app">
 
    <Navbar />
    
    
    <main class="py-4">
      <router-view />
    </main>
   
 
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #5A776C !important;
}
</style>

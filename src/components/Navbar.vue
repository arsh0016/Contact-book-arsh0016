<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold fs-3">
        Contact Book
      </router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link" active-class="active">
              Add Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  border-radius: 0 0 8px 8px;
  background: linear-gradient(135deg, #5A776C, #5A776C);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.75rem;
  letter-spacing: 1px;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler {
  border: none;
  background: transparent;
}

.navbar-toggler-icon {
  background-color: #fff;
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 20px;
  color: #fff;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffc107 !important;
  transform: scale(1.1);
}

.navbar-brand:hover {
  transform: scale(1.1);
}

@media (max-width: 992px) {
  .navbar-brand {
    font-size: 1.4rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>

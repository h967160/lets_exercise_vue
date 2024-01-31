<script setup>
import logoImage from '/src/assets/img/logo.jpg'
</script>
<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand fs-3">
        <img :src="logoImage" alt="LOGO" />運動揪團網</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
          <li class="nav-item">
            <a class="nav-link" href="#">球團報名</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">場地資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">討論區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">商城</a>
          </li>
        </ul>
        <ul class="navbar-nav me-5 mb-2 mb-lg-0 fs-4">
          <li class="nav-item">
            <router-link to="/login" class="nav-link"
              ><font-awesome-icon :icon="['far', 'circle-user']" /> 登入</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

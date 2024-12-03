<script setup lang="ts">
</script>

<template>
  <header class ="navbar-header">
    <nav class = "navbar-container" role = "navigation" aria-label="main navigation">
      <div class="navbar-title">
        <RouterLink to="/" class="logo">
          <img src="../assets/images/FWONK_BIG.D.svg" alt="Formula 1 Logo" />
          <span>Statistics</span>
        </RouterLink>
      </div>

      <nav class="nav-menu">
        <RouterLink to="/seasons">Seasons</RouterLink>
        <RouterLink to="/constructors">Constructors</RouterLink>
        <RouterLink to="/drivers">Drivers</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </nav>
  </header>
</template>

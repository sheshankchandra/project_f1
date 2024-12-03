<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationView from './components/NavigationView.vue'
import FoooterView from './components/FooterView.vue'
</script>

<template>
  <body id = "app-body">
    <header id = "app-header">
      <NavigationView></NavigationView>
    </header>

    <main id = "app-main">
      <RouterView />
    </main>

    <footer id = "app-footer">
      <FoooterView />
    </footer>
  </body>
</template>
<template>
  <div id="app">
    <NavbarComponent v-if="!isAuthView && !isDashboardView && !isEditPasswordView" />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
  setup() {
    const route = useRoute();
    const isAuthView = computed(() => route.path === '/login' || route.path === '/register');
    const isDashboardView = computed(() => route.path === '/');
    const isEditPasswordView = computed(() => route.path === '/edit-password');
    return { isAuthView, isDashboardView, isEditPasswordView };
  },
  watch: {
    $route(to) {
      console.log('Route changed:', to.name); // Debugging line
    }
  }
};
</script>

<style>
/* Estilos globales */
</style>
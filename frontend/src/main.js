import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles.css'; // Importa los estilos de Tailwind CSS

createApp(App).use(router).mount('#app');
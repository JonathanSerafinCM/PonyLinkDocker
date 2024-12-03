import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import FeedComponent from '../components/FeedComponent.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import EditProfileComponent from '../components/EditProfileComponent.vue';
import EditPasswordComponent from '../components/EditPasswordComponent.vue';
import ChatsComponent from '../components/ChatsComponent.vue'; 
import NotificationsComponent from '../components/NotificationsComponent.vue';
import MobileNotificationsComponent from '../components/MobileNotificationsComponent.vue';

const routes = [
  { path: '/', component: HomeComponent }, // Ruta para el dashboard
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/feed', component: FeedComponent, name: 'feed' }, // Ensure the name is set
  { path: '/profile', component: ProfileComponent },
  { path: '/edit-profile', component: EditProfileComponent },
  { path: '/edit-password', component: EditPasswordComponent },
  { path: '/chats', component: ChatsComponent }, 
  { path: '/notifications', component: NotificationsComponent }, 
  { path: '/notifications-mobile', component: MobileNotificationsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
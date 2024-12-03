<template>
  <div class="overlay">
    <div class="popup">
      <header class="flex items-center justify-between bg-[#001839] text-white rounded-t-lg p-3">
        <h2 class="text-lg font-semibold">Notificaciones</h2>
        <button @click="$emit('close')" class="text-white">X</button>
      </header>
  
      <div class="flex flex-col flex-grow overflow-y-auto p-2 space-y-4">
        <div
          v-for="(notification, index) in notifications"
          :key="index"
          class="flex items-start gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition border-l-4 border-[#CCE2FF]"
        >
          <img
            :src="notification.icon"
            alt="Icon"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="flex flex-col">
            <span class="font-semibold text-[#001839]">{{ notification.title }}</span>
            <p class="text-sm text-gray-600">{{ notification.message }}</p>
          </div>
          <span class="ml-auto text-xs text-gray-400">{{ notification.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsComponent',
  data() {
    return {
      notifications: [
        { title: 'Nuevo mensaje', message: 'Tienes un nuevo mensaje de Ana', icon: 'https://via.placeholder.com/50', time: 'Hace 5 min' },
        { title: 'Recordatorio', message: 'Revisa tu solicitud pendiente', icon: 'https://via.placeholder.com/50', time: 'Hace 20 min' },
      ],
    };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Added z-index */
}

.popup {
  background: white;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  max-height: 80%;
  overflow: hidden;
  z-index: 1001; /* Added z-index */
}
</style>
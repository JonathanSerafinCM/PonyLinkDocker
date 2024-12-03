<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <header class="flex items-center justify-between bg-gradient-to-r from-[#001839] to-[#334B7B] text-white rounded-t-lg p-4 shadow-md">
        <h2 class="text-lg font-semibold">{{ event.title }}</h2>
        <button @click="$emit('close')" class="text-white text-xl hover:text-opacity-70 transition">&times;</button>
      </header>
      <div class="p-6 bg-white rounded-b-lg">
        <img :src="event.image" alt="Imagen del evento" class="w-full h-56 object-cover rounded-lg mb-4 shadow-md" />
        <p class="text-gray-800 mb-6 leading-relaxed">{{ event.description }}</p>
        <button
          @click="expressInterest"
          :aria-label="'express-interest'"
          class="w-full px-5 py-2 bg-[#001839] text-white rounded-lg hover:bg-[#001839]/90 transition font-medium shadow"
        >
          Interesado en asistir
        </button>
        <button @click="$emit('close')" class="w-full px-5 py-2 bg-[#001839] text-white rounded-lg hover:bg-[#001839]/90 transition font-medium shadow mt-4">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDetails',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    expressInterest() {
      window.alert(`Has expresado interés en asistir a ${this.event.title}`);
    },
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
  z-index: 1000;
}
.popup {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
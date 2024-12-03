<template>
  <div :class="{ 'slide-up': sliding }" @animationend="onAnimationEnd" class="min-h-screen flex items-center justify-center p-6 bg-cover bg-center">
    <div class="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-8">
      <div class="flex flex-col items-center">
        <img
          src="../assets/LogoB.png" 
          alt="Logo de PonyLink"
          class="w-48 h-48 mb-6" 
        />
        <h1 class="text-4xl font-bold text-[#001839] mb-4 text-center">
          Bienvenido a PonyLink
        </h1>
        <p class="text-lg text-[#4B5563] mb-12 text-center">
          Conéctate con tu futuro, un paso a la vez con PonyLink.
        </p>
      </div>

      <div class="space-y-4">
        <button
          @click="slideAndGoToLogin"
          class="w-full bg-[#001839] text-white rounded-full py-4 font-semibold hover:bg-[#D7E8FF] hover:text-[#001839] transition duration-300 text-lg shadow-lg transform hover:scale-105"
        >
          Iniciar sesión
        </button>
        <button
          @click="slideAndGoToRegister"
          class="w-full border-2 border-[#001839] text-[#001839] rounded-full py-4 font-semibold hover:bg-[#D7E8FF] transition duration-300 text-lg shadow-lg transform hover:scale-105"
        >
          Registrarse
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeComponent',
  setup() {
    const sliding = ref(false);
    const hidden = ref(false);

    const slideUp = () => {
      sliding.value = true;
      setTimeout(() => {
        hidden.value = true;
      }, 500);
    };

    const onAnimationEnd = () => {
      if (hidden.value) {
        hidden.value = false;
        sliding.value = false;
      }
    };

    return {
      sliding,
      hidden,
      slideUp,
      onAnimationEnd,
    };
  },
  methods: {
    slideAndGoToLogin() {
      this.slideUp();
      setTimeout(() => {
        this.$router.push('/login');
      }, 500); // Espera a que termine la animación
    },
    slideAndGoToRegister() {
      this.slideUp();
      setTimeout(() => {
        this.$router.push('/register');
      }, 500); // Espera a que termine la animación
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

div {
  font-family: 'Poppins', sans-serif;
}

.bg-cover {
  background-image: url('../assets/principal.png'); /* Ruta a tu imagen de fondo */
  background-size: cover;
  background-position: center;
}

.slide-up {
  animation: slide-up 0.5s forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
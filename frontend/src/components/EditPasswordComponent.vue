<template>
    <div
      class="relative flex overflow-hidden flex-col pb-28 bg-cover bg-center min-h-screen"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <!-- Añadimos mt-20 para dar más espacio en la parte superior -->
      <div class="relative flex flex-col items-center justify-center px-10 w-full h-full max-md:px-4 max-md:max-w-full mt-20">
        <main class="flex z-10 flex-col px-10 pt-16 pb-16 max-w-full bg-white rounded-xl shadow-md w-[460px] max-md:px-6 max-md:mb-4">
          <div class="flex flex-col items-center justify-center mb-10">
            <img src="../assets/lock.png" alt="Icono de contraseña" class="w-16 h-16 mb-4" />
            <h1 class="text-2xl font-semibold text-slate-900">Cambiar Contraseña</h1>
          </div>
          
          <form @submit.prevent="handleSubmit" class="w-full">
            <!-- Campo de Contraseña Actual -->
            <div class="relative mb-4">
              <input
                id="currentPasswordInput"
                v-model="currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                placeholder="Contraseña actual"
                class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
              />
              <button
                type="button"
                @click="toggleCurrentPasswordVisibility"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  :src="showCurrentPassword ? eyeClosedIcon : eyeOpenIcon"
                  alt="Toggle current password visibility"
                  class="w-5 h-5"
                />
              </button>
            </div>
  
            <!-- Campo de Nueva Contraseña -->
            <div class="relative mb-4">
              <input
                id="newPasswordInput"
                v-model="newPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Nueva contraseña"
                class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  :src="showPassword ? eyeClosedIcon : eyeOpenIcon"
                  alt="Toggle password visibility"
                  class="w-5 h-5"
                />
              </button>
            </div>
  
            <!-- Campo de Confirmar Nueva Contraseña -->
            <div class="relative mb-4">
              <input
                id="confirmNewPasswordInput"
                v-model="confirmNewPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirmar nueva contraseña"
                class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
              />
              <button
                type="button"
                @click="toggleConfirmPasswordVisibility"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  :src="showConfirmPassword ? eyeClosedIcon : eyeOpenIcon"
                  alt="Toggle confirm password visibility"
                  class="w-5 h-5"
                />
              </button>
            </div>
  
            <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
  
            <button
              type="submit"
              class="w-full py-2.5 mt-8 text-base font-bold text-white bg-sky-900 rounded-xl border border-sky-900 border-solid hover:bg-sky-800 transition duration-200"
            >
              Guardar Cambios
            </button>
          </form>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import eyeClosedIcon from '@/assets/closed.png';
  import eyeOpenIcon from '@/assets/open.png';
  
  export default {
    data() {
      return {
        backgroundImage: require('@/assets/fondo.png'),
        showCurrentPassword: false,
        showPassword: false,
        showConfirmPassword: false,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        eyeClosedIcon,
        eyeOpenIcon,
        errorMessage: ''
      };
    },
    methods: {
      toggleCurrentPasswordVisibility() {
        this.showCurrentPassword = !this.showCurrentPassword;
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
      handleSubmit() {
        if (this.newPassword !== this.confirmNewPassword) {
          this.errorMessage = 'Las contraseñas no coinciden';
        } else {
          this.errorMessage = '';
          // Aquí puedes agregar la lógica para enviar la nueva contraseña
          alert('Contraseña actualizada');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar más estilos si es necesario */
  </style>

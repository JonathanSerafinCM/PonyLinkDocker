<template>
  <div class="relative flex overflow-hidden flex-col pb-28 bg-cover bg-center min-h-screen" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <div class="relative flex flex-col items-center px-10 pt-10 w-full max-md:px-4 max-md:max-w-full">
      <main class="flex z-10 flex-col px-10 pt-6 pb-16 max-w-full bg-white rounded-xl shadow-md w-[460px] max-md:px-6 max-md:mb-4">
        <div class="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-6 shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe73ee0b7d23c2c13d1e5eca1344c4389f603bac3093fea44ff18f46ac4ff25?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Company logo" class="w-full h-full object-cover" />
        </div>
        <h1 class="self-start text-xl font-semibold text-slate-900 max-md:ml-1.5 mb-5">
          Crear Cuenta
        </h1>
        <form @submit.prevent="handleSubmit" class="w-full">
          <label for="nameInput" class="sr-only">Nombre</label>
          <input id="nameInput" v-model="username" type="text" placeholder="Nombre" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />

          <label for="emailInput" class="sr-only">Correo electrónico o usuario</label>
          <input id="emailInput" v-model="email" type="text" placeholder="Correo electrónico o usuario" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />
          
          <div class="relative mb-4">
            <input id="passwordInput" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Contraseña" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />
            <button type="button" @click="togglePasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center">
              <img loading="lazy" :src="showPassword ? eyeClosedIcon : eyeOpenIcon" alt="Toggle password visibility" class="w-5 h-5" />
            </button>
          </div>
          
          <div class="relative mb-4">
            <input id="confirmPasswordInput" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" placeholder="Confirmar contraseña" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />
            <button type="button" @click="toggleConfirmPasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center">
              <img loading="lazy" :src="showConfirmPassword ? eyeClosedIcon : eyeOpenIcon" alt="Toggle password visibility" class="w-5 h-5" />
            </button>
          </div>

          <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

          <button type="submit" class="w-full py-2.5 mt-8 text-base font-bold text-white bg-sky-900 rounded-xl border border-sky-900 border-solid">
            Crear Cuenta
          </button>
        </form>
        
        <div class="w-full h-px mt-10 bg-sky-900 opacity-80"></div>
        <p class="self-center mt-4 text-xs text-sky-900">Otras opciones</p>
        <div class="flex gap-4 justify-center mt-4">
          <div class="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b829b7031e03ea51ef02b9a26a78650551580d5b02868516a6831b2f3331b8f?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social media login option 1" class="w-full h-full object-contain" />
          </div>
          <div class="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc947fb46aec16834cfb512877280e4cae820a0a90606dbb7e80870b02fe1fe3?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social media login option 2" class="w-full h-full object-contain" />
          </div>
          <div class="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a67c6ff86e6436890e0e7205afc7e71d103127c48880ebe17ee2ce36b2eca1?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social media login option 3" class="w-full h-full object-contain" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import eyeClosedIcon from '@/assets/closed.png';
import eyeOpenIcon from '@/assets/open.png';
import axios from 'axios';

export default {
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      backgroundImage: require('@/assets/fondo.png'),
      eyeClosedIcon,
      eyeOpenIcon,
      errorMessage: ''
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById('passwordInput');
      passwordInput.type = this.showPassword ? 'text' : 'password';
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
      const confirmPasswordInput = document.getElementById('confirmPasswordInput');
      confirmPasswordInput.type = this.showConfirmPassword ? 'text' : 'password';
    },
    async register() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/registrar', {
          name: this.username,
          email: this.email,
          password: this.password
        });
        
        if (response.data.msg === 'success') {
          alert('Registro exitoso');
          this.$router.push('/login');
        } else {
          alert('Error en el registro');
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          alert('El correo electrónico ya está registrado.');
        } else {
          alert('Error al registrar: ' + error.response.data.msg);
        }
      }
    },
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
      } else {
        this.errorMessage = '';
        this.register();
      }
    }
  }
};
</script>

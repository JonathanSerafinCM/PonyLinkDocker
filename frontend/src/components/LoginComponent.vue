<template>
  <main class="flex overflow-hidden flex-col min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="flex justify-center items-center min-h-screen bg-black bg-opacity-40">
      <div class="flex z-10 flex-col items-center py-6 px-8 max-w-full bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.45)] w-[450px] max-md:px-5">
        <form class="flex flex-col self-stretch w-full text-base text-stone-900 max-md:max-w-full">
          
          <div class="w-[200px] h-[200px] rounded-full overflow-hidden self-center mb-6 shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe73ee0b7d23c2c13d1e5eca1344c4389f603bac3093fea44ff18f46ac4ff25?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Login logo" class="w-full h-full object-cover" />
          </div>

          <h1 class="self-start text-2xl font-semibold text-slate-900 mb-6">
            Iniciar Sesión
          </h1>
          
          <label for="emailInput" class="sr-only">Correo electrónico o usuario</label>
          <input id="emailInput" v-model="emailOrUsername" type="text" placeholder="Correo electrónico o usuario" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />
          
          <div class="relative mb-4">
            <input id="passwordInput" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Contraseña" class="w-full px-4 py-4 mt-3 text-base rounded-md border-b border-sky-900 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" />
            <button type="button" @click="togglePasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none flex items-center justify-center">
              <img loading="lazy" :src="showPassword ? eyeClosedIcon : eyeOpenIcon" alt="Toggle password visibility" class="w-5 h-5" />
            </button>
          </div>

          <a href="#" class="self-end mb-4 text-xs text-red-800">¿Olvidaste tu contraseña?</a>

          <button type="submit" @click.prevent="login" class="px-4 py-3 mb-4 text-base font-bold text-white bg-sky-900 rounded-md border border-sky-900 w-full hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2">
            Ingresar
          </button>
        </form>
        <button @click="goToRegister" class="px-4 py-3 mb-6 text-base font-bold text-sky-900 rounded-md border border-sky-900 bg-neutral-100 w-full hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2">
          Crear Cuenta
        </button>
        <div class="shrink-0 mb-4 max-w-full h-px border border-solid border-sky-900 border-opacity-80 w-full"></div>
        <p class="mt-3.5 text-xs text-sky-900">Otras opciones</p>

        <div class="flex gap-4 items-start mt-5 max-w-full w-[182px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b829b7031e03ea51ef02b9a26a78650551580d5b02868516a6831b2f3331b8f?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social login option 1" class="object-contain shrink-0 w-[49px] h-[49px] rounded-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc947fb46aec16834cfb512877280e4cae820a0a90606dbb7e80870b02fe1fe3?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social login option 2" class="object-contain shrink-0 w-[49px] h-[49px] rounded-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a67c6ff86e6436890e0e7205afc7e71d103127c48880ebe17ee2ce36b2eca1?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Social login option 3" class="object-contain shrink-0 w-[49px] h-[49px] rounded-full" />
        </div>


      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import eyeClosedIcon from '@/assets/closed.png';
import eyeOpenIcon from '@/assets/open.png';

export default {
  data() {
    return {
      emailOrUsername: '',
      password: '',
      backgroundImage: require('@/assets/fondo.png'), // Ruta de la imagen de fondo
      showPassword: false,
      eyeClosedIcon,
      eyeOpenIcon
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById('passwordInput');
      passwordInput.type = this.showPassword ? 'text' : 'password';
    },
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.emailOrUsername,
          password: this.password
        });
        
        if (response.data.token) {
          // Guardar el token en el almacenamiento local o en una cookie
          localStorage.setItem('token', response.data.token);
          alert('Inicio de sesión exitoso');
          // Redirigir a la pantalla de perfil
          this.$router.push('/profile');
        } else {
          alert('Usuario y/o contraseña inválida');
        }
      } catch (error) {
        alert('Error al iniciar sesión: ' + error.response.data.msg);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    },
    goToProfile() {
      this.$router.push('/profile');
    }
  }
};
</script>
<template>
  <main class="flex overflow-hidden flex-col items-center px-20 pt-9 pb-56 bg-cover bg-center max-md:px-5 max-md:pb-24" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }">
    <section class="flex flex-col w-full max-w-[985px] max-md:max-w-full">
      <article class="flex flex-col items-center px-14 pt-3 pb-14 w-full bg-white rounded-3xl shadow-lg max-md:px-5 max-md:max-w-full">
        <!-- Imagen del perfil -->
        <div class="flex justify-center mt-6">
  <div class="bg-red-600 p-2 rounded-full"> <!-- Contenedor con fondo rojo y padding -->
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e092f7a63085f6cb55dbf46c8056c4b4a777d578f2d31c06d9747031a1f64f?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Profile picture of Nadia Perez" class="object-cover rounded-full w-[160px] h-[160px] shadow-md" /> <!-- Tamaño de imagen incrementado -->
  </div>
</div>

        
        <!-- Nombre del perfil -->
        <h1 class="mt-4 text-4xl font-bold text-slate-900 text-center">
          {{ profile.name || 'Nadia Perez' }}
        </h1>
<!-- Íconos de contacto (email, teléfono, ubicación) -->
<div class="flex flex-col items-center mt-4 space-y-4">
  <div class="flex items-center space-x-3 w-full justify-start">
    <img src="../assets/correo.png" alt="Email icon" class="w-6 h-6">
    <span class="text-slate-900 text-lg">{{ profile.email || 'nadia.perez@example.com' }}</span>
  </div>
  
  <div class="flex items-center space-x-3 w-full justify-start">
    <img src="../assets/call.png" alt="Phone icon" class="w-6 h-6">
    <span class="text-slate-900 text-lg">{{ profile.phone || '+123 456 7890' }}</span>
  </div>
  
  <div class="flex items-center space-x-3 w-full justify-start">
    <img src="../assets/ubicacion.png" alt="Location icon" class="w-6 h-6">
    <span class="text-slate-900 text-lg">{{ profile.location || 'Ciudad, País' }}</span>
  </div>
</div>


<!-- Contenedor azul claro con los iconos centrados -->
<div class="flex justify-center items-center px-10 py-4 mt-6 bg-sky-100 bg-opacity-70 rounded-lg shadow-lg w-full">
  <!-- Iconos debajo del perfil, centrados con más separación -->
  <div class="flex justify-center space-x-6"> <!-- Aumenté el espacio entre los íconos -->
    <div class="flex flex-col items-center">
      <div class="flex items-center justify-center bg-zinc-300 rounded-full h-[80px] w-[80px] border-4 border-sky-900">
        <img loading="lazy" src="../assets/contacto.png" alt="Contact icon" class="object-contain w-[40px] h-[40px]" /> <!-- Ajusta el tamaño de la imagen aquí -->
      </div>
      <h2 class="mt-2 text-xl font-semibold text-center text-slate-900">Contactar</h2>
    </div>
    
    <div class="flex flex-col items-center">
      <div class="flex items-center justify-center bg-zinc-300 rounded-full h-[80px] w-[80px] border-4 border-sky-900">
        <img loading="lazy" src="../assets/cv.png" alt="View CV icon" class="object-contain w-[40px] h-[40px]" />
      </div>
      <h2 class="mt-2 text-xl font-semibold text-center text-slate-900">Ver CV</h2>
    </div>

    <div class="flex flex-col items-center">
      <div class="flex items-center justify-center bg-zinc-300 rounded-full h-[80px] w-[80px] border-4 border-green-600">
        <img loading="lazy" src="../assets/buscar.png" alt="Searching icon" class="object-contain w-[40px] h-[40px]" />
      </div>
      <h2 class="mt-2 text-xl font-semibold text-center text-slate-900">Buscando</h2>
    </div>
  </div>
</div>



<!-- Secciones de información -->
<section class="w-full mt-8 space-y-6">
  <div class="w-full p-4 bg-indigo-50 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div class="flex items-center">
      <h2 class="text-2xl font-bold text-slate-900">Sobre mí</h2>
      <img src="../assets/sobremi.png" alt="Arrow icon" class="w-6 h-6 ml-2" /> <!-- Ícono justo al lado del título -->
    </div>
    <p class="mt-2 text-slate-700">Aquí irá la información personal.</p>
  </div>

  <div class="w-full p-4 bg-indigo-50 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div class="flex items-center">
      <h2 class="text-2xl font-bold text-slate-900">Educación</h2>
      <img src="../assets/educacion.png" alt="Arrow icon" class="w-6 h-6 ml-2" /> <!-- Ícono justo al lado del título -->
    </div>
    <p class="mt-2 text-slate-700">Información educativa.</p>
  </div>

  <div class="w-full p-4 bg-indigo-50 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div class="flex items-center">
      <h2 class="text-2xl font-bold text-slate-900">Experiencia</h2>
      <img src="../assets/experiencia.png" alt="Arrow icon" class="w-6 h-6 ml-2" /> <!-- Ícono justo al lado del título -->
    </div>
    <p class="mt-2 text-slate-700">Información de experiencia laboral.</p>
  </div>
</section>


      </article>
    </section>

    <div class="flex justify-center mt-6">
      <section class="flex flex-col text-2xl font-bold whitespace-nowrap rounded-none max-w-[280px] text-slate-900">
        <div @click="toggleConfig" class="flex gap-4 px-4 py-2 bg-violet-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/029c59522546c69e454c40a6c0b76974d1b9d531ed57ffaad4378c3fb0817e45?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" class="object-contain shrink-0 aspect-[0.87] w-[45px]" alt="Configuration icon" />
          <h2 class="grow shrink my-auto">Configuración</h2>
        </div>
      </section>
    </div>

  <!-- Sección de configuración desplegable -->
<section v-if="showConfig" class="mt-4 p-4 bg-[#B6C4D6] rounded-xl shadow-md max-w-[600px] w-full">
  <h3 class="text-xl font-bold mb-4">Configuración</h3>

        <!-- Sección de Editar perfil y CV -->
      <div @click="goToEditProfile" class="flex gap-5 justify-between py-3.5 pl-3 bg-white rounded-xl border border-solid border-neutral-500 shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
        <div class="flex gap-3">
          <div class="flex items-center justify-center bg-[#CCE2FF] rounded-lg h-[60px] w-[60px]">
            <div class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[45px] w-[45px]">
              <img src="@/assets/editar.png" :alt="iconAlt" class="object-contain w-[35px] h-[35px]" />
            </div>
          </div>
          <div class="flex flex-col self-start mt-2.5">
            <h2 class="text-xl font-bold text-stone-900">Editar perfil y CV</h2>
            <p class="mt-1.5 text-sm text-black">Actualiza y modifica tu perfil</p>
          </div>
        </div>
        <img src="../assets/flecha.png" alt="" class="object-contain shrink-0 my-auto w-8 aspect-[1.07]" />
      </div>
  <!-- Sección de Privacidad -->
  <div @click="goToEditPassword" class="flex gap-5 justify-between py-3.5 pl-3 mt-4 bg-white rounded-xl border border-solid border-neutral-500 shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    <div class="flex gap-3">
      <div class="flex items-center justify-center bg-[#CCE2FF] rounded-lg h-[60px] w-[60px]">
        <div class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[45px] w-[45px]">
          <img src="../assets/privacidad.png" alt="Privacidad icon" class="object-contain w-[35px] h-[35px]" />
        </div>
      </div>
      <div class="flex flex-col self-start mt-2.5">
        <h2 class="text-xl font-bold text-stone-900">Privacidad</h2>
        <p class="mt-1.5 text-sm text-black">Cambia tu contraseña</p>
      </div>
    </div>
    <img src="../assets/flecha.png" alt="" class="object-contain shrink-0 my-auto w-8 aspect-[1.07]" />
  </div>
</section>


<!-- Formulario para crear una nueva publicación -->
<section class="flex flex-col rounded-lg w-full max-w-[1000px] bg-white shadow-lg border border-gray-300 p-6 mb-6 mt-8 transition duration-200 transform hover:shadow-xl"> <!-- Agregué un borde -->
  <header class="flex gap-6 items-start">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3427795555feb36088d2eb6b44b3f41167f42b03c83757298d11092e9ab87c5c?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
      alt="User profile picture"
      class="object-contain rounded-full shadow-md w-[80px]" 
    />
    <div class="flex flex-col grow relative">
      <input
        type="text"
        aria-label="Publica una actualización"
        placeholder="¿Qué estás pensando?"
        class="px-4 py-4 rounded-xl bg-zinc-100 text-neutral-600 placeholder:text-neutral-400 border border-neutral-300 focus:border-blue-500 focus:outline-none transition duration-200 text-lg mb-4" 
      />
      <div class="flex gap-4 items-center justify-end"> <!-- Alineación de botones a la derecha -->
        <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-gray-300 shadow-sm"> <!-- Agregué borde y sombra a los botones -->
          <img
            loading="lazy"
            src="../assets/imagen.png"
            alt="Attachment icon"
            class="object-contain w-[30px] h-[30px] mr-2" 
          />
        </button>
        <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-gray-300 shadow-sm"> <!-- Agregué borde y sombra a los botones -->
          <img
            loading="lazy"
            src="../assets/publicar.png"
            alt="Media options"
            class="object-contain w-[20px] h-[20px] mr-2" 
          />
          <span class="text-base font-bold">Publicar</span>
        </button>
      </div>
    </div>
  </header>
</section>

  </main>
</template>



<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import backgroundImage from '@/assets/fondo2.png'; 

export default {
  name: 'ProfileComponent',
  setup() {
    const profile = ref({});
    const showConfig = ref(false); 
    const router = useRouter(); 
    const actions = [
      { name: 'Contactar', icon: 'path_to_contact_icon', borderColor: 'border-sky-900' },
      { name: 'Ver CV', icon: 'path_to_cv_icon', borderColor: 'border-sky-900' },
      { name: 'Buscando', icon: 'path_to_search_icon', borderColor: 'border-green-600' },
    ];
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        profile.value = { ...profile.value, ...response.data };
      } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : 'Error al cargar el perfil';
        alert(errorMessage);
      }
    };
    const toggleConfig = () => {
      showConfig.value = !showConfig.value; // Alterna la visibilidad de la sección de configuración
    };
    const goToEditProfile = () => {
      router.push('/edit-profile'); // Redirige a la vista de edición de perfil
    };
    const goToEditPassword = () => {
      router.push('/edit-password'); // Redirige a la vista de edición de contraseña
    };
    onMounted(fetchProfile);
    return {
      profile,
      actions,
      showConfig,
      toggleConfig,
      goToEditProfile, 
      backgroundImage,
      fetchProfile,
      goToEditPassword,
    };
  }
};
</script>
<style scoped>
/* Aquí puedes agregar estilos específicos para el ProfileComponent */
</style>
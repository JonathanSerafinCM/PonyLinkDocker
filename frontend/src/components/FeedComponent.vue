<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-[#F9FAFB]">
   <aside 
     :class="[
       'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
       isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
       'md:relative md:translate-x-0'
     ]"
   >
   <header class="flex items-center justify-between bg-[#001839] text-white p-4">
        <h2 class="text-xl font-semibold">Eventos & Proyectos</h2>
        <!-- Botón de cerrar solo en móviles -->
        <button 
          class="md:hidden text-2xl" 
          @click="toggleSidebar"
          aria-label="Cerrar menú"
        >
          &times;
        </button>
      </header>

      <div class="p-4 space-y-4">
        <div
          v-for="event in events"
          :key="event.id"
          class="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
        >
          <img :src="event.image" alt="Imagen del evento" class="w-full h-32 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-[#001839]">{{ event.title }}</h3>
            <p class="text-sm text-gray-500 mt-2">{{ event.description }}</p>
            <button 
              class="mt-4 w-full bg-[#001839] text-white rounded-md py-2 hover:bg-[#A9C8E0] transition-colors"
              @click="openEventDetails(event)"
            >
              Ver más
            </button>
         </div>
       </div>
     </div>
   </aside>
   <!-- Overlay para móviles cuando el sidebar está abierto -->
   <div 
     v-if="isSidebarOpen" 
     class="fixed inset-0 bg-black opacity-50 z-40 md:hidden" 
     @click="toggleSidebar"
   ></div>


      <!-- Columna de Publicaciones (centro) -->
      <main class="flex-1 p-4">
     <!-- Botón para abrir el sidebar solo en móviles -->
     <button 
       class="md:hidden mb-4 px-4 py-2 bg-[#001839] text-white rounded-md flex items-center justify-center gap-2"
       @click="toggleSidebar"
       aria-label="Abrir menú"
     >
       <!-- Icono de menú -->
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
       Eventos & Proyectos
     </button>
     
     <!-- Sección para Crear Publicación -->
     <section class="flex flex-col rounded-lg w-full max-w-[1000px] bg-white shadow-lg border border-[#A7C7E0] p-6 mb-6 mt-2 transition duration-200 transform hover:shadow-xl hover:bg-[#F8FBFF]">
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
             class="px-4 py-4 rounded-xl bg-[#E7F3FF] text-neutral-700 placeholder:text-neutral-500 border border-[#A7C7E0] focus:border-blue-500 focus:outline-none transition duration-200 text-lg mb-4"
           />
           <div class="flex gap-4 items-center justify-end">
             <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-[#A7C7E0] shadow-md hover:shadow-lg">
               <img
                 loading="lazy"
                 src="../assets/imagen.png"
                 alt="Attachment icon"
                 class="object-contain w-[30px] h-[30px] mr-2"
               />
             </button>
             <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-[#A7C7E0] shadow-md hover:shadow-lg">
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

     <!-- Publicaciones -->
    
     <div class="space-y-4">
 <section
   v-for="post in posts"
   :key="post.id"
   class="flex flex-col rounded-lg w-full max-w-[1000px] bg-white shadow-lg border border-[#A7C7E0] p-6 mb-6 mt-2 transition duration-200 transform hover:shadow-xl hover:bg-[#F8FBFF]"
 >
   <header class="flex gap-6 items-start">
     <img
       loading="lazy"
       src="https://cdn.builder.io/api/v1/image/assets/TEMP/3427795555feb36088d2eb6b44b3f41167f42b03c83757298d11092e9ab87c5c?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
       alt="User profile picture"
       class="object-contain rounded-full shadow-md w-[80px]"
     />
     <div>
       <h1 class="text-lg font-bold text-[#001839]">Usuario</h1>
       <p class="text-sm text-gray-500">Hace 2 horas</p>
     </div>
   </header>

   <div class="mt-4 text-base text-black">
     <h2 class="font-bold text-[#001839]">{{ post.title }}</h2>
     <p class="mt-2">{{ post.content }}</p>
   </div>

   <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 space-y-4 sm:space-y-0">
     <button 
       v-if="post.type === 'job'" 
       class="bg-[#001839] text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors w-full sm:w-auto"
     >
       <img loading="lazy" src="../assets/apply.png" alt="Aplicar" class="w-5 h-5 mr-2" />
       {{ post.buttonText }}
     </button>

     <div v-if="post.type === 'status'" class="flex items-center">
 <span class="font-bold text-[#001839]">Estado:</span>
 <span 
 class=" font-bold ml-2 px-3 py-1 text-black  rounded-full"
 :class="getStatusClass(post.status)"
>
 {{ post.status }}
</span>
</div>


<div class="flex flex-row justify-start sm:justify-end gap-3 sm:gap-4">
   <!-- Botón "Me gusta" -->
   <button 
 @click="toggleLike(post)"
 :class="[
   'flex items-center justify-center text-[#001839] hover:bg-gray-100 p-2 rounded-lg transition-transform duration-300',
   post.liked ? 'text-red-500' : 'text-[#001839]',
   post.isAnimatingLike ? 'animate-like' : ''
 ]"
 aria-label="Dar me gusta"
>
 <img 
   loading="lazy" 
   :src="post.liked ? require('@/assets/megusta2.png') : require('@/assets/megusta.png')" 
   alt="Me gusta" 
   class="w-5 h-5 mr-1 transition-transform duration-300"
     />
     Me gusta
   </button>
 
   <button
  @click="toggleComments(post)"
  class="flex items-center justify-center text-[#001839] hover:bg-gray-100 p-2 rounded-lg"
  aria-label="Comentar"
>
  <img loading="lazy" src="../assets/comentar.png" alt="Comentar" class="w-5 h-5 mr-1" />
  Comentar
</button>

 <button class="flex items-center justify-center text-[#001839] hover:bg-gray-100 p-2 rounded-lg">
   <img loading="lazy" src="../assets/compartir.png" alt="Compartir" class="w-5 h-5 mr-1" />
   Compartir
 </button>
</div>
   </div>
   <div v-if="post.showComments" class="mt-4">
        <CommentSection :postId="post.id" />
      </div>
 </section>
</div>

   </main>

<!-- Columna de Chat (derecha) -->
<aside class="sidebar">
      <ChatsComponent @chat-selected="handleChatSelected" />
    </aside>

    <main class="feed">
      <!-- Contenido del feed -->
    </main>

    <!-- Ventana de Chat -->
    <ChatWindow
      v-if="selectedChat"
      :chatUser="selectedChat.name"
      :chatId="selectedChat.id"
      @close="selectedChat = null"
    />

    <!-- Ventana de Detalles del Evento -->
    <EventDetails
      v-if="selectedEvent"
      :event="selectedEvent"
      @close="selectedEvent = null"
      
    />
  </div>
</template>

<script>
import ChatsComponent from './ChatsComponent.vue';
import ChatWindow from './ChatWindow.vue';
import CommentSection from './CommentSection.vue';
import EventDetails from './EventDetails.vue'; // Importa el nuevo componente

export default {
  name: 'FeedComponent',
  components: {
    ChatsComponent,
    CommentSection,
    ChatWindow,
    EventDetails,
  },
  data() {
    return {
      events: [
        { 
          title: 'Lanzamiento del Proyecto X', 
          description: 'Únete al lanzamiento de nuestro nuevo proyecto.', 
          image: 'https://via.placeholder.com/300x150?text=Proyecto+X' 
        },
        { 
          title: 'Conferencia de Tecnología', 
          description: 'No te pierdas nuestra conferencia el próximo viernes.', 
          image: 'https://via.placeholder.com/300x150?text=Proyecto+X' 
        },
      ],
      posts: [
        { 
          id: 1,
          type: 'job', 
          title: 'Oferta de trabajo: Desarrollador Frontend', 
          content: 'Estamos buscando un desarrollador frontend con experiencia en frameworks modernos como Vue.js. El candidato ideal deberá colaborar con diseñadores y desarrolladores backend para crear interfaces atractivas y funcionales.', 
          buttonText: 'Aplicar ahora',
          liked: false,
          isAnimatingLike: false,
          showComments: false,
        },
        { 
          id: 2,
          type: 'status', 
          title: 'Cambio de estado', 
          content: 'He actualizado mi estado para reflejar mi situación actual. Estoy "En busca de trabajo" y abierto a nuevas oportunidades donde pueda seguir desarrollándome profesionalmente.', 
          status: 'En busca de trabajo',
          liked: false,
          isAnimatingLike: false,
          showComments: false,
        },
        { 
          id: 3,
          type: 'status', 
          title: 'Cambio de estado', 
          content: 'He actualizado mi estado para reflejar mi situación actual. Estoy "Pendiente" y abierto a nuevas oportunidades donde pueda seguir desarrollándome profesionalmente.', 
          status: 'Pendiente',
          liked: false,
          isAnimatingLike: false,
          showComments: false,
        },
      ],
      chats: [
        { name: 'Ana', message: 'Hola, ¿cómo estás?', avatar: 'https://via.placeholder.com/50' },
        { name: 'Carlos', message: '¿Revisaste el reporte?', avatar: 'https://via.placeholder.com/50' },
      ],
      isSidebarOpen: false, 
      selectedChat: null,
      selectedEvent: null, // Almacena el evento seleccionado 
    };
  },
  methods: {
    openEventDetails(event) {
      this.selectedEvent = event; // Establece el evento seleccionado
    },
    // Opcional: manejar el interés del usuario
    // handleInterested(eventId) {
    //   console.log(`Usuario está interesado en el evento ${eventId}`);
    //   // Implementa la lógica necesaria, como una petición al backend
    // },

    handleChatSelected(chat) {
      this.selectedChat = chat; 
    },
    toggleComments(post) {
      post.showComments = !post.showComments;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleLike(post) {
      post.liked = !post.liked;
      post.isAnimatingLike = true;

      setTimeout(() => {
        post.isAnimatingLike = false;
      }, 300);
      
      // lógica para enviar el estado al backend
    },
    getStatusClass(status) {
      switch (status) {
        case 'En busca de trabajo':
          return 'bg-green-100 text-green-800';
        case 'Ocupado':
          return 'bg-red-100 text-red-800';
        case 'Pendiente':
          return 'bg-yellow-100 text-yellow-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    },
  } // Removed extra closing brace here
}; // Correctly closing export default
</script>

<style scoped>
body {
 font-family: 'Poppins', sans-serif;
 background-color: #F9FAFB;
}

input::placeholder {
 color: #B0B0B0;
}

button {
 transition: transform 0.2s ease;
}

button:hover {
 transform: scale(1.05);
}


/* Transición suave para el sidebar */
aside {
 
 transition: transform 0.3s ease-in-out;
}


@keyframes likeAnimation {
 0% {
   transform: scale(1);
 }
 50% {
   transform: scale(1.2);
 }
 100% {
   transform: scale(1);
 }
}

.animate-like {
 animation: likeAnimation 0.3s ease-in-out;
}


/* Evita que el botón se muestre en desktops */
button.md\:hidden {
 display: flex !important;
}

@media (min-width: 768px) {
 button.md\:hidden {
   display: none !important;
 }
}

/* Ensure the main container has a lower z-index */
.flex {
 z-index: 0; /* Added z-index */
}

/* If there are any other elements with z-index, adjust accordingly */
.feed {
  display: flex;
}
.post-container {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ffffff;
}
.post-actions button.animate-like {
  /* Definir animación para "Me gusta" si es necesario */
}
</style>
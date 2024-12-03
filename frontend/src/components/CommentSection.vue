<template>
    <div class="comment-section bg-[#F5F9FF] border border-[#CCE2FF] p-4 rounded-lg shadow-md">
      <!-- Título de la sección -->
      <h3 class="text-[#001839] text-lg font-semibold mb-4">Comentarios</h3>
      
      <!-- Comentarios de ejemplo -->
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment flex items-start gap-3 p-3 bg-white rounded-lg mb-3 border-l-4 border-[#001839] shadow-sm"
      >
        <img
          :src="comment.avatar || 'https://via.placeholder.com/40'"
          alt="User avatar"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p class="font-semibold text-[#001839]">{{ comment.user }}</p>
          <p class="text-gray-700 text-sm mt-1">{{ comment.text }}</p>
        </div>
      </div>
  
      <!-- Formulario de envío de comentarios -->
      <form @submit.prevent="submitComment" class="mt-4 flex flex-col gap-3">
        <input
          v-model="newComment"
          placeholder="Escribe un comentario..."
          class="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#001839]"
        />
        <button
          type="submit"
          class="bg-[#001839] text-white px-4 py-2 rounded-lg hover:bg-[#001839]/90 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentSection',
    props: {
      postId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        comments: [
          {
            id: 1,
            user: 'Ana',
            text: '¡Este post es muy interesante!',
            avatar: 'https://via.placeholder.com/40',
          },
          {
            id: 2,
            user: 'Carlos',
            text: 'Gracias por compartir esta información.',
            avatar: 'https://via.placeholder.com/40',
          },
        ],
        newComment: '',
        nextId: 3, // ID para nuevos comentarios
      };
    },
    methods: {
      submitComment() {
        if (this.newComment.trim() === '') return;
  
        const newComment = {
          id: this.nextId++,
          user: 'TuNombre', // Reemplaza con el nombre real del usuario si está disponible
          text: this.newComment,
          avatar: 'https://via.placeholder.com/40', // Reemplaza con la URL real del avatar si está disponible
        };
  
        // Agregar el nuevo comentario a la lista
        this.comments.push(newComment);
        this.newComment = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-section {
    margin-top: 1rem;
  }
  </style>
  
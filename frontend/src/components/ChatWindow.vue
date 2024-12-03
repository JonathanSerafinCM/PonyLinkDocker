<template>
    <div class="chat-window fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div class="bg-gradient-to-br from-[#E6F0FF] to-[#CCE2FF] w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-xl p-4 relative">
        <!-- Botón de cerrar -->
        <button @click="$emit('close')" class="absolute top-3 right-3 text-[#001839] font-semibold text-xl hover:text-opacity-70">
          &times;
        </button>
        
        <!-- Encabezado de chat -->
        <h2 class="text-xl font-semibold text-[#001839] mb-4">Conversación con {{ chatUser }}</h2>
        
        <!-- Contenedor de mensajes -->
        <div class="messages overflow-y-auto h-64 mb-4 bg-white p-3 rounded-lg shadow-inner border border-[#CCE2FF]">
          <!-- Mensajes simulados -->
          <div
            v-for="message in messages"
            :key="message.id"
            :class="['message', message.sender === 'Tú' ? 'bg-[#001839] text-white text-right rounded-l-lg' : 'bg-gray-100 text-[#001839] text-left rounded-r-lg']"
            class="p-2 my-2 w-2/3"
            :style="{ alignSelf: message.sender === 'Tú' ? 'flex-end' : 'flex-start' }"
          >
            <p><strong>{{ message.sender }}:</strong> {{ message.text }}</p>
          </div>
        </div>
        
        <!-- Formulario de envío de mensajes -->
        <form @submit.prevent="sendMessage" class="flex">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Escribe tu mensaje..."
            class="flex-1 border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#001839]"
            required
          />
          <button type="submit" class="bg-[#001839] text-white px-4 py-2 rounded-r-lg hover:bg-[#001839]/90 transition">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatWindow',
    props: {
      chatUser: {
        type: String,
        required: true,
      },
      chatId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        messages: [
          { id: 1, sender: 'Usuario', text: 'Hola!' },
          { id: 2, sender: 'Tú', text: '¡Hola! ¿Cómo estás?' },
        ],
        newMessage: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() === '') return;
        const newMsg = {
          id: this.messages.length + 1,
          sender: 'Tú',
          text: this.newMessage,
        };
        this.messages.push(newMsg);
        this.newMessage = '';
        // Aquí puedes agregar la lógica para enviar el mensaje al backend
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-window {
    z-index: 1000;
  }
  .messages {
    display: flex;
    flex-direction: column;
  }
  </style>
  
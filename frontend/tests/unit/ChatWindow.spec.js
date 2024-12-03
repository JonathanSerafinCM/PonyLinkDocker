// Verificar que al enviar un nuevo mensaje en el chat, 
//este se agrega correctamente al historial y el campo de entrada se limpia.

import { shallowMount } from '@vue/test-utils';
import ChatWindow from '@/components/ChatWindow.vue';

describe('ChatWindow.vue', () => {
  it('agrega un nuevo mensaje al enviar', async () => {
    const wrapper = shallowMount(ChatWindow, {
      props: {
        chatUser: 'Carlos',
        chatId: 1,
      },
    });

    // Simular la entrada de un nuevo mensaje
    const input = wrapper.find('input');
    await input.setValue('Nuevo mensaje de prueba');

    // Simular el envío del formulario
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Verificar que el mensaje se ha agregado
    expect(wrapper.vm.messages.length).toBe(3);
    expect(wrapper.vm.messages[2]).toEqual({
      id: 3,
      sender: 'Tú',
      text: 'Nuevo mensaje de prueba',
    });

    // Verificar que el campo de entrada se ha limpiado
    expect(wrapper.vm.newMessage).toBe('');
  });
});
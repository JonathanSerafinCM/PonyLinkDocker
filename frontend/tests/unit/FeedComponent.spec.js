// Comprobar que al hacer clic en el botón "Comentar" de una publicación, 
//la sección de comentarios se despliega.

import { shallowMount } from '@vue/test-utils';
import FeedComponent from '@/components/FeedComponent.vue';
import CommentSection from '@/components/CommentSection.vue';

describe('FeedComponent.vue', () => {
  const posts = [
    {
      id: 1,
      type: 'status',
      title: 'Estado 1',
      content: 'Contenido del estado 1',
      status: 'Activo',
      liked: false,
      isAnimatingLike: false,
      showComments: false,
    },
  ];

  it('despliega la sección de comentarios al hacer clic en "Comentar"', async () => {
    const wrapper = shallowMount(FeedComponent, {
      global: {
        components: { CommentSection }
      },
      data() {
        return {
          posts,
          events: [],
          chats: [],
          isSidebarOpen: false,
          selectedChat: null,
          selectedEvent: null
        };
      }
    });

    const commentButton = wrapper.find('button[aria-label="Comentar"]');
    await commentButton.trigger('click');

    expect(wrapper.vm.posts[0].showComments).toBe(true);
  });
});
//Verificar que el componente muestra correctamente la información del evento 
//(título, descripción e imagen).
import { shallowMount, mount } from '@vue/test-utils';
import EventDetails from '@/components/EventDetails.vue';

describe('EventDetails.vue', () => {
  const event = {
    id: 1,
    title: 'Conferencia de Tecnología',
    description: 'Descripción completa del evento.',
    image: 'https://via.placeholder.com/300x150?text=Evento',
  };

   beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    window.alert.mockRestore();
  });

  it('muestra correctamente la información del evento', () => {
    const wrapper = shallowMount(EventDetails, {
      props: { event },
    });

    expect(wrapper.text()).toContain(event.title);
    expect(wrapper.text()).toContain(event.description);
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(event.image);
    expect(img.attributes('alt')).toBe('Imagen del evento');
  });

  it('muestra una alerta al hacer clic en "Interesado en asistir"', async () => {
    const wrapper = mount(EventDetails, {
      props: { event },
    });

    // You can remove the console.log if not needed
    // console.log(wrapper.html());

    const button = wrapper.find('button[aria-label="express-interest"]');
    await button.trigger('click');

    expect(window.alert).toHaveBeenCalledWith(
      `Has expresado interés en asistir a ${event.title}`
    );
  });
});
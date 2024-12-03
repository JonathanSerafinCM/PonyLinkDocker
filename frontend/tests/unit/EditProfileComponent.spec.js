// Asegurar que al guardar la información del perfil, 
//se incluye el rol del usuario (solicitante) en los datos guardados.

import { shallowMount } from '@vue/test-utils';
import EditProfileComponent from '@/components/EditProfileComponent.vue';

describe('EditProfileComponent.vue', () => {
  it('incluye el rol del usuario al guardar la información', () => {
    const wrapper = shallowMount(EditProfileComponent, {
      data() {
        return {
          userRole: 'solicitante',
          
        };
      },
    });

    // Simular la acción de guardar información
    wrapper.vm.guardarInformacion();

    // Verificar que el console.log ha sido llamado con el rol correcto
    expect(console.log).toHaveBeenCalledWith(
      'Información guardada exitosamente.',
      expect.objectContaining({
        role: 'solicitante',
      })
    );
  });
});

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});
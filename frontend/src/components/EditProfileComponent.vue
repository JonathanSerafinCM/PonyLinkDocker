<template>
  <main 
    class="flex overflow-hidden flex-col items-center px-20 pt-9 pb-56 bg-cover bg-center max-md:px-5 max-md:pb-24"
    :style="{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }"
  >
    <section class="flex flex-col w-full max-w-[985px] max-md:max-w-full">
      <article class="flex flex-col items-center px-14 pt-3 pb-14 w-full bg-white rounded-3xl shadow-lg max-md:px-5">
        
        <div class="flex justify-center mt-6 w-full">
          <section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
            <div 
              @click="toggleConfig"
              class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
              role="presentation"
            >
              <h2 class="my-auto font-bold">Datos Personales</h2>
              <img 
                loading="lazy"
                src="../assets/sobremi.png"
                class="object-contain shrink-0 aspect-[0.87] w-[45px]"
                alt="Configuration icon"
              />
            </div>
          </section>
        </div>

        <!-- Contenedor principal para foto y formulario -->
        <div class="flex flex-wrap justify-between mt-6 w-full">
          <!-- Imagen del perfil -->
          <div class="w-full md:w-1/3 flex flex-col justify-center items-center">
            <div class="bg-red-600 p-2 rounded-full">
              <img 
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e092f7a63085f6cb55dbf46c8056c4b4a777d578f2d31c06d9747031a1f64f" 
                alt="Profile picture of Nadia Perez" 
                class="object-cover rounded-full w-[160px] h-[160px] shadow-md" 
              />
            </div>
            <!-- Botón para cambiar foto de perfil -->
            <button 
              @click="triggerFileInput" 
              class="mt-4 px-4 py-2 bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
            >
              <img 
                loading="lazy"
                src="../assets/camera.png" 
                class="w-6 h-6 mr-2" 
                alt="Edit icon"
              />
              Editar
            </button>
            <input 
              type="file" 
              ref="fileInput" 
              @change="onFileChange" 
              class="hidden"
            />
          </div>

          <!-- Formulario de Datos Personales -->
          <form class="w-full md:w-2/3 mt-6 md:mt-0 space-y-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300">
            <!-- Campo Nombre -->
            <div class="flex flex-col space-y-2">
              <label for="fullName" class="text-xl font-bold text-slate-900 pl-2">Nombre</label>
              <input
                v-model="fullName"
                id="fullName"
                type="text"
                class="px-4 py-4 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
                placeholder="Tu nombre completo"
                aria-label="Tu nombre completo"
              />
            </div>

            <!-- Campo Correo Electrónico -->
            <div class="flex flex-col space-y-2">
              <label for="email" class="text-xl font-bold text-slate-900 pl-2">Correo Electrónico</label>
              <input
                v-model="email"
                id="email"
                type="email"
                class="px-4 py-4 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
                placeholder="email@ejemplo.com"
                aria-label="Tu correo electrónico"
              />
            </div>

            <!-- Campo Número de Teléfono -->
            <div class="flex flex-col space-y-2">
              <label for="phone" class="text-xl font-bold text-slate-900 pl-2">Número de Teléfono</label>
              <input
                v-model="phone"
                id="phone"
                type="tel"
                class="px-4 py-4 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
                placeholder="(123) 456-7890"
                aria-label="Tu número de teléfono"
              />
            </div>

            <!-- Campo Ubicación -->
            <div class="flex flex-col space-y-2">
              <label for="location" class="text-xl font-bold text-slate-900 pl-2">Ubicación</label>
              <input
                v-model="location"
                id="location"
                type="text"
                class="px-4 py-4 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
                placeholder="Tu ubicación"
                aria-label="Tu ubicación"
              />
            </div>

            <!-- Nuevo Campo Rol de Usuario -->
            <div class="flex flex-col space-y-2">
              <label for="userRole" class="text-xl font-bold text-slate-900 pl-2">Rol</label>
              <select
                id="userRole"
                v-model="userRole"
                class="px-4 py-4 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
                aria-label="Selecciona tu rol"
              >
                <option value="solicitante">Solicitante</option>
                <option value="empleador">Empleador</option>
              </select>
            </div>
          </form>
        </div>

        <!-- Secciones de Información -->
        <section class="w-full mt-8 space-y-6">
          <!-- Sobre mí -->
          <div class="info-section">
            <div class="flex items-center">
              <h2 class="text-2xl font-bold text-slate-900">Sobre mí</h2>
              <img src="../assets/sobremi.png" alt="Arrow icon" class="w-6 h-6 ml-2" />
            </div>
            <div class="flex flex-col space-y-2">
              <!-- Campo de Título -->
              <input 
                type="text" 
                class="px-4 py-2 w-full bg-white-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
                placeholder="Sobre ti" 
                aria-label="Título importante" 
              />
              <!-- Campo de Descripción -->
              <textarea 
                class="mt-2 w-full bg-white rounded-md border-b-2 border-slate-900 text-neutral-700 p-4 resize-none"
                rows="4"
                placeholder="Escribe algo sobre ti..."
                aria-label="Sobre mí"
              ></textarea>
            </div>
          </div>

          <!-- Educación -->
          <div class="info-section">
            <div class="flex items-center">
              <h2 class="text-2xl font-bold text-slate-900">Educación</h2>
              <img src="../assets/educacion.png" alt="Arrow icon" class="w-6 h-6 ml-2" />
            </div>
            <div class="flex flex-col space-y-2">
              <!-- Campo de Título -->
              <input 
                type="text" 
                class="px-4 py-2 w-full bg-white-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
                placeholder="Titulo o especialidad" 
                aria-label="Título importante" 
              />
              <!-- Campo de Descripción -->
              <textarea 
                class="mt-2 w-full bg-white rounded-md border-b-2 border-slate-900 text-neutral-700 p-4 resize-none"
                rows="4"
                placeholder="Escribe tu educación..."
                aria-label="Educación"
              ></textarea>
            </div>
          </div>

          <!-- Experiencia -->
          <div class="info-section">
            <div class="flex items-center">
              <h2 class="text-2xl font-bold text-slate-900">Experiencia</h2>
              <img src="../assets/experiencia.png" alt="Arrow icon" class="w-6 h-6 ml-2" />
            </div>
            <div class="flex flex-col space-y-2">
              <!-- Campo de Título -->
              <input 
                type="text" 
                class="px-4 py-2 w-full bg-white-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
                placeholder="Expertise" 
                aria-label="Título importante" 
              />
              <!-- Campo de Descripción -->
              <textarea 
                class="mt-2 w-full bg-white rounded-md border-b-2 border-slate-900 text-neutral-700 p-4 resize-none"
                rows="4"
                placeholder="Escribe tu experiencia laboral..."
                aria-label="Experiencia"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- Sección de Perfil Profesional -->
        <div class="flex justify-center mt-6 w-full">
          <section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
            <div 
              @click="toggleProfile"
              class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
              role="presentation"
            >
              <h2 class="my-auto font-bold">Perfil Profesional</h2>
              <img 
                loading="lazy"
                src="../assets/popular.png"
                class="object-contain shrink-0 aspect-[0.87] w-[45px]"
                alt="Profile icon"
              />
            </div>
          </section>
        </div>

        <!-- Campo para Resumen Breve -->
        <div class="info-section mt-6">
          <div class="flex items-center">
            <h2 class="text-2xl font-bold text-slate-900">Resumen Breve</h2>
          </div>
          <textarea 
            class="mt-2 w-full bg-white-200 rounded-md border-b-2 border-slate-900 text-neutral-700 p-4 resize-none"
            rows="4" 
            cols="110"
            placeholder="Escribe un resumen breve de tus habilidades, experiencia y objetivos laborales..."
            aria-label="Resumen breve de habilidades, experiencia y objetivos laborales"
          ></textarea>
        </div>

      <!-- Sección de experiencia laboral actualizada -->
<div class="flex flex-col items-center mt-6 w-full">
  <section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
    <div 
      class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
      role="presentation"
    >
      <h2 class="my-auto font-bold">Experiencia Laboral</h2>
      <img 
        loading="lazy"
        src="../assets/expe.png"
        class="object-contain shrink-0 aspect-[0.87] w-[45px]"
        alt="Experience icon"
      />
    </div>
  </section>

  <!-- Botón "Añadir experiencia" siempre visible -->
  <button
    @click="toggleExperienceForm"
    class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
  >
    <img 
      loading="lazy"
      src="../assets/mass.png" 
      class="w-6 h-6 mr-2" 
      alt="Add icon"
    />
    {{ isExperienceFormVisible ? 'Ocultar formulario' : 'Añadir experiencia' }}
  </button>

  <!-- Formulario de experiencia laboral -->
  <transition name="fade">
    <form v-if="isExperienceFormVisible" class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col space-y-2">
          <label for="company" class="text-xl font-bold text-slate-900">Empresa</label>
          <input id="company" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="position" class="text-xl font-bold text-slate-900">Cargo</label>
          <input id="position" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="startDate" class="text-xl font-bold text-slate-900">Fecha inicio</label>
          <input id="startDate" type="date" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="endDate" class="text-xl font-bold text-slate-900">Fecha de finalización</label>
          <input id="endDate" type="date" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>
      </div>

      <div class="flex flex-col space-y-2 mt-4">
        <label for="description" class="text-xl font-bold text-slate-900">Descripción</label>
        <textarea id="description" rows="4" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700 resize-none"></textarea>
      </div>

      <div class="mt-6 flex justify-end">
        <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
          <img 
            loading="lazy"
            src="../assets/ok.png" 
            class="w-6 h-6 mr-2" 
            alt="Save icon"
          />
          Guardar experiencia
        </button>
      </div>
    </form>
  </transition>
</div>




      <!-- Sección de Formación Académica -->
      <div class="flex flex-col items-center mt-6 w-full">
        <section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
          <div 
            class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
            role="presentation"
          >
            <h2 class="my-auto font-bold">Formación Académica</h2>
            <img 
              loading="lazy"
              src="../assets/edu.png"
              class="object-contain shrink-0 aspect-[0.87] w-[45px]"
              alt="Education icon"
            />
          </div>
        </section>

        <!-- Botón "Añadir formación" -->
        <button
          @click="toggleEducationForm"
          class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
        >
          <img 
            loading="lazy"
            src="../assets/mass.png" 
            class="w-6 h-6 mr-2" 
            alt="Add icon"
          />
          {{ isEducationFormVisible ? 'Ocultar formulario' : 'Añadir formación' }}
        </button>

        <!-- Formulario de formación académica -->
        <transition name="fade">
          <form 
            v-if="isEducationFormVisible" 
            class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col space-y-2">
                <label for="institution" class="text-xl font-bold text-slate-900">Institución Educativa</label>
                <input id="institution" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
              </div>

              <div class="flex flex-col space-y-2">
                <label for="degree" class="text-xl font-bold text-slate-900">Título o Grado</label>
                <input id="degree" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
              </div>

              <div class="flex flex-col space-y-2">
                <label for="fieldOfStudy" class="text-xl font-bold text-slate-900">Campo de Estudio</label>
                <input id="fieldOfStudy" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
              </div>

              <div class="flex flex-col space-y-2">
                <label for="eduStartDate" class="text-xl font-bold text-slate-900">Fecha de Inicio</label>
                <input id="eduStartDate" type="date" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
              </div>

              <div class="flex flex-col space-y-2">
                <label for="eduEndDate" class="text-xl font-bold text-slate-900">Fecha de Finalización</label>
                <input id="eduEndDate" type="date" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
              </div>
            </div>

            <div class="flex flex-col space-y-2 mt-4">
              <label for="eduDescription" class="text-xl font-bold text-slate-900">Descripción</label>
              <textarea id="eduDescription" rows="4" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700 resize-none"></textarea>
            </div>

            <div class="mt-6 flex justify-end">
              <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="../assets/ok.png" 
                  class="w-6 h-6 mr-2" 
                  alt="Save icon"
                />
                Guardar formación
              </button>
            </div>
          </form>
        </transition>
      </div>

      
<!-- Sección de Habilidades y Competencias -->
<div class="flex flex-col items-center mt-6 w-full">
<section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
  <div 
    class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
    role="presentation"
  >
    <h2 class="my-auto font-bold">Habilidades y Competencias</h2>
    <img 
      loading="lazy"
      src="../assets/contacto.png" 
      class="object-contain shrink-0 aspect-[0.87] w-[45px]"
      alt="Skills icon"
    />
  </div>
</section>

<!-- Botón "Añadir Habilidad Blanda" -->
<button
  @click="toggleSoftSkillForm"
  class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
>
  <img 
    loading="lazy"
    src="../assets/mass.png" 
    class="w-6 h-6 mr-2" 
    alt="Add icon"
  />
  {{ isSoftSkillFormVisible ? 'Ocultar formulario de habilidad blanda' : 'Añadir habilidad blanda' }}
</button>

<!-- Formulario de habilidad blanda -->
<transition name="fade">
  <form 
    v-if="isSoftSkillFormVisible" 
    class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
  >
    <div class="flex flex-col space-y-2">
      <label for="softSkill" class="text-xl font-bold text-slate-900">Habilidad Blanda</label>
      <input id="softSkill" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
    </div>
    
    <div class="mt-6 flex justify-end">
      <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
        <img 
          loading="lazy"
          src="../assets/ok.png" 
          class="w-6 h-6 mr-2" 
          alt="Save icon"
        />
        Guardar habilidad blanda
      </button>
    </div>
  </form>
</transition>

<!-- Botón "Añadir Habilidad Técnica" -->
<button
  @click="toggleHardSkillForm"
  class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
>
  <img 
    loading="lazy"
    src="../assets/mass.png" 
    class="w-6 h-6 mr-2" 
    alt="Add icon"
  />
  {{ isHardSkillFormVisible ? 'Ocultar formulario de habilidad técnica' : 'Añadir habilidad técnica' }}
</button>

<!-- Formulario de habilidad técnica -->
<transition name="fade">
  <form 
    v-if="isHardSkillFormVisible" 
    class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
  >
    <div class="flex flex-col space-y-2">
      <label for="hardSkill" class="text-xl font-bold text-slate-900">Habilidad Técnica</label>
      <input id="hardSkill" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
    </div>

    <div class="mt-6 flex justify-end">
      <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
        <img 
          loading="lazy"
          src="../assets/ok.png" 
          class="w-6 h-6 mr-2" 
          alt="Save icon"
        />
        Guardar habilidad técnica
      </button>
    </div>
  </form>
</transition>
</div>

<!-- Sección de Idiomas -->
<div class="flex flex-col items-center mt-6 w-full">
  <section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
    <div 
      class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
      role="presentation"
    >
      <h2 class="my-auto font-bold">Idiomas</h2>
      <img 
        loading="lazy"
        src="../assets/idiomas.png"
        class="object-contain shrink-0 aspect-[0.87] w-[45px]"
        alt="Language icon"
      />
    </div>
  </section>

  <!-- Botón "Añadir idioma" -->
  <button
    @click="toggleLanguageForm"
    class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
  >
    <img 
      loading="lazy"
      src="../assets/mass.png" 
      class="w-6 h-6 mr-2" 
      alt="Add icon"
    />
    {{ isLanguageFormVisible ? 'Ocultar formulario' : 'Añadir idioma' }}
  </button>

  <!-- Formulario de idiomas -->
  <transition name="fade">
    <form 
      v-if="isLanguageFormVisible" 
      class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col space-y-2">
          <label for="language" class="text-xl font-bold text-slate-900">Idioma</label>
          <input id="language" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="proficiency" class="text-xl font-bold text-slate-900">Nivel de Dominio</label>
          <select id="proficiency" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700">
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            <option value="Nativo">Nativo</option>
          </select>
        </div>

        <div class="flex flex-col space-y-2">
          <label for="certification" class="text-xl font-bold text-slate-900">Certificación (Opcional)</label>
          <input id="certification" type="text" class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" />
        </div>
      </div>

      <div class="mt-6 flex justify-end">
        <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
          <img 
            loading="lazy"
            src="../assets/ok.png" 
            class="w-6 h-6 mr-2" 
            alt="Save icon"
          />
          Guardar idioma
        </button>
      </div>
    </form>
  </transition>
</div>

<!-- Sección de Proyectos -->
<div class="flex flex-col items-center mt-6 w-full">
<section class="flex flex-col w-full text-2xl font-bold text-slate-900 text-center">
  <div 
    class="flex gap-2 px-4 py-2 bg-blue-100 rounded-xl border-b border-slate-900 shadow-md transition-transform transform hover:scale-105 items-center cursor-pointer justify-center"
    role="presentation"
  >
    <h2 class="my-auto font-bold">Proyectos</h2>
    <img 
      loading="lazy"
      src="../assets/expe.png" 
      class="object-contain shrink-0 aspect-[0.87] w-[45px]"
      alt="Projects icon"
    />
  </div>
</section>

<!-- Botón "Añadir Proyecto Personal" -->
<button
  @click="togglePersonalProjectForm"
  class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
>
  <img 
    loading="lazy"
    src="../assets/mass.png" 
    class="w-6 h-6 mr-2" 
    alt="Add icon"
  />
  {{ isPersonalProjectFormVisible ? 'Ocultar formulario de proyecto personal' : 'Añadir proyecto personal' }}
</button>

<!-- Formulario de Proyecto Personal -->
<transition name="fade">
  <form 
    v-if="isPersonalProjectFormVisible" 
    class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
  >
    <div class="flex flex-col space-y-2">
      <label for="personalProject" class="text-xl font-bold text-slate-900">Nombre del Proyecto</label>
      <input 
        id="personalProject" 
        type="text" 
        class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
      />
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <label for="description" class="text-xl font-bold text-slate-900">Descripción</label>
      <textarea 
        id="description" 
        rows="3" 
        class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700"
      ></textarea>
    </div>
    
    <div class="mt-6 flex justify-end">
      <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
        <img 
          loading="lazy"
          src="../assets/ok.png" 
          class="w-6 h-6 mr-2" 
          alt="Save icon"
        />
        Guardar Proyecto Personal
      </button>
    </div>
  </form>
</transition>

<!-- Botón "Añadir Proyecto Académico" -->
<button
  @click="toggleAcademicProjectForm"
  class="mt-4 px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
>
  <img 
    loading="lazy"
    src="../assets/mass.png" 
    class="w-6 h-6 mr-2" 
    alt="Add icon"
  />
  {{ isAcademicProjectFormVisible ? 'Ocultar formulario de proyecto académico' : 'Añadir proyecto académico' }}
</button>

<!-- Formulario de Proyecto Académico -->
<transition name="fade">
  <form 
    v-if="isAcademicProjectFormVisible" 
    class="mt-4 w-full max-w-[985px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
  >
    <div class="flex flex-col space-y-2">
      <label for="academicProject" class="text-xl font-bold text-slate-900">Nombre del Proyecto</label>
      <input 
        id="academicProject" 
        type="text" 
        class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
      />
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <label for="techStack" class="text-xl font-bold text-slate-900">Tecnologías Usadas</label>
      <input 
        id="techStack" 
        type="text" 
        class="px-4 py-2 w-full bg-blue-100 rounded-md border-b-2 border-slate-900 text-neutral-700" 
      />
    </div>

    <div class="mt-6 flex justify-end">
      <button type="submit" class="px-6 py-2 bg-blue-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
        <img 
          loading="lazy"
          src="../assets/ok.png" 
          class="w-6 h-6 mr-2" 
          alt="Save icon"
        />
        Guardar Proyecto Académico
      </button>
    </div>
  </form>
</transition>
</div>


<!-- Botón Guardar al final del formulario -->
<button
@click="guardarInformacion"
type="submit"
class="mt-6 px-6 py-3 bg-green-100 rounded-xl border-b-2 border-slate-900 text-neutral-700 font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center"
>
<img 
  loading="lazy"
  src="../assets/ok.png" 
  class="w-6 h-6 mr-2" 
  alt="Save icon"
/>
Guardar Informacion
</button>


    </article>
  </section>
</main>
</template>



<style scoped>
.info-section {
padding: 1rem;
background-color: #e0e7ff;
border-radius: 0.5rem;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;
}
.info-section:hover {
transform: scale(1.05);
}
.fade-enter-active, .fade-leave-active {
transition: opacity 0.5s, max-height 0.5s;
max-height: 1000px;
overflow: hidden;
}
.fade-enter, .fade-leave-to {
opacity: 0;
max-height: 0;
}
</style>

<script>
import axios from 'axios';
import backgroundImage from '@/assets/fondo2.png';

export default {
name: 'EditProfileComponent',
data() {
  return {
    fullName: '',              // Nombre completo
    email: '',                 // Correo electrónico
    phone: '',                 // Número de teléfono
    location: '',              // Ubicación
    backgroundImage,
    isEducationFormVisible: false,
    isExperienceFormVisible: false,
    isSoftSkillFormVisible: false,
    isHardSkillFormVisible: false,
    isLanguageFormVisible: false,
    isPersonalProjectFormVisible: false,
    isAcademicProjectFormVisible: false,
    userRole: 'solicitante' // Nuevo campo para el rol del usuario
  };
},
methods: {
  toggleConfig() {
    // Implementar lógica para alternar la configuración
  },
  openGallery() {
    // Implementar lógica para abrir la galería
  },
  toggleProfile() {
    // Implementar lógica para alternar el perfil
  },
  toggleExperienceForm() {
    this.isExperienceFormVisible = !this.isExperienceFormVisible;
  },
  toggleEducationForm() {
    this.isEducationFormVisible = !this.isEducationFormVisible;
  },
  toggleSoftSkillForm() {
    this.isSoftSkillFormVisible = !this.isSoftSkillFormVisible;
  },
  toggleHardSkillForm() {
    this.isHardSkillFormVisible = !this.isHardSkillFormVisible;
  },
  toggleLanguageForm() {
    this.isLanguageFormVisible = !this.isLanguageFormVisible;
  },
  guardarInformacion() {
      // Crear el objeto FormData para enviar los datos y el archivo de imagen
      const formData = new FormData();
      formData.append('name', this.fullName);
      formData.append('email', this.email);
      formData.append('telefono', this.phone);
      formData.append('ubicacion', this.location);
      
      // Agregar la imagen de perfil si el usuario seleccionó una
      if (this.profilePhoto) {
        formData.append('profile_photo_path', this.profilePhoto);
      }

      // Incluir el rol del usuario al guardar la información
      const profileData = {
        name: this.fullName,
        email: this.email,
        telefono: this.phone,
        ubicacion: this.location,
        role: this.userRole
      };

      // Enviar los datos a la API
      axios.post('http://127.0.0.1:8000/api/editarInfoPersonal', formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      alert('Perfil actualizado correctamente');
      console.log("Información guardada exitosamente.", profileData);
    })
    .catch(error => {
      if (error.response && error.response.data) {
        console.error('Errores de validación:', error.response.data.errors); // Muestra los errores específicos
        alert('Hubo un problema al actualizar el perfil: ' + JSON.stringify(error.response.data.errors));
      } else {
        alert('Hubo un problema al actualizar el perfil');
      }
    });
  },
  triggerFileInput() {
      this.$refs.fileInput.click();
  },
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.profilePhoto = file; // Guarda la imagen seleccionada
    }
  },
togglePersonalProjectForm() {
    this.isPersonalProjectFormVisible = !this.isPersonalProjectFormVisible;
  },
  toggleAcademicProjectForm() {
    this.isAcademicProjectFormVisible = !this.isAcademicProjectFormVisible;
  }
}
};
</script>


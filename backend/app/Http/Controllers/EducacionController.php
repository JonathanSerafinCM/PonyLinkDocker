<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Educacion; // Import the Educacion model

class EducacionController extends Controller
{
    public function education(Request $request)
    {
        $educations = $request->user()->educacion; 
        return response()->json('profile.education', [
            'educacion' => $educations,
        ]);
    }

    public function store(Request $request)
    {
        \Log::info('Education Form Data:', $request->all());

        $validated = $request->validate([
            'institucion' => 'required|string|max:255',
            'titulo_grado' => 'required|string|max:255',
            'campo_estudio' => 'required|string|max:255',
            'fecha_inicio' => 'required|date',
            'fecha_finalizacion' => 'nullable|date|after_or_equal:fecha_inicio',
            'descripcion' => 'nullable|string'
        ]);

        $education = $request->user()->educacion()->create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Formación académica agregada con éxito',
            'education' => $education
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'institucion' => 'required|string|max:255',
            'titulo_grado' => 'required|string|max:255',
            'campo_estudio' => 'required|string|max:255',
            'fecha_inicio' => 'required|date',
            'fecha_finalizacion' => 'nullable|date|after_or_equal:fecha_inicio',
            'descripcion' => 'nullable|string'
        ]);

        $education = Educacion::findOrFail($id); // Find the education record

        $education->update($validated); // Update the record

        return response()->json([
            'success' => true,
            'message' => 'Formación académica actualizada con éxito',
            'education' => $education
        ]);
    }


    public function deleteEducation(Request $request, $id)
    {
        try {
            $education = $request->user()->educacion()->findOrFail($id);
            $education->delete();

            return response()->json([
                'success' => true,
                'message' => 'Formación académica eliminada con éxito',
            ]);
        } catch (\Exception $e) {
            Log::error('Error al eliminar formación académica: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar la formación académica: ' . $e->getMessage(),
            ], 500);
        }
    }
   
    public function getEducation($id)
    {
        try {
            $education = Educacion::findOrFail($id);
            
            return response()->json([
                'success' => true,
                'education' => [
                    'institucion' => $education->institucion,
                    'titulo_grado' => $education->titulo_grado,
                    'campo_estudio' => $education->campo_estudio, 
                    'fecha_inicio' => $education->fecha_inicio,
                    'fecha_finalizacion' => $education->fecha_finalizacion,
                    'descripcion' => $education->descripcion
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('Error al obtener formación académica: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'No se encontró el registro de educación'
            ], 404);
        }
    }
}

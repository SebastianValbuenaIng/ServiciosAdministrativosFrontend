import { Announcement, candidate } from "@/types/d";

export const Announcement1: Announcement[] = [
  {
    id: "1",
    nombre: "Profesor de catedra",
    fecha_inicio: "2024-02-05",
    fecha_fin: "2024-02-05",
    descripcion: "Descripción",
    tipo_convocatoria: "2",
    periodo: "2024-1",
    persona_responsable: "Angel Stiven Toro Fuentes",
    director_area: "Angel Stiven Toro Fuentes",
  },
  {
    id: "2",
    nombre: "Profesor de planta",
    fecha_inicio: "2024-02-05",
    fecha_fin: "2024-02-12",
    descripcion: "Descripción",
    tipo_convocatoria: "1",
    periodo: "2024-1",
    persona_responsable: "Angel Stiven Toro Fuentes",
    director_area: "Angel Stiven Toro Fuentes",
  },
  {
    id: "3",
    nombre: "Profesor de planta",
    fecha_inicio: "2024-02-05",
    fecha_fin: "2024-02-20",
    periodo: "2024-2",
    descripcion: "Descripción de convocatoria",
    tipo_convocatoria: "2",
    persona_responsable: "Angel Stiven Toro Fuentes",
    director_area: "Angel Stiven Toro Fuentes",
  },
];

export const candidates: candidate[] = [
  {
    id: "1",
    nombre_aspirante: "Angel Stiven Toro Fuentes",
    estado: "Inscrito",
    fecha_inscripcion: "06-02-2024",
    fecha_nacimiento: "27-03-2003",
    genero: "H",
  },
  {
    id: "2",
    nombre_aspirante: "Camilo Andres Galindo Rivera",
    estado: "Inscrito",
    fecha_inscripcion: "10-01-2024",
    fecha_nacimiento: "27-03-2003",
    genero: "H",
  },
  {
    id: "3",
    nombre_aspirante: "Sebastian Arturo Valbuena Acosta",
    estado: "Inscrito",
    fecha_inscripcion: "31-01-2024",
    fecha_nacimiento: "27-03-2003",
    genero: "H",
  },
];

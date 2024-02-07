export interface Candidato { 
    id: number; 
    nombre: string; 
    nroton: number; 
    narc?: string; 
} 

export interface Validacion {
    copasst: number;
}

export interface Announcement {
    id: string;
    nombre: string;
    fecha_inicio?: string;
    fecha_fin: string;
    descripcion?: string;
    tipo_convocatoria: string;
    periodo: string;
    persona_responsable?: string;
    director_area?: string;
}

export interface candidate {
    id: string;
    nombre_aspirante: string;
    fecha_inscripcion: string;
    genero: "M" | "H";
    fecha_nacimiento: string;
    estado: string
}

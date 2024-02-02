import { PersonaActiva } from '@/types';
import { create } from 'zustand'

interface State {
    infoPersona: PersonaActiva;
    setInfoPersona: (infoPersona: PersonaActiva) => void;
}

export const useInfoPersonaStore = create<State>()((set, get) => ({
    infoPersona: {
        id: 0,
        nombre: '',
        nroDocumento: '',
        emplId: '',
        email: '',
        tipoDocumento: ''
    },
    setInfoPersona(infoPersona) {
        set({ infoPersona });
    },
}))
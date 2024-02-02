interface optionCard {
    text: string;
    icon: string;
    route: string;
}

export const optionsCards: optionCard[] = [
    {
        text: 'Votaciones',
        icon: 'clipboard-data',
        route: '/votaciones'
    },
    {
        text: 'Gestión de cursos',
        icon: 'journal-check',
        route: 'https://tycho.escuelaing.edu.co/GestionDeCursos/jsp/Inicio.jsp'
    },
    {
        text: 'Gestione su contraseña de correo',
        icon: 'envelope-check',
        route: '/password'
    },
    {
        text: 'Documentos institucionales',
        icon: 'file-earmark-text',
        route: '/documentos'
    },
    {
        text: 'Boletín estadístico',
        icon: 'file-earmark-bar-graph',
        route: 'https://app.powerbi.com/view?r=eyJrIjoiZDllYzQyMzEtM2IzMS00MWYxLWJjYTktMjkzMzEzZDdmMDcyIiwidCI6IjUwNjQwNTg0LTJhNDAtNDIxNi1hODRiLTliM2VlMGYzZjZjZiIsImMiOjR9'
    },
    {
        text: 'Encuesta de Autoevaluación',
        icon: 'clipboard-check',
        route: 'https://siaci-escuelaing.azurewebsites.net/Account/Login'
    },
    {
        text: 'Fondo de solidaridad',
        icon: 'piggy-bank',
        route: 'https://empleados.escuelaing.edu.co/intraeci/FormUnete'
    },
    {
        text: 'Actualización Datos Nómina',
        icon: 'person-vcard',
        route: '/actualizacion-datos'    
    }
]
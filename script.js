// 1. Datos de la carrera
const malla = [
    {
        semestre: "SEMESTRE I",
        ramos: [
            { id: "tip1", nombre: "Taller de Integración y Práctica I", sct: 5, req: [] },
            { id: "hta", nombre: "Habilidades de Trabajo Académico", sct: 4, req: [] },
            { id: "fbc", nombre: "Fundamentos Biológicos del Comportamiento", sct: 6, req: [] },
            { id: "int_psi", nombre: "Introducción a la Psicología", sct: 5, req: [] },
            { id: "fsc", nombre: "Fundamentos Sociales y Culturales del Comportamiento", sct: 6, req: [] },
            { id: "ing1", nombre: "Inglés Técnico I", sct: 4, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE II",
        ramos: [
            { id: "tip2", nombre: "Taller de Integración y Práctica II", sct: 4, req: ["tip1"] },
            { id: "met_inv", nombre: "Metodologías de la Investigación en Ciencias Sociales", sct: 4, req: [] },
            { id: "nca", nombre: "Neurociencias Cognitiva y Afectiva", sct: 6, req: [] },
            { id: "proc_psi", nombre: "Procesos Psicológicos", sct: 6, req: [] },
            { id: "psi_soc", nombre: "Psicología Social", sct: 6, req: [] },
            { id: "ing2", nombre: "Inglés Técnico II", sct: 4, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE III",
        ramos: [
            { id: "tip3", nombre: "Taller de Integración y Práctica III", sct: 4, req: ["tip2"] },
            { id: "met_cuan", nombre: "Métodos Cuantitativos de la Investigación", sct: 5, req: ["met_inv"] },
            { id: "proc_apr", nombre: "Procesos de Aprendizaje", sct: 6, req: [] },
            { id: "dev_inf", nombre: "Psicología del Desarrollo: Infancia", sct: 6, req: [] },
            { id: "pce", nombre: "Pensamiento, Cuerpo y Emoción", sct: 5, req: [] },
            { id: "opt1", nombre: "Operativo de Formación Complementaria", sct: 4, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE IV",
        ramos: [
            { id: "tip4", nombre: "Taller de Integración y Práctica IV", sct: 4, req: ["tip3"] },
            { id: "met_cual", nombre: "Métodos Cualitativos de la Investigación", sct: 5, req: ["met_inv"] },
            { id: "psi_per", nombre: "Psicología de la Personalidad e Identidad", sct: 5, req: [] },
            { id: "dev_adu", nombre: "Psicología del Desarrollo: Adultez y Personas Mayores", sct: 6, req: [] },
            { id: "opt2", nombre: "Optativo de Formación Complementaria", sct: 4, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE V",
        ramos: [
            { id: "tip5", nombre: "Taller de Integración y Práctica V", sct: 4, req: ["tip4"] },
            { id: "tal_met", nombre: "Taller de Métodos de la Investigación", sct: 5, req: ["met_cuan", "met_cual"] },
            { id: "int_psi_cli", nombre: "Introducción a la Psicología Clínica", sct: 6, req: [] },
            { id: "ia", nombre: "Inteligencia Artificial y Desafíos Emergentes", sct: 6, req: [] },
            { id: "psi_org", nombre: "Psicología del Trabajo y Organizaciones", sct: 5, req: [] },
            { id: "opt3", nombre: "Optativo de Formación Complementaria", sct: 4, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE VI",
        ramos: [
            { id: "tip6", nombre: "Taller de Integración y Práctica VI", sct: 4, req: ["tip5"] },
            { id: "psi_com", nombre: "Psicología Comunitaria", sct: 5, req: [] },
            { id: "psi_edu", nombre: "Psicología Educacional", sct: 5, req: [] },
            { id: "psi_jur", nombre: "Psicología Jurídica", sct: 5, req: [] },
            { id: "sm_ni", nombre: "Salud Mental y Psicopatología de Niños/as, Adolescentes y Jóvenes", sct: 6, req: ["int_psi_cli"] },
            { id: "elec1", nombre: "Electivo: Perspectivas de Intervención en Psicología Clínica I", sct: 5, req: ["int_psi_cli"] }
        ]
    },
    {
        semestre: "SEMESTRE VII",
        ramos: [
            { id: "tip7", nombre: "Taller de Integración y Práctica VII", sct: 4, req: ["tip6"] },
            { id: "dis_proy", nombre: "Diseño y Evaluación de Proyectos de Intervención", sct: 5, req: ["tal_met"] },
            { id: "tal_socio", nombre: "Taller Sociocomunitario", sct: 5, req: [] },
            { id: "diag_ni", nombre: "Psicodiagnóstico de Niños/as, Adolescentes y Jóvenes", sct: 5, req: ["int_psi_cli"] },
            { id: "sm_adu", nombre: "Salud Mental y Psicopatologías en Adultos y Personas Mayores", sct: 6, req: ["int_psi_cli"] },
            { id: "elec2", nombre: "Electivo: Perspectivas de Intervención en Psicología Clínica II", sct: 5, req: ["int_psi_cli"] }
        ]
    },
    {
        semestre: "SEMESTRE VIII",
        ramos: [
            { id: "tip8", nombre: "Taller de Integración y Práctica VIII", sct: 4, req: ["tip7"] },
            { id: "imp_proy", nombre: "Implementación y Evaluación de Proyectos de Intervención", sct: 10, req: ["dis_proy"] },
            { id: "pol_pub", nombre: "Políticas Públicas e Interdisciplinariedad", sct: 5, req: [] },
            { id: "bienestar", nombre: "Bienestar y Salud Mental", sct: 5, req: [] },
            { id: "diag_adu", nombre: "Psicodiagnóstico de Adultos y Personas Mayores", sct: 6, req: ["int_psi"] }
        ]
    },
    {
        semestre: "SEMESTRE IX",
        ramos: [
            { id: "pre_prac", nombre: "Pre Práctica Profesional", sct: 10, req: [] },
            { id: "cap1", nombre: "Curso de Área Profesional", sct: 5, req: [] },
            { id: "cap2", nombre: "Curso de Área Profesional", sct: 5, req: [] },
            { id: "cap3", nombre: "Curso de Área Profesional", sct: 5, req: [] },
            { id: "cap4", nombre: "Curso de Área Profesional", sct: 5, req: [] }
        ]
    },
    {
        semestre: "SEMESTRE X",
        ramos: [
            { id: "prac_pro", nombre: "Práctica Profesional", sct: 26, req: [] },
            { id: "t_prac", nombre: "Taller de Acompañamiento de la Práctica", sct: 4, req: [] }
        ]
    }
];

// 2. Estado de la aplicación
let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

// 3. Funciones principales
function init() {
    renderMalla();
    document.getElementById('reset-btn').addEventListener('click', resetProgreso);
}

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    malla.forEach(sem => {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        col.innerHTML = `<h3>${sem.semestre}</h3>`;

        sem.ramos.forEach(ramo => {
            const card = document.createElement('div');
            card.id = ramo.id;
            card.className = 'ramo';
            
            // Lógica de clases (aprobado, disponible, bloqueado)
            const isAprobado = aprobados.includes(ramo.id);
            const { requisitosCumplidos, faltantes } = verificarRequisitos(ramo.req);

            if (isAprobado) {
                card.classList.add('aprobado');
            } else if (requisitosCumplidos) {
                card.classList.add('disponible');
            }
            
            card.innerHTML = `
                ${ramo.nombre}
                <span class="sct">${ramo.sct} SCT</span>
            `;

            card.onclick = () => toggleRamo(ramo, requisitosCumplidos, faltantes);
            col.appendChild(card);
        });

        container.appendChild(col);
    });
}

function verificarRequisitos(reqList) {
    if (reqList.length === 0) return { requisitosCumplidos: true, faltantes: [] };
    
    const faltantes = reqList
        .filter(reqId => !aprobados.includes(reqId))
        .map(reqId => {
            // Buscar el nombre del ramo faltante para el mensaje
            for (let s of malla) {
                let r = s.ramos.find(ramo => ramo.id === reqId);
                if (r) return r.nombre;
            }
            return reqId;
        });

    return {
        requisitosCumplidos: faltantes.length === 0,
        faltantes: faltantes
    };
}

function toggleRamo(ramo, requisitosCumplidos, faltantes) {
    const index = aprobados.indexOf(ramo.id);

    if (index > -1) {
        // Si ya está aprobado, lo quitamos
        aprobados.splice(index, 1);
    } else {
        // Si no está aprobado, verificamos requisitos
        if (requisitosCumplidos) {
            aprobados.push(ramo.id);
        } else {
            alert(`No puedes aprobar este ramo aún. Faltan: \n- ${faltantes.join('\n- ')}`);
            return;
        }
    }

    saveAndReload();
}

function saveAndReload() {
    localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    renderMalla();
}

function resetProgreso() {
    if (confirm('¿Estás seguro de que quieres borrar todo tu progreso?')) {
        aprobados = [];
        saveAndReload();
    }
}

// Ejecutar al cargar
init();

/*
    Asegurate que el texto que modifiques quede entre comillas, como esta aya SAPO!    
    
    info: elemento de la lista de paquete
    tip : es el content del incono de informacion

    Si no hay tip pones alla : null
    
*/

const main = [
  {
    id: "1.1",
    titulo: `Paquete Completo`,
    personas:'(50-170 Personas)',
    subtitulo: 'Exclusivo sistema de sonido a 4 vías, Dj versátil con Iluminación y Videoproyección HD.',
    precio: "MXN $7,500",
    data: [
      {
        info: "Servicio de Dj con booth iluminado y monitores",
        tip: null
      },
      {
        info: '2 Bocinas activas de 15"',
        tip:
          "Full-range y diseño coaxial, tri-amplificadas, clase D (2000 Watts RMS)"
      },
      {
        info: '2 Bocinas activos de 3x8"',
        tip: "Full-range y diseño coaxial, tri-amp, clase D (2000 Wrms)"
      },
      {
        info: '2 Sub graves de 18" activos',
        tip: "Clase D (1OOO Wrms)"
      },
      {
        info: "Mezcladora análoga o digital ",
        tip: "De 8, 12 o 16 canales"
      },
      {
        info: "Audio independiente para recepción y ceremonias",
        tip: null
      },
      {
        info: "4 Micrófonos dinámicos",
        tip: null
      },
      {
        info: "Iluminación DMX / cañones led",
        tip: "mini robóticas, efectos, luz negra y maquina de humo"
      },
      {
        info: "Karaoke Profesional",
        tip: 'Videoproyección HD a pared o con pantalla de 120"'
      },
      {
        info: "Cajas directas, acondicionador de voltaje ...",
        tip: "ableado digital AES/EBU, atriles, extensiones eléctricas, etc."
      },
      {
        info: "Flete en Cancún, instalación y operación técnica.",
        tip: null
      },
      {
        info: "6 horas de servicio.",
        tip: null
      }
    ]
  },
  {
    id: "1.2",
    titulo: "Paquete Intermedio",
    personas:'(30-50 Personas)',
    subtitulo: "Poderoso sistema de sonido a 3 vías con Dj versátil e Iluminación",
    precio: "MXN $5,500",
    data: [
      {
        info: "Servicio de Dj con booth iluminado y monitores",
        tip: null
      },
      {
        info: '2 Bocinas activos de 3x8"',
        tip: "Full-range y diseño coaxial, Tri-amplificadas, clase D (2000 Wrms)"
      },
      {
        info: '2 Sub graves de 18"',
        tip: "Activos, clase D (1OOO Wrms)"
      },
      {
        info: "1 Mezcladora análoga o digital de 8, 12 o 16 Ch.",
        tip: null
      },
      {
        info: "2 Micrófonos inalámbricos, de mano o de diadema",
        tip: null
      },
      {
        info: "Iluminación DMX / cañones led",
        tip: 'mini robóticas, efectos, luz negra y maquina de humo'
      },
      {
        info: "Cajas directas, acondicionador de voltaje",
        tip: 'cableado digital AES/EBU, atriles, extensiones eléctricas, etc.'
      },
      {
        info: "Flete en Cancún, instalación y operación técnica.",
        tip: null
      },
      {
        info: "6 horas de servicio",
        tip: null
      }
    ]
  },
  {
    id: "1.3",
    titulo: "Paquete Basico",
    personas:'(Hasta 30 Personas)',
    subtitulo: "Equipo",
    precio: "MXN $3,500",
    data: [
      {
        info:'1 Sistema de audio lineal compacto"',
        tip:'de 450 Wrms con Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)',
      },
      {
        info: "1 Mezcladora de 8 canales y Bluetooth",
        tip: "Interfaz de audio y efectos"
      },
      {
        info: "1 Micrófono inalámbrico",
        tip: null
      },
      {
        info: "Iluminación autorrítmica",
        tip: null
      },
      {
        info: "5 horas de servicio",
        tip: null
      }
    ]
  }
];



export { main };

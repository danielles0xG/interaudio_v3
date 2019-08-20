/*
    Asegurate que el texto que modifiques quede entre comillas, como esta aya SAPO!    
    
    info: elemento de la lista de paquete
    tip : es el content del incono de informacion

    Si no hay tip pones alla : null
    
*/

const main = [
  {
    id: "1.1",
    titulo: "OPCION 1: Exclusivo sistema de sonido a 4 vías, Dj/Vdj, Iluminación y Videoproyección HD",
    personas:'(50-170 Personas)',
    subtitulo: 'Potente y exclusivo sistema de sonido a 4 vías, Iluminación robótica, Videoproyección HD y Dj/VDj',
    precio: "MXN $7,500",
    data: [
      {
        info: "Servicio de Dj con booth iluminado y monitores",
        tip: null
      },
      {
        info: '4 Bocinas Full-Range de 15"',
        tip:"Cuatriamplificadas Clase D, diseño coaxial y procesador DSP en red (2000 Watts RMS)"
      },
      {
        info: '2 Sub graves de 18" activos',
        tip: "Amplificacion Clase D y procesador DSP (1OOO Wrms)"
      },
      {
        info: "Mezcladora análoga o digital",
        tip: "De 8, 12 o 16 canales, DSP y gestión inalámbrica"
      },
      {
        info: "Sistema de sonido extra para recepción o ceremonias",
        tip: "2 satelites con 4 bocinas por lado y 1 Subwoofer de 12".
      },
      {
        info: "Micrófonos",
        tip: "Inalámbricos, dinàmicos, de condensador, electret, etc."
      },
      {
        info: "Iluminación controlada", 
        tip: "Pares led, robóticas, barras UV, washes, láser, maquina de humo, etc."
      },
      {
        info: "Videoproyeccion Full HD (Karaoke Pro)",
        tip: "Con pantalla de 100 pulgadas ó a pared de hasta 300 ó Pantalla LED UHD Samsung de 65""
      },
      {
        info: "Cableado y accesorios premium",
        tip: 'Distribuidor con acondicionador de voltaje, cajas directas, cableado digital AES/EBU, atriles, extensiones, etc."
      },
      {
        info: "Staff técnicoc e Ing. en audio asignado",
        tip: "Instalación y operación técnica"
      }
    ]
  },
  {
    id: "1.2",
    titulo: "OPCION 2: Potente sistema de sonido a 3 vías, Iluminación y DJ versátil",
    personas:'(30-50 Personas)',
    subtitulo: "Poderoso sistema de sonido a 3 vías con Dj versátil e Iluminación",
    precio: "MXN $5,500",
    data: [
      {
        info: "Servicio de Dj con booth iluminado y monitores",
        tip: null
      },
      {
        info: '2 Bocinas activas de 3x8"',
        tip: "Full-range y diseño coaxial, Cuatriamplificadas Clase D (2000 Watts RMS)"
      },
      {
        info: "Mezcladora análoga o digital",
        tip: "De 8, 12 o 16 canales, DSP y gestión inalámbrica"
      },
      {
        info: "Sistema de sonido extra para recepción o ceremonias",
        tip: "2 satelites con 4 bocinas por lado y 1 Subwoofer de 12"".
      },
      {
        info: "Micrófonos",
        tip: "Inalámbricos, dinàmicos, de condensador, electret, etc."
      },
      {
        info: "Iluminación controlada", 
        tip: "Pares led, robóticas, barras UV, washes, láser, maquina de humo, etc."
      },
      {
        info: "Cableado y accesorios premium",
        tip: 'Distribuidor con acondicionador de voltaje, cajas directas, cableado digital AES/EBU, atriles, extensiones, etc."
      },
      {
        info: "Staff técnicoc e Ing. en audio asignado",
        tip: "Instalación y operación técnica"
      },
      {
        info: "6 horas de servicio",
        tip: null
      }
    ]
  },
  {
    id: "1.3",
    titulo: "OPCION 3: Pequeño pero poderoso sistema de sonido a 2 vias e Iluminación autorrítmica",
    personas:'(Hasta 30 Personas)',
    subtitulo: "Equipo",
    precio: "MXN $3,500",
    data: [
      {
        info:'1 Sistema de audio lineal compacto de 450 Watts de potencia y Subwoofer de 15"',
        tip:' 2 satélites con 4 bocinas por lado y conexión Bluetooth',
      },
      {
        info: "1 Mezcladora hibrida de 8 canales y efectos",
        tip: "Studiolive AR8"
      },
      {
        info: "1 Micrófono",
        tip: "alambrico o inalámbrico"
      },
      {
        info: "Iluminación autorrítmica",
        tip: 8 cañones Parled RGB de 3x18 Watts, 2 mini robóticas, luz uv"
      },
      {
        info: "Cableado y accesorios premium",
        tip: 'Distribuidor con acondicionador de voltaje, cajas directas, cableado digital AES/EBU, atriles, extensiones, etc."
      },
      {
        info: "5 horas de servicio",
        tip: null
      }
    ]
  }
];



export { main };

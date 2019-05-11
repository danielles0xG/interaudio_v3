/*
    Asegurate que el texto que modifiques quede entre comillas, como esta aya SAPO!    
    
    info: elemento de la lista de paquete
    tip : es el content del incono de informacion

    Si no hay tip pones alla : null
    
*/
const main = [{
    id:        '1.1',
    titulo:    'Paquete 100 personas',
    subtitulo: 'Equipo',
    precio:    'MXN $4,500',
    data: [
                { 
                    info : '2 Bocinas activas de 15"', 
                    tip  : 'Coax Bi-amplificadas Clase D (2000 WRMS)'
                },
                {
                    info : '2 Subwoofers activas de 18"',
                    tip  : 'Activos Clase D (1OOO WRMS)'
                },
                {
                    info : '2 Mezcladoras análogas o digitales',
                    tip  : '8, 12 o 16 canales'
                },
                {
                    info : '4 Micrófonos alámbricos o inalámbricos',
                    tip  : 'Diadema, de condensador o ambientales'
                },
                {
                    info : 'Refuerzo sonoro dedicado para su Dj.',
                    tip  : '2 bocinas Monitores de referencia activos de 8", Mezcladora de 8 canales con efectos e interfaz USB, 1 micrófono y cables premium,Cajas directas, interfaz USB, snakes ethercon, atriles, etc.'
                },
                {
                    info : 'Iluminación básica',
                    tip  : null
                },
                {
                    info : 'Maquina de humo de 900 W',
                    tip  : null
                },
                {
                    info : '6 horas de servicio. Hora extra $ 500',
                    tip  : null
                }
          ]
  },
  {
    id:        '1.2',
    titulo:    'Paquete 50 personas',
    subtitulo: 'Equipo',
    precio:    'MXN $3,500',
    data: [
                { 
                    info : '2 Bocinas activas', 
                    tip  : 'Coax Bi-amplificadas Clase D (2000 WRMS)'
                },
                {
                    info : '1 Subwoofers activas de 18"',
                    tip  : 'Activos Clase D (1OOO WRMS)'
                },
                {
                    info : '1 Mezcladoras análogas o digitales',
                    tip  : '8, 12 o 16 canales'
                },
                {
                    info : 'Gestión inalámbrica por Wifi',
                    tip  : null
                },
                {
                    info : 'Cajas directas, interfaz de audio',
                    tip  : 'snakes ethercon, atriles'
                },
                {
                    info : 'Maquina de humo',
                    tip  : 'control remoto (900 W)'
                },
                {
                    info : 'Refuerzo sonoro dedicado para su Dj',
                    tip  : '2 bocinas Monitores de referencia de 8" , mezcladora, 1 micrófono y cables premium'
                },
                {
                    info : '6 horas de servicio',
                    tip  : null
                },
                {
                    info : 'Hora extra $ 500',
                    tip  : null
                }
          ]
  },
  {
    id:        '1.3',
    titulo:    'Paquete 25 personas',
    subtitulo: 'Equipo',
    precio:    'MXN $2,500',
    data: [
                { 
                    info : '1 Sistema de audio lineal compacto', 
                    tip  : '450 WRMS con Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)'
                },
                {
                    info : '1 Mezcladora de 8 canales',
                    tip  : 'interfaz de audio, efectos y BT'
                },
                {
                    info : '1 Micrófono inalámbrico',
                    tip  : null
                },
                {
                    info : 'Iluminación básica',
                    tip  : null
                },
                {
                    info : 'Instalación y operación técnica',
                    tip  : null
                },
                {
                    info : 'Hora extra $ 500',
                    tip  :  null
                }
          ]
  }

]

  

const second = [{
    id:        '2.1',
    titulo:    'Paquete 25 personas',
    subtitulo: 'Equipo',
    precio:    'MXN $2,500',
    data: 
                { 
                    info : 'Recomendado para pequeñas reuniones privadas donde no requiera de mucho equipo y disponga de una TV y laptop con conexión a internet. Se le entrega un sistema de audio compacto configurado a su equipo, 1 micrófono inalámbrico, 1 interfaz de audio USB para su laptop, 15 Mts. de cable de video HDMI, cuentas premium de Youtube y Spotify para una reproducción multimedia de calidad y sin interrupciones.', 
                    tip  : '450 WRMS con Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)'
                }
          
  },
  {
    id:        '2.3',
    titulo:    'Paquete 25 personas',
    subtitulo: 'Equipo',
    precio:    'MXN $2,500',
    data: 
                { 
                    info : '1 Sistema de audio lineal compacto', 
                    tip  : '450 WRMS con Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)'
                }
          
  }]

  export { main, second }
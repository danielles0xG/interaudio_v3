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
  precio:    'MXN $5,500',
  data: [
              { 
                  info : '2 Bocinas activas de 15" y DSP', 
                  tip  : 'Coax Bi-amplificadas / Clase D (2000 WRMS)'
              },
              {
                  info : '2 Subwoofers activos de 18"',
                  tip  : 'Clase D (1OOO WRMS)'
              },
              {
                  info : 'Mezcladoras análogas o digitales',
                  tip  : 'de 8, 12 o 16 canales'
              },
              {
                  info : 'Micrófonos dinámicos',
                  tip  : 'alámbricos, inalámbricos o de diadema'
              },
              {
                  info : 'Iluminación DMX 512',
                  tip  : 'Pares led, robóticas, efectos, luz negra, máquina de humo'
              },
              {
                  info : 'Cajas directas, snakes, cables premium, atriles, etc',
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
  precio:    'MXN $4,500',
  data: [
              { 
                  info : '2 Bocinas activas', 
                  tip  : 'Coax Bi-amplificadas / Clase D (2000 WRMS)'
              },
              {
                  info : '1 Subwoofer activo de 18"',
                  tip  : 'Clase D (1OOO WRMS)'
              },
              {
                  info : 'Mezcladora análoga o digital',
                  tip  : 'de 8, 12 o 16 canales'
              },
              {
                  info : 'Micrófonos dinámicos',
                  tip  : 'alámbricos, inalámbricos o de diadema'
              },
              {
                  info : 'Iluminación DMX 512',
                  tip  : 'Pares led, robóticas, efectos, luz negra, máquina de humo'
              },
              {
                  info : 'Cajas directas, snakes, cables premium, atriles, etc',
                  tip  : null
              },
              {
                  info : '6 horas de servicio. Hora extra $ 500',
                  tip  : null
              }
        ]
},
{
  id:        '1.3',
  titulo:    'Paquete 25 personas',
  subtitulo: 'Equipo',
  precio:    'MXN $3,500',
  data: [
              { 
                  info : 'Sistema de audio lineal compacto con Subwoofer de 15"', 
                  tip  : '450 Watts RMS, conexión bluetooth (2 satélites con 4 bocinas por lado)'
              },
              {
                  info : 'Mezcladora de 8 canales y Bluetooth',
                  tip  : 'Interfaz de audio y efectos'
              },
              {
                  info : 'Micrófono dinámico',
                  tip  : 'alámbrico, inalámbrico o de diadema'
              },
              {
                  info : 'Iluminación autorrítmica',
                  tip  : 'pares led, robóticas, luz negra'
              },
              {
                  info : '6 horas de servicio. Hora extra $ 500',
                  tip  : null
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

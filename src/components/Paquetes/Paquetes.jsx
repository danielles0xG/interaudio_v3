import React from 'react'
import './Paquetes.css'


const Paquetes = ({}) =>{
    return(
        <div>
        <div className='wrapper_3_bundle'>

         <div className='card_wrapper_3_bundle'> 
                <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Paquete para 100 personas.</h5>
                <div class="card-body">    
                <h5 class="card-title"> Equipo: </h5>                
                    <ul> 
                        <li>2 Bocinas activas de 15" coax Bi-amplificadas Clase D (2000 WRMS)</li>
                        <li>2 Bocinas activas coax tri-amplificadas Clase D (2000 WRMS)</li>
                        <li>2 Sub graves de 18" activos Clase D (1OOO WRMS)</li>
                        <li>2 Mezcladoras análogas o digitales de 8, 12 o 16 canales</li>
                        <li>4 Micrófonos alámbricos o inalámbricos, de diadema, de condensador o ambientales</li>
                        <li>Cajas directas, interfaz USB, snakes ethercon, atriles, etc.</li>
                        <li>Iluminación básica</li>
                        <li>Maquina de humo de 900 W</li>
                        <li>Refuerzo sonoro dedicado para su Dj. (2 bocinas Monitores de referencia activos de 8", Mezcladora de 8 
                            canales con efectos e interfaz USB, 1 micrófono y cables premium.</li>
                        <li>6 horas de servicio. Hora extra $ 500</li>                        
                    </ul>                
                    <h5 class="card-title">MXN $4,500 </h5>
                    <a style={{marginTop:'10px'}} href="mailto:info@interaudio.mx"  class="btn btn-primary"
                      url="" > Contacto</a>
                </div>
            </div>
        </div>

        <div className='card_wrapper_3_bundle'> 
                <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Paquete para 50 personas.</h5>
                <div class="card-body">
                <h5 class="card-title"> Equipo: </h5>
                    <ul> 
                        <li>2 Bocinas activas coax, tri-amplificadas Clase D(2000 WRMS)</li>
                        <li>1 Sub grave de 18" activo Clase D (1OOO WRMS)</li>
                        <li>1 Mezcladora análoga o digital de 8, 12 o 16 Canales</li>
                        <li>Gestión inalámbrica por Wifi</li>
                        <li>2 Micrófonos alámbricos o inalámbricos, de diadema, de condensador o ambientales.</li>
                        <li>Cajas directas, interfaz de audio, snakes ethercon, atriles, etc.</li>
                        <li>Iluminación básica</li>
                        <li>Maquina de humo con control remoto (900 W)</li>
                        <li>Refuerzo sonoro dedicado para su Dj. (2 bocinas Monitores de referencia de 8" , mezcladora, 1 micrófono y cables premium</li>
                        <li>6 horas de servicio.</li>        
                        <li>Hora extra $ 500</li>    
                    <br/>                                                                                              
                    </ul>   
                    <h5 class="card-title">MXN $3,500 </h5>
                    <a href="mailto:info@interaudio.mx" class="btn btn-primary">Contacto</a>
                </div>
            </div>
        </div>


        <div className='card_wrapper_3_bundle'> 
            <div class="card" style={{width:'90%'}}>
            <h5 class="card-header">Paquete para 25 personas</h5>
            <div class="card-body">                
                <h5 class="card-title"> Equipo: </h5>
                <ul> 
                        <li>1 Sistema de audio lineal compacto de 450 WRMS con Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)</li>
                        <li>1 Mezcladora de 8 canales con interfaz de audio, efectos y BT</li>
                        <li>1 Micrófono inalámbrico</li>
                        <li>Iluminación básica</li>
                        <li>Instalación y operación técnica</li>
                        <li>4 horas de servicio</li>
                        <li>Hora extra $ 500</li>                       
                    </ul>   
                <h5 class="card-title">MXN $2,500 </h5>
                <a href="mailto:info@interaudio.mx" class="btn btn-primary">Contacto</a>
            </div>
            </div>
        </div>  

    </div>

<div className='wrapper_2_bundle'>

        <div className='card_wrapper_2_bundle'> 
            <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Karaoke Express</h5>
                    <div class="card-body">
                        

                        <p>Recomendado para pequeñas reuniones privadas donde no requiera 
                             de mucho equipo y disponga de una TV y laptop con conexión a internet. 
                             Se le entrega un sistema de audio compacto configurado a su equipo, 1 micrófono i
                             nalámbrico, 1 interfaz de audio USB para su laptop, 15 Mts. de cable de video HDMI,
                             cuentas premium de Youtube y Spotify para una reproducción multimedia de calidad y 
                             sin interrupciones.
                         </p> 

                        <h5 class="card-title">MXN  $1,800 </h5>

                        <a href="mailto:info@interaudio.mx" class="btn btn-primary">Contacto</a>
                    </div>
            </div>
        </div>  

        <div className='card_wrapper_2_bundle'> 
            <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Servicios Extras</h5>
                    <div class="card-body">                        
                            <ul> 
                                <li>Servicio de Dj - MXN $1,500</li>
                                <li>Videoproyección HD - MXN $1,000</li>
                                <li>Pista de leds. Cotizar.</li>                                       
                            </ul>                           
                        <a href="mailto:info@interaudio.mx" class="btn btn-primary">Contacto</a>
                    </div>
            </div>
        </div>  

    </div>
</div>
    )
}
export default Paquetes
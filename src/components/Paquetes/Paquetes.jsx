import React from 'react'
import './Paquetes.css'
import ToolTipInfo from '../ToolTip/ToolTipInfo'
import { Paquete_100_personas } from '../../../data/paquetes.js'


//    Rabais auto habitacion
//    5144955170

const Paquetes = ({}) =>{
    return(
        <div>
        <div className='wrapper_3_bundle'>

         <div className='card_wrapper_3_bundle'> 
                <div class="card" style={{width:'90%'}}>
                    <h5 class="card-header">{Paquete_100_personas.titulo}</h5>
                    <div class="card-body">    
                            <h5 class="card-title"> {Paquete_100_personas.subtitulo} </h5>                
                                <ul> { Paquete_100_personas.data.map(i => (
                                            <li key={i.info}>    
                                                {i.info} 
                                                {!i.tip?<p></p>:<ToolTipInfo props={i}/>}
                                            </li> ))  }
                                 </ul>                
                                <h5 class="card-title"> {Paquete_100_personas.precio}</h5>
                                <a style={{marginTop:'10px'}} href="mailto:info@interaudio.mx"  class="btn btn-primary" url="" > 
                                    Contacto
                                </a>
                    </div>
                </div>
        </div>

    

        <div className='card_wrapper_3_bundle'> 
                <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Paquete 50 personas</h5>
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
            <h5 class="card-header">Paquete 25 personas</h5>
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
                                    <p> Dj's. VDj's videoproyeccion HD, fiestas, bodas, karaoke, conciertos, conferencias, eventos corporativos,
                                refuerzo sonoro a bandas, Dj's y musicos en general.   </p>
                            <ul> 
                                <li>Servicio de Dj - MXN $1,800</li>
                                <li>Proyector Full HD 3D 3500 Lumens + $1,500</li>
                                <li>Dj / Vdj con booth iluminado y monitores + $1800</li>
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
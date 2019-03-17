import React from 'react'
import './Paquetes.css'


const Paquetes = ({}) =>{
    return(
        <section className='wrapper'>

        <div className='card_wrapper'> 
                <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Opcion  #1 </h5>
                <div class="card-body">
                    <h5 class="card-title"> HASTA 100 PERSONAS</h5>
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

        <div className='card_wrapper'> 
                <div class="card" style={{width:'90%'}}>
                <h5 class="card-header">Opcion #2</h5>
                <div class="card-body">
                    <h5 class="card-title">HASTA 50 PERSONAS</h5>
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


      

        <div className='card_wrapper'> 
            <div class="card" style={{width:'90%'}}>
            <h5 class="card-header">Opcion #3</h5>
            <div class="card-body">
                <h5 class="card-title">	HASTA 25 PERSONAS</h5>
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

        </section>
    )
}
export default Paquetes
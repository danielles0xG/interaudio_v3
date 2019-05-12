import React from 'react'
import './Paquetes.css'
import ToolTipInfo from '../ToolTip/ToolTipInfo'

//    Rabais auto habitacion
//    5144955170

const Paquetes = ({main,second}) =>{
    return(
        <div>
                <div className='wrapper_main'>
                {main.map(i => (
                        <div class="card">
                        <h5 class="card-header">{i.titulo}</h5>
                        <div class="card-body">    
                                    <h5 class="card-title"> {i.subtitulo} </h5>                
                                    <ul> { i.data.map(i => (
                                        <li key={i.info}>    
                                            {i.info} 
                                            {!i.tip?<p></p>:<ToolTipInfo props={i}/>}
                                        </li> ))  }                                                               
                                    </ul>                
                                    <h5 class="card-title"> {i.precio}</h5>
                                    <a   style={{marginTop:'10px'}} 
                                        href="mailto:info@interaudio.mx"  
                                        class="btn btn-primary" url="" > 
                                            Contacto
                                    </a>
                        </div>
                    </div>
                ))}                                      
                 </div>

                 <div className='wrapper_2_bundle'>

                <div className='card_wrapper_2_bundle'> 
                    <div class="card" style={{width:'90%'}}>
                        <h5 class="card-header">Servicios Extras</h5>
                            <div class="card-body">                                       
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

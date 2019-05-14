import React from 'react'


import './CustomJumboTron.css'

const CustomJumboTron = () =>{
    return(
        <div className='jumbotron_wrapper'>
                    <h1 className='title'> Renta de audio e iluminaciôn profesional </h1>
                        <p className='title_two'>                       
                          Cubrimos audiencias de hasta 300 personas.                      
                        </p>
                    

                       <p className='title_two'>
                                Dj's. VDj's videoproyeccion HD | Fiestas | Bodas | Karaoke | Conciertos | Conferencias
                                | Eventos corporativos | Refuerzo sonoro a bandas |
                                 Dj's | Musicos en general. <br/>
                                Spoken english.   
                       </p>

                        <p>
                        <a style={{marginTop:'10px'}} href="mailto:info@interaudio.mx" class="btn btn-primary" url="">Contacto </a>                                                                               
                        </p>
                        
        </div>
    )
}
export default CustomJumboTron;


import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './JumboTron.css'

const JumboTron = () =>{
    return(
        <Jumbotron style={{padding:'3rem 2rem'}}>
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
                        <Button className='jumbotron_btn' variant="secondary" href="mailto:info@interaudio.mx" 
                                style={{float:'right'}}>
                            Contactanos
                        </Button>                                                                                     
                        </p>
                        
        </Jumbotron>
    )
}
export default JumboTron;


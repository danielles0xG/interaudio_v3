import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './JumboTron.css'

const JumboTron = () =>{
    return(
        <Jumbotron style={{padding:'3rem 2rem'}}>
                    <h1 className='title'> Renta de audio e iluminaciôn profesional </h1>
                        <p className='title_two'>

                        Aseguramos la mejor calidad y potencia para tu evento ! 
                          Cubrimos audiencias de hasta 300 personas.                      
                        </p>
                    
                        <p className='title_two'>
                                                     
                       </p>
                       <p className='title_two'>
                            Cancún, Playa del Carmen, Tulúm, Cozumel, Isla Mujeres<br/>
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


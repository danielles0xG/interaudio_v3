import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './JumboTron.css'

const JumboTron = () =>{
    return(
        <Jumbotron>
                    <h1 className='title'> Renta de equipo audiovisual y sonorización profesional</h1>
                    <p className='title_two'>
                      Aseguramos la mejor calidad y potencia para tu evento ! 
                      Cubrimos audiencias de hasta 500 personas.                      
                    </p>

                    <p>
                      <Button style={{float:'right'}} variant="primary" href="mailto:info@interaudio.mx">
                          Contacto
                      </Button>
                    </p>
        </Jumbotron>
    )
}
export default JumboTron;
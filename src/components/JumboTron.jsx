import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const JumboTron = () =>{
    return(
        <Jumbotron>
                    <h1 style={{fontFamily:'serif'}}>Renta de Luz y Sonido Audio Profesional</h1>
                    <p>
                      Aseguramos la mejor calidad y potencia 
                      ideal para su evento ! Cubrimos audiencias de 500 
                      personas aprox.                      
                    </p>
                    <p>
                      <Button variant="primary" href="mailto:info@interaudio.mx">
                          Contacto
                      </Button>
                    </p>
        </Jumbotron>
    )
}
export default JumboTron;
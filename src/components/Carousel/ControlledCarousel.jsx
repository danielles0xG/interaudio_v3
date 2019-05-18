import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ControlledCarousel.css'


import _01_Pristine_audio_quality                   from '../../images/Media/1_Pristine_audio_quality.jpg';
import _02_Sonorización_Profesional                 from '../../images/Media/2_Sonorización_Profesional.jpg';
import _03_Live_Sound                               from '../../images/Media/3_Live_Sound.jpg';
import _04_Refuerzo_Sonoro                          from '../../images/Media/4_Refuerzo_Sonoro.jpg';
import _05_Dj_VDj                                   from '../../images/Media/5_Dj_VDj.jpg';
import _06_International_Djs                        from '../../images/Media/6_International_Djs.jpg';
import _07_Mezcla_y_grabación_en_vivo               from '../../images/Media/7_Mezcla_y_grabación_en_vivo.jpg';
import _08_PA_Speakers_rental                       from '../../images/Media/8PA_Speakers_rental.jpg';
import _09_Pool_parties                             from '../../images/Media/9_Pool_parties.jpg';
import _10_Fiestas_de_cumpleaños                    from '../../images/Media/10_Fiestas_de_cumpleaños.jpg';
import _11_Pool_party                               from '../../images/Media/11_Pool_party.jpg';
import _12_Sistema_lineal_compacto_array_450_W      from '../../images/Media/12_Sistema_lineal_compacto_array_450_W.jpg';
import _13_Wall_of_Sound                            from '../../images/Media/13_Wall_of_Sound.jpg';
import _14_Israeliens                               from '../../images/Media/14_Israeliens.jpg'


const media = [
                _01_Pristine_audio_quality,
                _02_Sonorización_Profesional,
                _03_Live_Sound,
                _04_Refuerzo_Sonoro,
                _05_Dj_VDj,
                _06_International_Djs,
                _07_Mezcla_y_grabación_en_vivo,
                _08_PA_Speakers_rental,
                _09_Pool_parties,
                _10_Fiestas_de_cumpleaños,
                _11_Pool_party,
                _12_Sistema_lineal_compacto_array_450_W,
                _13_Wall_of_Sound,
                _14_Israeliens
              ]

class ControlledCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slide:1
    };
  }

render() {
      return(
        <div>
          <h1 className='carousel_title'> Renta de audio e iluminación profesional </h1>
          <br></br>
                  <Carousel autoPlay='true' interval='1500' infiniteLoop='true'>
                    {media.map(i=>(
                            <div className='carousel_height' key={i}>
                                <img src={i}  />                          
                            </div>
                    ))}                  
                  </Carousel>
        </div>
    )
  }
}

export default ControlledCarousel
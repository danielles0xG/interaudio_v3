import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'
import { SocialIcon } from "react-social-icons";
import Menu from '../../components/Menu/Menu'
import SloganImg from '../../images/slogan/slogan-transparent.png'
import Contact from '../../sections/Contact/Contact'
import Paquetes from '../../components/Paquetes/Paquetes'
import CustomJumboTron from '../../components/Jumbotron/CustomJumboTron'
import Footer from '../../components/Footer/Footer'
import WhatsApp from '../../images/icons/whatsapp-92px.svg'
import {main} from '../../../data/data_paquetes'
import './HomeResets.css'
import './HomeLayout.css'
import './HomeLayout_mobile.css'
import ControlledCarousel from '../../components/Carousel/ControlledCarousel'

 
class HomeLayout extends React.Component{

  _submitContactForm(){
    return null;
  }

  render(){
    const slogan_img = SloganImg;
    //const logo = Logo;
    return(
      <div>
          <SEO title="Renta de audio e iluminacion profesional - Focused on sound quality"
               keywords={[`Vital Renta de Luz Y Sonido`,
                          `Karaoke`,
                          `Karaoke Luz y Sonido Cancun`,
                          `luz y sonido`,
                          `Vital`,
                          `renta de sonido`,
                          `luz y sonido`,
                          `eventos`,`bodas`,
                          `Dj`,`Cancun`]} />  
                 <div className='top_bar'> 
                      {/* <img  className='speaker_logo' src={logo} alt='InterAudio'/> */ }
                        <Menu/>               
                  </div>

                      <div className='landing_section' >                
                              <div  className='slogan_container'> 
                                    <img className='slogan_img' src={slogan_img} alt='Sound System Rental'/>
                                    <h4 className='locations'>
                                          CANCUN - TULUM - COZUMEL - ISLA MUJERES
                                    </h4>
                                    <h4 style ={{color:'white', fontSize:'2em', fontWeight:'200'}}>(998) 2 18 46 16</h4>  
                                    
                                    <a href="https://api.whatsapp.com/send?phone=5219982184616" target="_blank" 
                                          rel="noopener noreferrer"
                                          style={{cursor:'pointer'}}>
                                        <img className='lang_flag' src={WhatsApp} alt={WhatsApp}/>
                                    </a>
                              </div>                                 
                              <BackgroundSection style={{position:'absolute'}}/>
                      </div>                                             
                                                         
                      <div name='Servicios' className="landing_section_2">                      
                              <div className="landing_section_2_column_1"> 
                                  <h2 className='landing_section_2_title'> Renta de audio e iluminación profesional </h2>
                                  <ControlledCarousel/> 
                              </div>         

                              <div className="landing_section_2_column_2"> 
                                  <CustomJumboTron/>  
                              </div>                        
                      </div>
                      
                      <div name='Opciones' className='paquetes'>       
                            <Paquetes  main={main} />
                      </div>      
                      
                      <section>  </section>      
                    
                      <section >       
                        <Footer/>                                  
                      </section>      
            
      </div>  
    )
  }
}

 
export default HomeLayout

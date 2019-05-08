import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'
import { SocialIcon } from "react-social-icons";

import Menu from '../../components/Menu/Menu'
import SloganImg from '../../images/slogan/slogan-transparent.png'
import Contact from '../../sections/Contact/Contact'
import Paquetes from '../../components/Paquetes/Paquetes'
import JumboTron from '../../components/Jumbotron/JumboTron'
import Footer from '../../components/Footer/Footer'

import WhatsApp from '../../images/icons/whatsapp-92px.svg'

import './HomeResets.css'
import './HomeLayout.css'

 
class HomeLayout extends React.Component{

  _submitContactForm(){
    return null;
  }

  render(){
    const slogan_img = SloganImg;
    //const logo = Logo;
    return(
      <div>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
                 <div className='top_bar'> 
                      {/* <img  className='speaker_logo' src={logo} alt='InterAudio'/> */ }
                        <Menu/>               
                  </div>

            <div className='landing_section' >                
                
                    <div  className='slogan_container'> 
                      <img className='slogan_img' src={slogan_img} alt='Sound System Rental'/>
                      <h4 style ={{color:'white', fontSize:'1.5rem',fontWeight:'200'}}>Cancun - Playa del Carmen - Pto.Morelos</h4>
                      <h4 style ={{color:'white', fontSize:'2em', fontWeight:'200'}}>(998) 2 18 46 16</h4>  
                      
                      <a href="https://api.whatsapp.com/send?phone=5219982184616" target="_blank" style={{cursor:'pointer'}}>
                          <img className='lang_flag' src={WhatsApp} alt={WhatsApp}/>
                      </a>

                    </div>                                 
                <BackgroundSection style={{position:'absolute'}}/>
            </div>
                              
               

            

            <section className='paquetes'>   
                <JumboTron/>                   
                <Paquetes/>
            </section>      
            
            <section >                      
                  
            </section>      
            
            <section>                      
                   
            </section>      
            
  
            <section >       
              <Footer/>                                  
            </section>      
            
      </div>  
    )
  }
}

 
export default HomeLayout

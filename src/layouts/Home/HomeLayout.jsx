import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'
import { SocialIcon } from "react-social-icons";

import Menu from '../../components/Menu/Menu'
import SloganImg from '../../images/slogan/slogan-transparent.png'
//import Logo from '../../images/logo/logo_bocina3.png'

import GoogleCalendar from '../../components/Calendar/Calendar'


import './HomeResets.css'
import './HomeLayout.css'

 
class  HomeLayout extends React.Component{

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
                      <h4 className='sub_slogan'>Sonorización Profesional</h4>
                      <div>                      
                            <SocialIcon bgColor="#ffffff"  url="mailto:info@interaudio.mx"/>
                      </div>
                    </div>       
                          
                <BackgroundSection style={{position:'absolute'}}/>
            </div>

            <div className='service_section'>                      
                          
            </div> 
            <div className='second_section'>                      
                        
            </div> 
              <div className='contact_section'> 
                  
                   <div style={{width:'50%', height:'100%',}}>
                          <form className='contact_form' action={()=> this._submitContactForm()} form='contact_form'>
                                Name:
                                <input  type="email" name="contact_name"/>
                                E-mail:
                                <input type="email" name="contact_email"/>
                                Message:                        
                                <textarea name='contact_form' form='contact_form'></textarea>
                                <br/>
                                <button type='submit'>Send</button>
                          </form>
                      </div>

                      <div style={{width:'50%', height:'100%',marginLeft:'10%'}}>
                        <GoogleCalendar/>
                    </div> 
                                         
            </div>   
            <div className='footer_section'>                      
                   <h4>CopyRight Interaudio 2019€</h4>
            </div>      
            
      </div>  
    )
  }
}

 
export default HomeLayout

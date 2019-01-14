import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'
import { SocialIcon } from "react-social-icons";

import Menu from '../../components/Menu/Menu'
import SloganImg from '../../images/slogan/slogan-transparent.png'
//import Logo from '../../images/logo/logo_bocina3.png'

import {MyCalendar} from '../../components/Calendar/Calendar'


import './HomeResets.css'
import './HomeLayout.css'

 
class  HomeLayout extends React.Component{


  render(){
    const slogan_img = SloganImg;
    //const logo = Logo;
    return(
      <div>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
            <div className='landing_section' >
                  <div className='top_bar'> 
                      {/* <img  className='speaker_logo' src={logo} alt='InterAudio'/> */ }
                        <Menu/>               
                  </div>
                <div>
                    <div  className='slogan_container'> 
                      <img className='slogan_img' src={slogan_img} alt='Sound System Rental'/>
                      <h4 className='sub_slogan'>Sonorización Profesional</h4>
                      <div>                      
                            <SocialIcon bgColor="#ffffff"  url="mailto:info@interaudio.mx"/>
                      </div>
                    </div>       
                </div>                 
                <BackgroundSection style={{position:'absolute'}}/>
            </div>

            <div className='second_section'>                      
                    <div className='calendar_wrapper'>
                         <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;hl=es&amp;bgcolor=%23ffffff&amp;src=danielifg.dev%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FToronto"
                                style={{ width:"100%", height:"100%",
                                          frameborder:"0", scrolling:"no"}}
                                        >
                           </iframe>
                    </div>                    
            </div>    
            
      </div>  
    )
  }
}

 
export default HomeLayout

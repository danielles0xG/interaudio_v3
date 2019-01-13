import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'
import { SocialIcon } from "react-social-icons";

import Menu from '../../components/Menu/Menu'
import SloganImg from '../../images/slogan/slogan-transparent.png'
import Logo from '../../images/logo/logo-transparent.png'

import './HomeResets.css'
import './HomeLayout.css'

 
class  HomeLayout extends React.Component{


  render(){
    const slogan_img = SloganImg;
    const logo = Logo;
    return(
      <div className='wrapper' >
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
            <div className='top_bar'> 
                  <img  className='speaker_logo' src={logo} alt='InterAudio'/>     
                  <Menu/>               
            </div>



          <div>
              <div  className='slogan_container'> 
                 <img className='slogan_img' src={slogan_img} alt='Sound System Rental'/>
                 <h4 className='sub_slogan'>Sonorización Profesional</h4>
              </div>       
          </div>                  
          
                         
            
          <BackgroundSection style={{position:'absolute'}}/>
      </div>
    )
  }
}

 
export default HomeLayout

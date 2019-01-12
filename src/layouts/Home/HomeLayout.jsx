import React from 'react'
import {BackgroundSection} from '../../components/Home_Img/BackgroundSection'
import SEO from '../../components/seo'


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
            <div style={{ height: '11em',display: 'flex' }}> 
                  <img  style={{width:'5em',height: '10em'}} 
                    src={logo} alt='InterAudio'/>     
                  <Menu/>               
            </div>



          <div>
              <div  className='slogan'> 
                 <img style={{width:'30em'}} src={slogan_img} alt='Sound System Rental'/>
                 <h4 className='sub_slogan'>Sonorización Profesional</h4>
              </div>       
          </div>                  
          
                         
            
          <BackgroundSection style={{position:'absolute'}}/>
      </div>
    )
  }
}

 
export default HomeLayout

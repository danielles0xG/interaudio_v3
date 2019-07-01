//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import './Menu.css'
import './Menu_mobile.css'
import En from '../../images/icons/en.png'
import Sp from '../../images/icons/sp.png'




class Menu extends React.Component{
    state = {
        flag : En,
        menu : menuOptions_Sp
    }
    _handleLang = () =>{
        if(this.state.flag === En){
           return this.setState({flag:Sp,menu:menuOptions_En})
        }
        return this.setState({flag:En,menu:menuOptions_Sp})
    }

    render(){
        
        return(
                <div className='menu_desktop'>
                        <a href="#Opciones">Opciones</a>                                            
                        <a href="#Servicios">Servicios</a>
                        <a href="mailto:contacto@interaudio.mx">Contacto</a>
       
                            {/* <img className='lang_flag' onClick={()=> this._handleLang()}
                                src={this.state.flag} alt={this.state.flag}/> */}
                        
               </div>
        )
    }
}

const menuOptions_Sp = [
    'inicio',
    'servicios',
    'opciones',
    'contacto'
];

const menuOptions_En = [
    'home',
    'services',
    'options',
    'contact'
];

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu

//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Menu.css'
import En from '../../images/icons/en.png'
import Sp from '../../images/icons/sp.png'




class Menu extends React.Component{
    state = {
        lang :En,
        menu : menuOptions_Sp
    }
    _handleLang = () =>{
        if(this.state.lang === En){
           return this.setState({lang:Sp,menu:menuOptions_En})
        }
        return this.setState({lang:En,menu:menuOptions_Sp})
    }

    render(){
        
        return(
                <div className='menu_desktop'>
                    {this.state.menu.map((option) => (
                    <div>                                         
                        <a href='#'>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </a>                    
                    </div>
                    ))} 
                <img className='lang_flag' onClick={()=> this._handleLang()}
                    src={this.state.lang} alt={this.state.lang}/>
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

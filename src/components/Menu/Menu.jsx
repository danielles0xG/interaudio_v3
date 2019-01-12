import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Menu.css'


const Menu = () => (
  <div className='menu_desktop'>
          {menuOptions.map((option) => (
         <div >    
            <Link to={option}>
                <a href={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)
                }</a>
            </Link> 
        </div>
      ))} 
    </div>

)
const menuOptions = [
    'servicios',
    'equipo',
    'eventos',
    'contacto'
];

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu

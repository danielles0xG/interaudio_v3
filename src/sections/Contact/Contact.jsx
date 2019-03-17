import React from 'react';
import './Contact.css';
import Eastwood from '../../images/eastwood-message-sent.png'



const Contact = () =>{
    return(

        <div className='contact_section'> 
         
          <div className='eastwoord'>
                    <img alt="" src={Eastwood} style={{ height:'28em'}}/>
          </div>
                
                <form className='contact_form' action=' ' form='contact_form'>
                        Name:
                        <input  type="email" name="contact_name"/>
                        E-mail:
                        <input type="email" name="contact_email"/>
                        Message:                        
                        <textarea name='contact_form' form='contact_form'></textarea>
                        <br/>
                        <button >Send</button>
                </form>
                                  
        </div> 
    )
}

export default Contact;
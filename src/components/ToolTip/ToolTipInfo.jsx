import React from 'react'
import ReactTooltip from 'react-tooltip'



const ToolTipInfo = ({props}) => {

    const {info,tip} = props;

    return (
         <div style={ToolTipInfo_style}>
        <a style    = {ToolTipI_style} 
        data-tip 
        data-for = {info}> i </a>                
            
            <ReactTooltip   id     = {info}
                            type   = 'dark' 
                            place  = "right" 
                            type   = "dark"
                            effect = "float"
                            data-html={true}>
                            
                    <span>{tip}</span>
            
            </ReactTooltip>                    
    </div>
    )
}
const ToolTipInfo_style = {
    display:'inline',
    marginLeft:'.5rem',
    cursor:'pointer'
}
const ToolTipI_style = {
    border:'solid 1px #d3d3d3',
    borderRadius:'100px',
    padding: '1px 7px 1px 7px',
    color:'white',
    fontSize:'15px',
    backgroundColor:'#969090',
    fontFamily: 'initial',
    
}
export default ToolTipInfo;


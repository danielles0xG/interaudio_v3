import React from 'react'
import ReactTooltip from 'react-tooltip'



const ToolTipInfo = ({key,info}) => {
    return(
        <div style={ToolTipInfo_style}>
            <a style={ToolTipI_style} data-tip data-for={key}>i</a>
                <ReactTooltip id={key} type='dark'>
                    <span>{info}</span>
                </ReactTooltip >
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
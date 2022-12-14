import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function CommonRowBtn(props) {
    const FlexD = props.FlexD
    const DynColor  = props.dyn_Color 
    const DynWidth  = props.dyn_Width
    const Dynheight = props.dyn_height
    const Dynvalue  = props.dyn_Value
    const endIcons  = props.dyn_endIcons
    const btnText   = props.dyn_btnText
    const [btnval, setBtnval] = useState(Dynvalue)
    const urlElements = window.location.pathname
    const navigate = useNavigate();
    
    function  handleClick () { 
      navigate(btnval);
    } 
    
  return ( 
    <Button 
      endIcon={endIcons} 
      variant="contained"  
      size='large'
      value={Dynvalue}
      className={"navbtnSqr"}
      onClick={(e)=>{handleClick(e.target.value)}}
      sx={{ 
            ...btnsleft.common,
            minWidth: DynWidth,
            height: Dynheight,
            backgroundColor: urlElements === btnval ? "black": DynColor,
            '&:hover': { backgroundColor: urlElements === btnval ? "black": DynColor, 
            opacity: [0.9, 0.8, 0.7],},
            flexDirection:  `${FlexD}`,
            padding:"auto  25px",
            }}>
      {btnText}
    </Button> 
  )
}


const btnsleft={
    common:{
      fontFamily:"'Noto Nastaliq Urdu', serif;", 
      boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
      m: 1 ,
      justifyContent:"space-between"   , 
    }
  }
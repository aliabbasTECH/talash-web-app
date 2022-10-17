import { Button, Grid, Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React from 'react'

import {Navbar} from "../../components/navBar";
import ButtonLeftlist from '../../components/buttonLeftlist'
import ButtonRightList from '../../components/buttonRightList';
import AddItem_Business_entry from '../../components/AddItem_Business_entry';
import DataTable from '../../components/dataTable';
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getdata} from '../../store/action'



export default function BusinessEntery() {
  
    const state =useSelector(state =>state)
    const dispatch = useDispatch()
    let alltodos = state.data
    console.log(state)

    useEffect(()=>{
       dispatch(getdata())   
    },[]);

  return (
    <div>
    
    <Navbar />

    <Box sx={{
        height: 90,
      }}
    />
    <div style={{ textAlign:"center" }} >
      <p style={{
             fontSize:"30px",
             fontWeight:"bold",
             textAlign:"center",
             margin:"0 auto" ,
             marginBottom:"-36px",   
              }}>
        Business (کاروبار)
      </p>
</div>
        
        
    <Grid container  xs={12} sm={12}  md={12}  lg={12} >
        
    <Grid item  xs={12} sm={3} md={2}  lg={2} spacing={2} > <ButtonLeftlist/> </Grid>

    <Grid container   xs={12} sm={6} md={7}  lg={7.9} sx={{mt:5}}   > 
        <Grid item xs={12} sm={12} md={4}  lg={7} >
          <Box sx={{p:2 }} >
                <Box sx={{ display:"flex", justifyContent:"flex-start",width:"100%" }}>
                    
                    <img style={mystyle.img} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
                   
                    <div  style={mystyle.heading} >
                        <h2 style={mystyle.htag}>Mani Fani Food Point</h2>
                    </div>
                </Box>
            <Grid  item container direction="row"  sx={{p:1 }}>
                <Grid xs direction="column"  >
                     <Typography>{alltodos.name}</Typography>
                     <Typography>{alltodos.number}</Typography>
                     <Typography>{alltodos.watsapp}</Typography>
                     <Typography>{alltodos.email}</Typography>
                     <Typography>{alltodos.facebook}</Typography>
                     <Typography>{alltodos.instagram}</Typography>
                </Grid>
                <Grid xs direction="column"  >
                     <Typography>{alltodos.country}</Typography>
                     <Typography>{alltodos.state}</Typography>
                     <Typography>U / VC/ Main Area </Typography>
                     <Typography>{alltodos.famous}</Typography>
                     <Typography>{alltodos.address}</Typography>
                 </Grid> 
            </Grid>
          </Box>
        </Grid>

    <Grid item xs={12} sm={12}  md={4}  lg={5} >
             
             <Box >
             <div>
             <img style={mystyle.img2} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
             </div>
             <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.73431278437604!2d67.35375724920635!3d24.86892417217729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3331717e1adcb%3A0xc33936eefc1f90f8!2sLogic%20Saint%20(Computer%20Institute%20%26%20Software%20House)!5e0!3m2!1sen!2s!4v1665752908230!5m2!1sen!2s" 
              width={"94%"} 
              height={"94%"} 
              style={{border: 1, padding:"10px"}} 
              allowFullScreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
             </div>
             </Box>
    </Grid>

          
    </Grid>
   
       
    <Grid item xs={12} sm={3} md={2}  lg={2} spacing={2}> <ButtonRightList/>  </Grid>
    </Grid>

    {/* section 2 */}
       
        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
              <div>
                <h1>
                    Add New Item
                </h1>
              </div>
             <Box >
              <AddItem_Business_entry/>
             </Box>
        </Grid>
        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
              <div>
                <h1>
                   Existing Items Data
                </h1>
              </div>
             <Box >
              <DataTable/>
             </Box>
        </Grid>


        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"0px 150px 40px 150px"}} >
              <div>
                <h1>
                   Existing Items Data
                </h1>
              </div>
             <Box >
              <Button>
                
              </Button>
             </Box>
        </Grid>
       
    
          
    </div>
  )

  


}

const mystyle = {
    img:{
        width:"40%",
        height:"40%",
        padding: "10px",
    },

    heading:{
        display:"flex",
        fontSize:"15px",
        padding:"5px",
        alignItems: "flex-end",
    },
    img2:{
        width:"94%",
        height:"94%",
        padding: "10px",
    },
    htag:{
        margin:"0 auto"
    }
}



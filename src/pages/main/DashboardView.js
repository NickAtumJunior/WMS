import { Grid } from '@mui/material'
import React from 'react'


function DashboardView() {
  return (
   <Grid container>
       <Grid item xs={6} md={6} >
          <Grid container sx={{
            backgroundColor:'whitesmoke'
          }}>
               <Grid item xs={3} md={3}>
                  child1
               </Grid> 

               <Grid item xs={3} md={3}>
                  child1
               </Grid> 

               <Grid item xs={3} md={3}>
                  child1
               </Grid> 

               <Grid item xs={3} md={3}>
                  child1
               </Grid> 
          </Grid>
       </Grid>
       <Grid item xs={6} md={6} sx={{
         backgroundColor:'lightyellow'
       }}>
       <Grid container>
               <Grid item xs={3} md={3}>
                  child2
               </Grid> 

               <Grid item xs={3} md={3}>
                  child2
               </Grid> 
               <Grid item xs={3} md={3}>
                  child2
               </Grid> 

               <Grid item xs={3} md={3}>
                  child2
               </Grid> 
          </Grid>
       </Grid>
   </Grid>
  )
}

export default DashboardView
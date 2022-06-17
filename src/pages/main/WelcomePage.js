import {  Grid, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useWindupString } from "windups";


function WelcomePage() {

  const [text] = useWindupString("Better way to manage Your business is have a Dashboard", {
    pace: (char) => (char === " " ? 60 : 140),
    });

  const Itemone = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "100vh",
    display: 'flex',
    backgroundColor:'#edf7f7'
  }));

  return (
      <Grid container >
        <Grid item xs={12} sx={{
            width:"100%",
            height:"100vh",
            
        }}>
          <Itemone>
             <Grid container>
                <Grid item xs={6}>
                   <h1 style={{
                    textAlign:"left",
                    padding:"4%",
                    fontSize:"3em",
                    color:"black"
                    }}>
                      {text}
                   </h1>
                    <Link className="linksignup" to='/signup'>Create Account</Link>
                </Grid>
                <Grid item xs={null} md={6} xl={6} sx={{}}>
                    <img alt="user" src="https://drive.google.com/uc?export=download&id=1_TbabuJsC8uwIl3f-ojZ7IhWEeyXPlAx" width='100%'/>
                </Grid>
             </Grid>
          </Itemone>
        </Grid>
      </Grid>
  );
}



export default WelcomePage;

import { Grid } from "@mui/material";
import React from "react";



const PageNotFound = () => {
  return (
      <Grid container>

        <Grid xs={12} md={12} alignContent='center' alignItems='center' sx={{
          paddingLeft:"30%"
        }}>
            <img
              src="https://drive.google.com/uc?export=download&id=1EcJ3wulkGt-eM1_MEuT2yu3NYdMUT3BO"
              height="500"
              width="500"
              alt="not found"
            />
        </Grid>

      </Grid>    
    
        // <div className="pageNotFound">
        // <div className="err-right">
            // <img
            //   src="https://drive.google.com/uc?export=download&id=1EcJ3wulkGt-eM1_MEuT2yu3NYdMUT3BO"
            //   height="500"
            //   width="500"
            //   alt="not found"
            // />
        //   </div>
        //   <div className="err-left">
        //     <h1>Oops..! The page not found</h1>
        //     <p>Looks like the link you followed probably broken or the page has been stolen.</p>
        //     <Link to='/'>Home Page</Link>
        //   </div>
         
        // </div>
      
    
  );
};

export default PageNotFound;
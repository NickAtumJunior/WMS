import "./App.css";
import DashboardView from "./pages/main/DashboardView";
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import WelcomePage from "./pages/main/WelcomePage";
import PageNotFound from "./pages/errors/PageNotFound";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppBar, Grid, Toolbar } from "@mui/material";
function App() {
  return (
    <Router>
       <Grid container>
       <AppBar
        position='sticky'
        elevation={false}
        sx={{
          display: "flex",
          boxSizing: "border-box",
          backgroundColor:'rgb(243, 227, 201)'
        }}
      >
        <Toolbar sx={{
          display:"flex",
           flexDirection:'row-reverse'
        }}>
          <Link to="/signup"  className="linker">
            SignUp
          </Link>
          <Link to="/signin"  className="linker">
            SignIn
          </Link>
          <Link to="/dashboard"  className="linker">
            DashBoard
          </Link>
          <Link to='/'  className="linker">Home</Link>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />

        {/* <DashboardView/> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
      </Routes>
       </Grid>
    </Router>
  );
}

export default App;

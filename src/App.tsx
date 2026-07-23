import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import OnBoarding1 from "./pages/onBoarding1";
// import OnBoarding2 from "./pages/onBoarding2";
// import OnBoarding3 from "./pages/onBoarding3";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import { supabase } from './lib/supabaseClient.js'
import Home from "./pages/Home.js";
import StartFight from "./components/StartFight.js";
import Fight from "./components/Fight.js";
import SignUp from "./pages/SignUp.js";

export default function App() {


  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      // console.log(data.session);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OnBoarding1 />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/onboarding2" element={<OnBoarding2 />} /> */}
          {/* <Route path="/onboarding3" element={<OnBoarding3 />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/startFight" element={<StartFight />} />
          <Route path="/fight" element={<Fight />} />
        </Route>
      </Routes>
    </>
  )
}
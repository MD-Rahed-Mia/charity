import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import HeroSection from "./components/sections/hero";
import AboutSection from "./components/sections/about";
import Sponsor from "./components/sections/sponsor";
import Gallery from "./components/sections/Gallery";
import Mission_Vission from "./components/sections/mission";
import Contact from "./components/sections/contact";
import Success from "./components/sections/Success";
import ProgrameAndServices from "./components/sections/Programme";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import PrivatePage from "./pages/authPage/PrivatePage";
import Admin from "./pages/authPage/Admin";
import SignIn from "./pages/SignIn";
import ManageHeroSection from "./pages/authPage/ManageHeroSection";
import { Toaster } from "react-hot-toast";
import ManageAboutSection from "./pages/authPage/ManageAboutSection";
import ManageMission from "./pages/authPage/ManageMission";
import ManageAchivementSection from "./pages/authPage/ManageAchivementSection";
import ManageSponsorSection from "./pages/authPage/ManageSponsorSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/admin"
            element={
              <PrivatePage>
                <Admin />
              </PrivatePage>
            }
          />
          <Route
            path="/admin/manage-hero-section"
            element={
              <PrivatePage>
                <ManageHeroSection />
              </PrivatePage>
            }
          />
          <Route
            path="/admin/manage-about-section"
            element={
              <PrivatePage>
                <ManageAboutSection />
              </PrivatePage>
            }
          />

          <Route
            path="/admin/manage-mission-section"
            element={
              <PrivatePage>
                <ManageMission />
              </PrivatePage>
            }
          />
          <Route
            path="/admin/manage-achivement-section"
            element={
              <PrivatePage>
                <ManageAchivementSection />
              </PrivatePage>
            }
          />
          <Route
            path="/admin/manage-sponsor-section"
            element={
              <PrivatePage>
                <ManageSponsorSection />
              </PrivatePage>
            }
          />

          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;

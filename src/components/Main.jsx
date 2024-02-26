import StartPoint from "./Scrolling/StartPoint/Index";
import Header from "./UI/Header";
import ProjectSection from "./Scrolling/Projects/ProjectSection";
import SocialsSection from "./Scrolling/Socials/SocialsSection";
// import CurlyArrow from "./Misc/CurlyArrow";
import { MainProvider } from "../context/MainContext";
import SideBarSection from "./UI/SideBar/SideBarSection";
import Iframe from "./Scrolling/Iframe";
import Note from "./Misc/Note";

const Main = () => {
  return (
    <>
      <Header />

      <MainProvider>
        <SideBarSection />
        <main
          className="
          main-grid relative top-0 pt-20 pb-[100px] px-4 mx-auto w-full gap-5 
          sm:gap-[2rem] sm:w-3/4
          md:px-8
          lg:w-11/12
          "
          id="start"
        >
          <Note
            x="10%"
            y="25%"
            text="resume about me"
            arrowRotate=".5turn"
            arrowY="10px"
            scale="200%"
          />
          <StartPoint />
          <ProjectSection />
          <div className=" flex flex-col lg:flex-row justify-evenly gap-5 max-w-full">
            <Iframe />
            <SocialsSection />
          </div>
        </main>
      </MainProvider>
    </>
  );
};

export default Main;

import ArticleCard from "../../Layouts/ArticleCard";
import TechStackSection from "./TechStack/TechStackSection";
import HeyThere from "./HeyThere/Index";
import AboutMe from "./AboutMe/Index";
import { MainContext } from "../../../context/MainContext";
import { useContext } from "react";

const Index = () => {
  const [{ start_point }, setVisible] = useContext(MainContext);

  return (
    <ArticleCard
      title="AboutMe"
      editorStyle
      visibility={0.3}
      isVisible={start_point}
      setIsVisible={() => setVisible((prev) => ({
        ...prev,
        start_point: !start_point,
      }))}
      id='start_point'
    >
      <div className="flex justify-center flex-wrap md:text-left md:w-5/6 mx-auto max-w-[500px]">
        <HeyThere />

        <AboutMe />

        <TechStackSection />
      </div>
    </ArticleCard>
  );
};

export default Index;

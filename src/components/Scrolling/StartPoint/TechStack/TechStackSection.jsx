import { useEffect, useRef } from "react";
import Card from "./Card";
import techs from "./techDict";
import ArticleCard from "../../../Layouts/ArticleCard";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import CodeTag from "../../../CustomElements/CodeTag";
import { techStackAnimation } from "../../../../utils/observerActions";


const TechStackSection = () => {
  const [observeSection] = useIntersectionObserver();
  const cardsSection = useRef();

  useEffect(() => {
    if (!cardsSection.current) return;
    const nodesToObserve = [cardsSection.current];
    observeSection({
      nodes: nodesToObserve,
      cb: (e) => techStackAnimation(e, handleAnimationEnd),
      options: {
        threshold: [0.7],
      },
    });
  }, [observeSection]);

  const handleAnimationEnd = () => {
    Array.from(cardsSection.current.childNodes).forEach((node, i) => {
      setTimeout(() => {
        node.classList.add("show");
      }, (i + 1) * 50);
    });
  };

  return (
    <CodeTag className="w-fit mt-2 m-auto" tagStyle="text-green-400">
      <ArticleCard visibility={.1} title="TechStack" isVisible={true} className='w-[240px] md:w-[100%]'>
        <div ref={cardsSection} className="techs-grid">
          {techs.map(({ text, img }) => {
            return <Card key={`card-tech-${text}`} text={text} imgSrc={img} />;
          })}
        </div>
      </ArticleCard>
    </CodeTag>
  );
};

export default TechStackSection;

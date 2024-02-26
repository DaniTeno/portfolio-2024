import { useContext } from "react";
import ArticleCard from "../../Layouts/ArticleCard";
import SocialsCard from "./SocialsCard";
import socialsData from "./socialsDict";
import { MainContext } from "../../../context/MainContext";

// TODO: hacer una funcion utilidad para copiar contenido

const SocialsSection = () => {
  const [{ socials }, setVisible] = useContext(MainContext);

  return (
    <>
      <ArticleCard
        title="Socials"
        editorStyle
        isVisible={socials}
        setIsVisible={() =>
          setVisible((prev) => ({
            ...prev,
            socials: !socials,
          }))
        }
        id='socials'
      >
        <section className="flex flex-wrap gap-2 justify-between sm:justify-between max-w-[500px]">
          {socialsData.map(({ name, img, fn, url }, i) => (
            <SocialsCard key={i} name={name} img={img} fn={fn} href={url} />
          ))}
        </section>
      </ArticleCard>
    </>
  );
};

export default SocialsSection;

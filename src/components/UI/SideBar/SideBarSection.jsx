import { useContext } from "react";
import { MainContext } from "../../../context/MainContext";

const dict = {
  start_point: "AboutMe",
  socials: "Socials",
  projects: "Projects",
};

const SideBarSection = () => {
  const [isVisible, setIsVisible] = useContext(MainContext);

  const handleStack = (k, v) => {
    setIsVisible((prev) => ({ ...prev, [k]: !v }));
  };

  return (
    Object.values(isVisible).includes(false) && (
      <article className="fixed p-2 flex flex-col justify-center gap-2 w-32 top-16 z-50">
        {Object.entries(isVisible).map(([k, v]) => {
          return (
            !v && (
              <a
                className="relative text-center transition-colors pop-in bg-gray-800  hover:bg-slate-600/50 rounded-md border p-1"
                key={k}
                onClick={() => handleStack(k, v)}
                href={`#${k}`}
              >
                {dict[k]}
              </a>
            )
          );
        })}
      </article>
    )
  );
};

export default SideBarSection;

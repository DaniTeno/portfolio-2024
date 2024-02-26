import { useContext, useEffect, useRef } from "react";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { HeaderContext } from "../../../../context/HeaderContext";
import { handleAnimation } from "../../../../utils/handleAnimation";
import CodeTag from "../../../CustomElements/CodeTag";
import { absolute } from "../../../../utils/observerActions";
import Hand from "./Hand";

const HeyThere = () => {
  const startP = useRef();
  const nameH1 = useRef();
  const [observeH1] = useIntersectionObserver();
  const setIsVisible = useContext(HeaderContext)[1];

  useEffect(() => {
    if (!nameH1?.current) return;
    const nodesToObserve = [startP.current, nameH1.current];

    observeH1({
      nodes: nodesToObserve,
      cb: (e) => absolute(e, setIsVisible),
      options: { threshold: 0.6, rootMargin: "10px" },
    });
  }, [observeH1, setIsVisible]);

  return (
    <div
      ref={startP}
      className="text-[1.3rem] sm:text-[38px] w-full fade-in"
      onAnimationEnd={() => handleAnimation([nameH1], "show")}
    >
      <Hand />

      <div
        ref={nameH1}
        className="flex relative text-center justify-center flex-col align-bottom w-full fade-in"
      >
        <span className="text-[1.3rem]">I&apos;m</span>

        <CodeTag
          tag="h1"
          tagStyle="text-yellow-500 text-[20px] h-full my-auto"
          className="flex justify-center w-full text-[6vw] sm:text-[80%] font-bold top-2"
        >
          <h1>Daniel Tenorio</h1>
        </CodeTag>
      </div>
    </div>
  );
};

export default HeyThere;

import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { waving } from "../../../../utils/observerActions";

const Hand = () => {
  const [observeWaving] = useIntersectionObserver();
  const hand = useRef();

  useEffect(() => {
    if (!hand?.current) return;
    const nodesToObserve = [hand.current];

    observeWaving({
      nodes: nodesToObserve,
      cb: (e) => waving(e),
      options: { threshold: 0.6, rootMargin: "10px" },
    });
  }, [observeWaving]);

  return (
    <div className="flex flex-wrap gap-1 mb-2 justify-center">
      <span className="text-[1rem] sm:text-[30px] mt-auto">Hey, there!</span>
      <span ref={hand} className="inline-block waving">
        👋
      </span>
    </div>
  );
};

export default Hand;

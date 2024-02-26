import t from "prop-types";
import { forwardRef, useRef } from "react";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CodeEditor from "./CodeEditor";
// import { opacity } from "../../utils/observerActions";

const ArticleCard = forwardRef(
  (
    {
      children,
      title,
      // visibility = 0.5,
      editorStyle = false,
      className,
      isVisible,
      setIsVisible,
      width = '',
      id,
      ...props
    },
    ref
  ) => {
    // const [observeSection] = useIntersectionObserver();
    const root = useRef();

    const handleClassName = (classes) => {
      return `transition-all relative flex flex-col
      ${editorStyle ? "" : "border rounded-md gap-4 bg-gray-800"} 
      ${isVisible ? "window-open" : `window-close absolute`} 
      ${classes ?? ""}
      `;
    };

    const handleYellowBtn = (e) => {
      const {classList} = e
      classList.toggle('scale-50')
    };

    // useEffect(() => {
    //   if (!root?.current) return;

    //   const nodesToObserve = [root.current];

    //   observeSection({
    //     nodes: nodesToObserve,
    //     cb: (e) => opacity(e),
    //     options: {
    //       threshold: [visibility],
    //     },
    //   });
    // }, [observeSection, visibility, isRelative]);

    return (
      isVisible && (
        <div className={`transition-all relative p-0 h-fit w-fit ${width}`} id={id}>
          <article
            {...props}
            ref={ref ?? root}
            className={handleClassName(className)}
          >
            {editorStyle ? (
              <CodeEditor
                title={title}
                isVisible={isVisible}
                handleRedBtn={setIsVisible}
                handleYellowBtn={handleYellowBtn}
              >
                {children}
              </CodeEditor>
            ) : (
              <>
                {title && (
                  <span className="w-max mx-auto text-2xl">{title}</span>
                )}
                {children}
              </>
            )}
          </article>
        </div>
      )
    );
  }
);

ArticleCard.propTypes = {
  visibility: t.number,
  title: t.string,
  className: t.string,
  width: t.string,
  id: t.string,
  editorStyle: t.bool,
  isVisible: t.bool,
  setIsVisible: t.func,
  children: t.any,
};

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;

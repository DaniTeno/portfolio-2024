import t from "prop-types";
import { useRef } from "react";
import { dragMove } from "../../utils/dragMove";

const CodeEditor = ({
  children,
  title = "file",
  handleRedBtn,
  handleYellowBtn,
  handleGreenBtn,
  isVisible,
}) => {
  const root = useRef(null);

  return (
    <div
      ref={root}
      className={`transition-transform relative w-full border border-gray-500 rounded-md overflow-hidden bg-gray-900 shadow-lg`}
    >
      {!isVisible && (
        <div
          onClick={handleRedBtn}
          className="md:absolute md:cursor-pointer md:transition-colors md: hover:bg-slate-50/50 md:z-50 md:w-full md:h-full"
        ></div>
      )}

      <section
        onClick={(e) => dragMove(e, root.current)}
        className="bg-gray-950 border-b border-gray-700 flex justify-between px-2"
      >
        <span className="p-0 m-0">{title}.jsx</span>
        <nav className="flex gap-1 my-auto">
          <div
            onClick={handleRedBtn}
            className="rounded-full cursor-pointer bg-red-500 h-3 w-3"
          ></div>
          <div
            onClick={() => handleYellowBtn(root.current)}
            className="rounded-full bg-yellow-500 h-3 w-3"
          ></div>
          <div
            onClick={handleGreenBtn}
            className="rounded-full bg-green-500 h-3 w-3"
          ></div>
        </nav>
      </section>

      <div className="p-3">{children}</div>
    </div>
  );
};

CodeEditor.propTypes = {
  children: t.any,
  handleRedBtn: t.func,
  handleYellowBtn: t.func,
  handleGreenBtn: t.func,
  title: t.string,
  isVisible: t.bool,
};

export default CodeEditor;

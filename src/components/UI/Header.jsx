import t from "prop-types";
import CodeTag from "../CustomElements/CodeTag";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";

const Header = () => {
  const [isVisible] = useContext(HeaderContext);

  return (
    <div
      className={`fixed w-full top-0 justify-between bg-gray-800/30 backdrop-blur-sm text-center ${
        !isVisible ? "opacity-1 z-50" : "opacity-0 z-0"
      } transition-opacity`}
    >
      <span className="text-6xl md:text-6xl h-max">
        <CodeTag
          tag="h1"
          tagStyle="text-yellow-500 text-[20px] sm:text-[30px] h-fit"
          className="flex justify-center items-center gap-1 w-full text-[6vw] sm:text-[80%] font-bold top-2"
        >
          <span className="h-fit">Daniel Tenorio</span>
        </CodeTag>
      </span>
    </div>
  );
};

Header.propTypes = {
  show: t.bool,
};

export default Header;

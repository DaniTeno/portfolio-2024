import curlyArrow from "../../assets/curly_arrow.png";
import t from "prop-types";

const Note = ({
  x = "0",
  y = "0",
  arrowX = "0",
  arrowY = "0",
  rotate = "0",
  scale = "1",
  arrowRotate = "0",
  arrowScale = "1",
  text = "Placeholder",
}) => {
  const handleClassName = () => {
    return `transition-opacity md:flex gap-2
    text-gray-300 absolute`;
  };

  return (
    <div
      className={handleClassName({ x, y })}
      style={{
        transform: `rotateZ(${rotate}), scale(${scale})`,
        top: y,
        left: x,
      }}
    >
      <span className="whitespace-nowrap">{text}</span>
      <img
        className={`relative invert w-[40px] opacity-50`}
        src={curlyArrow}
        alt="curly arrow"
        style={{
          transform: `rotateZ(${arrowRotate}) scale(${arrowScale})`,
          top: arrowY,
          left: arrowX,
        }}
      />
    </div>
  );
};

Note.propTypes = {
  x: t.string,
  y: t.string,
  arrowX: t.string,
  arrowY: t.string,
  rotate: t.string,
  scale: t.string,
  arrowScale: t.string,
  arrowRotate: t.string,
  text: t.string,
};

export default Note;

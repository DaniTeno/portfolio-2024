import t from "prop-types";

const Card = ({ imgSrc, classes }) => {
  const handleClasses = (str) => {
    let baseClass = `flex gap-1 flex-col p-2 fade-in`;
    if (str) baseClass = `${baseClass} ${str}`;
    return baseClass;
  };

  return (
    <figure className={handleClasses(classes)}>
      <img className="object-contain max-w-[40px] m-auto" src={imgSrc}></img>
    </figure>
  );
};

Card.propTypes = {
  imgSrc: t.string,
  classes: t.string,
  text: t.string,
};

export default Card;

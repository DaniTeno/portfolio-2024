import t from "prop-types";

const OneLineTag = ({
  children,
  tag = "img",
  tagStyle = "text-gray-400 h-max mt-auto",
  ...props
}) => {
  return (
    <div {...props}>
      <span className={`${tagStyle} me-1`}>{`<${tag}`}</span>
      {children}
      <span className={`${tagStyle} ms-1`}>{`/>`}</span>
    </div>
  );
};

OneLineTag.propTypes = {
  children: t.any,
  props: t.object,
  className: t.string,
  tag: t.string,
  tagStyle: t.string,
};

export default OneLineTag;

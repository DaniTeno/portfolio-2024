import t from "prop-types";

const CodeTag = ({
  children,
  tag = "div",
  tagStyle = "text-gray-400",
  ...props
}) => {
  return (
    <div {...props}>
      <span className={`${tagStyle} me-1`}>{`<${tag}>`}</span>
      {children}
      <span className={`${tagStyle} ms-1`}>{`</${tag}>`}</span>
    </div>
  );
};

CodeTag.propTypes = {
  children: t.any,
  props: t.object,
  className: t.string,
  tag: t.string,
  tagStyle: t.string,
};

export default CodeTag;

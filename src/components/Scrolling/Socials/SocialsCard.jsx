import t from "prop-types";
import OneLineTag from "../../CustomElements/OneLineTag";
import { copyToClipboard } from "../../../utils/copyToClipboard";

// TODO: Cambiar el anchor a la raiz del componente

const Tag = ({ fn, href, children }) => {
  if (fn)
    return <button onClick={() => copyToClipboard(fn)}>{children}</button>;

  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
};

const SocialsCard = ({ name, href, fn, img }) => {
  return (
    <div className="flex gap-1 max-w-[250px] ">
      <img
        className="w-6 h-6 my-auto bg-slate-100/90 rounded border"
        src={img}
        alt={`${name} logo`}
      />

      <Tag href={href} fn={fn}>
        <OneLineTag
          tag="Social"
          tagStyle="text-gray-500 text-[.9rem] mt-auto text-yellow-400"
          className="flex border h-full border-gray-700 rounded px-1 pt-1 flex-grow hover:bg-slate-100/50 transition-colors cursor-pointer"
        >
          <figure className="flex gap-2 min-w-[40px] ">
            <div className="mt-auto">
              <span className="text-red-600">{href ? "to" : "copy"}=</span>

              <span className="text-[.rem] text-green-600">
                {'"'}
                {name}
                {'"'}
              </span>
            </div>
          </figure>
        </OneLineTag>
      </Tag>
    </div>
  );
};

SocialsCard.propTypes = {
  name: t.string,
  href: t.string,
  fn: t.string,
  img: t.string,
};

Tag.propTypes = {
  href: t.string,
  fn: t.string,
  children: t.any,
};

export default SocialsCard;

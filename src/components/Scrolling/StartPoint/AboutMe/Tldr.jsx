import { useEffect, useState } from "react";
import CodeTag from "../../../CustomElements/CodeTag";

const tldr = ` tl;dr web developer with several years of experience developing on
React, but also kwonledge in NodeJS and Laravel. Currently working
as FrontEnd in Chileneumáticos.`;

const typingSpeed = 10;

const Tldr = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < tldr.length) {
      const currentWord = tldr.split("")[index];

      setTimeout(() => {
        setText((prevText) => `${prevText}${currentWord}`);
        setIndex(index + 1);
      }, typingSpeed);
    }
    return () => {
      clearTimeout();
    };
  }, [index]);

  return (
    <CodeTag tag="p" tagStyle="block text-gray-500" className="m-auto max-w-[240px] md:w-full">
      <div className="text-[.9rem] h-max my-auto">
        {text}
        <span className="text-cursor">|</span>
      </div>
    </CodeTag>
  );
};

export default Tldr;

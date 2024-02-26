import { useRef, useState } from 'react';
import t from 'prop-types';

const ProjectCard = ({ data }) => {
  const [displayBtns, setDisplayBtns] = useState(false);
  const nav = useRef(null);

  return (
    <figure className="flex flex-col p-10 pt-2">
      <div
        onMouseEnter={() => setDisplayBtns(true)}
        onMouseLeave={() => setDisplayBtns(false)}
        className="hover:bg-slate-700 bg-slate-800 transition-colors overflow-hidden rounded-lg"
      >
        <img src={data.imageUrl} alt="react logo" />
        <p className="text-[.9rem] p-3">{data.info}</p>

        <nav
          ref={nav}
          className={`transition-opacity flex justify-evenly 
          ${displayBtns ? 'opacity-1' : 'opacity-0'} 
          `}
        >
          <a
            href={data.github}
            rel="noreferrer"
            target="_blank"
            className={`transition-colors text-black w-full bg-slate-500 
            ${
              data.github
                ? 'hover:bg-slate-100 cursor-pointer'
                : 'hover:bg-slate-600 cursor-not-allowed'
            } `}
          >
            <span>{!data.github && '!'}GitHub</span>
          </a>
          <a
            href={data.url}
            rel="noreferrer"
            target="_blank"
            className="transition-colors text-black bg-slate-500 hover:bg-slate-100 w-full"
          >
            Show
          </a>
        </nav>
      </div>
    </figure>
  );
};

ProjectCard.propTypes = {
  data: t.shape({
    info: t.string,
    title: t.string,
    url: t.string,
    github: t.string,
    imageUrl: t.string,
  }),
};

export default ProjectCard;

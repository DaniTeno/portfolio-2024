import { useContext } from 'react';
import CodeTag from '../../CustomElements/CodeTag';
import ArticleCard from '../../Layouts/ArticleCard';
import ProjectCard from './ProjectCard';
import { MainContext } from '../../../context/MainContext';
import { Carousel } from 'react-responsive-carousel';
import { projects as currentProjects } from './projectsDict.js';

const ProjectSection = () => {
  const [{ projects }, setVisible] = useContext(MainContext);

  return (
    <ArticleCard
      title="Projects"
      editorStyle
      visibility={0}
      isVisible={projects}
      setIsVisible={() =>
        setVisible((prev) => ({
          ...prev,
          projects: !projects,
        }))
      }
      id="projects"
      width="md:w-fit max-w-full"
    >
      <CodeTag
        tag="ProjectsList"
        tagStyle="text-blue-600 text-xl"
        className="mx-auto max-w-[400px]"
      >
        <Carousel
          showThumbs={false}
          showArrows={false}
          interval={5000}
          autoPlay
          infiniteLoop
          emulateTouch
          showStatus={false}
          autoFocus
        >
          {currentProjects.map((projectData) => (
            <ProjectCard key={`project-${projectData.title}`} data={projectData} />
          ))}
        </Carousel>
        {/* <div className="projects-grid py-2"></div> */}
      </CodeTag>
    </ArticleCard>
  );
};

export default ProjectSection;

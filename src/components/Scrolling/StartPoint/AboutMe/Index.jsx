import ProfileFigure from "./ProfileFigure";
import Tldr from "./Tldr";

const AboutMe = () => {
  return (
    <div className="flex w-full flex-wrap gap-4 justify-between sm:flex-nowrap py-2">
      <ProfileFigure />

      <Tldr />
    </div>
  );
};

export default AboutMe;

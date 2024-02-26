import OneLineTag from "../../../CustomElements/OneLineTag";
import me from "../../../../assets/me.jpg";

const ProfileFigure = () => {
  return (
    <OneLineTag tagStyle="text-red-500" className="mx-auto">
      <figure className="mix-w-[150px] max-w-[250px] md:max-w-[250px]">
        <img
          className="object-cover rounded-md"
          src={me}
          alt="pixelart of me"
        />
      </figure>
    </OneLineTag>
  );
};

export default ProfileFigure;

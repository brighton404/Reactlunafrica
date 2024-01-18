import { FunctionComponent } from "react";

type TeamphotoType = {
  gloryAlphonsus?: string;
};

const Teamphoto: FunctionComponent<TeamphotoType> = ({ gloryAlphonsus }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        className="relative w-[200px] h-[250px] object-cover"
        alt="glory"
        src={gloryAlphonsus}
      />
    </div>
  );
};

export default Teamphoto;

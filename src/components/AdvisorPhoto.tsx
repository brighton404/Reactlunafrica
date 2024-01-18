import { FunctionComponent } from "react";

type AdvisorPhotoType = {
  chandiniSood?: string;
};

const AdvisorPhoto: FunctionComponent<AdvisorPhotoType> = ({
  chandiniSood,
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        className="relative w-[200px] h-[250px] object-cover"
        alt=""
        src={chandiniSood}
      />
    </div>
  );
};

export default AdvisorPhoto;

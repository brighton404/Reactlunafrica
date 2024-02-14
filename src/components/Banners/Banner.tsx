import { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div
      className="bg-base-blacks-var-1 w-full overflow-hidden flex flex-row items-center justify-start py-[10px] px-[20px] md:px-[10px] box-border gap-[20px] text-left text-13xl text-base-whites-var-1 font-Poppins sm:flex-col sm:items-start"
      id="banner-cta"
    >
      <div className="flex-1 flex flex-col items-start justify-center sm:self-stretch">
        <span className="self-stretch relative font-semibold">THE TIME IS
          <span className="text-contemporary-var-2"> NOW</span>
        </span>
        <span className="self-stretch relative font-semibold">
          EMPOWERING WOMEN ONE AT A TIME
        </span>
      </div>
      <div className="flex flex-1 flex-wrap md:items-end md:gap-[10px] items-center justify-start gap-[20px] text-xl text-base-blacks-var-2 sm:justify-start">
        <div className="bg-base-whites-var-1 flex flex-row items-center justify-center py-2.5 px-5 border-[2px] border-solid border-base-whites-var-1 sm:text-body-medium font-semibold text-nowrap">
          Get Started
        </div>
        <div className="flex flex-row items-center justify-center py-2.5 px-5 text-base-whites-var-1 border-[2px] border-solid border-base-greys-var-1 sm:text-body-medium font-semibold text-nowrap">
          Consult with team
        </div>
      </div>
    </div>
  );
};

export default Banner;

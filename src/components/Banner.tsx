import { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div
      className="bg-base-blacks-var-1 w-full overflow-hidden flex flex-row items-center justify-start pt-10 px-5 pb-0 box-border gap-[20px] text-left text-13xl text-base-whites-var-1 font-Poppins lg:w-[1200px] md:w-[960px] sm:w-[420px] sm:flex-col"
      id="banner-cta"
    >
      <div className="flex-1 flex flex-col items-start justify-center sm:flex-[unset] sm:self-stretch">
        <span className="self-stretch relative font-semibold">
          <span>{`THE TIME IS `}</span>
          <span className="text-contemporary-var-2">NOW</span>
        </span>
        <span className="self-stretch relative font-semibold">
          EMPOWERING WOMEN ONE AT A TIME
        </span>
      </div>
      <div className="flex flex-row items-center justify-start gap-[20px] text-xl text-base-blacks-var-2">
        <div className="bg-base-whites-var-1 flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative font-semibold">Get Started</div>
        </div>
        <div className="flex flex-row items-center justify-center py-2.5 px-5 text-base-whites-var-1 border-[2px] border-solid border-base-greys-var-1">
          <div className="relative font-semibold">Consult with team</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

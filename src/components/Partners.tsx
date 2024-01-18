import { FunctionComponent } from "react";
import PartnerCard from "./PartnerCard";

const Partners: FunctionComponent = () => {
  return (
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-start gap-[20px] text-left text-lg text-base-whites-var-1 font-wide-screen-body-small">
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start py-[5px] px-2.5 gap-[20px]">
        <PartnerCard logo="/logo@2x.png" yWCA="Tamu" propWidth="40px" />
        <PartnerCard logo="/logo@2x.png" yWCA="Ikunde" propWidth="40px" />
        <PartnerCard logo="/logo@2x.png" yWCA="ALU" propWidth="70px" />
        <PartnerCard logo="/logo@2x.png" yWCA="Vuki" propWidth="24px" />
        <PartnerCard logo="/logo@2x.png" yWCA="femtech lab" propWidth="24px" />
        <PartnerCard logo="/logo@2x.png" yWCA="Jasiri" propWidth="30px" />
        <PartnerCard logo="/logo@2x.png" yWCA="Eve's Apple" propWidth="70px" />
        <PartnerCard
          logo="/logo@2x.png"
          yWCA={`Allan & Gray`}
          propWidth="32.9px"
        />
        <PartnerCard logo="/logo@2x.png" yWCA="YWCA" propWidth="30px" />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <img
          className="relative w-10 h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-10 h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-6 h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-[70px] h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-6 h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-[70px] h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-[32.9px] h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <div className="flex flex-row items-start justify-start">
          <span className="relative">Tamu</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">Ikunde</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">ALU</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">Vuki</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">femtech lab</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">Jasiri</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">Eve's Apple</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">{`Allan & Gray`}</span>
        </div>
        <div className="flex flex-row items-start justify-start">
          <span className="relative">YWCA</span>
        </div>
      </div>
    </div>
  );
};

export default Partners;

import React from 'react';
import PartnerCard from "../components/Partners";

const PartnerSection: React.FC = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-[5px] gap-[10px] horizontal-scroll-container font-Poppins text-contemporary-var-2">
    <div className="flex flex-row items-start justify-start py-[5px] px-2.5 bg-base-blacks-var-2 z-10">
      <h3 className="m-0 text-inherit font-semibold">Our Partners</h3>
    </div>
    <div className="flex flex-row horizontal-scroll-text">
      <div className="flex flex-row">
        <PartnerCard partners="Tamu" />
        <PartnerCard partners="Ikunde" />
        <PartnerCard partners="ALU" />
        <PartnerCard partners="Vuki" />
        <PartnerCard partners="Femtech lab" />
        <PartnerCard partners="Jasiri" />
        <PartnerCard partners="Eves Apple" />
        <PartnerCard partners="Allan & Gray" />
        <PartnerCard partners="YWCA" />&nbsp; {/* intentional repitition that maintains the flow animation not to leak blank spaces */}
        <PartnerCard partners="Tamu" />
        <PartnerCard partners="Ikunde" />
        <PartnerCard partners="ALU" />
        <PartnerCard partners="Vuki" />
        <PartnerCard partners="Femtech lab" />
        <PartnerCard partners="Jasiri" />
        <PartnerCard partners="Eves Apple" />
        <PartnerCard partners="Allan & Gray" />
        <PartnerCard partners="YWCA" />&nbsp;        
      </div>
    </div>
  </div>
  );
};

export default PartnerSection;
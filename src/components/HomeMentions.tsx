import React from 'react';
import MentionCard from './mentions';

const Mentioned: React.FC = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-[5px] gap-[10px] horizontal-scroll-container font-Poppins text-contemporary-var-2">
    <div className="flex flex-row items-start justify-start py-[5px] px-2.5 bg-base-blacks-var-2 z-10">
      <h3 className="m-0 text-inherit font-semibold">As Seen In</h3>
    </div>
    <div className="flex flex-row horizontal-scroll-text">
      <div className="flex flex-row">
        <MentionCard mention='Tamu'/>
        <MentionCard mention="Ikunde" />
        <MentionCard mention="ALU" />
        <MentionCard mention="Vuki" />
        <MentionCard mention="Femtech lab" />
        <MentionCard mention="Jasiri" />
        <MentionCard mention="Eves Apple" />
        <MentionCard mention="Allan & Gray" />
        <MentionCard mention="YWCA" />&nbsp; {/* intentional repitition that maintains the flow animation not to leak blank spaces */}
        <MentionCard mention="Tamu" />
        <MentionCard mention="Ikunde" />
        <MentionCard mention="ALU" />
        <MentionCard mention="Vuki" />
        <MentionCard mention="Femtech lab" />
        <MentionCard mention="Jasiri" />
        <MentionCard mention="Eves Apple" />
        <MentionCard mention="Allan & Gray" />
        <MentionCard mention="YWCA" />&nbsp;        
      </div>
    </div>
  </div>
  );
};

export default Mentioned;
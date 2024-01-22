import { FunctionComponent, useState, useMemo, type CSSProperties } from "react";
import LUNALOGO from "./LUNALOGO";

type Mentions = 'default' | 'Tamu' | 'Ikunde' | 'ALU' | 'Vuki' | 'Femtech lab' | 'Jasiri' | 'Eves Apple' | 'Allan & Gray' | 'YWCA';

interface PartnerProps {
  mention?: Mentions;
}

const MentionCard: React.FC<PartnerProps> = ({ mention = 'default' }) => {
 let content;

 switch (mention) {
  case 'Tamu':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner01@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Tamu</span>
    </div>
  </div>;
  break;
  case 'Ikunde':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner02@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Ikunde</span>
    </div>
  </div>;
  break;
  case 'ALU':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/images/partners/partner03@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">ALU</span>
    </div>
  </div>;
  break;
  case 'Vuki':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner04@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Vuki</span>
    </div>
  </div>;
  break;
  case 'Femtech lab':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner05@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Femtech lab</span>
    </div>
  </div>;
  break;
  case 'Jasiri':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner06@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Jasiri</span>
    </div>
  </div>;
  break;
  case 'Eves Apple':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner07@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Eve's Apple</span>
    </div>
  </div>;
  break;
  case 'Allan & Gray':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner08@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">Allan & Gray</span>
    </div>
  </div>;
  break;
  case 'YWCA':
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <img className="relative w-[45x] h-[30px] object-cover" alt="" src="./images/partners/partner09@2x.png"/>
    <div className="flex flex-row items-start justify-start">
      <span className="relative">YWCA</span>
    </div>
  </div>;
  break;
  default:
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-Poppins">
    <LUNALOGO />
    <div className="flex flex-row items-start justify-start">
      <span className="relative">LUNA PARTNER</span>
    </div>
  </div>;
 }
  return (<div className={`mention-card ${mention}`}>{content}</div>);
};

export default MentionCard;

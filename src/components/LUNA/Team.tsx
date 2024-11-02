import { FunctionComponent } from "react";

type Team = 'default' | 'berabose' | 'chibudu' | 'dusabimana' | 'julius' | 'glory';
import LUNALOGO from "./LUNALOGO";

interface PartnerProps {
  team?: Team;
}

const TeamMember: FunctionComponent<PartnerProps> = ({ team = 'default' }) => {
 let content;

 switch (team) {
  case 'berabose':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-Poppins">
      <div className="flex flex-col items-start justify-start flex-1">
        <img className="w-[200px] h-[200px] object-contain bg-white" src="../Reactlunafrica/images/team/berabose-joyce.png"/>
      </div>
      <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <span className="text-body-4x">Berabose A. Joyce</span>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <span className="text-body-4x">CEO</span>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'chibudu':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-Poppins">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[200px] object-cover bg-white" alt="" src="../Reactlunafrica/images/team/chibudu-nyiro.png"/>
      </div>
      <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
          <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <span className="text-body-4x">Chibudu S. Nyiro</span>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <span className="text-body-4x">COO</span>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'dusabimana':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-Poppins">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[250px] h-[200px] object-cover bg-white" alt="" src="../Reactlunafrica/images/team/dusabimana-ange.png" />
      </div>
      <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <span className="text-body-4x">Dusabimana Ange</span>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <span className="text-body-4x">Medical Project Manager</span>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'julius':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-Poppins">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[210px] h-[200px] object-cover bg-white" alt="" src="../Reactlunafrica/images/team/juliusBrighton.png"/>
      </div>
      <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <span className="text-body-4x">Julius Brighton</span>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <span className="text-body-4x">UI/UX Project Manager</span>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'glory':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-Poppins">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[210px] h-[200px] object-cover bg-white" alt="" src="../Reactlunafrica/images/team/glory-alphonsus.png"/>
      </div>
      <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <span className="text-body-4x">Glory Alphonsus</span>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <span className="text-body-4x">Backend Developer</span>
          </div>
        </div>
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
  return (<div className={`team-member ${team}`}>{content}</div>);
};

export default TeamMember;


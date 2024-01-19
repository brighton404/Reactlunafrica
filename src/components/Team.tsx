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
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\team\berabose-joyce.png"
        />
      </div>
      <div   className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Berabose A. Joyce</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">CEO</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'chibudu':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\team\chibudu-nyiro.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
          <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Chibudu S. Nyiro</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">COO</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'dusabimana':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\team\dusabimana-ange.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Dusabimana Ange</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Medical Project Manager</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'julius':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\team\julius-brighton.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Julius Brighton</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">UI/UX Project Manager</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'glory':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\team\glory-alphonsus.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Glory Alphonsus</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Backend Developer</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  default:
    content = 
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-wide-screen-body-small">
    <LUNALOGO />
    <div className="flex flex-row items-start justify-start">
      <span className="relative">LUNA PARTNER</span>
    </div>
  </div>;
 }
  return (<div className={`team-member ${team}`}>{content}</div>);
};

export default TeamMember;


import { FunctionComponent } from "react";

type Advisor = 'default' | 'michael' | 'warren' | 'james' | 'fredeline' | 'chidi' | 'chandini';
import LUNALOGO from "./LUNALOGO";

interface AdvisorProps {
  advisor?: Advisor;
}

const AdvisorCard: FunctionComponent<AdvisorProps> = ({ advisor = 'default' }) => {
 let content;

 switch (advisor) {
  case 'michael':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\michael-szymanski.png"
        />
      </div>
      <div   className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Michael Szymanski</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Business development</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'warren':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\warren-cronje.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
          <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Warren Cronje</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Investment</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'james':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\warren-cronje.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">James Brown</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Womens Health</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'fredeline':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\fredeline-muller.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Fredeline Muller</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Finance</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'chidi':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\chidi-afulezi.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">Chidi Afulezi</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Leadership</div>
          </div>
        </div>
      </div>
    </div>;
  break;
  case 'chandini':
    content = 
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src=".\images\advisors\chandini-sood.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">chandini sood</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">Funding readiness</div>
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
  return (<div className={`advisor-card ${advisor}`}>{content}</div>);
};

export default AdvisorCard;


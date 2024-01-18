import { FunctionComponent } from "react";
import Teams from "./Teams";
import AdvisorPhoto from "./AdvisorPhoto";

const Advisors: FunctionComponent = () => {
  return (
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-start gap-[20px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[10px]">
        <Teams
          employeeImageUrl="/michael-szymanski@2x.png"
          employeeTitle="Michael Szymanski"
          roleImageUrl="Business development"
        />
        <Teams
          employeeImageUrl="/warren-cronje@2x.png"
          employeeTitle="Michael Szymanski"
          roleImageUrl="Investment"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/james-brown@2x.png"
          employeeTitle="James Brown"
          roleImageUrl="Womens health"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/fredeline-muller@2x.png"
          employeeTitle="Fredeline Muller"
          roleImageUrl="Finance"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/chidi-afulezi@2x.png"
          employeeTitle="Chidi Afulezi"
          roleImageUrl="Leadership"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/chandini-sood@2x.png"
          employeeTitle="Chandini Sood"
          roleImageUrl="Funding readiness"
          teamMemberNameAlignSelf="unset"
        />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <AdvisorPhoto chandiniSood="/michael-szymanski@2x.png" />
        <AdvisorPhoto chandiniSood="/warren-cronje@2x.png" />
        <AdvisorPhoto chandiniSood="/james-brown@2x.png" />
        <AdvisorPhoto chandiniSood="/fredeline-muller@2x.png" />
        <AdvisorPhoto chandiniSood="/chidi-afulezi@2x.png" />
        <AdvisorPhoto chandiniSood="/chandini-sood@2x.png" />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Michael Szymanski</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Warren Cronje</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">James Brown</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Fredeline Muller</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Chidi Afulezi</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Chandini Sood</div>
        </div>
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px] text-base-greys-var-1">
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Business development</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Investment</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Womens health</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Finance</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Leadership</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Funding readiness</div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;

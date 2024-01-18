import { FunctionComponent } from "react";
import Teams from "./Teams";
import Teamphoto from "./Teamphoto";

const Team: FunctionComponent = () => {
  return (
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-start gap-[20px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[10px]">
        <Teams
          employeeImageUrl="/berabose-joyce@2x.png"
          employeeTitle="Berabose A. Joyce"
          roleImageUrl="CEO"
          teamMemberNameAlignSelf="stretch"
        />
        <Teams
          employeeImageUrl="/chibudu-background@2x.png"
          employeeTitle="Chibudu S. Nyiro"
          roleImageUrl="COO"
          teamMemberNameAlignSelf="stretch"
        />
        <Teams
          employeeImageUrl="/dusabimana@2x.png"
          employeeTitle="Dusabimana Ange"
          roleImageUrl="Medical Project Manager"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/julius-brighton@2x.png"
          employeeTitle="Julius Brighton"
          roleImageUrl="UI/UX Designer"
          teamMemberNameAlignSelf="unset"
        />
        <Teams
          employeeImageUrl="/glory-alphonsus@2x.png"
          employeeTitle="Glory Alphonsus"
          roleImageUrl="Backend Devleper"
          teamMemberNameAlignSelf="unset"
        />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <Teamphoto gloryAlphonsus="/berabose-joyce@2x.png" />
        <Teamphoto gloryAlphonsus="/chibudu-background@2x.png" />
        <Teamphoto gloryAlphonsus="/dusabimana@2x.png" />
        <Teamphoto gloryAlphonsus="/julius-brighton@2x.png" />
        <Teamphoto gloryAlphonsus="/glory-alphonsus@2x.png" />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Berabose A. Joyce</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Chibudu S. Nyiro</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Dusabimana Ange</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Julius Brighton</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Glory Alphonsus</div>
        </div>
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px] text-base-greys-var-1">
        <div className="flex flex-row items-start justify-start">
          <div className="relative">CEO</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">COO</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Medical Project Manager</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">UI/UX Designer</div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative">Backend Devleper</div>
        </div>
      </div>
    </div>
  );
};

export default Team;

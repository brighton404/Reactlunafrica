import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TeamsType = {
  employeeImageUrl?: string;
  employeeTitle?: string;
  roleImageUrl?: string;

  /** Style props */
  teamMemberNameAlignSelf?: CSSProperties["alignSelf"];
};

const Teams: FunctionComponent<TeamsType> = ({
  employeeImageUrl,
  employeeTitle,
  roleImageUrl,
  teamMemberNameAlignSelf,
}) => {
  const descContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: teamMemberNameAlignSelf,
    };
  }, [teamMemberNameAlignSelf]);

  return (
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px] text-left text-3xl text-base-whites-var-1 font-wide-screen-body-small">
      <div className="flex flex-col items-start justify-start">
        <img
          className="relative w-[200px] h-[250px] object-cover"
          alt=""
          src={employeeImageUrl}
        />
      </div>
      <div
        className="flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]"
        style={descContainerStyle}
      >
        <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-whites-var-1" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative">{employeeTitle}</div>
          </div>
          <div className="flex flex-row items-start justify-start text-base-greys-var-1">
            <div className="relative">{roleImageUrl}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

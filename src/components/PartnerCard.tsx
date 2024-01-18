import { FunctionComponent, useMemo, type CSSProperties } from "react";

type PartnerCardType = {
  logo?: string;
  yWCA?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const PartnerCard: FunctionComponent<PartnerCardType> = ({
  logo,
  yWCA,
  propWidth,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 gap-[10px] text-left text-lg text-base-whites-var-1 font-wide-screen-body-small">
      <img
        className="relative w-[30px] h-[30px] object-cover"
        alt=""
        src={logo}
        style={logoIconStyle}
      />
      <div className="flex flex-row items-start justify-start">
        <span className="relative">{yWCA}</span>
      </div>
    </div>
  );
};

export default PartnerCard;

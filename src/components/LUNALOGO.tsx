import { FunctionComponent, useMemo, type CSSProperties } from "react";

type LUNALOGOType = {
  dimensions?: string;

  /** Style props */
  lUNALOGOsmallWhiteWidth?: CSSProperties["width"];
  lUNALOGOsmallWhiteHeight?: CSSProperties["height"];
  lUNALOGOsmallWhitePosition?: CSSProperties["position"];
  groupDivHeight?: CSSProperties["height"];
  groupDivWidth?: CSSProperties["width"];
  groupDivTop?: CSSProperties["top"];
  groupDivRight?: CSSProperties["right"];
  groupDivBottom?: CSSProperties["bottom"];
  groupDivLeft?: CSSProperties["left"];
  sAFEANDTRUSTEDContainerFontSize?: CSSProperties["fontSize"];
  bRANDTop?: CSSProperties["top"];
  bRANDFontSize?: CSSProperties["fontSize"];
  groupDivHeight1?: CSSProperties["height"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivTop1?: CSSProperties["top"];
  groupDivRight1?: CSSProperties["right"];
  groupDivBottom1?: CSSProperties["bottom"];
  lUNATop?: CSSProperties["top"];
  lUNALeft?: CSSProperties["left"];
  lUNAFontSize?: CSSProperties["fontSize"];

  /** Action props */
  onCompanyLogoContainerClick?: () => void;
};

const LUNALOGO: FunctionComponent<LUNALOGOType> = ({
  dimensions,
  lUNALOGOsmallWhiteWidth,
  lUNALOGOsmallWhiteHeight,
  lUNALOGOsmallWhitePosition,
  groupDivHeight,
  groupDivWidth,
  groupDivTop,
  groupDivRight,
  groupDivBottom,
  groupDivLeft,
  sAFEANDTRUSTEDContainerFontSize,
  bRANDTop,
  bRANDFontSize,
  groupDivHeight1,
  groupDivWidth1,
  groupDivTop1,
  groupDivRight1,
  groupDivBottom1,
  lUNATop,
  lUNALeft,
  lUNAFontSize,
  onCompanyLogoContainerClick,
}) => {
  const lUNALOGOsmallWhiteStyle: CSSProperties = useMemo(() => {
    return {
      width: lUNALOGOsmallWhiteWidth,
      height: lUNALOGOsmallWhiteHeight,
      position: lUNALOGOsmallWhitePosition,
    };
  }, [
    lUNALOGOsmallWhiteWidth,
    lUNALOGOsmallWhiteHeight,
    lUNALOGOsmallWhitePosition,
  ]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight,
      width: groupDivWidth,
      top: groupDivTop,
      right: groupDivRight,
      bottom: groupDivBottom,
      left: groupDivLeft,
    };
  }, [
    groupDivHeight,
    groupDivWidth,
    groupDivTop,
    groupDivRight,
    groupDivBottom,
    groupDivLeft,
  ]);

  const sAFEANDTRUSTEDContainerStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: sAFEANDTRUSTEDContainerFontSize,
    };
  }, [sAFEANDTRUSTEDContainerFontSize]);

  const bRANDStyle: CSSProperties = useMemo(() => {
    return {
      top: bRANDTop,
      fontSize: bRANDFontSize,
    };
  }, [bRANDTop, bRANDFontSize]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight1,
      width: groupDivWidth1,
      top: groupDivTop1,
      right: groupDivRight1,
      bottom: groupDivBottom1,
    };
  }, [
    groupDivHeight1,
    groupDivWidth1,
    groupDivTop1,
    groupDivRight1,
    groupDivBottom1,
  ]);

  const lUNAStyle: CSSProperties = useMemo(() => {
    return {
      top: lUNATop,
      left: lUNALeft,
      fontSize: lUNAFontSize,
    };
  }, [lUNATop, lUNALeft, lUNAFontSize]);

  return (
    <div
      className="w-[125px] h-[85px] text-left text-[23px] text-base-whites-var-1 font-montserrat"
      style={lUNALOGOsmallWhiteStyle}
      onClick={onCompanyLogoContainerClick}
    >
      <div
        className="absolute h-[100.12%] w-[90.4%] top-[0.12%] right-[-101.2%] bottom-[-0.24%] left-[110.8%] hidden"
        style={groupDivStyle}
      >
        <div
          className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[100.9%] font-extrabold"
          style={sAFEANDTRUSTEDContainerStyle}
        >
          <p className="m-0">SAFE</p>
          <p className="m-0">AND</p>
          <p className="m-0">TRUSTED</p>
        </div>
        <div
          className="absolute top-[83.55%] left-[0%] text-[14.2px] tracking-[0.38em] leading-[100.9%]"
          style={bRANDStyle}
        >
          BRAND
        </div>
      </div>
      <div
        className="absolute h-[82.59%] w-[94.72%] top-[10.82%] right-[5.28%] bottom-[6.59%] left-[0%] text-[30.4px]"
        style={groupDiv1Style}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={dimensions}
        />
        <div
          className="absolute top-[23.36%] left-[9.21%] tracking-[0.07em] font-black"
          style={lUNAStyle}
        >
          LUNA
        </div>
      </div>
    </div>
  );
};

export default LUNALOGO;

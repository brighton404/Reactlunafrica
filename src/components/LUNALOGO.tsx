import { FunctionComponent, useCallback, useMemo, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";

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
}) => {
  const navigate = useNavigate();
  const onHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <div className="my-0 mx-[!important] absolute top-[14.3px] left-[0px] flex flex-col items-center justify-center z-[2] cursor-pointer group" onClick={onHome}>
    <div className="relative w-[61px] h-[41.5px]">
      <div className="absolute h-[100.48%] w-[90.16%] top-[0.24%] right-[-100.98%] bottom-[-0.72%] left-[110.82%] hidden group-hover:block">
        <div className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[100.9%] font-extrabold">
          <p className="m-0">SAFE</p>
          <p className="m-0">AND</p>
          <p className="m-0">TRUSTED</p>
        </div>
        <div className="absolute top-[83.21%] left-[0%] text-[6.9px] tracking-[0.38em] leading-[100.9%]">
          BRAND
        </div>
      </div>
      <div className="absolute h-[82.41%] w-[94.75%] top-[10.84%] right-[5.25%] bottom-[6.75%] left-[0%] text-[14.8px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/images/icons/lunalogo.svg"
        />
        <div className="absolute top-[20%] left-[14%] tracking-[0.07em] font-black">
          LUNA
        </div>
      </div>
    </div>
  </div>
  );
};

export default LUNALOGO;

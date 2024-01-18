import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ActionIconsType = {
  vector?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propHeight?: CSSProperties["height"];
};

const ActionIcons: FunctionComponent<ActionIconsType> = ({
  vector,
  propOverflow,
  propBorder,
  propBackgroundColor,
  propPadding,
  propWidth,
  propBorderRadius,
  propHeight,
}) => {
  const actionIconarrowRightStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propOverflow, propBorder, propBackgroundColor, propPadding]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      borderRadius: propBorderRadius,
      height: propHeight,
    };
  }, [propWidth, propBorderRadius, propHeight]);

  return (
    <div
      className="overflow-hidden flex flex-row items-start justify-start p-2.5"
      style={actionIconarrowRightStyle}
    >
      <img
        className="relative w-5 h-5"
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default ActionIcons;

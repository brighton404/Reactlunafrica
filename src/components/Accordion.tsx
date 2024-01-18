import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AccordionType = {
  vector?: string;
  content?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Accordion: FunctionComponent<AccordionType> = ({
  vector,
  content,
  propBackgroundColor,
  propOverflow,
  propBorderRadius,
  propBackgroundColor1,
}) => {
  const headStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const actionStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const vectorIcon2Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-7xl text-base-blacks-var-1 font-wide-screen-body-small border-[1px] border-solid border-base-blacks-var-1">
      <div
        className="self-stretch flex flex-row items-center justify-start gap-[10px]"
        style={headStyle}
      >
        <div className="flex-1 flex flex-row items-center justify-start p-2.5">
          <div className="relative">Lorem Ipsum dolor sit amet</div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 px-2.5">
          <div
            className="overflow-hidden flex flex-row items-start justify-start p-2.5"
            style={actionStyle}
          >
            <img
              className="relative w-5 h-5"
              alt=""
              src={vector}
              style={vectorIcon2Style}
            />
          </div>
        </div>
      </div>
      {!content && (
        <div
          className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl"
          style={contentStyle}
        >
          <div className="flex-1 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
            in egestas erat imperdiet sed euismod nisi. At volutpat diam ut
            venenatis. In est ante in nibh mauris. Facilisis mauris sit amet
            massa. Penatibus et magnis dis parturient montes nascetur ridiculus.
            do i join LUNA
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;

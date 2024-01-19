import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Accordion = 'default' | 'open';

interface accordionprops {
  accordion?: Accordion;
}

const AccordionCard: FunctionComponent<accordionprops> = ({ accordion = 'default'}) => {
  let content;
  switch (accordion) {
  case 'open':
  content =
    <div className="self-stretch flex flex-col items-start justify-start text-left text-7xl text-base-blacks-var-1 font-wide-screen-body-small border-[1px] border-solid border-base-blacks-var-1">
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
        <div className="flex-1 flex flex-row items-center justify-start p-2.5">
          <div className="relative">How does LUNA work?</div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 px-2.5">
          <div className="overflow-hidden flex flex-row items-start justify-start p-2.5">
            <img className="relative w-5 h-5" src=".\images\icons\plus.svg"/>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-row items-start justify-start p-5 text-3xl" >
        <div className="flex-1 relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi. At volutpat diam ut venenatis. In est ante in nibh mauris. Facilisis mauris sit amet massa. Penatibus et magnis dis parturient montes nascetur ridiculus.
        </div>
      </div>
    </div>
  break;

  default:
    <div className="self-stretch flex flex-col items-start justify-start text-left text-7xl text-base-blacks-var-1 font-wide-screen-body-small border-[1px] border-solid border-base-blacks-var-1">
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
        <div className="flex-1 flex flex-row items-center justify-start p-2.5">
          <div className="relative">How does LUNA work?</div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 px-2.5">
          <div className="overflow-hidden flex flex-row items-start justify-start p-2.5">
            <img className="relative w-5 h-5" src=".\images\icons\plus.svg"/>
          </div>
        </div>
      </div>
      <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl" >
        <div className="flex-1 relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi. At volutpat diam ut venenatis. In est ante in nibh mauris. Facilisis mauris sit amet massa. Penatibus et magnis dis parturient montes nascetur ridiculus.
        </div>
      </div>
    </div>
}
  return (<div className={`accordion-card ${accordion}`}>{content}</div>);
};

export default AccordionCard;

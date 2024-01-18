import { FunctionComponent } from "react";
import Accordion from "./Accordion";

const HomeAccordion: FunctionComponent = () => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start">
      <div className="rounded-8xs bg-base-blacks-var-2 w-[1440px] overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[10px]">
        <Accordion
          vector="/vector-3.svg"
          content
          propBackgroundColor="#a1a1a1"
          propOverflow="unset"
          propBorderRadius="2px"
          propBackgroundColor1="#fff"
        />
        <Accordion vector="/vector.svg" content={false} propOverflow="hidden" />
      </div>
    </div>
  );
};

export default HomeAccordion;

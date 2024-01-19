import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Flow: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full overflow-hidden flex flex-col items-start justify-start text-left text-53xl text-base-whites-var-1 font-wide-screen-body-small">
      <Header />
      <div className="self-stretch flex flex-col items-start justify-center pt-[50px] px-10 pb-2.5 gap-[10px]">
        <div className="relative">How it works</div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-[10px] text-lg-6 text-base-blacks-var-1">
          <div className="flex-1 bg-base-blacks-var-1 overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="rounded-[928.24px] bg-base-whites-var-2 w-[46.5px] h-[46.5px] flex flex-col items-center justify-center p-[9.291725158691406px] box-border">
              <div className="relative">1</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-lg text-base-whites-var-1">
              <div className="relative">Join the community</div>
              <div className="self-stretch relative text-base-greys-var-1">
                enjoy free chats with other women
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-blacks-var-1 overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="rounded-[928.24px] bg-base-whites-var-2 w-[46.5px] h-[46.5px] flex flex-col items-center justify-center p-[9.291725158691406px] box-border">
              <div className="relative">2</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-lg text-base-whites-var-1">
              <div className="relative">Talk to specialists</div>
              <div className="self-stretch relative text-base-greys-var-1">
                on a chat, video/audio call.
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-blacks-var-1 overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="rounded-[928.24px] bg-base-whites-var-2 w-[46.5px] h-[46.5px] flex flex-col items-center justify-center p-[9.291725158691406px] box-border">
              <div className="relative">3</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-lg text-base-whites-var-1">
              <div className="relative">specialized plan</div>
              <div className="self-stretch relative text-base-greys-var-1">
                subscribe to a tailored plan
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-blacks-var-1 overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="rounded-[928.24px] bg-base-whites-var-2 w-[46.5px] h-[46.5px] flex flex-col items-center justify-center p-[9.291725158691406px] box-border">
              <div className="relative">4</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-lg text-base-whites-var-1">
              <div className="relative">shop</div>
              <div className="self-stretch relative text-base-greys-var-1">
                buy products or build a package
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-base-whites-var-2 h-[685px] overflow-hidden shrink-0" />
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-5 gap-[20px] text-3xl text-base-blacks-var-2">
        <div className="self-stretch flex flex-row items-center justify-start p-2.5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="bg-contemporary-var-2 flex flex-row items-start justify-start p-2.5">
            <div className="relative">Testimonials</div>
          </div>
          <div className="flex-1 relative text-base-whites-var-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[21px] text-lg text-base-whites-var-1">
          <div className="flex-1 bg-base-blacks-var-2 flex flex-col items-start justify-center py-[30px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="self-stretch relative">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi. At volutpat diam ut venenatis. In est ante in nibh mauris. `}</div>
            <div className="flex flex-row items-center justify-start py-[5px] pr-2.5 pl-[5px] gap-[10px] border-[1px] border-solid border-base-greys-var-1">
              <div className="relative bg-base-whites-var-1 w-[30px] h-[30px]" />
              <div className="relative">lorem ipsum</div>
            </div>
          </div>
          <div className="flex-1 bg-base-blacks-var-2 flex flex-col items-start justify-center py-[30px] px-5 gap-[15px] border-[1px] border-solid border-base-greys-var-1">
            <div className="self-stretch relative">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet sed euismod nisi. At volutpat diam ut venenatis. In est ante in nibh mauris. `}</div>
            <div className="flex flex-row items-center justify-start py-[5px] pr-2.5 pl-[5px] gap-[10px] border-[1px] border-solid border-base-greys-var-1">
              <div className="relative bg-base-whites-var-1 w-[30px] h-[30px]" />
              <div className="relative">lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flow;

import { FunctionComponent, useCallback, useEffect } from "react";

type SideBarType = {
  onClose?: () => void;
};

const SideBar: FunctionComponent<SideBarType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onHowItWorksClick = useCallback(() => {
    // Please sync "flow" to the project
  }, []);

  const onResourcesTextClick = useCallback(() => {
    // Please sync "blog" to the project
  }, []);

  return (
    <div
      className="bg-base-black h-full overflow-hidden flex flex-row items-start justify-start p-5 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-xl text-base-white font-wide-screen-title-bold"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start py-5 px-0">
          <img
            className="relative rounded-sm w-5 h-5"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[35px]">
          <div className="relative">Who we are</div>
          <div className="relative cursor-pointer" onClick={onHowItWorksClick}>
            How it works
          </div>
          <div
            className="relative cursor-pointer"
            onClick={onResourcesTextClick}
          >
            Resources
          </div>
        </div>
        <div className="self-stretch flex-1 hidden flex-col items-start justify-start text-base-black-secondary">
          <div className="bg-base-white flex flex-row items-center justify-center py-[5px] px-5">
            <div className="relative font-semibold">Join Now</div>
          </div>
        </div>
        <div className="self-stretch h-[30px] flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/socials01@2x.png"
          />
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/socials02@2x.png"
          />
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/socials03@2x.png"
          />
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/socials04@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

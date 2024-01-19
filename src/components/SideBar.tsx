import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type SideBarType = {
  onClose?: () => void;
};

const SideBar: FunctionComponent<SideBarType> = ({ onClose }) => {
  const navigate = useNavigate();
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
    navigate("/flow");
  }, [navigate]);

  const onResourcesTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div
      className="bg-base-blacks-var-1 h-full overflow-hidden flex flex-row items-start justify-start p-5 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-xl text-base-whites-var-1 font-wide-screen-body-small"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
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
        <div className=" w-full self-stretch h-[30px] flex flex-row gap-2.5">
        <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/instagram.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.instagram.com/luna4africa/" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/twitter.svg')] bg-contain bg-no-repeat bg-center"
                href="https://twitter.com/luna4africa" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/linkedin.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.linkedin.com/company/luna4africa/" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/tiktok.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.tiktok.com/@luna4africa" target="_blank"/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

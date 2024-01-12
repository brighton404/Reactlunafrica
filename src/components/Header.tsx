import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import PortalDrawer from "./PortalDrawer";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHowItWorksClick = useCallback(() => {
    // Please sync "flow" to the project
  }, []);

  const onResourcesClick = useCallback(() => {
    // Please sync "blog" to the project
  }, []);

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <header
        className="bg-base-black w-[1440px] h-[70px] overflow-hidden flex flex-row items-center justify-center py-0 px-[50px] box-border text-left text-[11.2px] text-primary-pallete-primary font-montserrat lg:w-[1200px] md:w-[960px] sm:w-[420px]"
        id="header"
      >
        <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[10px]">
          <div className="flex-1 flex flex-row items-center justify-center z-[0]">
            <nav
              className="m-0 flex-1 flex flex-row items-center justify-center gap-[35px] text-left text-xl text-primary-pallete-primary font-small-screen-subheading sm:hidden"
              id="pagenavbar"
            >
              <Link
                className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/about"
                onClick={onWhoWeAreClick}
              >
                Who we are
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/about"
                onClick={onHowItWorksClick}
              >
                How it works
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/about"
                onClick={onResourcesClick}
              >
                Resources
              </Link>
            </nav>
          </div>
          <div className="my-0 mx-[!important] absolute top-[0px] left-[1033px] flex flex-row items-center justify-start gap-[10px] z-[1]">
            <div className="h-[70px] flex flex-row items-center justify-start gap-[10px]">
              <a
                className="[text-decoration:none] relative w-[30px] h-[30px] bg-[url('/public/socials01@2x.png')] bg-cover bg-no-repeat bg-[top]"
                href="https://lunafrica.com"
              />
              <a
                className="[text-decoration:none] relative w-[30px] h-[30px] bg-[url('/public/socials02@2x.png')] bg-cover bg-no-repeat bg-[top]"
                href="https://lunafrica.com"
                target="_blank"
              />
              <a
                className="[text-decoration:none] relative w-[30px] h-[30px] bg-[url('/public/socials03@2x.png')] bg-cover bg-no-repeat bg-[top]"
                href="https://lunafrica.com"
                target="_blank"
              />
              <a
                className="[text-decoration:none] relative w-[30px] h-[30px] bg-[url('/public/socials04@2x.png')] bg-cover bg-no-repeat bg-[top]"
                href="https://lunafrica.com"
                target="_blank"
              />
            </div>
            <button
              className="cursor-pointer [border:none] py-[5px] px-2.5 bg-primary-pallete-primary flex flex-row items-center justify-center"
              id="consultNow"
            >
              <span className="relative text-xl font-small-screen-subheading text-base-black-secondary text-left">
                Consult now
              </span>
            </button>
          </div>
          <div className="my-0 mx-[!important] absolute top-[14.3px] left-[0px] flex flex-col items-center justify-center z-[2]">
            <div className="relative w-[61px] h-[41.5px]">
              <div className="absolute h-[100.48%] w-[90.16%] top-[0.24%] right-[-100.98%] bottom-[-0.72%] left-[110.82%] hidden">
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
                  src="/vector-124.svg"
                />
                <div className="absolute top-[23.39%] left-[9.17%] tracking-[0.07em] font-black">
                  LUNA
                </div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] hidden flex-row items-center justify-start z-[3] sm:flex"
            onClick={openSideBar}
          >
            <img
              className="relative w-[27px] h-[18px] sm:flex"
              alt=""
              src="/menudrawer.svg"
            />
          </button>
        </div>
      </header>
      {isSideBarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeSideBar}
        >
          <SideBar onClose={closeSideBar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;

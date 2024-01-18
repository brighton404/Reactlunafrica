import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import LUNALOGO from "./LUNALOGO";
import SideBar from "./SideBar";
import PortalDrawer from "./PortalDrawer";

const Navigation1: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onCompanyLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHowItWorksClick = useCallback(() => {
    navigate("/flow");
  }, [navigate]);

  const onResourcesClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onSocialMediaContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/luna4africa/");
  }, []);

  const onSocialMediaContainer1Click = useCallback(() => {
    window.open("https://web.facebook.com/luna4africa");
  }, []);

  const onSocialMediaContainer2Click = useCallback(() => {
    window.open("https://www.linkedin.com/company/luna4africa/");
  }, []);

  const onSocialMediaContainer3Click = useCallback(() => {
    window.open("https://twitter.com/luna4africa");
  }, []);

  const onButtonCTAClick = useCallback(() => {
    window.open("https://lunahealth.co/consult/");
  }, []);

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div className="bg-base-blacks-var-2 flex flex-col items-start justify-start p-5 gap-[50px]">
        <header
          className="bg-base-blacks-var-1 w-[1440px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[50px] box-border gap-[10px] lg:w-[1200px] md:w-[960px] sm:w-[420px]"
          id="header"
        >
          <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[10px]">
            <div className="flex-1 flex flex-row items-center justify-center z-[0]">
              <nav
                className="m-0 flex-1 flex flex-row items-center justify-center gap-[35px] text-left text-xl text-base-whites-var-1 font-wide-screen-body-small sm:hidden"
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
                <div
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={onSocialMediaContainerClick}
                >
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={onSocialMediaContainer1Click}
                >
                  <img
                    className="relative w-[30.2px] h-[30px] mix-blend-normal"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div
                  className="flex flex-row items-start justify-start cursor-pointer"
                  onClick={onSocialMediaContainer2Click}
                >
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={onSocialMediaContainer3Click}
                >
                  <img
                    className="relative w-[36.9px] h-[30px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-[5px] px-2.5 bg-base-whites-var-1 flex flex-row items-center justify-center"
                id="consultNow"
                onClick={onButtonCTAClick}
              >
                <span className="relative text-xl font-wide-screen-body-small text-base-blacks-var-2 text-left">
                  Consult now
                </span>
              </button>
            </div>
            <div className="my-0 mx-[!important] absolute top-[14.3px] left-[0px] flex flex-col items-center justify-center z-[2]">
              <LUNALOGO
                dimensions="/vector-124.svg"
                lUNALOGOsmallWhiteWidth="61px"
                lUNALOGOsmallWhiteHeight="41.5px"
                lUNALOGOsmallWhitePosition="relative"
                groupDivHeight="100.48%"
                groupDivWidth="90.16%"
                groupDivTop="0.24%"
                groupDivRight="-100.98%"
                groupDivBottom="-0.72%"
                groupDivLeft="110.82%"
                sAFEANDTRUSTEDContainerFontSize="11.2px"
                bRANDTop="83.21%"
                bRANDFontSize="6.9px"
                groupDivHeight1="82.41%"
                groupDivWidth1="94.75%"
                groupDivTop1="10.84%"
                groupDivRight1="5.25%"
                groupDivBottom1="6.75%"
                lUNATop="23.39%"
                lUNALeft="9.17%"
                lUNAFontSize="14.8px"
                onCompanyLogoContainerClick={onCompanyLogoContainerClick}
              />
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] hidden flex-row items-center justify-center sm:flex"
            onClick={openSideBar}
          >
            <img
              className="relative w-[30px] h-5 sm:flex"
              alt=""
              src="/menudrawer.svg"
            />
          </button>
        </header>
        <footer
          className="bg-base-blacks-var-1 w-[1440px] overflow-hidden flex flex-col items-start justify-start py-[30px] px-5 box-border text-left text-xl text-base-whites-var-1 font-wide-screen-body-small lg:w-[1200px] md:w-[960px] sm:w-[420px]"
          id="footer"
        >
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] sm:flex-col">
            <div className="flex-1 flex flex-row items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[10px]">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <span className="relative font-semibold">Customer Care:</span>
                  <a
                    className="[text-decoration:none] relative text-[inherit]"
                    href="mailto:info@lunahealth.co"
                  >
                    info@lunahealth.co
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <span className="relative font-semibold">
                    General Inquiries:
                  </span>
                  <a
                    className="[text-decoration:none] relative text-[inherit]"
                    href="tel:+250791944647"
                  >
                    +250 791 944 647
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <span className="relative font-semibold">Sales</span>
                  <a
                    className="[text-decoration:none] relative text-[inherit]"
                    href="mailto:sales@lunahealth.co"
                  >
                    Sales@lunahealth.co
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <h4 className="m-0 relative text-inherit font-semibold font-inherit">
                  Quick Links
                </h4>
                <div className="relative">Terms and Conditions</div>
                <a className="[text-decoration:none] relative text-[inherit]">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <h4 className="m-0 relative text-inherit font-semibold font-inherit">
                  Contact
                </h4>
                <div className="relative">KN 78 Street, No.1</div>
                <div className="relative">Norrsken House Kigali</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[10px] text-3xl">
                <label
                  className="cursor-pointer relative"
                  htmlFor="NewsletterForm"
                >
                  Sign Up for our Newsletter
                </label>
                <form
                  className="m-0 self-stretch bg-base-whites-var-1 flex flex-row items-center justify-end gap-[10px]"
                  id="NewsletterForm"
                >
                  <input
                    className="[border:none] [outline:none] font-wide-screen-body-small text-3xl bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start py-2.5 px-[15px] text-base-blacks-var-2"
                    id="AddToNewsletter"
                    placeholder="your email"
                    type="email"
                  />
                  <button
                    className="cursor-pointer [border:none] p-2.5 bg-contemporary-var-2 flex flex-row items-center justify-start"
                    id="submitEmail"
                  >
                    <span className="relative text-3xl font-wide-screen-body-small text-base-blacks-var-2 text-left">
                      Submit
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
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

export default Navigation1;

import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import PortalDrawer from "./PortalDrawer";
import LUNALOGO from "../components/LUNALOGO";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/Flow");
  }, [navigate]);

  const onHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHowItWorksClick = useCallback(() => {
    navigate("/Flow");
  }, [navigate]);

  const onResourcesClick = useCallback(() => {
    navigate("/Blog");
  }, [navigate]);

  const openSideBar = useCallback(() => {
    setSideBarOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 z-50 bg-base-blacks-var-1 w-full h-[70px] overflow-hidden flex flex-row items-center justify-center py-0 px-[50px] box-border text-left text-[11.2px] text-base-whites-var-1 font-Poppins"
        id="header"
      >
        <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[10px]">
          <div className="flex-1 flex flex-row items-center justify-center z-[0]">
            <nav
              className="m-0 flex-1 flex flex-row items-center justify-center gap-[35px] text-left text-xl  font-wide-screen-heading sm:hidden md:hidden"
              id="pagenavbar"
            >
              <Link className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/About"
                onClick={onWhoWeAreClick}>
                Who we are
              </Link>
              <Link className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/Flow"
                onClick={onHowItWorksClick}>
                How it works
              </Link>
              <Link className="cursor-pointer [text-decoration:none] relative text-[inherit]"
                to="/Blog"
                onClick={onResourcesClick}>
                Resources
              </Link>
            </nav>
          </div>
          <div className="my-0 mx-[!important] absolute top-[0px] right-[20px] flex flex-row items-center justify-start gap-[10px] z-[1] md:hidden">
            <div className="h-[70px] flex flex-row items-center justify-start gap-[10px] sm:hidden">
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/instagram.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.instagram.com/luna4africa/" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/twitter.svg')] bg-contain bg-no-repeat bg-center"
                href="https://twitter.com/luna4africa" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/linkedin.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.linkedin.com/company/luna4africa/" target="_blank"/>
              <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/public/images/icons/tiktok.svg')] bg-contain bg-no-repeat bg-center"
                href="https://www.tiktok.com/@luna4africa" target="_blank"/>
            </div>
            <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-primary-pallete-primary flex flex-row items-center justify-center sm:hidden" id="consultNow">
              <span className="relative text-xl font-wide-screen-heading text-base-black-secondary text-left">Consult now</span>
            </button>
          </div>
          <LUNALOGO />
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] hidden flex-row items-center justify-start z-[3] sm:flex md:flex"
            onClick={openSideBar}
          >
            <img
              className="relative w-[27px] h-[18px] sm:flex md:flex"
              alt=""
              src="/images/icons/menu.svg"
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

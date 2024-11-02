import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import PortalDrawer from "./PortalDrawer";
import LUNALOGO from "../LUNA/LUNALOGO";
import './header.css';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onHome = useCallback(() => {    navigate("/");  }, [navigate]);
  const onWhoWeAreClick = useCallback(() => {    navigate("../About");  }, [navigate]);
  const onHowItWorksClick = useCallback(() => {    navigate("../Flow");  }, [navigate]);
  const onResourcesClick = useCallback(() => {    navigate("../Blog");  }, [navigate]);
  const openSideBar = useCallback(() => {    setSideBarOpen(true);  }, []);
  const closeSideBar = useCallback(() => {    setSideBarOpen(false);  }, []);
  return (
    <>
      <header className="fixed top-0 z-10 w-full h-14 bg-gradient-to-r from-[#00000000] via-[#ffffff31] to-[#00000000] backdrop-blur-sm flex px-10 box-border justify-center items-center  text-base-whites-var-1 font-Poppins">
        <div className="self-stretch flex-1 flex  items-center relative gap-[10px] justify-between text-left">
        <div className="flex items-center justify-center cursor-pointer" onClick={onHome}><LUNALOGO logoVar="1"/></div>
        <div className="flex items-center gap-[10px] md:hidden">
            <div className="flex items-center justify-center px-4">
              <nav className="m-0 flex-1 flex items-center justify-center gap-[35px] text-left text-small sm:hidden md:hidden">
                <Link className="cursor-pointer [text-decoration:none] visited:text-white" to="/About" onClick={onWhoWeAreClick}> Who we are </Link>
                <Link className="cursor-not-allowed [text-decoration:none] visited:text-white" to="" onClick={onHowItWorksClick}> How it works</Link>
                <Link className="cursor-not-allowed [text-decoration:none] visited:text-white" to="" onClick={onResourcesClick}> Resources</Link>
              </nav>
            </div>
            {/**  <div className="h-[70px] flex flex-row items-center justify-start gap-[10px] sm:hidden lg:hidden"><a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/images/icons/instagram.svg')] bg-contain bg-no-repeat bg-center" href="https://www.instagram.com/luna4africa/" target="_blank"/> <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/images/icons/twitter.svg')] bg-contain bg-no-repeat bg-center" href="https://twitter.com/luna4africa" target="_blank"/> <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/images/icons/linkedin.svg')] bg-contain bg-no-repeat bg-center" href="https://www.linkedin.com/company/luna4africa/" target="_blank"/> <a className="[text-decoration:none] relative w-[25px] h-[25px] bg-[url('/images/icons/tiktok.svg')] bg-contain bg-no-repeat bg-center" href="https://www.tiktok.com/@luna4africa" target="_blank"/>  </div>   */}
            <button className="cursor-pointer rounded-md border:none py-[5px] px-2.5 bg-base-whites-var-1 flex flex-row items-center justify-center text-small text-base-blacks-var-1 text-left sm:hidden" >Consult now</button>
        </div>
        <button className="cursor-pointer border:none p-2.5 bg-[transparent] hidden flex-row items-center justify-start z-[3] sm:flex md:flex" onClick={openSideBar}> <img className="relative w-[27px] h-[18px] sm:flex md:flex"  alt="" src="/images/icons/menu.svg"/></button>
        </div>
      </header>
      {isSideBarOpen && (
        <PortalDrawer overlayColor="rgba(113, 113, 113, 0.3)" placement="Right" onOutsideClick={closeSideBar} >
          <SideBar onClose={closeSideBar} />
        </PortalDrawer>
      )}
    </>
  );
};
export default Header;
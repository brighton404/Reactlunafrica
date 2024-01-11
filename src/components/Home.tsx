import { FunctionComponent, useState, useCallback } from "react";
import SideBar from "./SideBar";
import PortalDrawer from "./PortalDrawer";

const Home: FunctionComponent = () => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const onWhoWeAreClick = useCallback(() => {
    // Please sync "about" to the project
  }, []);

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
      <a
        className="[text-decoration:none] bg-base-black-secondary w-[1440px] overflow-hidden flex flex-col items-center justify-start text-left text-xl text-contemporary-contemporary-var-2 font-small-screen-subheading"
        id="home"
      >
        <header
          className="self-stretch bg-base-black h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[50px] box-border text-left text-[11.2px] text-base-white font-montserrat"
          id="header"
        >
          <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[10px]">
            <div className="flex-1 flex flex-row items-center justify-center z-[0]">
              <nav
                className="m-0 flex-1 flex flex-row items-center justify-center gap-[35px] text-left text-xl text-base-white font-small-screen-subheading sm:hidden"
                id="pagenavbar"
              >
                <a
                  className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                  onClick={onWhoWeAreClick}
                >
                  Who we are
                </a>
                <a
                  className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                  onClick={onHowItWorksClick}
                >
                  How it works
                </a>
                <a
                  className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                  onClick={onResourcesClick}
                >
                  Resources
                </a>
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
                className="cursor-pointer [border:none] py-[5px] px-2.5 bg-base-white flex flex-row items-center justify-center"
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
        <section
          className="self-stretch h-[900px] flex flex-col items-center justify-end py-[30px] px-[50px] box-border bg-[url('/public/section-hero@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-30xl text-base-white-secondary font-small-screen-subheading"
          id="hero"
        >
          <p className="m-0 [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.06)_22.4%,_rgba(0,_0,_0,_0.12)_48.96%,_rgba(0,_0,_0,_0.12)_78.65%,_rgba(0,_0,_0,_0))] [backdrop-filter:blur(6px)] w-[700px] flex flex-col items-center justify-center py-[15px] px-5 box-border gap-[50px] sm:self-stretch sm:w-auto">
            <div className="self-stretch flex flex-col items-center justify-center gap-[15px] sm:items-start sm:justify-center">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit sm:text-center">
                WELCOME TO LUNA
              </h1>
              <i className="self-stretch relative text-lg">
                For Every Woman, Every Phase"
              </i>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-2.5 px-0 gap-[10px] text-lg sm:items-start sm:justify-center">
              <span className="self-stretch relative whitespace-pre-wrap">
                We are happy you're here. Would you like to join our FREE
                community group of women across the globe for breaking
                conversations on health?
              </span>
              <button
                className="cursor-pointer [border:none] py-[5px] px-5 bg-base-white flex flex-row items-center justify-center"
                id="JoinUs"
              >
                <span className="relative text-xl font-semibold font-small-screen-subheading text-base-black-secondary text-left">
                  Join Us
                </span>
              </button>
            </div>
          </p>
        </section>
        <div
          className="self-stretch flex flex-row items-center justify-start py-[5px] px-2.5 gap-[10px]"
          id="partners"
        >
          <div className="flex flex-row items-start justify-start py-[5px] px-2.5">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit">
              Our Partners
            </h3>
          </div>
          <div className="flex flex-row items-start justify-start text-lg text-base-white">
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[55px] object-cover"
                alt=""
                src="/partner01@2x.png"
              />
              <span className="relative">Tamu</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[55px] object-cover"
                alt=""
                src="/partner02@2x.png"
              />
              <span className="relative">Ikunde</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-8 object-cover"
                alt=""
                src="/partner03@2x.png"
              />
              <span className="relative">Vuki</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[70px] object-cover"
                alt=""
                src="/partner04@2x.png"
              />
              <span className="relative">ALU</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-8 object-cover"
                alt=""
                src="/partner05@2x.png"
              />
              <span className="relative">Femtech Lab</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[70px] object-cover"
                alt=""
                src="/partner06@2x.png"
              />
              <span className="relative">JASIRI</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[70px] object-cover"
                alt=""
                src="/partner07@2x.png"
              />
              <span className="relative">Eve’s Apple</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[45px] object-cover"
                alt=""
                src="/partner08@2x.png"
              />
              <span className="relative">{`Allan & Gill Gray`}</span>
            </div>
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-10 object-cover"
                alt=""
                src="/partner09@2x.png"
              />
              <span className="relative">YWCA</span>
            </div>
          </div>
        </div>
        <section
          className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 text-left text-13xl text-base-white font-small-screen-subheading"
          id="solutions"
        >
          <div className="self-stretch flex flex-row items-start justify-start py-2.5 px-5">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center">
              <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
                Our Solutions
              </h2>
            </div>
          </div>
          <div className="self-stretch bg-base-black-secondary flex flex-col items-start justify-start py-0 px-2.5">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[20px] sm:flex-col">
              <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-brand-brand-var-1 font-small-screen-subheading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                    Health
                  </h3>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base-white">
                    <span className="self-stretch relative">
                      Services offered:
                    </span>
                    <li className="self-stretch relative text-lg">
                      <ul className="m-0 font-inherit text-inherit pl-6">
                        <li className="mb-0">Teleconsultation</li>
                        <li className="mb-0">
                          Talk to our range of professionals, experts and
                          specialists from all backgrounds and experiences
                        </li>
                        <li>Anywehere in the world</li>
                      </ul>
                    </li>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-base-black-secondary flex flex-row items-center justify-start gap-[10px]">
                    <span className="relative text-lg [text-decoration:underline] font-small-screen-subheading text-base-white text-left">
                      Learn More
                    </span>
                    <img
                      className="relative w-[14.1px] h-[14.1px] object-contain"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </button>
                </div>
              </article>
              <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-contemporary-contemporary-var-2 font-small-screen-subheading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                    Shop
                  </h3>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base-white">
                    <span className="self-stretch relative">
                      Tailored Features:
                    </span>
                    <li className="self-stretch relative text-lg">
                      <ul className="m-0 font-inherit text-inherit pl-6">
                        <li className="mb-0">subscribe to monthly delivery</li>
                        <li className="mb-0">build your own need box</li>
                        <li>safe and trusted delievery</li>
                      </ul>
                    </li>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-base-black-secondary flex flex-row items-center justify-start gap-[5px]">
                    <span className="relative text-lg [text-decoration:underline] font-small-screen-subheading text-base-white text-left">
                      Learn More
                    </span>
                    <img
                      className="relative w-[14.1px] h-[14.1px] object-contain"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </button>
                </div>
              </article>
              <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-base-white font-small-screen-subheading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                    Community
                  </h3>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <span className="self-stretch relative">
                      User engagements:
                    </span>
                    <li className="self-stretch relative text-lg">
                      <ul className="m-0 font-inherit text-inherit pl-6">
                        <li className="mb-0">Anonymous questions</li>
                        <li className="mb-0">WhatsApp Group</li>
                        <li>Events and Webinars</li>
                      </ul>
                    </li>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-base-black-secondary flex flex-row items-center justify-start gap-[10px]">
                    <span className="relative text-lg [text-decoration:underline] font-small-screen-subheading text-base-white text-left">
                      Learn More
                    </span>
                    <img
                      className="relative w-[14.1px] h-[14.1px] object-contain"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          className="self-stretch bg-base-white-secondary flex flex-col items-start justify-center pt-0 px-2.5 pb-[30px] text-left text-13xl text-base-black-secondary font-small-screen-subheading"
          id="packages"
        >
          <div className="self-stretch flex flex-col items-start justify-start pt-5 px-2.5 pb-2.5">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit">
              Our Packages
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[30px] sm:flex-col">
            <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-small-screen-subheading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
              <span className="relative">-10$</span>
              <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
                Mental health at your workspace
              </h3>
              <p className="m-0 self-stretch flex-1 relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</p>
            </article>
            <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-small-screen-subheading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
              <span className="relative">-10$</span>
              <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
                Get the PCOS Deal
              </h3>
              <p className="m-0 self-stretch flex-1 relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</p>
            </article>
            <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-small-screen-subheading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
              <span className="relative">-10$</span>
              <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
                Go premium to access Full LUNA services
              </h3>
              <p className="m-0 self-stretch flex-1 relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</p>
            </article>
          </div>
        </section>
        <div
          className="self-stretch flex flex-row items-center justify-start py-[5px] px-2.5 gap-[10px]"
          id="mentions"
        >
          <div className="flex flex-row items-start justify-start py-[5px] px-2.5">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit">
              As seen in
            </h3>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-start text-base-white">
            <div className="h-10 overflow-hidden flex flex-row items-center justify-center py-[5px] pr-5 pl-2.5 box-border gap-[10px]">
              <img
                className="self-stretch relative max-h-full w-[55px] object-cover"
                alt=""
                src="/partner01@2x.png"
              />
              <span className="relative">company logo</span>
            </div>
          </div>
        </div>
        <section
          className="self-stretch flex flex-col items-start justify-start pt-[30px] px-5 pb-2.5 gap-[10px] text-left text-13xl text-base-white font-small-screen-subheading"
          id="impact"
        >
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-2.5 pb-2.5">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit">
              Our Impact
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-3xl text-base-black-secondary sm:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start p-[15px] gap-[25px] border-[1px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <div className="bg-contemporary-contemporary-var-2 flex flex-row items-start justify-start p-2.5">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                  SUSTAINABLE DEVELOPMENT GOALS
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-7xl text-base-white">
                <p className="m-0 self-stretch relative">
                  We align our vision with Global goals. Here are the areas we
                  are contributing to:
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[7.85px]">
              <img
                className="relative w-[184px] h-[184px] object-cover"
                alt="sdg number 3: good health and well being"
                src="/3@2x.png"
              />
              <img
                className="relative w-[184px] h-[184px] object-cover"
                alt="sdg number 5: gender equality"
                src="/ewebgoal05-1@2x.png"
              />
              <img
                className="relative w-[184px] h-[182px] object-cover"
                alt="sdg number 10: reduced inequalities"
                src="/ewebgoal10-1@2x.png"
              />
            </div>
          </div>
        </section>
        <section
          className="self-stretch flex flex-col items-center justify-center py-2.5 px-5 text-left text-53xl text-base-white-secondary font-small-screen-subheading"
          id="stats"
        >
          <div className="self-stretch flex flex-row items-center justify-center py-px px-0 gap-[10px] sm:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <b className="relative">500+</b>
              <span className="relative text-3xl text-base-gray">
                Registered Members
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <b className="relative">450+</b>
              <span className="relative text-3xl text-base-gray">
                Services delivered
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <b className="relative">13+</b>
              <span className="relative text-3xl text-base-gray">
                Conferences/ webinars
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <b className="relative">1.5+</b>
              <span className="relative text-3xl text-base-gray">
                Years Active
              </span>
            </div>
          </div>
        </section>
        <div
          className="self-stretch bg-contemporary-contemporary-var-2 overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[50px] pl-0 gap-[20px] text-7xl text-base-black-secondary"
          id="demo"
        >
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img
              className="relative max-w-full overflow-hidden h-[29.5px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img className="relative w-[29px] h-0" alt="" src="/vector-8.svg" />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="relative">GET A DEMO</div>
            <img className="relative w-[29px] h-0" alt="" src="/vector-8.svg" />
          </div>
        </div>
        <section
          className="self-stretch bg-base-white-secondary flex flex-col items-start justify-start p-5 gap-[20px] text-left text-13xl text-base-black font-small-screen-subheading"
          id="faq"
        >
          <span className="self-stretch relative">
            Find the answers to all of our most frequently asked questions.
          </span>
          <div
            className="self-stretch flex flex-col items-start justify-center gap-[15px] text-7xl"
            id="accordion"
          >
            <div className="self-stretch flex flex-col items-start justify-start border-[1px] border-solid border-base-black">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="flex-1 flex flex-row items-center justify-start p-2.5">
                  <div className="relative">How do i join LUNA</div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-2.5 text-30xl text-base-gray font-montserrat">
                  <div className="relative">+</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-base-white">
                <div className="flex-1 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat in egestas erat imperdiet sed euismod nisi. At
                  volutpat diam ut venenatis. In est ante in nibh mauris.
                  Facilisis mauris sit amet massa. Penatibus et magnis dis
                  parturient montes nascetur ridiculus. do i join LUNA
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start border-[1px] border-solid border-base-black">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="flex-1 flex flex-row items-center justify-start p-2.5">
                  <div className="relative">Lorem Ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-2.5 text-30xl font-montserrat">
                  <div className="relative">+</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-base-white">
                <div className="flex-1 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat in egestas erat imperdiet sed euismod nisi. At
                  volutpat diam ut venenatis. In est ante in nibh mauris.
                  Facilisis mauris sit amet massa. Penatibus et magnis dis
                  parturient montes nascetur ridiculus. do i join LUNA
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start border-[1px] border-solid border-base-black">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="flex-1 flex flex-row items-center justify-start p-2.5">
                  <div className="relative">Consectetur adipiscing</div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-2.5 text-30xl font-montserrat">
                  <div className="relative">+</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-base-white">
                <div className="flex-1 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat in egestas erat imperdiet sed euismod nisi. At
                  volutpat diam ut venenatis. In est ante in nibh mauris.
                  Facilisis mauris sit amet massa. Penatibus et magnis dis
                  parturient montes nascetur ridiculus. do i join LUNA
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start border-[1px] border-solid border-base-black">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="flex-1 flex flex-row items-center justify-start p-2.5">
                  <div className="relative">Elit sed do eiusmod tempor</div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-2.5 text-30xl font-montserrat">
                  <div className="relative">+</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-base-white">
                <div className="flex-1 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat in egestas erat imperdiet sed euismod nisi. At
                  volutpat diam ut venenatis. In est ante in nibh mauris.
                  Facilisis mauris sit amet massa. Penatibus et magnis dis
                  parturient montes nascetur ridiculus. do i join LUNA
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="self-stretch bg-base-black overflow-hidden flex flex-row items-center justify-start pt-10 px-5 pb-0 gap-[20px] text-13xl text-base-white sm:flex-col"
          id="banner-cta"
        >
          <div className="flex-1 flex flex-col items-start justify-center sm:flex-[unset] sm:self-stretch">
            <span className="self-stretch relative font-semibold">
              <span>{`THE TIME IS `}</span>
              <span className="text-contemporary-contemporary-var-2">NOW</span>
            </span>
            <span className="self-stretch relative font-semibold">
              EMPOWERING WOMEN ONE AT A TIME
            </span>
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px] text-xl text-base-black-secondary">
            <div className="bg-base-white flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative font-semibold">Get Started</div>
            </div>
            <div className="flex flex-row items-center justify-center py-2.5 px-5 text-base-white border-[2px] border-solid border-base-gray">
              <div className="relative font-semibold">Consult with team</div>
            </div>
          </div>
        </div>
        <footer
          className="self-stretch bg-base-black flex flex-col items-start justify-start py-[30px] px-5 text-left text-xl text-base-white font-small-screen-subheading"
          id="footer"
        >
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] sm:flex-col">
            <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="relative font-semibold">Customer Care:</div>
                <a
                  className="[text-decoration:none] relative text-[inherit]"
                  href="mailto:info@lunahealth.co"
                >
                  info@lunahealth.co
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="relative font-semibold">General Inquiries:</div>
                <a
                  className="[text-decoration:none] relative text-[inherit]"
                  href="tel:+250791944647"
                >
                  +250 791 944 647
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="relative font-semibold">Sales</div>
                <a
                  className="[text-decoration:none] relative text-[inherit]"
                  href="mailto:sales@lunahealth.co"
                >
                  Sales@lunahealth.co
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:flex-[unset] sm:self-stretch">
              <h4 className="m-0 relative text-inherit font-semibold font-inherit">
                Quick Links
              </h4>
              <div className="relative">Terms and Conditions</div>
              <div className="relative">Privacy Policy</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:flex-[unset] sm:self-stretch">
              <h4 className="m-0 relative text-inherit font-semibold font-inherit">
                Contact
              </h4>
              <div className="relative">KN 78 Street, No.1</div>
              <div className="relative">Norrsken House Kigali</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[10px] text-3xl sm:flex-[unset] sm:self-stretch">
              <label
                className="cursor-pointer relative"
                htmlFor="NewsletterForm"
              >
                Sign Up for our Newsletter
              </label>
              <form
                className="m-0 self-stretch bg-base-white flex flex-row items-center justify-end gap-[10px]"
                id="NewsletterForm"
              >
                <input
                  className="[border:none] [outline:none] font-small-screen-subheading text-3xl bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start py-2.5 px-[15px] text-base-black-secondary"
                  id="AddToNewsletter"
                  placeholder="your email"
                  type="email"
                  value={textFieldValue}
                  onChange={(event) => setTextFieldValue(event.target.value)}
                />
                <button
                  className="cursor-pointer [border:none] p-2.5 bg-contemporary-contemporary-var-2 flex flex-row items-center justify-start"
                  id="submitEmail"
                >
                  <span className="relative text-3xl font-small-screen-subheading text-base-black-secondary text-left">
                    Submit
                  </span>
                </button>
              </form>
            </div>
          </div>
        </footer>
      </a>
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

export default Home;

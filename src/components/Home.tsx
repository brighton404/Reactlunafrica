import { FunctionComponent } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SectionBanner from "./SectionBanner";

const Home: FunctionComponent = () => {
  return (
    <div className="relative bg-base-black-secondary w-full overflow-hidden flex flex-col items-center justify-start text-left text-xl text-contemporary-contemporary-var-2 font-wide-screen-heading">
      <Header />
      <section
        className="self-stretch h-[87vh] flex flex-col items-center justify-end py-[30px] px-[50px] box-border bg-[url('/public/section-hero@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-30xl text-base-white-secondary font-wide-screen-heading"
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
              className="cursor-pointer [border:none] py-[5px] px-5 bg-primary-pallete-primary flex flex-row items-center justify-center"
              id="JoinUs"
            >
              <span className="relative text-xl font-semibold font-wide-screen-heading text-base-black-secondary text-left">
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
          <h3 className="m-0 relative text-inherit font-semibold font-inherit w-max">
            Our Partners
          </h3>
        </div>
        <div className="flex flex-row items-start justify-start text-lg text-primary-pallete-primary">
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
            <img className="self-stretch relative max-h-full w-10 object-cover"
              alt=""
              src="/partner09@2x.png"
            />
            <span className="relative">YWCA</span>
          </div>
        </div>
      </div>
      <section
        className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 text-left text-13xl text-primary-pallete-primary font-wide-screen-heading"
        id="solutions"
      >
        <div className="self-stretch flex flex-row items-start justify-start py-2.5 px-5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit"> Our Solutions </h2>
          </div>
        </div>
        <div className="self-stretch bg-base-black-secondary flex flex-col items-start justify-start py-0 px-2.5">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[20px] sm:flex-col">
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-brand-brand-var-1 font-wide-screen-heading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit"> Health </h3>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-primary-pallete-primary">
                  <span className="self-stretch relative"> Services offered: </span>
                  <li className="self-stretch relative text-lg">
                    <ul className="m-0 font-inherit text-inherit pl-6">
                      <li className="mb-0">Teleconsultation</li>
                      <li className="mb-0">Talk to our range of professionals, experts and specialists from all backgrounds and experiences</li>
                      <li>Anywehere in the world</li>
                    </ul>
                  </li>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-base-black-secondary flex flex-row items-center justify-start gap-[10px]">
                  <span className="relative text-lg [text-decoration:underline] font-wide-screen-heading text-primary-pallete-primary text-left">
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
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-contemporary-contemporary-var-2 font-wide-screen-heading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                  Shop
                </h3>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-primary-pallete-primary">
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
                  <span className="relative text-lg [text-decoration:underline] font-wide-screen-heading text-primary-pallete-primary text-left">
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
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-primary-pallete-primary font-wide-screen-heading border-[2px] border-solid border-base-gray sm:flex-[unset] sm:self-stretch">
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
                  <span className="relative text-lg [text-decoration:underline] font-wide-screen-heading text-primary-pallete-primary text-left">
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
        className="self-stretch bg-base-white-secondary flex flex-col items-start justify-center pt-0 px-2.5 pb-[30px] text-left text-13xl text-base-black-secondary font-wide-screen-heading"
        id="packages"
      >
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-2.5 pb-2.5">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            Our Packages
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[30px] sm:flex-col">
          <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-wide-screen-heading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
            <span className="relative">-10$</span>
            <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
              Mental health at your workspace
            </h3>
            <p className="m-0 self-stretch flex-1 relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</p>
          </article>
          <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-wide-screen-heading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
            <span className="relative">-10$</span>
            <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
              Get the PCOS Deal
            </h3>
            <p className="m-0 self-stretch flex-1 relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</p>
          </article>
          <article className="flex-1 bg-base-white-secondary shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-black-secondary font-wide-screen-heading border-[3px] border-solid border-base-black-secondary sm:flex-[unset] sm:self-stretch">
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
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-start text-primary-pallete-primary">
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
        className="self-stretch flex flex-col items-start justify-start pt-[30px] px-5 pb-2.5 gap-[10px] text-left text-13xl text-primary-pallete-primary font-wide-screen-heading"
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
            <div className="self-stretch flex flex-col items-start justify-start text-7xl text-primary-pallete-primary">
              <p className="m-0 self-stretch relative">
                We align our vision with Global goals. Here are the areas we are
                contributing to:
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
        className="self-stretch flex flex-col items-center justify-center py-2.5 px-5 text-left text-53xl text-base-white-secondary font-wide-screen-heading"
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
        className="self-stretch bg-base-white-secondary flex flex-col items-start justify-start p-5 gap-[20px] text-left text-13xl text-base-black font-wide-screen-heading"
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
            <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-primary-pallete-primary">
              <div className="flex-1 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Placerat in egestas erat imperdiet sed euismod nisi. At volutpat
                diam ut venenatis. In est ante in nibh mauris. Facilisis mauris
                sit amet massa. Penatibus et magnis dis parturient montes
                nascetur ridiculus. do i join LUNA
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
            <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-primary-pallete-primary">
              <div className="flex-1 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Placerat in egestas erat imperdiet sed euismod nisi. At volutpat
                diam ut venenatis. In est ante in nibh mauris. Facilisis mauris
                sit amet massa. Penatibus et magnis dis parturient montes
                nascetur ridiculus. do i join LUNA
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
            <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-primary-pallete-primary">
              <div className="flex-1 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Placerat in egestas erat imperdiet sed euismod nisi. At volutpat
                diam ut venenatis. In est ante in nibh mauris. Facilisis mauris
                sit amet massa. Penatibus et magnis dis parturient montes
                nascetur ridiculus. do i join LUNA
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
            <div className="self-stretch hidden flex-row items-start justify-start p-5 text-3xl text-primary-pallete-primary">
              <div className="flex-1 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Placerat in egestas erat imperdiet sed euismod nisi. At volutpat
                diam ut venenatis. In est ante in nibh mauris. Facilisis mauris
                sit amet massa. Penatibus et magnis dis parturient montes
                nascetur ridiculus. do i join LUNA
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionBanner />
      <Footer />
    </div>
  );
};

export default Home;

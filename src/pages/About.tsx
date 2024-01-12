import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionBanner from "../components/SectionBanner";

const About: FunctionComponent = () => {
  return (
    <main className="relative bg-base-black-secondary w-full overflow-hidden flex flex-col items-start justify-start lg:w-[1200px] md:w-[960px] sm:w-[420px]">
      <section className="self-stretch flex flex-col items-start justify-center pt-[50px] px-5 pb-5">
        <article className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px] text-left text-7xl text-base-white font-wide-screen-title-bold">
          <h1 className="m-0 relative text-53xl font-normal font-inherit">
            about LUNA
          </h1>
          <p className="m-0 self-stretch relative">{`LUNA's mission has been to change the way women receive, seek, and experience services and products since its inception. LUNA offers our members a secure and private way to work with verified professionals. Furthermore, they have access to a free community platform where they can communicate anonymously with other women and experts about topics of interest such as Mental Health, Sexual & Menstrual Health, Motherhood, and many others.`}</p>
          <h3 className="m-0 relative text-inherit font-bold font-inherit">{`Mission & Vision`}</h3>
          <p className="m-0 self-stretch relative">
            Ensure safe and trusted access to health and wellness services and
            products for women.
          </p>
        </article>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 text-left text-13xl text-base-white font-wide-screen-title-bold">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[30px]">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
            Meet the Team
          </h2>
        </div>
        <div className="self-stretch bg-base-black-secondary overflow-hidden flex flex-row items-start justify-start py-0 px-5 gap-[10px] text-3xl">
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[200px] object-cover"
              alt="LUNA CEO: Berabose Joyce"
              src="/berabose-joyce@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Berabose A. Joyce</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  CEO
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[200px] object-cover"
              alt="LUNA COO: Chibudu Nyiro"
              src="/chibudu-background@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Chibudu S. Nyiro</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  COO
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[200px] object-cover"
              alt="dusabimana ange"
              src="/dusabimana@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Dusabimana Ange</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Medical Project Manager
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[200px] object-cover"
              alt="julius brighton"
              src="/julius-brighton@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Julius Brighton</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  UI/UX Project Manager
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[200px] object-cover"
              alt="glory"
              src="/glory-alphonsus@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Glory Alphonsus</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Backend Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start py-10 px-0 text-left text-13xl text-base-white font-wide-screen-title-bold">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[30px]">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
            Meet our advisors
          </h2>
        </div>
        <div className="self-stretch bg-base-black-secondary overflow-hidden flex flex-row items-start justify-start py-0 px-5 gap-[10px] text-3xl">
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/glory-alphonsus2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">{`Michael Szymanski `}</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Business development
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/glory-alphonsus3@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Warren Cronje</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Investment
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/julius-brighton2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">James Brown</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Womens health
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/dusabimana2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Fredeline Muller</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Finance
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/chibudu-background2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Chidi Afulezi</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Leadership
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-base-black-secondary overflow-hidden flex flex-col items-start justify-center pt-2.5 px-2.5 pb-0 gap-[5px]">
            <img
              className="relative w-[200px] h-[250px] object-cover"
              alt=""
              src="/berabose-joyce2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-base-white" />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative">Chandini Sood</div>
                <div className="self-stretch relative text-xl text-base-gray">
                  Funding readiness
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-base-white-secondary flex flex-col items-start justify-center py-5 px-[30px] gap-[20px] text-left text-29xl text-base-black font-wide-screen-title-bold">
        <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
          <span>{`We are serving women from `}</span>
          <span className="text-firebrick">period</span>
          <span>{` to `}</span>
          <span className="text-blueviolet">menopause</span>
          <span>.</span>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start text-13xl">
          <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-5 gap-[30px] border-[1px] border-solid border-base-black">
            <h2 className="m-0 relative text-inherit font-normal font-inherit">
              our locations
            </h2>
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px] text-lg">
              <div className="bg-contemporary-contemporary-var-2 flex flex-row items-center justify-start py-[5px] px-5 gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-5"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative">NORRSKEN HOUSE KIGALI</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-[22px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <div className="relative">1 KN 78 st, Kigali, Rwanda</div>
                </div>
              </div>
              <div className="bg-base-white flex flex-row items-center justify-start py-[5px] px-5 gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-5"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative">Nairobi Garage</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-[22px]"
                    alt=""
                    src="/vector1.svg"
                  />
                  <div className="relative">PRM2+RG Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-end py-2.5 px-0">
            <img
              className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/map@2x.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

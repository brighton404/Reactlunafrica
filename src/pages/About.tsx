import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionBanner from "../components/SectionBanner";

const About: FunctionComponent = () => {
  return (
    <main className="relative bg-base-black-secondary w-full overflow-hidden flex flex-col items-start justify-start text-left text-xl text-primary-pallete-primary font-small-screen-subheading lg:w-[1200px] md:w-[960px] sm:w-[420px]">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-center pt-[50px] px-5 pb-5 z-[0] text-left text-7xl text-primary-pallete-primary font-small-screen-subheading">
        <div className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px]">
          <h1 className="m-0 relative text-53xl font-normal font-inherit">
            about LUNA
          </h1>
          <div className="self-stretch relative">{`LUNA's mission has been to change the way women receive, seek, and experience services and products since its inception. LUNA offers our members a secure and private way to work with verified professionals. Furthermore, they have access to a free community platform where they can communicate anonymously with other women and experts about topics of interest such as Mental Health, Sexual & Menstrual Health, Motherhood, and many others.`}</div>
          <b className="relative">{`Mission & Vision`}</b>
          <div className="self-stretch relative">
            Ensure safe and trusted access to health and wellness services and
            products for women.
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 z-[1] text-left text-13xl text-primary-pallete-primary font-small-screen-subheading">
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
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
      <section className="self-stretch flex flex-col items-start justify-start py-10 px-0 z-[2] text-left text-13xl text-primary-pallete-primary font-small-screen-subheading">
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
              src="/glory-alphonsus@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              src="/glory-alphonsus@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              src="/julius-brighton@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              src="/dusabimana@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              src="/chibudu-background@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
              src="/berabose-joyce@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[10px]">
              <div className="relative box-border w-[111.9px] h-[2.8px] border-t-[2.8px] border-solid border-primary-pallete-primary" />
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
      <section className="self-stretch bg-base-white-secondary flex flex-col items-start justify-center py-5 px-[30px] gap-[20px] z-[3] text-left text-29xl text-base-black font-small-screen-subheading">
        <div className="self-stretch relative">
          <span>{`We are serving women from `}</span>
          <span className="text-firebrick">period</span>
          <span>{` to `}</span>
          <span className="text-blueviolet">menopause</span>
          <span>.</span>
        </div>
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
                    src="/vector.svg"
                  />
                  <div className="relative">1 KN 78 st, Kigali, Rwanda</div>
                </div>
              </div>
              <div className="bg-primary-pallete-primary flex flex-row items-center justify-start py-[5px] px-5 gap-[20px]">
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
                    src="/vector.svg"
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
      <div className="my-0 mx-[!important] absolute top-[0px] right-[0px] bg-base-black-secondary h-[860px] overflow-hidden shrink-0 hidden flex-row items-start justify-start p-5 box-border z-[4]">
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
            <div className="relative">How it works</div>
            <div className="relative">Resources</div>
          </div>
          <div className="self-stretch flex-1 hidden flex-col items-start justify-start text-base-black-secondary">
            <div className="bg-primary-pallete-primary flex flex-row items-center justify-center py-[5px] px-5">
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
      <SectionBanner />
      <Footer />
    </main>
  );
};

export default About;

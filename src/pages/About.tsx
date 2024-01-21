import { FunctionComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMember from "../components/Team";
import AdvisorCard from "../components/Advisors";
import LocationMap from "../components/locations";

const About: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full overflow-hidden flex flex-col items-start justify-start text-left text-xl text-contemporary-var-2 font-Poppins">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-center pt-[50px] px-5 pb-5">
        <article className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px] text-left text-7xl text-base-whites-var-1 font-Poppins">
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
      <section className="self-stretch overflow-x-auto flex flex-col items-start justify-start pt-0 px-0 pb-10 text-left text-13xl text-base-whites-var-1 font-Poppins">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[30px]">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
            Meet the Team
          </h2>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row p-[20px]">
          <TeamMember team="berabose"/>
          <TeamMember team="chibudu"/>
          <TeamMember team="dusabimana"/>
          <TeamMember team="julius"/>
          <TeamMember team="glory"/>
        </div>
      </section>
      <section className="self-stretch overflow-x-auto flex flex-col items-start justify-start py-10 px-0 text-left text-13xl text-base-whites-var-1 font-Poppins">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[30px]">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
            Meet our advisors
          </h2>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row p-[20px]">
          <AdvisorCard advisor="michael"/>
          <AdvisorCard advisor="warren"/>
          <AdvisorCard advisor="james"/>
          <AdvisorCard advisor="fredeline"/>
          <AdvisorCard advisor="chidi"/>
          <AdvisorCard advisor="chandini"/>
        </div>
      </section>
      <section className="self-stretch bg-base-whites-var-2 flex flex-col items-start justify-center py-5 px-[30px] gap-[20px] text-left text-29xl text-base-blacks-var-1 font-Poppins">
        <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit">
          <span>{`We are serving women from `}</span>
          <span className="text-firebrick">period</span>
          <span>{` to `}</span>
          <span className="text-blueviolet">menopause</span>
          <span>.</span>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start text-13xl">
          <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-5 gap-[30px] border-[1px] border-solid border-base-blacks-var-1">
            <h2 className="m-0 relative text-inherit font-normal font-inherit">
              our locations
            </h2>
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px] text-lg">
              <div className="bg-contemporary-var-2 flex flex-row items-center justify-start py-[5px] px-5 gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-5"
                    alt=""
                    src="/images/icons/home.svg"
                  />
                  <div className="relative">NORRSKEN HOUSE KIGALI</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-[22px]"
                    alt=""
                    src="/images/icons/location.svg"
                  />
                  <div className="relative">1 KN 78 st, Kigali, Rwanda</div>
                </div>
              </div>
              <div className="bg-base-whites-var-1 flex flex-row items-center justify-start py-[5px] px-5 gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-5"
                    alt=""
                    src="/images/icons/home.svg"
                  />
                  <div className="relative">Nairobi Garage</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[18px] h-[22px]"
                    alt=""
                    src="/images/icons/location.svg"
                  />
                  <div className="relative">PRM2+RG Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-end py-2.5 px-0">
            <div className="self-stretch h-[40vh] flex-1 border-[1px] border-solid border-base-blacks-var-1">
            <LocationMap />
          </div>
          </div>
        </div>
      </section>    
      <Footer />
    </div>
  );
};

export default About;

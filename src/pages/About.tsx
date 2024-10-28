import { FunctionComponent } from "react";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";
import TeamMember from "../components/LUNA/Team";
import AdvisorCard from "../components/LUNA/Advisors";
import LocationMap from "../components/Links/locations";

const About: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full overflow-hidden flex flex-col items-start justify-start text-left text-xl text-contemporary-var-2 font-Poppins">
      <Header />
      <section className="self-stretch flex flex-col items-start justify-center pt-[50px] px-5 pb-5">
        <article className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px] text-left text-7xl text-base-whites-var-1 font-Poppins">
          <h1 className="m-0 relative text-53xl font-normal font-inherit text-heading sm:text-small-screen-heading">
            about LUNA
          </h1>
          <p className="m-0 self-stretch relative text-body-2x font-light sm:text-small-x">LUNA's mission has been to change the way women receive, seek, and experience services and products since its inception. LUNA offers our members a secure and private way to work with verified professionals. Furthermore, they have access to a free community platform where they can communicate anonymously with other women and experts about topics of interest such as Mental Health, Sexual & Menstrual Health, Motherhood, and many others.</p>
          <h3 className="m-0 text-subheading-3x font-semibold">Mission & Vision</h3>
          <p className="m-0 self-stretch relative text-body-2x font-light sm:text-small-x">
            Ensure safe and trusted access to health and wellness services and products for women.
          </p>
        </article>
      </section>
      <section className="self-stretch overflow-x-auto flex flex-col items-start justify-start pt-0 px-0 pb-1 text-left text-13xl text-base-whites-var-1 font-Poppins">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[30px]">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
            Meet the Team
          </h2>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row p-[20px] md:flex-wrap">
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
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row p-[20px] md:flex-wrap">
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
        </section>
        <LocationMap />
      <Footer />
    </div>
  );
};

export default About;

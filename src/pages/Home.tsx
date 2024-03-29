import { FunctionComponent } from "react";
import Banner from "../components/Banners/Banner";
import FAQAccordion from "../components/Forms/Accordion";
import PartnerSection from "../components/AnimatedSections/HomePartner";
import Demotext from "../components/AnimatedSections/demotext";
import Mentioned from "../components/AnimatedSections/HomeMentions";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full overflow-hidden flex flex-col items-center justify-start text-left text-xl font-font-Poppins">
      <Header />
      <section className="self-stretch h-[95vh] flex flex-col items-center justify-end py-[30px] px-[50px] sm:px-[10px] box-border bg-[url('/public/heroBackground.png')] bg-cover bg-no-repeat bg-[top] text-center text-[49px] text-base-whites-var-1 font-Poppins" id="hero">
        <div className="m-0 bg-gradient-to-r from-[#00000000] from-20% via-[#00000031] to-[#00000000] to-80% backdrop-blur-sm border-none w-[50%] flex flex-col items-center justify-center py-[15px] px-5 box-border gap-[50px] sm:gap-5 sm:self-stretch sm:w-auto md:w-[80%]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[15px] sm:items-start sm:justify-center">
            <h1 className="m-0 self-stretch relative text-title font-bold font-inherit sm:text-left sm:text-body text-base-whites-var-1">
              WELCOME TO LUNA
            </h1>
            <i className="self-stretch relative text-body-4x sm:text-small sm:text-left text-base-whites-var-1">
              "For Every Woman, Every Phase"
            </i>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-2.5 px-0 gap-[10px] text-lg sm:items-start sm:justify-center sm:justify-left">
            <span className="self-stretch relative whitespace-pre-wrap sm:text-left text-base-whites-var-1 text-body-3x sm:text-small">
              We are happy you're here. Would you like to join our FREE
              community group of women across the globe for breaking
              conversations on health?
            </span>
            <button
              className="cursor-pointer [border:none] py-[5px] px-5 bg-base-whites-var-1 flex flex-row items-center justify-center" id="JoinUs">
              <a className="[text-decoration:none] relative text-body-4x sm:text-small font-semibold font-Poppins text-base-blacks-var-1 text-left" href="https://lunahealth.co/consult/signup">
                Join Us
              </a>
            </button>
          </div>
        </div>
      </section>
      <PartnerSection />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 text-left text-13xl text-base-whites-var-1 font-Poppins" id="solutions">
        <div className="self-stretch flex flex-row items-start justify-start py-2.5 px-5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
              Our Solutions
            </h2>
          </div>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-col items-start justify-start py-0 px-2.5">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[20px] sm:flex-col">
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-brand-health font-Poppins border-[2px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch lg:h-fit">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                  Health
                </h3>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base-whites-var-1">
                  <span className="self-stretch relative">
                    Services offered:
                  </span>
                  <div className="self-stretch relative text-lg">
                    <ul className="m-0 font-inherit text-inherit pl-6">
                      <li>Teleconsultation</li>
                      <li>Talk to our range of professionals, experts and specialists from all backgrounds and experiences</li>
                      <li>Anywhere in the world</li>
                    </ul>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-base-blacks-var-2 flex flex-row items-center justify-start">
                  <span className="relative text-lg [text-decoration:underline] font-Poppins text-base-whites-var-1 text-left">
                    Learn More
                  </span>
                </button>
              </div>
            </article>
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-contemporary-var-2 font-Poppins border-[2px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch lg:h-fit">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                  Shop
                </h3>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base-whites-var-1">
                  <span className="self-stretch relative">
                    Tailored Features:
                  </span>
                  <div className="self-stretch relative text-lg">
                    <ul className="m-0 font-inherit text-inherit pl-6">
                      <li className="mb-0">subscribe to monthly delivery</li>
                      <li className="mb-0">build your own need box</li>
                      <li>safe and trusted delievery</li>
                    </ul>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-base-blacks-var-2 flex flex-row items-center justify-start">
                  <span className="relative text-lg [text-decoration:underline] font-Poppins text-base-whites-var-1 text-left">
                    Learn More
                  </span>
                </button>
              </div>
            </article>
            <article className="flex-1 box-border h-[315px] flex flex-col items-start justify-start p-[15px] text-left text-3xl text-base-whites-var-1 font-Poppins border-[2px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch lg:h-fit">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                  Community
                </h3>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <span className="self-stretch relative">
                    User engagements:
                  </span>
                  <div className="self-stretch relative text-lg">
                    <ul className="m-0 font-inherit text-inherit pl-6">
                      <li className="mb-0">Anonymous questions</li>
                      <li className="mb-0">WhatsApp Group</li>
                      <li>Events and Webinars</li>
                    </ul>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-base-blacks-var-2 flex flex-row items-center justify-start">
                  <span className="relative text-lg [text-decoration:underline] font-Poppins text-base-whites-var-1 text-left">
                    Learn More
                  </span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        className="self-stretch bg-base-whites-var-2 flex flex-col items-start justify-center pt-0 px-2.5 pb-[30px] text-left text-13xl text-base-blacks-var-2 font-Poppins" id="packages">
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-2.5 pb-2.5">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            Our Packages
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[30px] md:flex-col">
          <article className="flex-1 bg-base-whites-var-2 shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-blacks-var-2 font-Poppins border-[3px] border-solid border-base-blacks-var-2 sm:flex-[unset] sm:self-stretch lg:h-fit">
            <span className="relative">-10$</span>
            <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
              Mental health at your workspace
            </h3>
            <p className="m-0 self-stretch flex-1 relative">Elevate workplace well-being with our package offering in-person and online consultations, mindfulness sessions, and stress management workshops. Designed to foster a positive work environment, this package empowers your team to thrive. Contact us to initiate a positive change in your workspace</p>
          </article>
          <article className="flex-1 bg-base-whites-var-2 shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-blacks-var-2 font-Poppins border-[3px] border-solid border-base-blacks-var-2 sm:flex-[unset] sm:self-stretch lg:h-fit">
            <span className="relative">-10$</span>
            <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
              Get the PCOS Deal
            </h3>
            <p className="m-0 self-stretch flex-1 relative">Take charge of your health journey with our exclusive PCOS Deal package. Tailored for those dealing with Polycystic Ovary Syndrome (PCOS), this comprehensive offering provides personalized guidance, nutrition plans, and fitness routines to effectively manage symptoms. Empower yourself with tools for a healthier lifestyle.</p>
          </article>
          <article className="flex-1 bg-base-whites-var-2 shadow-[8px_8px_0px_#000] box-border h-[420px] flex flex-col items-start justify-start p-5 gap-[20px] text-left text-lg text-base-blacks-var-2 font-Poppins border-[3px] border-solid border-base-blacks-var-2 sm:flex-[unset] sm:self-stretch lg:h-fit">
            <span className="relative">-10$</span>
            <h3 className="m-0 self-stretch relative text-3xl font-semibold font-inherit">
              Go premium to access Full LUNA services
            </h3>
            <p className="m-0 self-stretch flex-1 relative">Unleash your online potential with our Go Premium - Full LUNA Services package. Elevate your digital presence with free assessments, limitless consultations with top professionals, and customized product deals. Transform your online experience and access premium features to enhance your digital journey.</p>
          </article>
        </div>
      </section>
      <Mentioned />
      <section
        className="self-stretch flex flex-col items-start justify-start pt-[30px] px-5 pb-2.5 gap-[10px] text-left text-13xl text-base-whites-var-1 font-Poppins" id="impact">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-2.5 pb-2.5">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            Our Impact
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-3xl text-base-blacks-var-2 md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start p-[15px] gap-[25px] border-[1px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch">
            <div className="bg-contemporary-var-2 flex flex-row items-start justify-start p-2.5">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                SUSTAINABLE DEVELOPMENT GOALS
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-7xl text-base-whites-var-1">
              <p className="m-0 self-stretch relative">
                We align our vision with Global goals. Here are the areas we are contributing to:
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-row sm:flex-col items-start justify-start gap-[7.85px]">
            <img className="relative w-[184px] h-[184px] object-cover md:w-full sm:w-full md:object-contain bg-[#51a136]"
                  alt="sdg number 3: good health and well being"
                  src="/images/sdg/SDG-3.png"/>
            <img className="relative w-[184px] h-[184px] object-cover md:w-full sm:w-full md:object-contain bg-[#f5342a]"
                  alt="sdg number 5: gender equality"
                  src="/images/sdg/SDG-5.png"/>
            <img className="relative w-[184px] h-[182px] object-cover md:w-full sm:w-full md:object-contain bg-[#d50069]"
                  alt="sdg number 10: reduced inequalities"
                  src="/images/sdg/SDG-10.png"/>
          </div>
        </div>
      </section>
      <section
        className="self-stretch flex flex-col items-center justify-center py-2.5 px-5 text-left text-53xl text-base-whites-var-2 font-Poppins" id="stats">
        <div className="self-stretch flex flex-row items-center justify-center py-px px-0 gap-[10px] sm:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch">
            <b className="relative">500+</b>
            <span className="relative text-3xl text-base-greys-var-1">
              Registered Members
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch">
            <b className="relative">450+</b>
            <span className="relative text-3xl text-base-greys-var-1">
              Services delivered
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch">
            <b className="relative">13+</b>
            <span className="relative text-3xl text-base-greys-var-1">
              Conferences/ webinars
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] gap-[5px] border-[1px] border-solid border-base-greys-var-1 sm:flex-[unset] sm:self-stretch">
            <b className="relative">1.5+</b>
            <span className="relative text-3xl text-base-greys-var-1">
              Years Active
            </span>
          </div>
        </div>
      </section>
      <Demotext />
      <section className="self-stretch bg-base-whites-var-2 flex flex-col items-start justify-start p-5 gap-[20px] text-left text-13xl text-base-blacks-var-1 font-Poppins" id="faq">
        <span className="self-stretch relative">
          Find the answers to all of our most frequently asked questions.
        </span>
        <div className="flex flex-col self-stretch gap-[10px]">
          <FAQAccordion
            question="What is LUNA and what does it stand for?"
            answer="LUNA is a women's health and wellness platform. The name LUNA comes from LUNAR like the Moon because of women’s cycle association to the moon"/>
          <FAQAccordion
            question="What services does LUNA offer?"
            answer="LUNA provides a range of services, including safe chatrooms, therapy sessions, doctor consultations, corporate packages, and the option to ask LUNA for personalized advice."/>
          <FAQAccordion 
            question="How can I become a member of LUNA?"
            answer="Becoming a member is easy! Visit our website and follow the simple steps to register. Once registered, you'll have access to all our services and community features. We also have a whatsapp community to Join Here"/>
          <FAQAccordion 
            question="Is LUNA only for women?"
            answer="While our primary focus is on women's health, LUNA welcomes everyone who supports our mission and values, regardless of gender. You can actually reach out to us as a man if You need services that we offer or asking for someone."/>
          <FAQAccordion 
            question="How can I get involved with LUNA as a volunteer?"
            answer="We appreciate your interest in contributing to LUNA! Please Email us on info@lunahealth.co. with your CV and how you can make a difference."/>
          <FAQAccordion 
            question="What makes LUNA different from other health platforms?"
            answer="LUNA is committed to providing a holistic approach to women's health, combining professional services with a supportive community. Our focus on diversity and inclusivity sets us apart."/>
          <FAQAccordion 
            question="How can I schedule a therapy session or consultation?"
            answer="Members can easily schedule therapy sessions or consultations through their LUNA accounts. Choose your preferred professional, date, and time that suits you best."/>
          <FAQAccordion 
            question="Are my interactions on LUNA private and secure?"
            answer="Yes, we take privacy seriously. Your interactions, conversations, and personal information are encrypted and kept confidential."/>
          <FAQAccordion 
            question="Does LUNA have a mobile app?"
            answer="Yes, you can download the LUNA mobile app from [insert app store links] for easy access to our services and community on your mobile device."/>
          <FAQAccordion 
            question="How can I share my feedback or suggestions with LUNA?"
            answer="We appreciate your feedback! You can share your thoughts, suggestions, or concerns by contacting our support team through the website or sending an email to info@lunahealth.co "/>
          {/* Add more FAQ as needed */}
        </div>
      </section>
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
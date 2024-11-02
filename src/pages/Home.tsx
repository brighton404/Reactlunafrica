import { FunctionComponent } from "react"; import Banner from "../components/Banners/Banner";
import FAQAccordion from "@/components/Forms/Accordion";
import PartnerSection from "@/components/AnimatedSections/HomePartner";
import Demotext from "@/components/AnimatedSections/demotext";
import Header from "@/components/Nav/Header"; 
import Footer from "@/components/Nav/Footer";
import { Solutions, Pricing } from "@/components/Banners/cards";
import PartnerCard from "@/components/AnimatedSections/Partners";

const Home: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full overflow-hidden flex flex-col items-center justify-start text-left text-xl font-Poppins text-gray-100">
      <Header />
      <section className="self-stretch h-[95vh] flex flex-col items-center justify-end py-[30px] px-[50px] sm:px-[10px] box-border bg-[url('/heroBackground.png')] bg-cover bg-no-repeat bg-[top] text-center text-[49px] text-base-whites-var-1" id="hero">
        <div className="m-0 bg-gradient-to-r from-[#00000000] from-20% via-[#00000031] to-[#00000000] to-80% backdrop-blur-sm border-none w-[50%] flex flex-col items-center justify-center py-[15px] px-5 box-border gap-[50px] sm:gap-5 sm:self-stretch sm:w-auto md:w-[80%]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[15px] sm:items-start sm:justify-center">
            <h1 className="m-0 self-stretch relative text-title font-bold font-inherit sm:text-left sm:text-body text-base-whites-var-1"> WELCOME TO LUNA
            </h1>
            <i className="self-stretch relative text-body-4x sm:text-small sm:text-left text-base-whites-var-1">   "For Every Woman, Every Phase"
            </i>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-2.5 px-0 gap-[10px] text-lg sm:items-start sm:justify-center sm:justify-left">
            <span className="self-stretch relative whitespace-pre-wrap sm:text-left text-base-whites-var-1 text-body-3x sm:text-small">  We are happy you're here. <br /> Would you like to join our FREE community group of women across the globe for breaking conversations on health?
            </span>
            <button className="cursor-pointer [border:none] py-[5px] px-5 bg-base-whites-var-1 flex flex-row items-center justify-center" id="JoinUs">
              <a className="[text-decoration:none] relative text-body-4x sm:text-small font-semibold  text-base-blacks-var-1 text-left" href="https://lunahealth.co/consult/signup">Join Us</a>
            </button>
          </div>
        </div>
      </section>
      <PartnerSection />
      <section className="self-stretch flex relative flex-col items-start justify-start text-left text-13xl text-base-whites-var-1 py-10 px-[12vw] sm:p-4 gap-4">
        <h2 className="m-0 font-semibold text-body">Our Solutions</h2>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-col">
          <div className="self-stretch flex py-2 gap-5 sm:flex-col">
            <Solutions button={"Health"} header={"Services offered "} subtext={"Teleconsultation <br /> Talk to our range of professionals, experts and specialists from all backgrounds and experiences from anywhere in the world."} image={'../Reactlunafrica/images/gradient.pngimages/nurse.jpg'} imgDesc={"nurse holding a paper cardboard"} />
            <Solutions button={"Community"} header={"User engagements"} subtext={"Anonymous questions <br /> WhatsApp Group <br /> Events and Webinars <br />"} image={'../Reactlunafrica/images/gradient.pngimages/community.jpg'} imgDesc={""} />
            <Solutions button={"Shop"} header={"Tailored features"} subtext={"subscribe to monthly delivery <br /> build your own need box <br /> safe and trusted delievery"} image={'../Reactlunafrica/images/gradient.pngimages/shop.jpg'} imgDesc={""} />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start p-10 px-[12vw] relative">
        <div className="self-stretch flex flex-col px-4 py-4">
          <div className="flex items-center gap-6">
          <span className="bg-purple-500 px-3 py-2 rounded">Our Packages</span>
          <h2 className="font-semibold">Pricing</h2>
          </div>
          <p className="m-0 text-small ">At our Platform, we believe in providing flexibility and personalized options of all levels. <br /> Our tiered pricing plans are designed to cater to diverse needs, ensuring that every woman can find the perfect fit in her session.</p>
        </div>
        <div className="flex flex-row gap-4  pb-20 md:flex-col">
          <div className="flex flex-1">
          <Pricing image={"../Reactlunafrica/images/gradient.png"} imgDesc={""} button={"Package"} header={"Go premium to access Full LUNA services"} subtext={"Unleash your online potential with our Go Premium - Full LUNA Services package. Elevate your digital presence with free assessments, limitless consultations with top professionals, and customized product deals. <br /> <br /> Transform your online experience and access premium features to enhance your digital journey."}/>
          </div>
          <div className="flex flex-1 gap-4 flex-col">
            <Pricing image={""} imgDesc={""} button={"Package"} header={"Mental health at your workspace"} subtext={"Elevate workplace well-being with our package offering in-person and online consultations, mindfulness sessions, and stress management workshops. <br /> <br /> Designed to foster a positive work environment, this package empowers your team to thrive. Contact us to initiate a positive change in your workspace"} />
            <Pricing image={""} imgDesc={""} button={"Package"} header={"Get the PCOS Deal"} subtext={"Take charge of your health journey with our exclusive PCOS Deal package. <br /> <br /> Tailored for those dealing with Polycystic Ovary Syndrome (PCOS), this comprehensive offering provides personalized guidance, nutrition plans, and fitness routines to effectively manage symptoms. Empower yourself with tools for a healthier lifestyle."} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-20 pt-[15vh] pb-20 gap-10 bg-base-whites-var-2 text-base-whites-var-1">
        <div className="flex flex-col items-center justify-center gap-20">
          <span className="flex w-fit items-center justify-center px-3 py-1 bg-base-whites-var-1 text-base-blacks-var-1 rounded text-small font-semibold">As Seen In</span>
          <div className="flex flex-wrap items-center justify-center gap-20 p-4 pb-10 invert">
            <PartnerCard partners="Tamu" /><PartnerCard partners="Ikunde" /><PartnerCard partners="ALU" /><PartnerCard partners="Vuki" /><PartnerCard partners="Femtech lab" /><PartnerCard partners="Jasiri" /><PartnerCard partners="Eves Apple" /><PartnerCard partners="Allan & Gray" /><PartnerCard partners="YWCA" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 py-10">
          <span className="flex w-fit items-center justify-center px-3 py-1 text-base-blacks-var-1 rounded text-body bg-sky-400 font-semibold">Our Impact</span>
            <div className="self-stretch flex flex-col items-center justify-start gap-4 text-3xl text-base-blacks-var-2 md:flex-col">
                <h3 className="m-0 text-inherit font-semibold font-inherit">SUSTAINABLE DEVELOPMENT GOALS</h3>
                <p className="m-0">We align our vision with Global goals. Here are the areas we are contributing to</p>
            </div>
            <div className="self-stretch flex flex-row sm:flex-col items-start justify-center p-20 gap-20">
              <img className="relative w-[300px] h-[300px] object-cover md:w-full sm:w-full md:object-contain bg-[#51a136] drop-shadow-[9px_6px_0px_black] rotate-6" alt="sdg number 3: good health and well being" src="../Reactlunafrica/images/sdg/SDG-3.png"/>
              <img className="relative w-[300px] h-[300px] object-cover md:w-full sm:w-full md:object-contain bg-[#f5342a] drop-shadow-[9px_6px_0px_black] rotate-[-6deg]" alt="sdg number 5: gender equality" src="../Reactlunafrica/images/sdg/SDG-5.png"/>
              <img className="relative w-[300px] h-[300px] object-cover md:w-full sm:w-full md:object-contain bg-[#d50069] drop-shadow-[9px_6px_0px_black] rotate-3" alt="sdg number 10: reduced inequalities" src="../Reactlunafrica/images/sdg/SDG-10.png"/>
            </div>
          </div>
          <div  className="self-stretch flex flex-col items-center justify-center py-2.5 px-5 text-left text-heading text-base-blacks-var-1">
            <div className="self-stretch flex flex-row items-center justify-center py-px px-0 gap-20 sm:flex-col">
              <div className="flex flex-col items-center justify-center gap-[5px] sm:flex-[unset] sm:self-stretch">
                <b>500+</b>
                <span className="text-small text-base-greys-var-1">Registered Members</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-[5px]sm:flex-[unset] sm:self-stretch">
                <b>450+</b>
                <span className="text-small text-base-greys-var-1">Services delivered</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-[5px] sm:flex-[unset] sm:self-stretch">
                <b>13+</b>
                <span className="text-small text-base-greys-var-1">Conferences/ Webinars</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-[5px] sm:flex-[unset] sm:self-stretch">
                <b>1.5+</b>
                <span className="text-small text-base-greys-var-1">Years Active</span>
              </div>
            </div>
          </div>
      </section>
      <Demotext />
      <section className="self-stretch bg-base-whites-var-2 flex flex-col items-center justify-center px-[15vw] p-20 gap-10 text-left text-13xl text-base-blacks-var-1">
        <span>Find the answers to all of our most frequently asked questions.</span>
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
        </div>
      </section>
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
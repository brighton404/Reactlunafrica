import { FunctionComponent } from "react";
import NewsletterForm from "../Forms/newsletterForm";

const Footer: FunctionComponent = () => {
  return (
    <footer
      className="bg-base-blacks-var-1 w-full flex flex-col items-start justify-start py-[30px] px-[20px] sm:px-[10px] text-xl text-base-whites-var-1 font-Poppins box-border text-nowrap ">
      <div className="w-full flex flex-row items-start justify-start gap-[20px] sm:flex-col">
        <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[10px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold sm:text-body">Customer Care:</span>
            <a className="[text-decoration:none] relative text-[inherit] sm:text-body" href="mailto:info@lunahealth.co">info@lunahealth.co</a>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold sm:text-body">General Inquiries:</span>
            <a className="[text-decoration:none] relative text-[inherit] sm:text-body" href="tel:+250791944647" >+250 791 944 647</a>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold sm:text-body">Sales</span>
            <a className="[text-decoration:none] relative text-[inherit] sm:text-body" href="mailto:sales@lunahealth.co"> Sales@lunahealth.co </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[10px] sm:self-stretch">
          <h4 className="m-0 relative text-inherit font-semibold font-inherit sm:text-body"> Quick Links </h4>
          <div className="relative sm:text-body">Terms and Conditions</div>
          <a className="[text-decoration:none] relative text-[inherit] sm:text-body"> Privacy Policy </a>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[10px] sm:self-stretch">
          <h4 className="m-0 relative text-inherit font-semibold font-inherit sm:text-body"> Contact </h4>
          <div className="relative sm:text-body">KN 78 Street, No.1</div>
          <div className="relative sm:text-body">Norrsken House Kigali</div>
        </div>
        <NewsletterForm />
      </div>
    </footer>
  );
};

export default Footer;
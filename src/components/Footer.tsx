import { FunctionComponent, useState } from "react";

const Footer: FunctionComponent = () => {
  const [textFieldValue, setTextFieldValue] = useState("");
  return (
    <footer
      className="bg-base-black w-[1440px] flex flex-col items-start justify-start py-[30px] px-5 box-border text-left text-xl text-primary-pallete-primary font-wide-screen-heading lg:w-[1200px] md:w-[960px] sm:w-[420px]"
      id="footer"
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] sm:flex-col">
        <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[10px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold">Customer Care:</span>
            <a
              className="[text-decoration:none] relative text-[inherit]"
              href="mailto:info@lunahealth.co"
            >
              info@lunahealth.co
            </a>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold">General Inquiries:</span>
            <a
              className="[text-decoration:none] relative text-[inherit]"
              href="tel:+250791944647"
            >
              +250 791 944 647
            </a>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <span className="relative font-semibold">Sales</span>
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
          <a className="[text-decoration:none] relative text-[inherit]">
            Privacy Policy
          </a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:flex-[unset] sm:self-stretch">
          <h4 className="m-0 relative text-inherit font-semibold font-inherit">
            Contact
          </h4>
          <div className="relative">KN 78 Street, No.1</div>
          <div className="relative">Norrsken House Kigali</div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[10px] text-3xl sm:flex-[unset] sm:self-stretch">
          <label className="cursor-pointer relative" htmlFor="NewsletterForm">
            Sign Up for our Newsletter
          </label>
          <form
            className="m-0 self-stretch bg-primary-pallete-primary flex flex-row items-center justify-end gap-[10px]"
            id="NewsletterForm"
          >
            <input
              className="[border:none] [outline:none] font-wide-screen-heading text-3xl bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start py-2.5 px-[15px] text-base-black-secondary"
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
              <span className="relative text-3xl font-wide-screen-heading text-base-black-secondary text-left">
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

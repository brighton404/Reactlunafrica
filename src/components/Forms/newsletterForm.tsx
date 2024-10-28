// src/components/NewsletterForm.tsx
import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle submission logic (e.g., send email to backend)
    console.log(`Email submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto mt-8 flex flex-col gap-2.5 sm:mt-0">
      <label className="cursor-pointer relative sm:text-body">
        Subscribe to our Newsletter
      </label>
      <div className="flex items-center bg-base-whites-var-1">
        <input
          type="email"
          className="[border:none] [outline:none] Poppinsg text-3xl bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start py-2.5 px-[15px] text-base-blacks-var-1 sm:px-[0px] sm:text-body"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="cursor-pointer [border:none] p-2.5 bg-contemporary-var-2 flex flex-row items-center text-3xl text-base-blacks-var-1 w-max sm:text-body "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;

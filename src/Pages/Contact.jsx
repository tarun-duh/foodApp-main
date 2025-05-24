import React, { useRef } from "react";
import Hero from "../Components/Hero";
import takeout from "../assets/Photos/takeout.jpg";
import ContactInfo from "../Components/ContactInfo";
import Form from "../Components/Form";

const Contact = () => {
  const formRef = useRef(null); // Step 1

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" }); // Step 2
    }
  };

  return (
    <>
      <Hero
        backgroundImage={takeout}
        title="Cafe Himalayan"
        heading="We’d Love to Hear From You"
        subheading="Questions, reservations, or special requests? Get in touch and we’ll make your experience unforgettable."
        btnLink={"#"} // Avoid navigation; use scroll instead
        btnContent="Contact Us"
        btnCustom="border-white text-white bg-transparent z-10 hover:bg-[#f76e2a] hover:border-none hover:text-white px-4 py-2 rounded transition duration-200 ease-in-out text-sm sm:text-base md:text-lg"
        btnOnclick={handleScrollToForm} // Step 3
      />
      <div className="bg-white w-full">
        <ContactInfo />
      </div>
      <div
        ref={formRef} // Step 4
        className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-3xl mx-auto w-full"
      >
        <Form />
      </div>
    </>
  );
};

export default Contact;

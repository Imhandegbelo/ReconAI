import React from "react";
import { Form } from "../components/ContactForm/Form";
import ContactUsImage from "../assets/images/contact-page-images/contact-page-image.png";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => (
  <>
    <ScrollToTop />
    <NavigationBar />

    <main className="flex flex-col justify-center items-center py-[50px] px-6 md:px-12">
      <div className="info-container lg:flex lg:flex-row lg:gap-7 xl:max-w-[1024px] xl:gap-14 min-[1440px]:max-w-[1280px] min-[1440px]:justify-around ">
        <div className="lg:w-[70%] xl:w-[60%] min-[1440px]:w-[50%]">
          <h1 className=" text-4xl font-semibold w-full font-sans pb-3">
            Get in Touch
          </h1>
          <p className="font-normal text-base pb-2 text-gray-500">
            Would you like to have a chat with us about ReconcileAI?
          </p>

          <p className="font-normal text-base pb-2 text-gray-500">
            Our support team is available 24/7 to attend to any and every issue
            you might have.
          </p>

          <Form />
        </div>

        <div className="image-container hidden lg:block min-[1440px]:w-[40%]">
          <img
            className="contact-img lg:h-[95%] lg:object-cover"
            src={ContactUsImage}
            alt="customer-support"
          />
        </div>
      </div>
    </main>

    <Footer />
  </>
);

export default ContactUs;

import ContactForm from "@/components/contactForm/ContactForm";
import Navbar from "@/components/navbar/Navbar";
import FindUs from "@/components/find/FindUs";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center relative pb-10 pt-[20vh] w-full">
      <Navbar />
      <div className="px-4">
        <ContactForm />
      </div>
      <FindUs />
    </div>
  );
};

export default ContactPage;

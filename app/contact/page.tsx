import ContactForm from "@/components/contactForm/ContactForm";
import FindUs from "@/components/find/FindUs";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center relative py-10 w-full">
      <button>
        <Link href={"/"}>Home</Link>
      </button>
      <ContactForm />
      <FindUs />
    </div>
  );
};

export default ContactPage;

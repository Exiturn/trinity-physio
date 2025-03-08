import ContactForm from "@/components/contactForm/ContactForm";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-2">
      <button>
        <Link href={"/"}>Home</Link>
      </button>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

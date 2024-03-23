import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import contactImg from "../assets/contact.svg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SI,
        import.meta.env.VITE_REACT_TI,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_PK,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // Custom alert message
          const successAlert = document.createElement("div");
          successAlert.className =
            "bg-green-500 text-white px-4 py-2 rounded-md fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          successAlert.textContent = "Your message has been sent successfully";
          document.body.appendChild(successAlert);
          setTimeout(() => {
            document.body.removeChild(successAlert);
          }, 3000); // Remove the alert after 3 seconds

          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Custom alert message
          const errorAlert = document.createElement("div");
          errorAlert.className =
            "bg-red-500 text-white px-4 py-2 rounded-md fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          errorAlert.textContent =
            "There is some server issue , please mail me at : contact@anaysingh.in";
          document.body.appendChild(errorAlert);
          setTimeout(() => {
            document.body.removeChild(errorAlert);
          }, 30000); // Remove the alert after 30 seconds
        }
      );
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-[70vh] w-full my-auto  gap-4 md:h-[85vh]">
        <form
          className="flex flex-col justify-center align-middle w-full md:w-[40vw] mx-4 border-2 border-nvcol-400 md:border-webtext-400 p-2 md:p-6 rounded-md order-2"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-white py-2 font-monoDM">Name</label>
          <input
            className="opacity-95 text-white bg-indigo-700 h-8 rounded-md p-2 text-xs md:text-base placeholder-white"
            type="text"
            name="user_name"
            placeholder="Enter your Name"
            required
          />
          <label className="text-white py-2">Email</label>
          <input
            className="opacity-95 text-black bg-indigo-700 h-8 rounded-md p-2 text-xs md:text-base placeholder-white"
            type="email"
            name="user_email"
            placeholder="Enter your E-mail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <label className="text-white py-2">Message</label>
          <textarea
            className="h-32 opacity-95 text-black bg-indigo-700 rounded-md p-2 text-xs md:text-base placeholder-white "
            name="message"
            placeholder="Type your Message"
            required
          />
          <input
            className="font-monoDM font-medium text-xs md:text-base border-2 bg-white hover:bg-indigo-700 hover:text-white cursor-pointer w-[6rem] md:w-[8rem] items-center py-2 md:py-2 my-4 rounded-lg"
            type="submit"
            value="Send Message"
          />
        </form>
        <div className="hidden lg:flex md:py-20  mx-4 order-1">
          <img className="w-full md:h-[50vh]" src={contactImg} alt="image" />
        </div>
      </div>
    </>
  );
}

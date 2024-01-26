import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./skills.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_agm0dnj', 'template_tfj92kg', form.current, 'bPnQR1txlwOHDG2hj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <div class="container mx-auto my-40" id="Contact">
        <div class="px-40 shadow-xl hover:shadow-none transition-shadow duration-500 rounded-lg">
          <h4 class="text-center text-5xl text-[#414563] my-10 ">Contact</h4>
      
          <form ref={form} onSubmit={sendEmail}>
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                class="border  px-4 py-2 focus:outline-none focus:border-[#a26c7eaf] focus:border-[3px] col-span-2 rounded-lg"
                placeholder="Name"
                name="user_name"
              />
              <input
                type="email"
                class="border  px-4 py-2 focus:outline-none focus:border-[#a26c7e8f] focus:border-[3px] col-span-2 rounded-lg"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                cols="10"
                rows="5"
                class="border px-4 py-2 focus:outline-none focus:border-[#a26c7e8f] focus:border-[3px] col-span-2 rounded-lg"
                placeholder="Write your message..."
                name="message"
              ></textarea>
            </div>
            <div className="grid min-h-[200px] place-content-center  p-4">
            <DrawOutlineButton>Send Message</DrawOutlineButton>
             </div>
             
          </form>
        </div>
      </div>
    )
}



const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-[#414563] transition-colors duration-[400ms] hover:text-[#ffe371] rounded-lg"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#ffe3718f] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#ffe3718f] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ffe3718f] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#ffe3718f] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Contact;
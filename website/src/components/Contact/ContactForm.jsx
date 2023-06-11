import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
const inputStyle = `flex flex-col items-start`;

const ContactForm = () => {
  const formRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_RECIVER_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_RECIVER_MAIL,
          message: form.message,
          subject: form.subject,
          company: form.company,
          email: form.email,
        },
        import.meta.env.VITE_MAIL_SERVICE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
            company: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-secondary5 mt-[4rem] w-[80%] mx-auto p-12 rounded-3xl shadow-xl">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <div className={`grid grid-cols-2 grid-rows-2 gap-[2rem]`}>
          <div className={`${inputStyle}`}>
            <span className="text-secondary3">Full Name*</span>
            <input
              type="text"
              placeholder="John David"
              className="w-full p-4 border-[1px] border-[#D3D3D3] rounded-xl mt-[0.6rem]"
              onChange={handleChange}
              value={form.name}
              name="name"
            />
          </div>
          <div className={`${inputStyle}`}>
            <span className="text-secondary3">Your Email*</span>
            <input
              type="email"
              placeholder="example@yourmail.com"
              className="w-full p-4 border-[1px] border-[#D3D3D3] rounded-xl mt-[0.6rem]"
              onChange={handleChange}
              value={form.email}
              name="email"
            />
          </div>
          <div className={`${inputStyle}`}>
            <span className="text-secondary3">Company*</span>
            <input
              type="text"
              placeholder="yourcompany name here"
              className="w-full p-4 border-[1px] border-[#D3D3D3] rounded-xl mt-[0.6rem]"
              onChange={handleChange}
              value={form.company}
              name="company"
            />
          </div>
          <div className={`${inputStyle}`}>
            <span className="text-secondary3">Subject*</span>
            <input
              type="text"
              placeholder="How can we Help"
              className="w-full p-4 border-[1px] border-[#D3D3D3] rounded-xl mt-[0.6rem]"
              onChange={handleChange}
              value={form.subject}
              name="subject"
            />
          </div>
        </div>
        <div className={`${inputStyle} mt-[2rem]`}>
          <span className="text-secondary3">Message*</span>
          <textarea
            rows="8"
            className="resize-none p-4 w-full border-[1px]  border-[#D3D3D3] rounded-xl mt-[0.6rem]"
            onChange={handleChange}
            value={form.message}
            name="message"
          ></textarea>
        </div>
        <div className="w-full flex justify-center mt-24">
          <button
            type="submit"
            className="bg-secondary3 px-10 py-4 border text-secondary5 rounded-full font-bold"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

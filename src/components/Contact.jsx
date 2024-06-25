import React, { useRef } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ contactRef }) {
  const formRef = useRef(null);
  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "b041251a-9b51-4300-8b41-0b5c4669199c";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Soumya Portfolio",
      subject: "New Contact Message from your POrtfolio Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      toast.success('Form submitted successfully!'); 
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
      toast.error('Error submitting the form. Please try again.');
    },
  });
  

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <ToastContainer />
      <h2 className="heading">
        Contact<span>Me!</span>
      </h2>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <input type="text" placeholder="Full Name" {...register("name", { required: true })}/>
          <input type="email" placeholder="Email Address" {...register("email", { required: true })}/>
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile number" {...register("phoneno", { required: true })}/>
          <input type="text" placeholder="Email Subject" {...register("emailsubject")}/>
        </div>
        <textarea placeholder="Your Message"></textarea>
        <input type="submit" value="Send message" className="btn" {...register("message", { required: true })}/>
      </form>
    </section>
  );
}

export default Contact;

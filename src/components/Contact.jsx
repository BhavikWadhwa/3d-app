import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contactEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
  "https://formsubmit.co/ajax/bhavikwadhwa1312@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.website) {
      return;
    }

    setLoading(true);
    setSubmissionStatus({ type: "", message: "" });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: `New portfolio message from ${form.name}`,
          _template: "table",
          _url: "https://3d-app-iota.vercel.app/#contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });
      setSubmissionStatus({
        type: "success",
        message: "Thank you! Your message was sent successfully.",
      });
    } catch (error) {
      console.error(error);
      setSubmissionStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <input
            type='text'
            name='website'
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete='off'
            aria-hidden='true'
            className='hidden'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:cursor-not-allowed disabled:opacity-60'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {submissionStatus.message && (
            <p
              role='status'
              aria-live='polite'
              className={`text-[14px] ${
                submissionStatus.type === "success"
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {submissionStatus.message}
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

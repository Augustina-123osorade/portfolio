import { contactFormAtom, formSubmittingAtom } from "@/store/atom";
import { useAtom } from "jotai";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SiGmail } from "react-icons/si";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useAtom(contactFormAtom);
  const [isSubmitting, setIsSubmitting] = useAtom(formSubmittingAtom);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        read: false,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred while submitting the form. Please try again later.";
      alert(errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm transition focus:border-[#D9713F] focus:outline-none focus:ring-2 focus:ring-[#F2AF8E]/40";

  return (
    <div className="min-h-screen bg-[#FAF6F0] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
            Contact
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">Let's Talk</h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Have a project in mind or just want to say hi? I'd love to hear
            from you.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-gray-600">
              I'm here to answer your questions and also collaborate.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <SiGmail className="mt-1 text-xl text-[#D9713F]" />
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">ewuramaosorade@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CiLocationOn className="mt-1 text-xl text-[#D9713F]" />
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMessageCircle className="mt-1 text-xl text-[#D9713F]" />
                <div>
                  <p className="mb-2 font-semibold text-gray-900">Social Media</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://x.com/nosorade?s=11"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 transition-colors hover:text-[#D9713F]"
                    >
                      <FaXTwitter size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/augustina-osorade"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 transition-colors hover:text-[#D9713F]"
                    >
                      <CiLinkedin size={25} />
                    </a>
                    <a
                      href="https://github.com/Augustina-123osorade"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 transition-colors hover:text-[#D9713F]"
                    >
                      <FaGithub size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-800">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-800">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="youremail@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-800">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Leave your message here..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="rounded-xl bg-emerald-50 p-4 text-emerald-700">
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-50 p-4 text-red-700">
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    } catch (error: any) {
      const errorMessage =
        error.message ||
        "An error occurred while submitting the form. Please try again later.";
      alert(errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-radial-[at_50%_65%] from-sky-50 via-blue-50 to-violet-50 to-90% min-h-screen py-10 lg:py-20">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Let's talk</h1>
      <p className="text-gray-600">Have questions or want to get in touch? We'd love to hear from you!</p>
    </div>

    
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      
      <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">We're here to answer your questions and also collaborate.</p>
        
        <div className="space-y-6">
          
          <div className="flex items-start gap-4">
            <SiGmail className="text-violet-600 text-xl mt-1" />
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-gray-600">ewuramaosorade@gmail.com</p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <CiLocationOn className="text-violet-600 text-xl mt-1" />
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p className="text-gray-600">Accra, Ghana</p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <FiMessageCircle className="text-violet-600 text-xl mt-1" />
            <div>
              <p className="font-semibold mb-2">Social Media</p>
              <div className="flex items-center gap-4">
                <a href="https://x.com/nosorade?s=11" target="_blank" className="text-gray-600 hover:text-violet-600 transition-colors">
                  <FaXTwitter size={20} />
                </a>
                <a href="https://www.linkedin.com/in/augustina-osorade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-gray-600 hover:text-violet-600 transition-colors">
                  <CiLinkedin size={25} />
                </a>
                <a href="https://github.com/Augustina-123osorade" target="_blank" className="text-gray-600 hover:text-violet-600 transition-colors">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="youremail@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Leave your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 font-medium"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg">
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 text-red-800 rounded-lg">
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

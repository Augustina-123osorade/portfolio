import { Link } from "@tanstack/react-router";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white text-gray-600">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div className="flex flex-col gap-4 sm:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
              AO
            </span>
            <span className="text-base font-semibold text-gray-900">Augustina Osorade</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            Frontend developer building fast, responsive web experiences —
            from e-commerce platforms to tools that solve real-world problems.
          </p>
          <div className="flex items-center gap-5 pt-1">
            <a
              href="https://x.com/nosorade?s=11"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-[#D9713F]"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/augustina-osorade"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-[#D9713F]"
            >
              <CiLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Augustina-123osorade"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-[#D9713F]"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">
            Quick Links
          </p>
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm text-gray-500 transition hover:text-[#D9713F]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">Legal</p>
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm text-gray-500 transition hover:text-[#D9713F]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-black/5 pt-8 text-center sm:col-span-2 lg:col-span-4 lg:flex-row lg:justify-center lg:gap-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <SiGmail className="text-[#D9713F]" />
            <a href="mailto:ewuramaosorade@gmail.com" className="transition hover:text-gray-900">
              ewuramaosorade@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CiLocationOn className="text-[#D9713F]" />
            <p>Accra, Ghana</p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 py-6">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Augustina Osorade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

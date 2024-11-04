import React from "react";
import logo from '../assets/gdglko-logo.png';

const FooterLinkSection = ({ title, links }) => (
  <ul>
    <p className="block mb-1 text-base font-semibold text-slate-800">{title}</p>
    {links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { text: "Overview", href: "#" },
        { text: "Features", href: "#" },
        { text: "Solutions", href: "#" },
        { text: "Tutorials", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Press", href: "#" },
        { text: "News", href: "#" },
      ],
    },
    {
      title: "Resource",
      links: [
        { text: "Blog", href: "#" },
        { text: "Newsletter", href: "#" },
        { text: "Events", href: "#" },
        { text: "Help center", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full border-t border-slate-500 md:p-10">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <a href="#">
            <img src={logo} alt="GDG Lucknow" className="md:h-10 w-auto" />
          </a>
          <div className="grid justify-between grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <FooterLinkSection key={index} title={section.title} links={section.links} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
            Copyright © 2024&nbsp;
            <a href="https://material-tailwind.com/" className="hover:underline">
              GDG Lucknow
            </a>
          </p>
          <div className="flex gap-4 text-slate-600 sm:justify-center">
            {['facebook-f', 'instagram', 'twitter', 'github', 'linkedin-in'].map((icon, index) => (
              <a key={index} href="#" className="block transition-opacity text-inherit hover:opacity-80">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

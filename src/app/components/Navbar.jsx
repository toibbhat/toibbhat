"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-[#121212]/70 border border-white/10 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between lg:py-4 py-2 relative min-h-[64px]">
        {/* Invisible spacer to preserve center alignment */}
        <div className="w-[120px] hidden md:block" />

        {/* Centered Nav Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-16 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

      {/* Glow hover effect for nav links */}
      <style jsx global>{`
        .glow-hover {
          transition: all 0.3s ease;
        }
        .glow-hover:hover {
          background: linear-gradient(to right, #22d3ee, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.8),
                       0 0 12px rgba(147, 51, 234, 0.6);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

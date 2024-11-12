import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "preline";

import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on location
    const path = location.pathname;
    const hash = location.hash;

    if (path === "/") {
      if (hash) {
        setActive(hash.replace("#", ""));
      } else {
        setActive("home");
      }
    } else if (path.startsWith("/blogs")) {
      setActive("my-journal");
    } else {
      setActive("");
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      // Intersection Observer to detect which section is in the viewport
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // Set active section ID based on the element's ID
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // Observe each section specified in navLinks
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) observer.observe(section);
      });

      return () => {
        // Unobserve when component unmounts
        navLinks.forEach((nav) => {
          const section = document.getElementById(nav.id);
          if (section) observer.unobserve(section);
        });
      };
    }
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className={`mt-4 relative max-w-5xl w-[90%] mx-auto ${
            scrolled ? "bg-opacity-90" : "bg-opacity-100"
          } bg-white/10 backdrop-blur-md border border-gray-200 rounded-[2rem] py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-800/20 dark:border-neutral-700`}
        >
          <div className="px-4 md:px-0 flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-navbar-header-floating-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-header-floating"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-header-floating"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-header-floating"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-navbar-header-floating-collapse"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              {navLinks.map((nav) =>
                nav.path.startsWith("/#") ? (
                  <HashLink
                    key={nav.id}
                    smooth
                    to={nav.path}
                    className={`${
                      active === nav.id
                        ? "border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-white"
                        : "border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:text-white"
                    } py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 text-[16px]`}
                    onClick={() => setActive(nav.id)}
                  >
                    {nav.title}
                  </HashLink>
                ) : (
                  <Link
                    key={nav.id}
                    to={nav.path}
                    className={`${
                      active === nav.id
                        ? "border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-white"
                        : "border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-200 dark:hover:text-white"
                    } py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 text-[16px]`}
                    onClick={() => setActive(nav.id)}
                  >
                    {nav.title}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

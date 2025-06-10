"use client";

import { hamburger, logo } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [language, setLanguage] = useState("ENG");
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ENG" ? "اردو" : "ENG"));
    // router.push("/aboutus"); // only if needed
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-wrapper py-3">
          <div className="header-start row align-items-center">
            <div className="col-lg-2">
              <div className="logo-wrapper d-flex align-items-center justify-content-between">
                <div className="header-logo">
                  <figure className="header-logo">
                    <Link href="/">
                      <Image
                        src={logo}
                        className="logo-here light-image"
                        alt="Logo"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="d-lg-flex align-items-center gap-2 d-none">
                <ul className="header-link list-unstyled d-md-flex flex-lg-row align-items-center gap-4 mb-0 z-index-1 d-none">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About Us", path: "/aboutus" },
                    { name: "Program", path: "/ourprogram" },
                    { name: "Gallery", path: "/gallery" },
                    { name: "Get Involved", path: "/getinvolved" },
                    { name: "Contact Us", path: "/donation" },
                    { name: "Calendar", path: "/contactus" },
                    { name: "Event", path: "/pages/events" },
                  ].map((link) => (
                    <li key={link.path} className="single-item">
                      <Link
                        href={link.path}
                        className={`header-link level-7 link-here primary-semibold-font text-decoration-none ${
                          pathname === link.path ? "active-link" : "color-6"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 d-flex align-items-center justify-content-center gap-3">
              <Link href="/donate">
                <button className="btn-wrapper">Donate</button>
              </Link>

              <div
                className="language-toggle ms-3 fw-bold"
                onClick={toggleLanguage}
                style={{ cursor: "pointer" }}
              >
                {language}
                <Image
                  src={hamburger}
                  className="img-fluid ps-2"
                  alt="Lang Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

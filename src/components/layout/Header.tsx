"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components";
import GridIcon from "../ui/GridIcon";
import HamburgerIcon from "../icons/HamburgerIcon";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="h-4"></div>
      <header className="bg-black/90 backdrop-blur-sm h-[80px] sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/assets/EMF-logo.png"
                    alt="EMF Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive("/")
                    ? "text-[#f6a91b] bg-[#1e1b15]"
                    : "text-[#a2a09d] hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/pricing")
                    ? "text-[#f6a91b] bg-[#1e1b15]"
                    : "text-[#a2a09d] hover:text-white"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/affiliate"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/affiliate")
                    ? "text-[#f6a91b] bg-[#1e1b15]"
                    : "text-[#a2a09d] hover:text-white"
                }`}
              >
                Affiliate Program
              </Link>
              <Link
                href="/faqs"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/faqs")
                    ? "text-[#f6a91b] bg-[#1e1b15]"
                    : "text-[#a2a09d] hover:text-white"
                }`}
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "text-[#f6a91b] bg-[#1e1b15]"
                    : "text-[#a2a09d] hover:text-white"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                href="/login"
                variant="ghost"
                size="sm"
                className="w-auto h-auto px-0 py-0"
              >
                Login
              </Button>
              <Button
                href="/dashboard"
                variant="primary"
                size="sm"
                className="w-[120px] h-[40px]"
              >
                <GridIcon width={14} height={14} />
                <span>Client Area</span>
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                href="/dashboard"
                variant="outline"
                size="sm"
                className="h-10 w-32 px-4 text-sm gap-1 border-[0.5px]"
              >
                <GridIcon width={14} height={14} />
                <span>Client Area</span>
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-[#f6a91b] transition-colors cursor-pointer bg-[rgba(246,169,28,0.02)] border-[0.5px] border-[rgba(246,169,28,0.6)] shadow-[inset_0px_0px_10px_rgba(246,169,28,0.6)] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center"
                aria-label="Toggle mobile menu"
              >
                <HamburgerIcon isOpen={isMobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Portal - rendered at document body level */}
      {isClient &&
        isMobileMenuOpen &&
        createPortal(
          <div className="md:hidden fixed inset-0 z-[9999] bg-black w-screen h-screen">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-4 py-5">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/assets/EMF-logo.png"
                      alt="EMF Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <div className="flex items-center space-x-2">
                  <Button
                    href="/dashboard"
                    variant="outline"
                    size="sm"
                    className="h-10 w-32 px-4 text-sm gap-1 border-[0.5px]"
                  >
                    <GridIcon width={14} height={14} />
                    <span>Client Area</span>
                  </Button>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:text-[#f6a91b] transition-colors cursor-pointer bg-[rgba(246,169,28,0.02)] border-[0.5px] border-[rgba(246,169,28,0.6)] shadow-[inset_0px_0px_10px_rgba(246,169,28,0.6)] rounded-[8px]"
                    aria-label="Close mobile menu"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 1L13 13M1 13L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 pt-8 space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/affiliate", label: "Affiliate Program" },
                  { href: "/faqs", label: "FAQs" },
                  { href: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-row justify-center items-center p-[8px_10px] gap-6 ${
                      isActive(item.href)
                        ? "bg-[rgba(255,255,255,0.04)] text-[#f6a91b]"
                        : "text-[#a2a09d] hover:text-white"
                    } rounded-lg text-xl font-normal transition-colors mb-2`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-8">
                  <Button
                    href="/pricing"
                    variant="outline"
                    size="lg"
                    className="w-full h-14 text-lg border-[#f6a91b] text-[#f6a91b] hover:bg-[#f6a91b] hover:text-black rounded-xl border"
                  >
                    Get Funded Now
                  </Button>
                </div>
              </nav>

              {/* Bottom Section */}
              <div className="px-6 pb-8">
                {/* Get Funded Now Button */}

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8">
                  {[
                    {
                      href: "#",
                      icon: (
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3379 9.68643L18.5259 2.44043H17.0589L11.6879 8.73143L7.39495 2.44043H2.44495L8.93495 11.9544L2.44495 19.5524H3.91195L9.58595 12.9074L14.1189 19.5524H19.0689L12.3379 9.68643ZM10.3299 12.0374L9.67195 11.0904L4.43995 3.55343H6.69295L10.9139 9.63643L11.5719 10.5834L17.0609 18.4914H14.8079L10.3299 12.0374Z"
                            fill="white"
                          />
                        </svg>
                      ),
                      name: "Twitter",
                    },
                    {
                      href: "#",
                      icon: (
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.698 6.89606C21.651 5.83806 21.48 5.11006 21.235 4.47906C20.982 3.81006 20.593 3.21106 20.083 2.71306C19.585 2.20706 18.981 1.81306 18.32 1.56406C17.686 1.31906 16.962 1.14806 15.903 1.10106C14.837 1.05106 14.498 1.03906 11.793 1.03906C9.08799 1.03906 8.74999 1.05106 7.68699 1.09706C6.62899 1.14406 5.90099 1.31506 5.27099 1.56006C4.60099 1.81306 4.00199 2.20306 3.50399 2.71306C2.99799 3.21106 2.60499 3.81406 2.35499 4.47606C2.10999 5.11006 1.93899 5.83406 1.89199 6.89206C1.84199 7.95906 1.82999 8.29706 1.82999 11.0021C1.82999 13.7071 1.84199 14.0461 1.88799 15.1081C1.93499 16.1671 2.10599 16.8941 2.35199 17.5251C2.60499 18.1941 2.99799 18.7941 3.50399 19.2921C4.00199 19.7981 4.60499 20.1911 5.26699 20.4401C5.90099 20.6851 6.62499 20.8561 7.68399 20.9031C8.74599 20.9501 9.08499 20.9611 11.789 20.9611C14.494 20.9611 14.833 20.9501 15.895 20.9031C16.954 20.8561 17.682 20.6851 18.312 20.4401C18.974 20.1841 19.576 19.7921 20.078 19.2901C20.579 18.7881 20.971 18.1871 21.227 17.5251C21.472 16.8911 21.643 16.1671 21.69 15.1081C21.737 14.0461 21.749 13.7071 21.749 11.0021C21.749 8.29706 21.745 7.95906 21.698 6.89606ZM19.904 15.0301C19.861 16.0031 19.698 16.5291 19.561 16.8791C19.227 17.7471 18.538 18.4361 17.67 18.7701C17.32 18.9071 16.79 19.0701 15.821 19.1131C14.77 19.1601 14.455 19.1711 11.797 19.1711C9.13899 19.1711 8.81999 19.1601 7.77299 19.1131C6.79999 19.0701 6.27499 18.9071 5.92399 18.7701C5.49199 18.6111 5.09899 18.3581 4.77999 18.0271C4.44899 17.7041 4.19599 17.3151 4.03699 16.8831C3.90099 16.5331 3.73699 16.0031 3.69399 15.0341C3.64799 13.9831 3.63599 13.6681 3.63599 11.0101C3.63599 8.35206 3.64799 8.03306 3.69399 6.98606C3.73699 6.01306 3.90099 5.48706 4.03699 5.13706C4.19599 4.70506 4.44899 4.31206 4.78399 3.99306C5.10699 3.66206 5.49599 3.40906 5.92799 3.25006C6.27799 3.11306 6.80799 2.95006 7.77699 2.90706C8.82799 2.86006 9.14299 2.84906 11.801 2.84906C14.463 2.84906 14.778 2.86006 15.825 2.90706C16.798 2.95006 17.324 3.11306 17.674 3.25006C18.106 3.40906 18.499 3.66206 18.818 3.99306C19.149 4.31606 19.402 4.70506 19.561 5.13706C19.698 5.48706 19.861 6.01706 19.904 6.98606C19.951 8.03706 19.962 8.35206 19.962 11.0101C19.962 13.6681 19.951 13.9791 19.904 15.0301Z"
                            fill="white"
                          />
                          <path
                            d="M11.794 5.88528C8.96802 5.88528 6.67603 8.17828 6.67603 11.0033C6.67603 13.8293 8.96802 16.1213 11.794 16.1213C14.619 16.1213 16.911 13.8293 16.911 11.0033C16.911 8.17828 14.619 5.88528 11.794 5.88528ZM11.794 14.3233C9.96102 14.3233 8.47403 12.8363 8.47403 11.0033C8.47403 9.17028 9.96102 7.68328 11.794 7.68328C13.627 7.68328 15.113 9.17028 15.113 11.0033C15.113 12.8363 13.627 14.3233 11.794 14.3233ZM18.309 5.68328C18.309 6.34328 17.774 6.87828 17.114 6.87828C16.454 6.87828 15.919 6.34328 15.919 5.68328C15.919 5.02328 16.454 4.48828 17.114 4.48828C17.774 4.48828 18.309 5.02328 18.309 5.68328Z"
                            fill="white"
                          />
                        </svg>
                      ),
                      name: "Instagram",
                    },
                    {
                      href: "#",
                      icon: (
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_144_4395)">
                            <path
                              d="M18.269 4.24895C16.939 3.62895 15.499 3.17895 13.998 2.91895C13.985 2.91895 13.972 2.92095 13.96 2.92595C13.948 2.93095 13.937 2.93895 13.928 2.94895C13.748 3.27895 13.539 3.70895 13.399 4.03895C11.807 3.79895 10.189 3.79895 8.59801 4.03895C8.45801 3.69895 8.24801 3.27895 8.05801 2.94895C8.04801 2.92895 8.01801 2.91895 7.98801 2.91895C6.48801 3.17895 5.05801 3.62895 3.71801 4.24895C3.70801 4.24895 3.69801 4.25895 3.68801 4.26895C0.968011 8.33794 0.218011 12.2969 0.588012 16.2149C0.588012 16.2349 0.598012 16.2559 0.618012 16.2649C2.41801 17.5849 4.14801 18.3849 5.85801 18.9149C5.88801 18.9249 5.91801 18.9149 5.92801 18.8949C6.32801 18.3449 6.68801 17.7649 6.99801 17.1549C7.01801 17.1149 6.99801 17.0749 6.95801 17.0649C6.38801 16.8449 5.84801 16.5849 5.31801 16.2849C5.27801 16.2649 5.27801 16.2059 5.30801 16.1749C5.41801 16.0959 5.52801 16.0059 5.63801 15.9259C5.65801 15.9059 5.68801 15.9059 5.70801 15.9159C9.14801 17.4849 12.858 17.4849 16.259 15.9159C16.279 15.9059 16.309 15.9059 16.329 15.9259C16.439 16.0159 16.549 16.0959 16.659 16.1859C16.699 16.2149 16.699 16.2759 16.649 16.2959C16.129 16.6049 15.579 16.8549 15.009 17.0749C14.969 17.0849 14.959 17.1349 14.969 17.1649C15.289 17.7749 15.649 18.3549 16.039 18.9049C16.069 18.9149 16.099 18.9249 16.129 18.9149C17.849 18.3849 19.579 17.5849 21.379 16.2649C21.399 16.2559 21.409 16.2349 21.409 16.2149C21.849 11.6869 20.679 7.75795 18.309 4.26895C18.299 4.25895 18.289 4.24895 18.269 4.24895ZM7.51801 13.8259C6.48801 13.8259 5.62801 12.8759 5.62801 11.7069C5.62801 10.5369 6.46801 9.58695 7.51801 9.58695C8.57801 9.58695 9.41801 10.5469 9.40801 11.7069C9.40801 12.8759 8.56801 13.8259 7.51801 13.8259ZM14.489 13.8259C13.459 13.8259 12.599 12.8759 12.599 11.7069C12.599 10.5369 13.439 9.58695 14.489 9.58695C15.549 9.58695 16.389 10.5469 16.379 11.7069C16.379 12.8759 15.549 13.8259 14.489 13.8259Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_4395">
                              <rect
                                width="22"
                                height="22"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                      name: "Discord",
                    },
                    {
                      href: "#",
                      icon: (
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_144_4401)">
                            <path
                              d="M18.377 4.06071C18.603 3.96471 18.851 3.93271 19.095 3.96571C19.338 3.99871 19.569 4.09571 19.762 4.24771C19.955 4.40071 20.103 4.60171 20.192 4.83071C20.281 5.05971 20.307 5.30871 20.267 5.55071L18.188 18.1617C17.986 19.3777 16.652 20.0757 15.536 19.4697C14.603 18.9627 13.217 18.1817 11.97 17.3667C11.347 16.9587 9.43696 15.6527 9.67196 14.7227C9.87396 13.9287 13.082 10.9417 14.915 9.16671C15.635 8.46871 15.307 8.06671 14.457 8.70771C12.346 10.3017 8.95896 12.7237 7.83896 13.4057C6.85096 14.0077 6.33496 14.1097 5.71896 14.0077C4.59596 13.8207 3.55296 13.5307 2.70296 13.1777C1.55296 12.7007 1.60896 11.1207 2.70196 10.6607L18.377 4.06071Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_4401">
                              <rect
                                width="22"
                                height="22"
                                fill="white"
                                transform="translate(0.25)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                      name: "Telegram",
                    },
                    {
                      href: "#",
                      icon: (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.6652 6.28156C23.5398 5.22964 22.5496 4.22323 21.5128 4.0877C15.1952 3.3028 8.80579 3.3028 2.4892 4.0877C1.45144 4.22222 0.461219 5.23065 0.334786 6.28156C-0.11127 10.0806 -0.11127 13.9181 0.334786 17.7172C0.461219 18.7691 1.45144 19.7775 2.4892 19.912C8.80579 20.6969 15.1952 20.6969 21.5128 19.912C22.5496 19.7775 23.5398 18.7691 23.6652 17.7172C24.1112 13.9181 24.1112 10.0806 23.6652 6.28156ZM10.0003 15.9997V8.00105L16.0003 12.0014L10.0003 16.0007V15.9997Z"
                            fill="white"
                          />
                        </svg>
                      ),
                      name: "YouTube",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                      aria-label={social.name}
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.03)",
                        width: "34px",
                        height: "34px",
                        background:
                          "linear-gradient(130deg, rgba(246, 169, 28, 0) 0%, rgba(246, 169, 28, 0.1) 100%)",
                        borderRadius: "8px",
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

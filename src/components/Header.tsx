"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, Users, HelpCircle, MessageSquare, Download } from "lucide-react";

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";
  const isServices = pathname?.startsWith("/services");
  const isGallery = pathname?.startsWith("/gallery");
  const isTeam = pathname?.startsWith("/team");
  const isTestimonials = pathname?.startsWith("/testimonials");
  const isEc = pathname === "/ec" || pathname?.startsWith("/ec");
  const isProjects = pathname === "/projects" || pathname?.startsWith("/projects");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a090e]/95 backdrop-blur-xl border-b border-white/[0.12] py-3.5 sm:py-4 shadow-2xl shadow-black/80"
          : "bg-[#0a090e]/75 backdrop-blur-md border-b border-white/[0.06] py-4 sm:py-5"
      }`}
    >
      <div className={`${isHome ? "home-masthead" : "max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"} flex items-center justify-between gap-4`}>
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="relative flex items-center space-x-2.5 sm:space-x-3 transition-transform hover:opacity-95 active:scale-98 group shrink-0"
          aria-label="RFP Digital Productions – Home"
        >
          <img
            src="/medien/logo/rfp-emblem.png"
            alt="RFP Emblem"
            className="h-10 sm:h-12 md:h-13 w-auto object-contain filter drop-shadow-[0_2px_18px_rgba(212,175,55,0.55)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
              <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-[0.16em] text-white font-mono">
                RFP
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase shadow-sm whitespace-nowrap">
                MEDIA &amp; FILMS
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] text-[#D4AF37] font-mono uppercase font-bold mt-1">
              Digital Productions
            </span>
          </div>
        </Link>

        {/* Focused Desktop Navigation: About, Services, Work, Election Campaigns, Contact + More ▾ */}
        <nav className="hidden xl:flex items-center gap-2 2xl:gap-4 shrink-0" aria-label="Main Navigation">
          {/* 1. About */}
          <Link
            href={isHome ? "#about" : "/#about"}
            className="px-2 xl:px-2 py-2 text-[14px] xl:text-[15px] text-white/90 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold whitespace-nowrap"
          >
            About
          </Link>

          {/* 2. Services */}
          <Link
            href="/services"
            className={`px-2 xl:px-2 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold whitespace-nowrap ${
              isServices
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/90 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Services
          </Link>

          {/* 3. Work */}
          <Link
            href="/projects"
            className={`px-2 xl:px-2 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold whitespace-nowrap ${
              isProjects
                ? "text-white bg-white/[0.12] border border-[#a89bfa]/50 shadow-[0_0_20px_rgba(168,155,250,0.25)]"
                : "text-white/90 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            Work
          </Link>

          {/* 4. Election Campaigns */}
          <Link
            href="/ec"
            className={`h-10 px-4 text-[15px] leading-none whitespace-nowrap rounded-full transition-colors duration-200 font-semibold tracking-normal inline-flex items-center justify-center shrink-0 ${
              isEc
                ? "text-[#F3E5AB] bg-[#D4AF37]/15"
                : "text-[#E6C665] hover:text-[#FFF8DC] bg-[#D4AF37]/[0.06] hover:bg-[#D4AF37]/15"
            }`}
          >
            <span>Election Campaigns</span>
          </Link>

          {/* 5. Contact */}
          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            className="px-2 xl:px-2 py-2 text-[14px] xl:text-[15px] text-white/90 hover:text-white rounded-xl hover:bg-white/[0.08] transition-all font-semibold whitespace-nowrap"
          >
            Contact
          </Link>

          {/* 6. More ▾ Dropdown (Team, Gallery, Testimonials, FAQ, Company Profile) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`px-3 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all font-semibold flex items-center gap-1 whitespace-nowrap ${
                isTeam || isGallery || isTestimonials || moreDropdownOpen
                  ? "text-white bg-white/[0.12]"
                  : "text-white/80 hover:text-white hover:bg-white/[0.08]"
              }`}
              aria-expanded={moreDropdownOpen}
              aria-label="More navigation options"
            >
              <span>More</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 py-2 rounded-2xl bg-[#14121b] border border-white/[0.14] shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link
                  href="/team"
                  onClick={() => setMoreDropdownOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    isTeam ? "text-[#a89bfa] bg-white/[0.06] font-semibold" : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <Users className="w-4 h-4 text-[#a89bfa]" />
                  <span>Team &amp; Leadership</span>
                </Link>

                <Link
                  href="/gallery"
                  onClick={() => setMoreDropdownOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    isGallery ? "text-[#a89bfa] bg-white/[0.06] font-semibold" : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-[#E6C665]" />
                  <span>Production Gallery</span>
                </Link>

                <Link
                  href="/testimonials"
                  onClick={() => setMoreDropdownOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    isTestimonials ? "text-[#a89bfa] bg-white/[0.06] font-semibold" : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-[#a89bfa]" />
                  <span>Testimonials</span>
                </Link>

                <Link
                  href={isHome ? "#faq" : "/#faq"}
                  onClick={() => setMoreDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-white/85 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-white/60" />
                  <span>Production FAQs</span>
                </Link>

                <div className="my-1.5 border-t border-white/[0.08]" />

                <a
                  href="/rfp-digital-productions-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMoreDropdownOpen(false)}
                  className="w-full text-left flex items-center justify-between px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#E6C665] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-3.5 h-3.5" />
                    <span>Company Profile</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40">PDF</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions - Guaranteed unclipped CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <Link
            href={isHome ? "#kontakt" : "/#kontakt"}
            onClick={(e) => {
              if (isHome && onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="group hidden sm:inline-flex items-center space-x-1.5 px-4 xl:px-5 py-2.5 rounded-full bg-white hover:bg-[#f4f2f7] text-[#0e0d12] text-xs xl:text-sm font-bold tracking-wide shadow-xl hover:shadow-[#7c6af2]/30 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 top-20">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative bg-[#0e0d12]/98 border-b border-white/[0.1] p-6 backdrop-blur-2xl shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top-4 duration-250">
            <nav className="flex flex-col space-y-3">
              {/* 1. About */}
              <Link
                href={isHome ? "#zusammenarbeit" : "/#zusammenarbeit"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                About
              </Link>

              {/* 2. Project */}
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-xl transition-all flex items-center justify-between ${
                  isProjects
                    ? "text-[#a89bfa] bg-white/[0.08] font-bold"
                    : "text-white/90 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>Projects</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#6b54ee]/20 text-[#a89bfa] border border-[#6b54ee]/30">
                  All Work
                </span>
              </Link>

              {/* 3. Gallery */}
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#a89bfa] hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a89bfa]" />
                  <span>Gallery</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7c6af2]/20 text-[#a89bfa] border border-[#7c6af2]/30">
                  New
                </span>
              </Link>

              {/* 4. Services */}
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Services</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              {/* 5. Team */}
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Team</span>
                <span className="text-xs text-[#a89bfa]">✦</span>
              </Link>

              {/* 6. Testimonials */}
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Testimonials</span>
                <span className="text-xs text-[#a89bfa]">★</span>
              </Link>

              {/* 7. FAQ */}
              <Link
                href={isHome ? "#faq" : "/#faq"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Production FAQs
              </Link>

              {/* 8. Contact */}
              <Link
                href={isHome ? "#kontakt" : "/#kontakt"}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-white py-2 px-3 rounded-xl hover:bg-white/[0.04] transition-all"
              >
                Contact
              </Link>

              {/* 9. Download Profile */}
              <a
                href="/rfp-digital-productions-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-sm font-mono uppercase tracking-wider text-[#E6C665] py-2 px-3 rounded-xl hover:bg-white/[0.04] flex items-center justify-between transition-all"
              >
                <span>Download Company Profile (PDF)</span>
                <Download className="w-4 h-4" />
              </a>

              {/* Election Campaign */}
              <Link
                href="/ec"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2.5 px-3 rounded-xl flex items-center justify-between transition-all ${
                  isEc
                    ? "text-[#F3E5AB] bg-[#D4AF37]/25 border border-[#D4AF37]"
                    : "text-[#E6C665] bg-[#D4AF37]/10 border border-[#D4AF37]/35 hover:bg-[#D4AF37]/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold tracking-wide">Election Campaign</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/30">Hub</span>
                </div>
                <span className="text-xs text-[#E6C665]">✦</span>
              </Link>

              <div className="pt-3 border-t border-white/[0.08]">
                <Link
                  href={isHome ? "#kontakt" : "/#kontakt"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full bg-[#f4f2f7] hover:bg-white text-[#0e0d12] text-xs font-bold uppercase tracking-wider shadow-lg active:scale-98 transition-all"
                >
                  <span>Discuss Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

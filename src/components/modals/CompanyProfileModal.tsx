"use client";

import React, { useEffect } from "react";
import { X, Printer, Download, Film } from "lucide-react";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#14121a] border border-white/[0.15] shadow-2xl rounded-3xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-[#f4f2f7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.1] bg-[#0c0b10] sticky top-0 z-20 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6C665] font-semibold px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/35">
              Official Company Profile
            </span>
            <span className="text-xs text-white/50 font-mono hidden sm:inline">
              RFP Digital Productions · Established 2009
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono font-medium transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#E6C665]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Profile Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 print:p-0 print:bg-white print:text-black">
          {/* Cover & Brand Header */}
          <div className="border-b border-white/[0.1] pb-8 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-3.5">
                <img
                  src="/medien/logo/rfp-emblem.png"
                  alt="RFP Emblem"
                  className="h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-2xl tracking-[0.16em] text-white font-mono print:text-black">
                      RFP
                    </span>
                    <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase print:text-black print:border-black">
                      MEDIA &amp; FILMS
                    </span>
                  </div>
                  <h1 id="profile-title" className="text-xs tracking-[0.25em] text-[#D4AF37] font-mono uppercase font-bold mt-1 print:text-black">
                    Digital Productions
                  </h1>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-white/70 space-y-1 print:text-black">
                <div className="text-[#E6C665] font-semibold print:text-black">Established 2009 • New Delhi, India</div>
                <div>Alumni of AJK MCRC, Jamia Millia Islamia</div>
                <div>Reg. Office: 156D, First Floor, Sarai Julena (NFC)</div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3 print:text-black">
                Executive Production &amp; Campaign Overview
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed max-w-3xl print:text-black">
                RFP Digital Productions is a comprehensive media production and election campaign management firm based in New Delhi. Over 17+ years of continuous operations, we have engineered over 1,000+ corporate films, institutional documentaries, televised campaigns, mobile LED van operations, and digital platforms for premier educational institutions, public-sector organizations, corporate brands, and legislative representatives across India.
              </p>
            </div>
          </div>

          {/* Core Metrics Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] print:border-black/20 print:bg-gray-100">
            <div>
              <div className="text-2xl font-bold font-mono text-[#E6C665] print:text-black">17+ Years</div>
              <div className="text-xs text-white/60 font-mono uppercase print:text-black">Media Excellence (Since 2009)</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white print:text-black">1,000+</div>
              <div className="text-xs text-white/60 font-mono uppercase print:text-black">Films &amp; TV Ads Produced</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[#a89bfa] print:text-black">45+</div>
              <div className="text-xs text-white/60 font-mono uppercase print:text-black">Campaign Outreach Tours</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white print:text-black">15+ States</div>
              <div className="text-xs text-white/60 font-mono uppercase print:text-black">Pan-India Field Execution</div>
            </div>
          </div>

          {/* Core Service Capabilities */}
          <div>
            <h3 className="text-lg font-bold font-serif text-white mb-4 flex items-center gap-2 print:text-black">
              <Film className="w-4 h-4 text-[#a89bfa] print:text-black" />
              <span>Core Service Disciplines</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2 print:border-black/20">
                <div className="font-bold text-white text-sm print:text-black">1. Corporate &amp; Institutional Films</div>
                <p className="text-white/70 print:text-black">
                  Cinema-grade 4K brand anthems, campus showcase documentaries, faculty research profiles, executive keynotes, and investor AGM presentations.
                </p>
                <div className="text-[11px] text-[#a89bfa] print:text-black">Timeline: 2–3 weeks • 2 Structured Review Rounds</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2 print:border-black/20">
                <div className="font-bold text-white text-sm print:text-black">2. Documentary &amp; Social Impact</div>
                <p className="text-white/70 print:text-black">
                  Empathetic field storytelling, historical archives, CSR project documentation, healthcare relief chronicles, and university golden jubilees.
                </p>
                <div className="text-[11px] text-[#a89bfa] print:text-black">Full research &amp; multilingual subtitles in 12+ languages</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2 print:border-black/20">
                <div className="font-bold text-white text-sm print:text-black">3. Election Campaign Management</div>
                <p className="text-white/70 print:text-black">
                  Turnkey constituency operations: mobile LED display vans (GPS tracked), studio-recorded prachar songs, Nukkad Natak street theatre, and 24h war-room rally edits.
                </p>
                <div className="text-[11px] text-[#E6C665] print:text-black">Compliant with ECI Model Code guidelines</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2 print:border-black/20">
                <div className="font-bold text-white text-sm print:text-black">4. Web Development &amp; Digital Platforms</div>
                <p className="text-white/70 print:text-black">
                  Modern Next.js web applications, interactive campaign headquarters, candidate digital portals, fast page loads, and technical SEO architecture.
                </p>
                <div className="text-[11px] text-[#a89bfa] print:text-black">90+ Platforms Built • Lighthouse 100/100</div>
              </div>
            </div>
          </div>

          {/* Esteemed Client Institutions */}
          <div>
            <h3 className="text-lg font-bold font-serif text-white mb-3 print:text-black">
              Select Institutional &amp; Enterprise Clients
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-white/80 print:text-black">
              <div>• Unilever</div>
              <div>• Sports Authority of India (SAI)</div>
              <div>• IIT Roorkee</div>
              <div>• Haryana Police</div>
              <div>• National Archives of India</div>
              <div>• PM Fasal Bima Yojana</div>
              <div>• Acharya Narendra Dev College</div>
              <div>• Modern Delhi Public School (MDPS)</div>
              <div>• Samsung Electronics</div>
              <div>• Jamia Hamdard University</div>
              <div>• Smile India Trust</div>
              <div>• GRC India</div>
            </div>
          </div>

          {/* Contact & Inquiries Footer */}
          <div className="border-t border-white/[0.1] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono print:border-black/20">
            <div className="space-y-1 text-white/70 print:text-black">
              <div><strong className="text-white print:text-black">RFP Digital Productions</strong></div>
              <div>156D, First Floor, Sarai Julena (NFC), New Delhi – 110025</div>
              <div>Direct / WhatsApp: +91 97117 91403 | Desk: +91 95990 99320</div>
              <div>Email: info@rfpdigital.com | Web: https://www.rfpdigital.com</div>
            </div>

            <div className="text-left sm:text-right print:hidden">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E6C665] text-black font-bold uppercase tracking-wider text-xs shadow-lg active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Company Profile PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

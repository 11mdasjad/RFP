"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useData } from "@/context/DataContext";

interface KontaktProps {
  prefilledTopic?: string;
}

export const Kontakt: React.FC<KontaktProps> = ({ prefilledTopic }) => {
  const { addInquiry } = useData();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    topic: prefilledTopic || "Corporate Films",
    location: "",
    timeline: "2-4 weeks",
    budget: "To be discussed",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Save inquiry to DataContext
    try {
      addInquiry({
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim() || undefined,
        discipline: `${formState.topic} | ${formState.location ? formState.location + " | " : ""}${formState.timeline} | ${formState.budget}`,
        message: formState.message.trim(),
      });
    } catch (err) {
      console.error("Error submitting inquiry", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      topic: prefilledTopic || "Corporate Films",
      location: "",
      timeline: "2-4 weeks",
      budget: "To be discussed",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="kontakt" className="site-container home-section">
      {/* Signature Radiant Contact Card */}
      <div className="relative rounded-3xl p-5 sm:p-8 lg:p-10 bg-[#17161d] border border-white/[0.12] overflow-hidden shadow-2xl">
        {/* Violet radiant background aura */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7c6af2]/25 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#6b54ee]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Person & Information */}
          <div className="min-w-0">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
              Get in Touch
            </span>

            <h2 className="home-heading text-[#f4f2f7] mb-6 max-w-md">
              Let&apos;s talk about your next project.
            </h2>

            <p className="text-base text-[#f4f2f7b8] leading-relaxed mb-8 max-w-lg">
              Whether it is a corporate film, an institutional documentary, an election campaign, or a custom digital platform,{" "}
              <b className="text-white font-semibold">RFP Digital Productions</b> offers end-to-end video production services, from concept development and scripting to production, post-production, graphics, and digital distribution.
            </p>

            {/* Production House Info Box */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-8 max-w-md">
              <img
                src="/medien/logo/rfp-emblem.png"
                alt="RFP Emblem"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.5)] flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 leading-none">
                  <span className="font-extrabold text-xl tracking-[0.16em] text-white font-mono">
                    RFP
                  </span>
                  <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/45 tracking-wider uppercase">
                    MEDIA &amp; FILMS
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#D4AF37] font-mono uppercase font-bold mt-1.5">
                  Digital Productions
                </span>
                <span className="text-xs text-[#a89bfa] block mt-1">
                  156D, First Floor, Sarai Julena (NFC), New Delhi – 110025
                </span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              <a
                href="mailto:info@rfpdigital.com"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white hover:bg-white/90 text-[#0e0d12] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@rfpdigital.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="tel:+919711791403"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] text-[#f4f2f7] text-xs font-medium tracking-wide transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>Direct: +91 97117 91403</span>
              </a>

              <a
                href="tel:+919599099320"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] text-[#f4f2f7] text-xs font-medium tracking-wide transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>Desk: +91 95990 99320</span>
              </a>

              <a
                href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20would%20like%20to%20discuss%20a%20project%20%2F%20campaign%20consultation.%20Please%20connect%20with%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-medium tracking-wide transition-all"
              >
                <span>WhatsApp: +91 97117 91403</span>
              </a>
            </div>
          </div>

          {/* Right Column: Project Brief Inquiry Form */}
          <div className="min-w-0 bg-[#0e0d12]/70 rounded-2xl p-6 sm:p-8 border border-white/[0.08] backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="text-lg font-bold text-white">
                Submit Project Brief
              </h3>
              <span className="text-[11px] font-mono text-[#a89bfa] px-2.5 py-1 rounded-full bg-[#a89bfa]/10 border border-[#a89bfa]/20">
                24h Response SLA
              </span>
            </div>
            <p className="text-xs text-[#f4f2f780] mb-6">
              Share your project scope, location, and timeline. Our directors review every brief and return a tailored proposal within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-white/[0.05] border border-[#a89bfa]/30 text-center animate-in fade-in duration-300 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#a89bfa] mx-auto" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                    Your project brief has been received. Our executive production team reviews every inquiry and typically responds within <strong className="text-white">24 hours</strong> with an initial consultation and tailored quote.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-xs font-medium text-white transition-all"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 99999 ..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#17161d] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white transition-colors"
                    >
                      <option value="Corporate Films">Corporate Films</option>
                      <option value="Documentary Films">Documentary Films</option>
                      <option value="AI Video Production">AI Video Production</option>
                      <option value="Election Campaign Services">Election Campaign Services</option>
                      <option value="Social Media & Digital Marketing">Social Media & Digital Marketing</option>
                      <option value="Photography & Event Coverage">Photography & Event Coverage</option>
                      <option value="Website Development & Digital Platforms">Website Development & Digital Platforms</option>
                      <option value="Other">Other (Custom Requirement)</option>
                    </select>
                  </div>
                </div>

                {/* Optional Location, Timeline & Budget Fields for a richer project brief */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Location / City (Optional)
                    </label>
                    <input
                      type="text"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      placeholder="e.g. Delhi NCR, Patna..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Target Timeline (Optional)
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#17161d] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white transition-colors"
                    >
                      <option value="Within 2 weeks">Within 2 weeks (Urgent)</option>
                      <option value="2-4 weeks">2 to 4 weeks (Standard)</option>
                      <option value="1-3 months">1 to 3 months</option>
                      <option value="Flexible">Flexible / Planning stage</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 xl:col-span-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                      Budget Range (Optional)
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#17161d] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white transition-colors"
                    >
                      <option value="To be discussed">To be discussed</option>
                      <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                      <option value="₹1L - ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
                      <option value="₹3L - ₹10 Lakhs">₹3 Lakhs – ₹10 Lakhs</option>
                      <option value="₹10 Lakhs+">₹10 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5">
                    Project Description / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly outline your goals, target audience, preferred style, or initial questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#a89bfa] focus:outline-none text-base sm:text-sm text-white placeholder-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#6b54ee] hover:bg-[#7c6af2] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#6b54ee]/30 active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Brief…</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


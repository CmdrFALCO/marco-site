"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const MODULES = [
  {
    id: "hv-battery",
    title: "HV Battery Strategy",
    description:
      "Drives the strategic direction of next-generation HV battery systems across Mercedes-Benz electric platforms. Aligns chemistry roadmaps, module and pack architecture choices, supplier capabilities, and long-term readiness planning while keeping performance, safety, durability, and industrialization constraints in view.",
  },
  {
    id: "edrive",
    title: "eDrive & Powertrain Architecture",
    description:
      "Connects battery development with eDrive, transmission concepts, thermal systems, and vehicle integration. Balances efficiency, packaging, NVH, and lifecycle requirements, applying automated design-space exploration experience to select robust system layouts.",
  },
  {
    id: "simulation",
    title: "Simulation & Data Analytics",
    description:
      "Applies model-based development, multi-domain simulation, and analytics to improve early decisions. Builds structural, thermal, and drivetrain workflows to predict behavior and reduce reliance on late testing, turning complex data into quantitative guidance.",
  },
  {
    id: "leadership",
    title: "Leadership & Coordination",
    description:
      "Leads cross-functional programs spanning R&D, procurement, quality, production, and platform teams. Provides clear structure and decision paths in fluid early phases, drives alignment at milestones, and represents HV battery topics in key technical and strategic forums.",
  },
] as const;

const EXPERIENCE = [
  {
    role: "Projektleiter Vorentwicklung HV-Batterie",
    company: "Mercedes-Benz AG",
    period: "Jun 2022 - Present",
    location: "Stuttgart, Hybrid",
    bullets: [
      "Leads early-phase development of high-voltage battery systems for upcoming Mercedes electric platforms.",
      "Defines battery concept direction, interfaces, and long-term technology pathways.",
      "Aligns R&D, procurement, quality, thermal, and eDrive teams on milestones and readiness.",
      "Drives supplier communication and ensures technical feasibility across multiple domains.",
      "Provides structured decision-making in highly dynamic early project phases.",
      "Oversees performance, cost, safety, and industrialization considerations at concept level.",
    ],
  },
  {
    role: "Entwicklungsingenieur Vorentwicklung eDrive",
    company: "Mercedes-Benz AG",
    period: "Mar 2018 - May 2022",
    location: "Stuttgart, Hybrid",
    bullets: [
      "Responsible for concept development of electrified drive modules and supporting systems.",
      "Designed and evaluated eDrive concepts, architectures, and module variants.",
      "Used simulation, modeling, and optimization to assess performance and efficiency.",
      "Integrated mechanical, thermal, and system constraints into eDrive architecture.",
      "Collaborated with cross-functional teams (NVH, CAE, transmission, thermal).",
      "Applied Python/C#/GitHub workflows to build internal tools and analysis scripts.",
    ],
  },
  {
    role: "Entwicklungsingenieur Powertrain-Architektur",
    company: "Daimler AG",
    period: "Jan 2014 - Feb 2018",
    location: "Stuttgart, On-site",
    bullets: [
      "Worked on hybridized and electrified powertrain architecture for future platforms.",
      "Developed system concepts and packaging strategies for hybrid powertrains.",
      "Assessed interfaces across engine, transmission, HV system, cooling, and vehicle layout.",
      "Ensured architectural readiness and alignment with cross-departmental partners.",
      "Supported early-phase vehicle development and feasibility assessments.",
    ],
  },
  {
    role: "Trainee - CAReer Programm",
    company: "Mercedes-Benz AG",
    period: "Oct 2012 - Dec 2013",
    location: "Stuttgart, Sindelfingen & Charleston (SC), On-site",
    bullets: [
      "Rotational program across multiple engineering domains.",
      "Exposure to vehicle development, production planning, and drivetrain systems.",
      "Gained cross-department understanding and early leadership experience.",
      "Supported prototype builds and evaluations across vehicle programs.",
    ],
  },
  {
    role: "Praktikant Gesamtfahrzeugprototyp",
    company: "TUMCREATE",
    period: "Oct 2011 - Dec 2011",
    location: "Singapore, On-site",
    bullets: [
      "Worked on vehicle prototype development tasks.",
      "Contributed to concept studies using CATIA.",
      "Supported multidisciplinary teams in research environments.",
    ],
  },
  {
    role: "Praktikant Konstruktion & Versuch Antriebsstrang Motorsport",
    company: "Porsche AG",
    period: "Mar 2009 - Aug 2009",
    location: "Weissach, On-site",
    bullets: [
      "Assisted drivetrain development for motorsport applications.",
      "Conducted test support, CAD modeling, and component analysis.",
      "Gained early hands-on experience in high-performance engineering environments.",
    ],
  },
] as const;

const NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Experience", id: "experience" },
  { label: "Focus Areas", id: "focus-areas" },
  { label: "Research", id: "research" },
  { label: "Contact", id: "contact" },
] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % MODULES.length);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setActiveIndex((prev) => (prev - 1 + MODULES.length) % MODULES.length);
      } else if (event.key === "Enter") {
        scrollToSection("focus-areas");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollToSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.4 },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = useMemo(() => NAV_ITEMS, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitError(null);
      setSubmitSuccess(false);
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, company, email, message }),
        });
        const data = await response.json().catch(() => null);

        if (response.ok && data?.ok) {
          setSubmitSuccess(true);
          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
        } else {
          const errorMessage =
            data?.error || "Something went wrong. Please try again later.";
          setSubmitError(errorMessage);
        }
      } catch (error) {
        console.error("Contact form submit error", error);
        setSubmitError("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [company, email, message, name],
  );

  return (
    <div className="space-y-12 md:space-y-16">
          <header className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-slate-200">
                MG
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm max-w-3xl mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className={`rounded-full border px-3 md:px-4 py-1.5 transition-colors ${
                      isActive
                        ? "border-slate-200 bg-slate-100 text-slate-900"
                        : "border-slate-700/70 bg-slate-900/60 text-slate-200/85 hover:border-slate-400 hover:text-slate-50"
                    }`}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </header>

          <section className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr] lg:items-start lg:gap-10">
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-slate-400">
                  Project Lead - HV Battery Pre-Development
                </p>
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
                    Dr.-Ing. Marco Giannantonio
                  </h1>
                  <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-slate-400">
                    HV battery and electrified powertrain strategy at Mercedes-Benz AG
                  </p>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-200/90">
                  Driving high-voltage battery pre-development, systems integration, and technology scouting to translate
                  strategic electrification goals into rigorous engineering roadmaps for next-generation Mercedes-Benz
                  vehicles.
                </p>
                <p className="text-sm text-slate-400">Current focus: {MODULES[activeIndex].title}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/60 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-slate-300 hover:bg-slate-800 transition-colors"
                    href="https://www.linkedin.com/in/dr-ing-marco-giannantonio-518383140/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open LinkedIn profile
                  </a>
                  <button
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/60 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-slate-300 hover:bg-slate-800 transition-colors"
                    type="button"
                  >
                    View profile overview
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {MODULES.map((card, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.button
                      key={card.id}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      tabIndex={0}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                      }}
                      className={`rounded-xl border border-white/6 bg-slate-900/70 px-4 md:px-5 py-4 md:py-5 text-left shadow-[0_14px_30px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isActive
                          ? "ring-1 ring-accent bg-slate-800/70"
                          : "hover:border-slate-500/70 hover:bg-slate-800/50"
                      }`}
                    >
                      <div className="max-w-3xl">
                        <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-2">{card.title}</h3>
                        <p className="text-xs md:text-sm leading-relaxed text-slate-200/90">{card.description}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="space-y-12 md:space-y-14">
            <section id="overview" className="scroll-mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-3 md:space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Overview</p>
                  <h2 className="text-lg md:text-xl font-semibold text-slate-50">Executive Summary</h2>
                  <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-200/90">
                    <p>
                      Marco Giannantonio is a senior R&D engineer focused on high-voltage battery systems and long-term
                      electrification strategy at Mercedes-Benz. His work bridges technical depth with cross-functional
                      coordination, from early concept definition to platform-level industrialization.
                    </p>
                    <p>
                      He steers battery technology roadmaps, aligns suppliers and internal teams, and ensures that cell,
                      module, and pack decisions support both performance targets and long-term cost, safety, and
                      sustainability goals. His experience covers eDrive architecture, battery thermal design, and
                      simulation-based validation workflows used across multiple vehicle lines.
                    </p>
                    <p>
                      With a background that combines engineering rigor and leadership in complex development programs,
                      he helps shape the next generation of Mercedes electric platforms - balancing innovation,
                      feasibility, and strategic direction to deliver reliable, scalable solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <section id="experience" className="scroll-mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Experience</p>
                  <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                    Experience Timeline - Dr.-Ing. Marco Giannantonio
                  </h2>
                </div>
                <div className="space-y-4 md:space-y-5 mt-4">
                  {EXPERIENCE.map((entry) => (
                    <div
                      key={`${entry.role}-${entry.period}`}
                      className="space-y-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4 md:px-5 md:py-5"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-50">{entry.role}</p>
                        <p className="text-xs text-slate-300">{entry.company}</p>
                        <p className="text-xs text-slate-400">
                          {entry.period} - {entry.location}
                        </p>
                      </div>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-slate-200/85">
                        {entry.bullets.map((line) => (
                          <li key={line} className="leading-relaxed">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="focus-areas" className="scroll-mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Focus Areas
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold text-slate-50">Core Domains</h2>
                  </div>

                  <div className="space-y-4 md:space-y-5">
                    {MODULES.map((module) => (
                      <div
                        key={module.id}
                        className="rounded-xl border border-white/10 bg-slate-900/70 px-4 md:px-5 py-4 md:py-5"
                      >
                        <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-2">{module.title}</h3>
                        <p className="text-xs md:text-sm leading-relaxed text-slate-200/90">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            <section id="research" className="scroll-mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Research & PhD</p>
                  <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                    Automatisierter Variantenentwurf elektrifizierter Getriebekonzepte
                  </h2>
                  <p className="text-xs text-slate-400">
                    Doctor of Engineering (Dr.-Ing.) - Technische Universitat Darmstadt (2018-2021)
                  </p>
                </div>
                <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-200/90 mt-4">
                  <p>
                    Marco&apos;s doctoral research focused on the automated generation, evaluation, and optimization of
                    electric and electrified drivetrain concepts. The work combined modeling, simulation, and algorithmic
                    design-space exploration to systematically identify powertrain architectures that balance efficiency,
                    performance, packaging, and production feasibility.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Key themes</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200/85">
                      <li>Automated synthesis of powertrain topologies for electric and hybrid drives</li>
                      <li>Multi-criteria evaluation of system variants using simulation and data analytics</li>
                      <li>Structural, mechanical, and functional assessment of transmission concepts</li>
                      <li>Optimization workflows developed in Python, C#, and engineering toolchains</li>
                      <li>Integration of physical models with decision-support algorithms</li>
                    </ul>
                  </div>
                  <p>
                    The results provide a framework for early-phase architecture decisions, enabling teams to explore
                    complex design spaces quickly and identify promising drivetrain configurations long before physical
                    prototypes exist. Marco brings this research mindset directly into HV battery and eDrive strategy,
                    where quantitative reasoning, modeling expertise, and early concept evaluation shape Mercedes-Benz&apos;s
                    next generation of electric platforms.
                  </p>
                </div>
              </motion.div>
            </section>

            <section id="contact" className="scroll-mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/6 to-white/[0.02] px-5 md:px-8 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</p>
                    <h2 className="text-lg md:text-xl font-semibold text-slate-50">Get in touch</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/80 focus:border-slate-300"
                          placeholder="Your name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/80 focus:border-slate-300"
                          placeholder="Organization"
                          value={company}
                          onChange={(event) => setCompany(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/80 focus:border-slate-300"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Message
                        </label>
                        <textarea
                          rows={3}
                          className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/80 focus:border-slate-300"
                          placeholder="How can we collaborate?"
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 hover:bg-white hover:border-white transition-colors disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending..." : "Send inquiry"}
                      </button>
                      {submitSuccess && (
                        <p className="text-sm text-slate-200">Thank you, your message has been sent.</p>
                      )}
                      {submitError && (
                        <p className="text-sm text-red-400">
                          {submitError === "Email service not configured"
                            ? "Email service is not configured. Please try again later."
                            : "Something went wrong. Please try again later."}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </section>
          </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");

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

  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-6 border-b border-border-subtle pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-border-subtle px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
            MG
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`rounded-full px-3 py-2 transition-colors hover:bg-accent-soft hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 ${
                  isActive ? "bg-accent-soft/60 text-text-primary ring-1 ring-accent" : ""
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

      <main className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-start lg:gap-14">
        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Project Lead - HV Battery Pre-Development
            </p>
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Dr.-Ing. Marco Giannantonio</h1>
              <p className="text-lg text-text-muted">
                HV battery and electrified powertrain strategy at Mercedes-Benz AG
              </p>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Driving high-voltage battery pre-development, systems integration, and technology scouting to translate
              strategic electrification goals into rigorous engineering roadmaps for next-generation Mercedes-Benz
              vehicles.
            </p>
            <p className="text-sm text-text-muted/80">Current focus: {MODULES[activeIndex].title}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-body transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
              href="https://www.linkedin.com/in/dr-ing-marco-giannantonio-518383140/"
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn profile
            </a>
            <button
              className="rounded-full border border-border-subtle px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
              type="button"
            >
              View profile overview
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
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
                  borderColor: isActive ? "rgba(79, 163, 217, 0.85)" : "rgba(30, 41, 51, 1)",
                  backgroundColor: isActive ? "rgba(26, 42, 58, 0.6)" : "rgba(12, 17, 23, 1)",
                }}
                className={`rounded-2xl border px-5 py-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 sm:px-6 sm:py-6 ${
                  isActive
                    ? "bg-accent-soft/50 shadow-lg ring-1 ring-accent"
                    : "bg-surface hover:border-accent/40 hover:bg-accent-soft/30 hover:shadow-md"
                }`}
              >
                <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.description}</p>
              </motion.button>
            );
          })}
        </section>
      </main>

      <div className="space-y-16 border-t border-border-subtle mt-6 pt-12">
        <section id="overview" className="scroll-mt-24 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="space-y-3"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Overview</p>
              <h2 className="text-2xl font-semibold text-text-primary">Executive Summary</h2>
            </div>
            <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-text-muted">
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
                With a background that combines engineering rigor and leadership in complex development programs, he
                helps shape the next generation of Mercedes electric platforms - balancing innovation, feasibility, and
                strategic direction to deliver reliable, scalable solutions.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="space-y-4"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Experience</p>
              <h2 className="text-2xl font-semibold text-text-primary">
                Experience Timeline - Dr.-Ing. Marco Giannantonio
              </h2>
            </div>
            <div className="space-y-3">
              {EXPERIENCE.map((entry) => (
                <div
                  key={`${entry.role}-${entry.period}`}
                  className="space-y-2 rounded-2xl border border-border-subtle bg-surface px-4 py-4 sm:px-5 sm:py-5"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-text-primary">{entry.role}</p>
                    <p className="text-xs text-text-muted">{entry.company}</p>
                    <p className="text-xs text-text-muted">
                      {entry.period} - {entry.location}
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-text-muted">
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

        <section id="focus-areas" className="scroll-mt-24 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="space-y-4"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Focus Areas</p>
              <h2 className="text-2xl font-semibold text-text-primary">Core Domains</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.map((module) => (
                <div
                  key={module.id}
                  className="rounded-2xl border border-border-subtle bg-surface px-4 py-4 sm:px-5 sm:py-5"
                >
                  <p className="text-sm font-semibold text-text-primary">{module.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{module.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="research" className="scroll-mt-24 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="space-y-4"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Research & PhD</p>
              <h2 className="text-2xl font-semibold text-text-primary">
                Automatisierter Variantenentwurf elektrifizierter Getriebekonzepte
              </h2>
              <p className="text-xs text-text-muted">
                Doctor of Engineering (Dr.-Ing.) - Technische Universitat Darmstadt (2018-2021)
              </p>
            </div>
            <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                Marco's doctoral research focused on the automated generation, evaluation, and optimization of electric
                and electrified drivetrain concepts. The work combined modeling, simulation, and algorithmic design-space
                exploration to systematically identify powertrain architectures that balance efficiency, performance,
                packaging, and production feasibility.
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">Key themes</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
                  <li>Automated synthesis of powertrain topologies for electric and hybrid drives</li>
                  <li>Multi-criteria evaluation of system variants using simulation and data analytics</li>
                  <li>Structural, mechanical, and functional assessment of transmission concepts</li>
                  <li>Optimization workflows developed in Python, C#, and engineering toolchains</li>
                  <li>Integration of physical models with decision-support algorithms</li>
                </ul>
              </div>
              <p>
                The results provide a framework for early-phase architecture decisions, enabling teams to explore complex
                design spaces quickly and identify promising drivetrain configurations long before physical prototypes
                exist. Marco brings this research mindset directly into HV battery and eDrive strategy, where
                quantitative reasoning, modeling expertise, and early concept evaluation shape Mercedes-Benz's next
                generation of electric platforms.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="scroll-mt-24 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="space-y-4"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Contact</p>
              <h2 className="text-2xl font-semibold text-text-primary">Get in touch</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Organization"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="How can we collaborate?"
                />
              </div>
            </div>
            <button
              type="button"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-body transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
            >
              Send inquiry
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

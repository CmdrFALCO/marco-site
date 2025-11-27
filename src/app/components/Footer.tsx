"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import React from "react";

const emailParts = ["contact", "marco-giannantonio", "com"];

export default function Footer() {
  const emailHref = `mailto:${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`;

  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:text-sm">
        {/* Left: copyright */}
        <div className="text-center sm:text-left">
          © 2025 Dr.-Ing. Marco Giannantonio
        </div>

        {/* Middle: legal links */}
        <div className="flex items-center justify-center gap-3 text-white/60 text-xs sm:text-sm">
          <Link
            href="/impressum"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Impressum
          </Link>
          <span aria-hidden="true" className="text-white/40">
            ·
          </span>
          <Link
            href="/datenschutz"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Datenschutz
          </Link>
        </div>

        {/* Right: icons */}
        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <motion.a
            href="https://www.linkedin.com/in/dr-ing-marco-giannantonio-518383140/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-black"
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>

          <motion.a
            href={emailHref}
            aria-label="Send email"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-black"
          >
            <Mail className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

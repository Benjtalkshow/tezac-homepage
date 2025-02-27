"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { socials } from "@/lib/contants";


const Footer = () => {
  return (
    <div className="bg-zinc-800 px-0 md:px-20">
      <div className="bg-white rounded-tl-none md:rounded-tl-[4rem] rounded-tr-none md:rounded-tr-[4rem] py-5 md:py-10">
        <div className="font-mono px-0 md:px-20 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <h1 className="font-extrabold py-10 md:py-0 text-2xl md:text-4xl">TEZAC</h1>
          <div id="socials" className="flex items-center gap-7 md:gap-5">
            {socials.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={social.url} id={social.name} target="_blank" className="text-zinc-800 hover:text-zinc-600">
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="font-mono text-center text-zinc-800 text-xs my-10">©2025 Tezac. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

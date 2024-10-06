"use client";
import React from "react"
import Image from "next/image"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { CONSTANTS } from "@/environments/constant";
import Link from "next/link";
import { FaDownload, FaComments } from "react-icons/fa6";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-12">

        {/* Personal Portrait */}
        <div className="col-span-4 mb-10 lg:mb-0">
          <div className="flex justify-center items-center">
            <Image className="rounded-badge w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[320px] xl:h-[320px] shadow-2xl" src="/images/profile-picture.jpg" alt="Portrait of Ivan Tan" width={300} height={500} />
          </div>
        </div>

        {/* Hero Text */}
        <div className={`col-span-8 ${styles.hero_text_container}`}>
          <h1 className={`${styles.hero_title_container} mb-8`}>
            <div className={`${styles.hero_title} mb-2`}>{CONSTANTS.heroContent.heroTitle}</div>
            <TypeAnimation sequence={CONSTANTS.heroContent.typeAnimationSequence} wrapper="span" speed={30} repeat={Infinity} />
          </h1>
          <p className={`${styles.hero_summary} mb-8`}>{CONSTANTS.heroContent.summary}</p>
          <div className="">

            <Link target="_blank" href={CONSTANTS.socialLinks.Resume}>
              <button className="btn btn-outline btn-wide btn-primary rounded-2xl mr-5">
                <div className="flex flex-row justify-center items-center">
                  <FaDownload className="mr-3" />
                  <p>Download CV</p>
                </div>
              </button>
            </Link>
            <Link href="#contact">
              <button className="btn btn-outline btn-wide btn-secondary rounded-2xl">
                <div className="flex flex-row justify-center items-center">
                  <FaComments className="mr-3" />
                  <p>Get In Contact</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
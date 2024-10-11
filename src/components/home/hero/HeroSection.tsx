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
    <section>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-col lg:flex-row justify-between items-center">
        {/* Personal Portrait */}
        <div className="mb-10 lg:mb-0">
          <div className="flex justify-center items-center">
            <Image className="rounded-badge w-[280px] h-[280px] xl:w-[350px] xl:h-[350px] shadow-2xl" src="/images/profile-picture.jpg" alt="Portrait of Ivan Tan" width={300} height={500} />
          </div>
        </div>
        {/* Hero Text */}
        <div className={`lg:ms-16 ${styles.hero_text_container}`}>
          <h1 className={`${styles.hero_title_container} mb-10`}>
            <div className={`${styles.hero_title} mb-3`}>{`Hello, I'm `}<span className={`${styles.gradient_text}`}>{`Ivan`}</span></div>
            <div className={`${styles.hero_subtitle} mb-3`}>A <span className={`${styles.gradient_text}`}>Software Engineer</span></div>
            <TypeAnimation className={`${styles.hero_animated_text}`} sequence={CONSTANTS.heroContent.typeAnimationSequence} wrapper="span" speed={30} repeat={Infinity} />
          </h1>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center">
            <Link className="mr-0 mb-3 md:mr-5 md:mb-0" target="_blank" href={CONSTANTS.socialLinks.Resume}>
              <button className="btn btn-outline btn-wide btn-primary rounded-2xl">
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
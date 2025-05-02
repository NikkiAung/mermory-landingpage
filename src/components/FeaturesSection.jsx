"use client";
import React from "react";
import { cardData } from "../config/cardData";
import FeatureCard from "./FeatureCard";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function MotionCard({ card, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <FeatureCard {...card} index={index} />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${index + 1}`}</motion.h2>
    </section>
  );
}

const FeaturesSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="features-section" className="pt-5 lg:pt-45">
      <div className="container flex flex-col gap-20">
        <h2 className="title-card">
          <span className="bg-gradient-to-r from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent">
            3 Reasons
          </span>
          <span className="text-[#0B0F19]"> to choose Mermory</span>
        </h2>

        <div>
          {cardData.map((card, idx) => (
            <MotionCard key={idx} card={card} index={idx} />
          ))}
          {/* <motion.div className="progress" style={{ scaleX }} /> */}
          <StyleSheet />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

// ==============   Styles   ================

function StyleSheet() {
  return (
    <style>{`
        .img-container {
            min-height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 100%;
            margin: 20px;
            background: transparent;
        }

        .img-container h2 {
            color: #bbadf1;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: var(--accent, #b3adf7);
            bottom: 50px;
            transform: scaleX(0);
        }

        @media (max-width: 768px) {
            .img-container > div {
                margin: 10px;
            }
            
            .img-container h2 {
                font-size: 30px;
                left: calc(50% + 60px);
            }
        }
    `}</style>
  );
}

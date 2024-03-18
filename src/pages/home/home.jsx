import React from "react";
import scpicture from "../../assets/img/hero/scpicture.png";
import html from "../../assets/img/technologies/html.svg";
import css from "../../assets/img/technologies/css.svg";
import js from "../../assets/img/technologies/js.svg";
import bootstrap from "../../assets/img/technologies/bootstrap.svg";
import tailwind from "../../assets/img/technologies/tailwind.svg";
import proactivo from "../../assets/img/softskills/proactivo.png";
import teamwork from "../../assets/img/softskills/teamwork.png";
import autodidact from "../../assets/img/softskills/autodidacta.png";
import { motion } from "framer-motion";
import {
  HeroSection,
  HeroText,
  HeroImg,
  HeroHead,
  TechContainer,
  TechImgs,
  HeroFoot,
  SoftSkillsContainer,
  SoftSkillCard,
} from "./styles.js";
import TypewriterComponent from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <HeroSection className="Hero">
        <HeroHead>
          <HeroText>
            <h1>HOLA, MI NOMBRE ES SANTIAGO</h1>
            <TypewriterComponent
              options={{
                strings: [
                  "FRONT-END DEVELOPER",
                  "WEB DEVELOPER",
                  "ARGENTINO Y DE RIVER PLATE",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "",
              }}
            />
          </HeroText>
          <HeroImg>
            <img src={scpicture} alt="Picture of Santiago Costanti" />
          </HeroImg>
        </HeroHead>

        <HeroFoot>
          <SoftSkillsContainer>
            <SoftSkillCard>
              <img src={proactivo} alt="Proactive Soft Skill" />
              <p>PROACTIVO Y DINAMICO</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, sit?
              </p>
            </SoftSkillCard>
            <SoftSkillCard>
              <img src={teamwork} alt="Team Work Soft Skill" />
              <p>TRABAJO EN EQUIPO</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, sit?
              </p>
            </SoftSkillCard>
            <SoftSkillCard>
              <img src={autodidact} alt="Autodidact Soft Skill" />
              <p>AUTODIDACTA</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, sit?
              </p>
            </SoftSkillCard>
          </SoftSkillsContainer>
        </HeroFoot>
      </HeroSection>

      <section className="Tecnologias">
        <TechContainer>
          <TechImgs>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={html}
              alt="Html icon"
            />
            <motion.img whileHover={{ scale: 1.05 }} src={css} alt="Css icon" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={js}
              alt="Javascript Icon"
            />
            <motion.img
              whileHover={{ scale: 1.04 }}
              src={bootstrap}
              alt="Bootstrap Icon"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={tailwind}
              alt="Tailwind Icon"
            />
          </TechImgs>
        </TechContainer>
      </section>
    </>
  );
};

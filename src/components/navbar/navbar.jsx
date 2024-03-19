import React from "react";
import { Link, NavLink } from "react-router-dom";
import instaicon from "../../assets/icons/insta.png";
import linkedicon from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import navlogo from "../../assets/img/logos/navicon.png";
import { Image, Nav, NavImgContainer, RedesContainer } from "./styles";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <Nav>
      <NavImgContainer to="/">
        <img
          className=""
          src={navlogo}
          alt="Santiago Costanti Portfolio Logo"
        />
      </NavImgContainer>

      <div className="flex justify-center items-center gap-4 bg-white shadow-lg p-2 rounded-2xl">
        <NavLink
          to="/"
          className="py-0 px-3 rounded-2xl bg-white hover:bg-[#F5DD61]"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FFDE59" : "",
          })}
        >
          INICIO
        </NavLink>
        <NavLink
          to="/projects"
          className="py-0 px-3 rounded-2xl bg-white hover:bg-[#F5DD61]"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FFDE59" : "",
          })}
        >
          PROYECTOS
        </NavLink>
        <NavLink
          to="/about"
          className="py-0 px-3 rounded-2xl bg-white hover:bg-[#F5DD61]"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FFDE59" : "",
          })}
        >
          SOBRE MI
        </NavLink>
      </div>

      <RedesContainer className="redes">
        <motion.button whileHover={{ scale: 1.04 }}>
          <Link
            to="https://www.instagram.com/santicostanti_/?hl=es-la"
            target="_blank"
          >
            <Image src={instaicon} alt=" Instagram Icon" />
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }}>
          <Link
            to="https://www.linkedin.com/in/santiagocostanti"
            target="_blank"
          >
            <Image src={linkedicon} alt="LinkedIn Icon" />
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }}>
          <Link to="https://github.com/Tanti14" target="_blank">
            <Image src={github} alt="GitHub Icon" />
          </Link>
        </motion.button>
      </RedesContainer>
    </Nav>
  );
};

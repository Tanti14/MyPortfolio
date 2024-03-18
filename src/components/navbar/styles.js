import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  font-family: "Rubik", sans-serif;
`;

export const NavImgContainer = styled(NavLink)`
  width: 100%;
  img{
    width: 80px;
  }
`;

export const Image = styled.img`
  width: 40px;
  &&:hover {
    filter: drop-shadow(0 0 0.75rem black);
  }
`;

export const RedesContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem 6rem;
  gap: 1rem;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;

  h1 {
    font-size: 58px;
    font-weight: 700;
  }
`;

export const HeroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    border-radius: 10%;
  }
`;

export const HeroFoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SoftSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  width: 90%;
  padding: 3rem;
  gap: 8rem;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid white; /* rgba(255, 255, 255, 0.3) */

  font-family: "Raleway", sans-serif;
`;

export const SoftSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 96px;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TechImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5rem;
  padding: 3rem;
`;

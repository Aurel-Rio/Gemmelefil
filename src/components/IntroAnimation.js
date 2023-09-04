 import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/gemme_le_fil_logo.png";

const initialRotateAnimation = keyframes`
  0% { transform: rotateY(0deg) scale(0.6); }
  30% { transform: rotateY(360deg) scale(1.2); }
  100% { transform: rotateY(360deg) scale(1); }
`;

const lineAnimation = keyframes`
  0% { transform: translateX(-100%); background-color: green; width: 0%; }
  50% { transform: translateX(0%); background-color: white; width: 100%; }
  100% { transform: translateX(-50%); background-color: darkblue; width: 800%; }
`;

const lineAnimationBottom = keyframes`
  0% { transform: translateX(100%); background-color: green; width: 0%; }
  50% { transform: translateX(0%); background-color: white; width: 100%; }
  100% { transform: translateX(50%); background-color: darkblue; width: 800%; }
`;

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideInAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
`;

const fadeOutLogoContainerAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const AnimationContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  perspective: 1000px;
  animation: ${initialRotateAnimation} 5s ease-in-out forwards infinite; /* Ajoutez infinite ici */
  transform-origin: center center;
  image-rendering: auto;

  @media (max-width: 768px) {
    position: absolute;
    width: 80%;
    height: auto;
    top: 125px;
  }
`;


const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  animation: ${({ fade }) => (fade ? fadeOutLogoContainerAnimation : "none")} 2s ease-in-out forwards;
`;

const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
  animation: ${({ animate }) => (animate ? lineAnimation : "none")} 1.5s linear
    forwards;
`;

const TopLine = styled(Line)`
  top: 55px;
  left: 0;
  animation: ${({ animate }) => (animate ? lineAnimation : "none")} 1.5s linear
    forwards;
  width: ${({ animate }) => (animate ? "100%" : "0%")};
`;

const BottomLine = styled(Line)`
  bottom: 55px;
  right: 0;
  animation: ${({ animate }) => (animate ? lineAnimationBottom : "none")} 1.5s
    linear forwards;
  width: ${({ animate }) => (animate ? "100%" : "0%")};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  animation: ${slideInAnimation} 1s ease-in-out 6s forwards;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 200px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${({ animate }) => (animate ? fadeInAnimation : "none")} 1s ease-in-out 1s forwards;
  text-align: left;
  text-shadow: ${({ animate }) => (animate ? "4px 4px 20px darkblue" : "none")};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: white;
  opacity: 0;
  animation: ${({ animate }) => (animate ? fadeInAnimation : "none")} 1s ease-in-out 2s forwards;
  text-align: left;
  text-shadow: ${({ animate }) => (animate ? "4px 4px 20px darkblue" : "none")};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/*
const Bar = styled.div`
  position: absolute;
  width: 0%;
  height: 1px;
  background-color: white;
  animation: ${stretchAnimation} 0.5s linear forwards;
`;

const TopBar = styled(Bar)`
  top: 55px;
  left: 0;
`;

const BottomBar = styled(Bar)`
  bottom: 55px;
  right: 0;
`;
*/
const IntroAnimation = ({ onAnimationComplete }) => {
  const [animateLines, setAnimateLines] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateLinesComplete, setAnimateLinesComplete] = useState(false);

  useEffect(() => {
    const animationDuration = 4000;

    const timer1 = setTimeout(() => {
      setAnimateLines(false);
    }, animationDuration);

    const timer2 = setTimeout(() => {
      setShowContent(true);
      if (typeof onAnimationComplete === "function") {
        onAnimationComplete();
      }
    }, animationDuration + 1000);

    const timer3 = setTimeout(() => {
      setAnimateText(true);
    }, 4000);

    const timer4 = setTimeout(() => {
      setAnimateLinesComplete(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onAnimationComplete]);

  useEffect(() => {
    if (showContent && !animateText) {
      setAnimateLines(true);
      setShowContent(false);
    }
  }, [showContent, animateText]);

  return (
    <AnimationContainer>
      <LogoContainer animate={animateLines && animateLinesComplete}>
        <Logo src={logo} alt="Logo" />
        <LineContainer>
          <TopLine animate={animateLines ? "true" : "false"} />
          <BottomLine
            animate={animateLines && animateLinesComplete ? "true" : "false"}
          />
        </LineContainer>
      </LogoContainer>
      <TextContainer>
        <Title animate={animateText ? "true" : "false"}>Bienvenue chez</Title>
        <Subtitle animate={animateText ? "true" : "false"}>
          Informatique, Services, Saverdun !
        </Subtitle>
      </TextContainer>
    </AnimationContainer>
  );
};

export default IntroAnimation;

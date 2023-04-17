import React, { Suspense, useEffect, useState } from "react";
import { SandboxModel } from "./SandboxModel";
import { Canvas, useFrame } from "@react-three/fiber";
import { EmptyFridge } from "./Subcomponents/EmptyFridge";
import { GridFood } from "./Subcomponents/GridFood";

export const Sandbox = () => {
  const [animationRunning, setAnimationRunning] = useState(true);
  const [animations, setAnimations] = useState(null);
  const [animationsNames, setAnimationsNames] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const animateModel = () => {
    setAnimationTriggered(true);
    for (let i = 0; i < Object.keys(animations).length; i++) {
      animations[animationsNames[i]].play();
    }
  };

  useEffect(() => {
    console.log(animations);
  }, [animations]);

  return (
    <div className='sandbox'>
      <h2>Une application fluide, rapide et conçu pour l'utilisateur</h2>
      <div className='sandbox-animation'>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas
            camera={{
              fov: 75,
              near: 0.1,
              far: 1000,
              position: [0, 0, 5],
            }}
            className='fridge-canvas'
          >
            <SandboxModel
              animationRunning={animationRunning}
              setAnimationRunning={setAnimationRunning}
              setAnimations={setAnimations}
              setAnimationsNames={setAnimationsNames}
              animationsModel={animations}
              animationsNames={animationsNames}
              animationTriggered={animationTriggered}
            />
          </Canvas>
        </Suspense>
        <div className='faker-phone'>
          <div className='faker-phone--screen'>
            <div className='phone-page'>
              <div className='phone-page-header'>
                <h2 className='phone-page-welcome'>Bienvenue,</h2>
                <h2 className='phone-page-title'>Utilisateur anonyme</h2>
              </div>
              <div className='phone-body'>
                {animationRunning ? (
                  <EmptyFridge
                    animateModel={animateModel}
                    animationTriggered={animationTriggered}
                  />
                ) : (
                  <GridFood />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

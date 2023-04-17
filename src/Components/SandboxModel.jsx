import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
export const SandboxModel = ({
  setAnimationRunning,
  setAnimations,
  setAnimationsNames,
  animationsNames,
  animationsModel,
  animationTriggered,
}) => {
  const refModel = useRef(null);
  const { scene, animations } = useGLTF("./assets/Frigo.glb");
  const { actions, names, mixer } = useAnimations(animations, refModel);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    for (let i = 0; i < Object.keys(actions).length; i++) {
      actions[names[i]].setLoop(THREE.LoopOnce, 1);
      actions[names[i]].clampWhenFinished = true;
    }
    setAnimations(actions);
    setAnimationsNames(names);
    console.log(animationsModel);
  }, []);

  useFrame(() => {
    if (!animationsModel) {
      return;
    }
    if (
      animationTriggered &&
      !animationsModel[animationsNames[0]].isRunning() &&
      !animationsModel[animationsNames[1]].isRunning()
    ) {
      setAnimationRunning(false);
    }
  });

  return (
    <>
      <pointLight position={[10, 10, 15]} />
      <pointLight position={[0, 0, -5]} />
      <primitive
        ref={refModel}
        object={scene}
        dispose={null}
        scale={[1.2, 1.2, 1.2]}
        position={[-1, -2.5, 1]}
      />
    </>
  );
};

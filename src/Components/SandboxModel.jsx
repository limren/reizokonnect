import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import Model from "./Subcomponents/Frigo";
import * as THREE from "three";
export const SandboxModel = ({ animationRunning, setAnimationRunning }) => {
  const refModel = useRef(null);
  const { scene, animations } = useGLTF("./assets/Frigo.glb");
  const { actions, names, mixer } = useAnimations(animations, refModel);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
  console.log(mixer);
  useEffect(() => {
    console.log(Object.keys(actions).length);
    for (let i = 0; i < Object.keys(actions).length; i++) {
      actions[names[i]].setLoop(THREE.LoopOnce, 1);
      actions[names[i]].clampWhenFinished = true;
    }
    actions[names[0]].play();
    actions[names[1]].play();
  }, []);

  useFrame(() => {
    if (!actions[names[0]].isRunning() && !actions[names[1]].isRunning()) {
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

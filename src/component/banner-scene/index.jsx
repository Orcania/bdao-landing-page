import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

extend({ OrbitControls });

function Model() {
  const model = useLoader(GLTFLoader, "/bdao-landing-page/logo.gltf");

  model.scene.position.setX(-0.8);
  const { camera, gl: renderer } = useThree();
  const controlsRef = useRef(null);

  const sc = 0.65;

  useFrame(() => {
    controlsRef.current.update();
  });

  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, []);

  return (
    <>
      <primitive
        object={model.scene}
        scale={[sc, sc, sc]}
        position={[0, 0, 0]}
      />
      <orbitControls
        args={[camera, renderer.domElement]}
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={2} // Set the rotation speed here
      />
    </>
  );
}

export default Model;

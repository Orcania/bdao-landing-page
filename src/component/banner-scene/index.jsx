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
  const controlsRef = useRef();

  const sc = 0.65;

  const [rotY, setRotY] = useState(camera.rotation.y);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  // console.log(isUserInteracting);
  const meshRef = useRef();

  useFrame(() => {
    if (!isUserInteracting) {
      const n = (rotY + 0.5) % 360;

      const r = (n * Math.PI) / 180;

      const x = Math.cos(r) * 6;
      const z = Math.sin(r) * 6;

      camera.position.x = x;
      camera.position.z = z;

      // camera.lookAt(model.scene.position);
      setRotY(n);

      // setRotation(rotation + delta * 0.1);
    }
    if (meshRef.current && !state.pointer.active) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // Add event listeners to the renderer's domElement property
  useEffect(() => {
    const domElement = renderer.domElement;

    const handleMouseDown = () => {
      setIsUserInteracting(true);
    };

    const handleMouseUp = () => {
      setIsUserInteracting(false);

      // // Update the camera rotation
      // const x = camera.position.x;
      // const y = camera.position.y;

      // const angleRad = Math.atan2(y, x);
      // const angleDeg = (angleRad * 180) / Math.PI;

      // setRotY(angleDeg);
    };

    domElement.addEventListener("mousedown", handleMouseDown);
    domElement.addEventListener("mouseup", handleMouseUp);

    return () => {
      domElement.removeEventListener("mousedown", handleMouseDown);
      domElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, [renderer]);

  useEffect(() => {
    camera.lookAt(model.scene.position);
  });

  return (
    <primitive object={model.scene} scale={[sc, sc, sc]} position={[0, 0, 0]} />
  );
}

//  <orbitControls
//   args={[camera, renderer.domElement]}
//   enableDamping
//   dampingFactor={0.05}
//   rotateSpeed={0.5}
//   ref={controlsRef}
// />

export default Model;

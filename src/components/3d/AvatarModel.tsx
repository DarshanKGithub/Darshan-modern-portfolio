"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function AvatarModel() {
  const outerGroup = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  
  // Load the local GLTF model to avoid network fetch errors
  const { scene, animations } = useGLTF("/human.glb");
  // Pass animations and the inner group (which contains the scene) to useAnimations
  const { actions } = useAnimations(animations, innerGroup);

  // Play the first animation if it exists
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstActionKey = Object.keys(actions)[0];
      actions[firstActionKey]?.play();
    }
  }, [actions]);

  useFrame((state) => {
    if (outerGroup.current && innerGroup.current) {
      // Calculate mouse position mapped to 3D space
      
      // Rotate the outer group slightly towards the mouse
      outerGroup.current.rotation.y = THREE.MathUtils.lerp(
        outerGroup.current.rotation.y,
        (state.pointer.x * Math.PI) / 6,
        0.1
      );
      
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        -(state.pointer.y * Math.PI) / 10,
        0.1
      );

      // Add a gentle floating/breathing animation on the inner group
      // This preserves the base position of the outer group
      innerGroup.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  // Traverse the scene to enable shadows
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    // Base transform: lower the model and scale it reasonably
    <group ref={outerGroup} dispose={null} position={[0, -2.0, 0]} scale={1.8}>
      <group ref={innerGroup}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

// Preload the model to prevent popping
useGLTF.preload("/human.glb");

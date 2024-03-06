import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
// import "./ImageEffect.scss";

const ImageEffect = ({ imageUrl }) => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const [easeFactor, setEaseFactor] = useState(0.02);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [planeMesh, setPlaneMesh] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [targetMousePosition, setTargetMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [aberrationIntensity, setAberrationIntensity] = useState(0.0);
  const [prevPosition, setPrevPosition] = useState({ x: 0.5, y: 0.5 });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
      vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
      vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
      
      vec2 mouseDirection = u_mouse - u_prevMouse;
      
      vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
      float pixelDistanceToMouse = length(pixelToMouseDirection);
      float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

      vec2 uvOffset = strength * -mouseDirection * 0.2;
      vec2 uv = vUv - uvOffset;

      vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
      vec4 colorG = texture2D(u_texture, uv);
      vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

      gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
  `;

  useEffect(() => {
    const initializeScene = (image) => {
      const texture = new THREE.Texture(image);
      texture.needsUpdate = true;

      const newScene = new THREE.Scene();
      const newCamera = new THREE.PerspectiveCamera(
        80,
        imageRef.current.offsetWidth / imageRef.current.offsetHeight,
        0.01,
        10
      );
      newCamera.position.z = 1;

      const shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture }
      };

      const newPlaneMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader
        })
      );

      newScene.add(newPlaneMesh);

      const newRenderer = new THREE.WebGLRenderer();
      newRenderer.setSize(imageRef.current.offsetWidth, imageRef.current.offsetHeight);

      setScene(newScene);
      setCamera(newCamera);
      setPlaneMesh(newPlaneMesh);
      setRenderer(newRenderer);
    };

    const imageLoader = new THREE.ImageLoader();
    imageLoader.load(imageUrl, (image) => {
      initializeScene(image);
      animateScene();
    });

    return () => {
      if (renderer) {
        renderer.domElement.remove();
      }
    };
  }, [imageUrl]);

  const animateScene = () => {
    requestAnimationFrame(animateScene);

    setMousePosition({
      x: mousePosition.x + (targetMousePosition.x - mousePosition.x) * easeFactor,
      y: mousePosition.y + (targetMousePosition.y - mousePosition.y) * easeFactor
    });

    if (planeMesh) {
      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );

      planeMesh.material.uniforms.u_aberrationIntensity.value = Math.max(0.0, aberrationIntensity - 0.05);
    }

    if (renderer && scene && camera && planeMesh) {
      renderer.render(scene, camera);
    }
  };

  const handleMouseMove = (event) => {
    setEaseFactor(0.02);
    const rect = imageContainerRef.current.getBoundingClientRect();
    setPrevPosition({ ...targetMousePosition });

    setTargetMousePosition({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height
    });

    setAberrationIntensity(1);
  };

  const handleMouseEnter = (event) => {
    setEaseFactor(0.02);
    const rect = imageContainerRef.current.getBoundingClientRect();

    setMousePosition({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height
    });

    setTargetMousePosition({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height
    });
  };

  const handleMouseLeave = () => {
    setEaseFactor(0.05);
    setTargetMousePosition({ ...prevPosition });
  };

  return (
    <div
      id="imageContainer"
      ref={imageContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} ref={imageRef} style={{ display: 'none' }} alt="" />
    </div>
  );
};

export default ImageEffect;

'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const AnimatedHeroSection = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Capture DOM node reference for stable cleanup
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const isMobile = window.innerWidth < 768;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountNode.appendChild(renderer.domElement);

    const sphereSize = isMobile ? 1.5 : 2;
    const geometry = new THREE.SphereGeometry(sphereSize, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x111111) },
        color2: { value: new THREE.Color(0xc0c0c0) },
        glowColor: { value: new THREE.Color(0x4444ff) }
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vPosition = position;
          vNormal = normal;
          vUv = uv;
          vec3 pos = position;
          pos += normal * sin(time * 2.0 + position.x * 10.0) * 0.02;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 glowColor;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          float noise = sin(vPosition.x * 5.0 + time) * sin(vPosition.y * 5.0 + time * 0.7) * sin(vPosition.z * 5.0 + time * 0.3);
          float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
          color = mix(color, glowColor, fresnel * 0.3);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      wireframe: false,
      transparent: true
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.position.x = 3;
    sphereRef.current = sphere;
    scene.add(sphere);

    const wireframeGeometry = new THREE.SphereGeometry(sphereSize + 0.05, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x888888,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframeSphere = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframeSphere.position.x = 3;
    scene.add(wireframeSphere);

    const particlesCount = isMobile ? 300 : 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.08,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, isMobile ? 0.6 : 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4444ff, 1, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      if (sphereRef.current && sphereRef.current.material instanceof THREE.ShaderMaterial) {
        sphereRef.current.rotation.x = time * 0.2;
        sphereRef.current.rotation.y = time * 0.3;
        sphereRef.current.material.uniforms.time.value = time;
      }

      wireframeSphere.rotation.x = time * -0.1;
      wireframeSphere.rotation.y = time * -0.2;
      particles.rotation.y = time * 0.05;

      camera.position.x = Math.sin(time * 0.2) * 0.5;
      camera.position.y = Math.cos(time * 0.3) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      if (!mountNode || !renderer) return;
      const width = mountNode.clientWidth;
      const height = mountNode.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      // Cleanup animation
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      // Remove event listener
      window.removeEventListener('resize', handleResize);
      
      // Remove renderer from DOM
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      renderer.dispose();
      
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      // Clean up lights
      ambientLight.dispose();
      directionalLight.dispose();
      pointLight.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1, width: '100vw', height: '100vh' }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-6">
        <div className="w-full md:w-1/2 text-left">
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-8 transition-all duration-2000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-gray-300 via-silver to-gray-500 bg-clip-text text-transparent">
              FUTURE
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IS HERE
            </span>
          </h1>
          <p className={`text-base sm:text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed transition-all duration-2000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience the next dimension of digital innovation with our cutting-edge 3D technology
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-2000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 border-2 border-gray-500 rounded-full text-gray-300 font-semibold text-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-white/10">
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating dots and shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-20 bg-gradient-to-r from-white to-transparent opacity-60 animate-[shoot_5s_linear_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shoot {
          0% {
            transform: translateX(0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(600px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5" />
    </div>
  );
};

export default AnimatedHeroSection;
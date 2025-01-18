import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
      },
      fullScreen: {
      enable: false, // Disable fullscreen to keep particles within the parent
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 78,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#7e8ef1",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 1,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: true,
          distance: 350,
          color: "#abdf9e",
          opacity: 1,
          width: 3,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce", // Prevent particles from leaving the canvas
          },
          bounce: true,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  return (
   
      <Particles id={props.id} init={particlesLoaded} options={options} />
  );
};

export default ParticlesComponent;

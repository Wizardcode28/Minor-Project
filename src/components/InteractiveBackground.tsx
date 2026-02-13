import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const InteractiveBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log("Particles Engine Loaded");
        await loadSlim(engine);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.5
                                }
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#4f46e5",
                        },
                        links: {
                            color: "#4f46e5",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-10"
            />
        </div>
    );
};

export default InteractiveBackground;

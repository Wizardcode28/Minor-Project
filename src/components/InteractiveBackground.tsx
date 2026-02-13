import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const InteractiveBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1]">
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
                                mode: "grab", // Changed to grab for better interaction
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 140,
                                links: {
                                    opacity: 0.5
                                }
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#0f172a", // Darker slate for better visibility
                        },
                        links: {
                            color: "#0f172a",
                            distance: 150,
                            enable: true,
                            opacity: 0.15,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.5, // Slightly faster
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80, // Increased density
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
                className="w-full h-full"
            />
        </div>
    );
};

export default InteractiveBackground;

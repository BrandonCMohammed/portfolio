"use client"

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./projectCard";

export default function Projects() {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null)

    const [isProjectsVisible, setIsProjectsVisible] = useState(false);
    const projectsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                setIsProjectsVisible(true)
            }
        }, { threshold: 0.2 })

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        if (projectsRef.current) {
            observer.observe(projectsRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }

            if (projectsRef.current) {
                observer.unobserve(projectsRef.current)
            }
        }
    }, [])



    return (
        <>
            <div className="bg-neutral-800 w-full">
                <div className={`transform transition-transform duration-[3s] ease-out w-full ${isVisible ? 'translate-x-0' : '-translate-x-[10rem]'}`}>
                    <div className={`transition-opacity duration-[2s] ease-out delay-[1s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                        <section ref={elementRef} id="projects" className="p-10 flex flex-col justify-center items-center ">
                            <p className="text-5xl ">My Projects</p>

                            <div ref={projectsRef} className={`transform transition-transform duration-[3s] delay-700 ease-in-out w-full ${isProjectsVisible ? 'translate-x-0' : 'translate-x-[15rem]'}`}>

                                <div className={`transition-opacity duration-[2s] ease-in flex flex-row justify-end ${isProjectsVisible ? 'opacity-100' : 'opacity-0'}`}>

                                    <div className="w-full flex flex-row justify-between">
                                        <ProjectCard />
                                        {/* <ProjectCard />
                                            <ProjectCard /> */}
                                    </div>

                                    {/* <div className="w-full flex flex-row justify-evenly">
                                            <ProjectCard />
                                            <ProjectCard />
                                            </div>
                                            <div className="w-full flex flex-row justify-between">
                                                <ProjectCard />
                                                <ProjectCard />
                                                <ProjectCard />
                                            </div>
                                            <div className="w-full flex flex-row justify-evenly">
                                                <ProjectCard />
                                                <ProjectCard />
                                        </div> */}
                                </div>
                            </div>

                        </section >
                    </div>
                </div>
            </div>





        </>
    );
}
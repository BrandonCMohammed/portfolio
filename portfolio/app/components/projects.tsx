"use client"

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./projectCard";

export default function Projects() {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            }
        }, { threshold: 0.2 })

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])



    return (
        <>
            <section ref={elementRef} id="projects" className="p-10 bg-neutral-800 flex flex-col justify-center items-center w-full">

                <div className={`transform transition-transform duration-[3s] ease-in-out w-full ${isVisible ? 'translate-x-0' : '-translate-x-[10rem]'}`}>
                    <div className={`transition-opacity duration-[2s] ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-5xl ">My Projects</p>
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




            </section>
        </>
    );
}
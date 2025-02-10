"use client"
import { useEffect, useRef, useState } from "react";

export default function Skills() {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            }
        }, { threshold: 0.2 })

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    return (
        <>
            <section ref={elementRef} id="skills" className="w-full p-10">

                <div className={`transform transition-transform duration-[3s] ease-in-out w-full ${isVisible ? 'translate-x-0' : '-translate-x-[5rem]'}`}>
                    <div className={`transition-opacity duration-[2s] ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                        <div className="flex flex-wrap flex-col justify-center items-center ">

                            <div >
                                <p className="text-5xl mb-5">Skills</p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center px-[30rem]">

                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">UI/UX DESIGN</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">JAVASCRIPT</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">HTML</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">CSS</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">REACT</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">NEXT.JS</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">GIT</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">TAILWIND</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">PYTHON</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">JAVA</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">C++</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">C</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">PHP</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">LARAVEL</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">AGILE</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">KANBAN</span>
                                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 mb-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300">FIGMA</span>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    );
}
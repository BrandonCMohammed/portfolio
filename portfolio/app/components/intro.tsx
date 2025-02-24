"use client"
import { useState, useEffect, useRef } from "react";

export default function Intro() {

    const [isContainerVisible, setIscontainerVisible] = useState(false);
    const containerRef = useRef(null)


    const [isExperienceVisible, setisExperienceVisible] = useState(false);
    const experienceRef = useRef(null)

    const [isDiscriptionVisible, setisDiscriptionVisible] = useState(false);
    const descriptionRef = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIscontainerVisible(true)
                setisExperienceVisible(true)
                setisDiscriptionVisible(true)
            }
        }, { threshold: 0.3 })

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }

            if (experienceRef.current) {
                observer.unobserve(experienceRef.current)
            }

            if (descriptionRef.current) {
                observer.unobserve(descriptionRef.current)
            }
        }
    }, [])
    return (

        <section ref={containerRef} id="intro_about_me" className=" flex flex-col flex-row text-gray-300 p-10 w-full bg-neutral-800 ">

            <div className={`transform transition-transform duration-[3s] ease-in-out w-full ${isContainerVisible ? 'tracontainernslate-x-0' : '-translate-x-[5rem]'}`}>
                <div className={`transition-opacity duration-[2s] ease-in  ${isContainerVisible ? 'opacontainercity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center w-full">
                        <p className="text-5xl mb-3">Introduction</p>
                    </div>
                    <div className="flex flex-col border rounded-xl p-5 gap-5">
                        <div className="flex flex-row h-80 ">
                            <div className={`transform transition-transform duration-[3s] ease-in-out w-full ${isContainerVisible ? 'tracontainernslate-x-0' : '-translate-x-[10rem]'}`}>
                                <div className={`transition-opacity duration-[2s] ease-in flex justify-begin items-begin ${isContainerVisible ? 'opacontainercity-100' : 'opacity-0'}`}>
                                    <div className="w-[55.8rem] h-80 flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl ">
                                        Software developer based in Trinidad and Tobago
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div ref={experienceRef} className="flex flex-row justify-end">
                            <div className={`transform transition-transform duration-[3s]  ease-in-out w-full ${isExperienceVisible ? 'translate-x-0' : 'translate-x-[10rem]'}`}>
                                <div className={`transition-opacity duration-[2s] ease-in flex flex-row justify-end delay-[1s] ${isExperienceVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="w-[55.8rem] w-1/2 h-80 flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl">
                                        Experience in Web Development, UI design and Database Design.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className={`transform transition-transform duration-[3s] delay-700 ease-in-out w-full ${isDiscriptionVisible ? 'translate-x-0' : '-translate-x-[10rem]'}`}>
                                <div className={`transition-opacity duration-[2s] ease-in flex flex-row ${isDiscriptionVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="w-[55.8rem] h-80 flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl">
                                        Passionate, creative, problem solver, team player, business mindset
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
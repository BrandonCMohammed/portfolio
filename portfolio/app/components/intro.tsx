"use client"
import { useState, useEffect, useRef } from "react";

export default function Intro() {

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

        <section ref={elementRef} id="intro_about_me" className=" flex flex-col text-gray-300 p-10 w-full bg-neutral-800">

            <div className={`transform transition-transform duration-[3s] ease-in-out w-full ${isVisible ? 'translate-x-0' : '-translate-x-[5rem]'}`}>
                <div className={`transition-opacity duration-[2s] ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center w-full">
                        <p className="text-5xl ">Introduction</p>
                    </div>
                    <div className="flex flex-col border rounded-xl p-5">
                        <div className="flex flex-row -mb-2  ">
                            <div className="w-[55.8rem] flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl ">
                                Software developer based in Trinidad and Tobago
                            </div>
                            <div className="w-1/2 h-80"></div>
                        </div>
                        <div className="flex flex-row -mb-2">
                            <div className="w-1/2 h-80"></div>
                            <div className="w-[55.8rem] flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl">
                                Experience in Web Development, UI design and Database Design.
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[55.8rem] flex justify-center items-center px-5 border border-indigo-500 bg-slate-800 text-3xl rounded-xl">
                                Passionate, creative, problem solver, team player, business mindset
                            </div>
                            <div className="w-1/2 h-80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
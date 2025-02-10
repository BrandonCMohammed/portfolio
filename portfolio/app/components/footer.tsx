"use client"
import { useEffect, useRef, useState } from "react";

export default function Footer() {

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
            <div ref={elementRef} className={`transform transition-transform duration-[3s] ease-in-out w-full ${isVisible ? 'translate-y-0' : 'translate-y-[5rem]'}`}>
                <div className={`transition-opacity duration-[2s] ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center h-40">
                        <div className="w-1/2">
                            <p className="flex justify-center items-center text-5xl pb-5">
                                Contact Me
                            </p>
                            <p className="flex justify-center items-center pb-5">

                                Email: brandonmohammed711@gmail.com
                            </p>
                        </div>

                        <div className="w-1/2">
                            <p className="flex justify-center items-center pb-5">
                                © 2025 Brandon Mohammed. All rights reserved.
                            </p>
                            <p className="flex justify-center items-center pb-5">
                                About this website: Built with Next.JS and Tailwind CSS and hosted with Vercel hosting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

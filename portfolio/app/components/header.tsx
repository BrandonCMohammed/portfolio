"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [])



    return (
        <>
            <div className="lg:bg-[url(/looking_to_the_left.jpeg)] lg:bg-right bg-no-repeat xl:bg-[900px_-200px] lg:bg-[600px_-200px] bg-black">
                <div className="flex flex-col-reverse 2xl:flex-row lg:justify-start lg:items-start sm:pl-10 lg:pl-0 justify-center items-center h-screen">
                    <div className=" w-1/2 h-full flex flex-col justify-center ">

                        <div className={`transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`} >
                            <p className="text-7xl px-5 pt-10  leading-11 flex justify-center items-center">
                                Hi
                            </p>
                            <p className="text-7xl px-5 mb-5 leading-11 flex justify-center items-center">
                                I am
                            </p>
                            <p className="text-7xl px-5 mb-2 leading-11 flex justify-center items-center inline">
                                Brandon
                            </p>
                            <p className="text-7xl px-5 mb-5 leading-11 flex justify-center items-center inline">
                                Mohammed
                            </p>
                        </div>

                        <hr className="lg:w-96 w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />

                        <div className="flex flex-col lg:flex-row justify-around items-center w-full  px-2">
                            <div className={`transition-opacity duration-[4s] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`transform transition-transform duration-[2s]  ${visible ? 'translate-y-0' : 'translate-y-12'}`}>
                                    <Link href="#intro_about_me" className="rounded-full  text-3xl px-4 py-2 ">
                                        <p>
                                            Introduction
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <div className={`transition-opacity duration-[4s] delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`transform transition-transform duration-[2s] delay-500 ${visible ? 'translate-y-0' : 'translate-y-12'}`}>
                                    <Link href="#skills" className="rounded-full  text-3xl px-4 py-2">
                                        <p>
                                            Skills
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <div className={`transition-opacity duration-[4s] delay-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`transform transition-transform duration-[2s] delay-1000 ${visible ? 'translate-y-0' : 'translate-y-12'}`}>
                                    <Link href="#projects" className="rounded-full  text-3xl px-4 py-2">
                                        <p>
                                            Projects
                                        </p>
                                    </Link>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

"use client"

import Image from "next/image";
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
            <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen">
                <div className=" w-full h-full flex flex-col justify-center ">
                    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} >
                        <p className="text-7xl px-5 mb-10 leading-11 flex justify-center items-center ">
                            Hi, I am
                            {visible}
                        </p>
                        <p className="text-7xl px-5 mb-10 leading-11 flex justify-center items-center">
                            Brandon Mohammed
                        </p>
                    </div>

                    <hr className="w-[55rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />

                    <div className={`transition-opacity duration-[7s] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className={`transform transition-transform duration-[4s] ${visible ? 'translate-y-0' : 'translate-y-10'}`}>
                            <div className="flex flex-col md:flex-row justify-around items-center w-full  mt-10 px-2">
                                <div >
                                    <Link href="#intro_about_me" className="rounded-full  text-3xl px-4 py-2 ">
                                        <p>
                                            Introduction
                                        </p>
                                    </Link>
                                </div>
                                <div >
                                    <Link href="#skills" className="rounded-full  text-3xl px-4 py-2">
                                        <p>
                                            Skills
                                        </p>
                                    </Link>
                                </div>
                                <div >
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

                <div className=" w-full h-full flex justify-center items-center overflow-hidden">
                    <Image
                        src="/webPhoto.jpg"
                        width={1200}
                        height={1600}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    );
}

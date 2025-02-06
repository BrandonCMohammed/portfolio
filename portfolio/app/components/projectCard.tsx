import Image from "next/image";
import pic from "@/public/ProtfolioPic.png"

export default function ProjectCard() {
    return (
        <div className="py-5">
            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                <Image
                    src={pic}
                    alt=""
                    className="rounded-lg"

                />
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Website</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This website was built to display my projects</p>

                    <div className="flex gap-4">
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg">
                            NEXT.JS
                        </div>
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg">
                            TAILWIND
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
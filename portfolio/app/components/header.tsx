import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen">
        <div className=" w-full h-full flex flex-col justify-center ">
          <div >
            <p className="text-7xl px-5 mb-10 leading-11 flex justify-center items-center">
              Hi, I am
            </p>
            <p className="text-7xl px-5 mb-10 leading-11 flex justify-center items-center">
              Brandon Mohammed
            </p>
          </div>

          <hr className="w-[55rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"/>

          <div className="flex flex-col md:flex-row justify-around items-center w-full  mt-10 px-2">
            <div>
              <Link href="#intro_about_me" className="rounded-full  text-3xl px-4 py-2">
                Introduction
              </Link>
            </div>
            <div>
              <Link href="#skills" className="rounded-full  text-3xl px-4 py-2">
                Skills
              </Link>
            </div>
            <div>
              <Link href="#projects" className="rounded-full  text-3xl px-4 py-2">
                Projects
              </Link>
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

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-full h-full flex flex-col justify-center ">
          <div>
            <p className="text-7xl px-5 mb-10 leading-11">
              Hi, I am Brandon Mohammed and I am a software developer
            </p>
          </div>
          <div className="flex justify-between w-3/4 mt-10 px-2">
            <div>
              <Link href="#intro_about_me" className="rounded-full  text-3xl px-4 py-2">
                Intro
              </Link>
            </div>
            <div>
              <Link href="#projects" className="rounded-full  text-3xl px-4 py-2">
                Projects
              </Link>
            </div>
            <div>
              <Link href="#skills" className="rounded-full  text-3xl px-4 py-2">
                Skills
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

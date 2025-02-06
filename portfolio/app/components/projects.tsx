import ProjectCard from "./projectCard";

export default function Projects() {
    return (
        <>
            <section id="projects" className="p-10 bg-neutral-800 flex flex-col justify-center items-center w-full">

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

            </section>
        </>
    );
}
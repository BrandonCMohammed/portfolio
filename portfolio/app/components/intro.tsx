export default function Intro() {
    return (
        <>
            <section id="intro_about_me" className=" flex flex-col w-full  text-gray-300">

                <div className="flex flex-row">
                    <div className="w-1/2 flex justify-center items-center px-5 border-r border-b border-indigo-500 bg-slate-800 text-3xl">

                        Software developer based in Trinidad and Tobago

                    </div>
                    {/* <hr/> */}

                    <div className="w-1/2 h-80 border-b border-indigo-500 flex justify-center items-center text-5xl">
                        {/* ABOUT */}
                    </div>

                </div>

                <div className="flex flex-row">

                    <div className="w-1/2 h-80 border-r border-r border-b border-indigo-500 flex justify-center items-center text-5xl">
                        {/* EXPERIENCE */}
                    </div>
                    <div className="w-1/2 flex justify-center items-center px-5 border-b border-indigo-500 bg-slate-800 text-3xl">
                        Experience in Web Development, UI design and Database Design.
                        {/* In my current position, I am being trained in Enterprise Architecture and Developer Operations. */}

                    </div>
                    {/* <hr/> */}

                </div>

                <div className="flex flex-row">


                    <div className="w-1/2 flex justify-center items-center px-5 border-r border-indigo-500 bg-slate-800 text-3xl">
                        Passionate, creative, problem solver, team player, business mindset
                        {/* I am a passionate, creative and patient person who loves to problem solve. Some of my hobbies that show this is my passion for speed cubing and music.
                        I am a quick learner and honest. I pay attention to details which allows me to plan and stay well organized. I am a team player and my
                        communication skills as well as open mindedness and flexability aid me in working with teams. Due to me experience working under an Enterprise Architecture team,
                        this has allowed me to develop a business prespective to go along with my technical mindset. */}
                    </div>
                    <div className="w-1/2 h-80 flex justify-center items-center text-5xl">
                        {/* PERSONALITY */}
                    </div>

                </div>




                {/* I am excited to work with you. If you need to contact me, my number is +1(868)314-9365 and my email is brandonmohammed711@gmail.com */}




            </section>
        </>
    );
}
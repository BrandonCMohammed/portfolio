export default function Intro() {
    return (
        <>

            <section id="intro_about_me" className=" flex flex-col  w-full text-gray-300 p-10  bg-neutral-800">
                <div className="flex justify-center items-center ">
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

            </section>
        </>
    );
}
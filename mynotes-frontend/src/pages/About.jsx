const About = () => {
    return (
        <div className="h-full md:mb-48">
            {/* Banner Section */}
            <div className="relative mb-10">
                <div className="ratio ratio-16x9">
                    <img src={"../../public/aboutbanner.jpg"} className="rounded" style={{ height: "600px", width: "100%"}} loading="lazy" alt="About Us Banner" />
                </div>
                <div className="absolute top-0 left-0 right-0 pt-64">
                    <h1 className="text-5xl font-sans font-bold p-4 text-cyan-600 text-center">
                        About <span className="text-purple-500">NotHi</span>
                    </h1>
                </div>
            </div>

            {/* Our Aim Section */}
            <div className="flex flex-col md:flex-row items-center gap-10 mx-4 md:mx-10">
                <div className="w-full md:w-1/2 bg-transparent shadow-md px-20 py-20">
                    <h1 className="text-2xl md:text-4xl font-bold text-start text-cyan-600 my-2">Our <span className="text-purple-500">Aim</span></h1>
                    <ul className="list-disc ml-10 text-blue-900">
                        <li className="text-lg font-bold text-start">Track your daily updates effortlessly.</li>
                        <li className="text-lg font-bold text-start">Keep your notes organized in one place.</li>
                        <li className="text-lg font-bold text-start">Enhance productivity with quick access to all notes.</li>
                        <li className="text-lg font-bold text-start">Collaborate and share notes with ease.</li>
                        <li className="text-lg font-bold text-start">Keep your plans and projects organized.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 ratio ratio-16x9">
                    <img src="../../public/about1.jpg" className="rounded" style={{ height: "400px", width: "100%"}} loading="lazy" alt="Our Aim" />
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="flex flex-col md:flex-row-reverse items-center mt-10 gap-4 mx-4 md:mx-10">
                <div className="w-1/2 bg-transparent shadow-md px-20 py-24">
                    <p className="text-4xl font-bold text-start text-cyan-500">
                        Our <span className="text-purple-500">Vision</span>
                    </p>
                    <p className="text-lg font-semibold text-blue-900 mt-4">
                        At NotHi, we aim to empower individuals and teams to manage their notes efficiently. Whether it’s for work, study, or personal projects, our goal is to provide an intuitive and powerful platform that enhances your ability to capture, organize, and retrieve information effortlessly.
                    </p>
                </div>
                <div className="w-1/2 ratio ratio-16x9">
                    <img src="../../public/about2.jpg" className="rounded" style={{ height: "400px", width: "100%"}} loading="lazy" alt="Our Vision" />
                </div>
            </div>
        </div>
    );
};

export default About;

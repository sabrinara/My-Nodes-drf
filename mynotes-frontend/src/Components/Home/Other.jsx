import Lottie from "lottie-react";
import ani from "../../../public/home.json";

const Other = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 mx-4 md:mx-10">
         
            <div className="w-full md:w-1/2">
                <Lottie animationData={ani} loop={true} />
            </div>

       
            <div className="w-full md:w-2/3  px-20 py-20 mb-10">
                <h1 className="md:ml-8 mb-6 text-2xl md:text-5xl font-bold text-start text-cyan-500 my-2">Welcome to <span className="text-purple-500">NotHi</span></h1>
                <ul className="list-disc ml-10 ">
                    <li className="text-lg font-bold  text-start my-2 text-cyan-500">Efficient Note Management</li>
                    <p className="text-md text-start ">Organize your thoughts, ideas, and tasks effortlessly in one place.</p>

                    <li className="text-lg font-bold text-start my-2 text-purple-500">Collaborative Workspaces</li>
                    <p className="text-md text-start ">Share notes with team members or friends and collaborate in real-time.</p>

                    <li className="text-lg font-bold text-start my-2 text-cyan-500">Secure and Reliable</li>
                    <p className="text-md text-start ">Keep your notes secure with advanced data protection and easy access across devices.</p>

                    <li className="text-lg font-bold text-start my-2 text-purple-500">User-Friendly Interface</li>
                    <p className="text-md text-start ">A clean and intuitive design to make note-taking a seamless experience.</p>
                </ul>
            </div>
        </div>
    );
};

export default Other;

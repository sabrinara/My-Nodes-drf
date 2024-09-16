import Lottie from "lottie-react";
import ani from "../../../public/home.json";

const Other = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 mx-4 md:mx-10">
            <div className="w-full md:w-1/2">
                <Lottie animationData={ani} loop={true} />
            </div>
            <div className="w-full md:w-1/2 bg-transparent shadow-md px-20 py-20">
                <h1 className="text-2xl md:text-4xl font-bold text-start text-cyan-600 my-2">Not<span className="text-purple-500">Hi</span></h1>
                <ul className="list-disc ml-10 text-blue-900">

                </ul>
            </div>
        </div>
    );
};

export default Other;
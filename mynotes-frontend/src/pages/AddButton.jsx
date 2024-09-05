import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const AddButton = () => {
    return (
        <div className="fixed bottom-8 z-10 right-10 md:right-28">
            <Link to="/note/new" className="flex items-center text-7xl cursor-pointer text-cyan-600 hover:text-purple-500">
                <AiFillPlusCircle />
            </Link>
        </div>
    );
};

export default AddButton;

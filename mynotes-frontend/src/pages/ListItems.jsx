import { Link } from "react-router-dom";

import { FaRegNoteSticky } from "react-icons/fa6";
const ListItems = ({ note,id }) => {

    const getDate = (note) => {
        return new Date(note.created).toLocaleDateString();

    }
    console.log(note)
    const getTitle = (note) => {

        return note.title;
    };
    

    return (
        <div className="">
            {/* <div className="border-2 border-cyan-500 p-6 text-lg m-6"> old style code */}
            <div className=" m-6 text-lg ">
                <Link to={`/note/${note.id}/`}>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <FaRegNoteSticky className="text-2xl text-cyan-500 " />
                            <h1 className="text-purple-500 text-2xl font-semibold"> {getTitle(note)}</h1>
                        </div>
                        <p className="text-cyan-600 font-bold"> {getDate(note)}</p>
                    </div>

                </Link>
             
                <hr className="my-4 border-1 border-cyan-500" />
            </div>



        </div>
    );
};

export default ListItems;


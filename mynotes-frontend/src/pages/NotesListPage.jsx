import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import { GiNotebook } from "react-icons/gi";
import AddButton from "./AddButton";
import api from "../api";

const NotesListPage = () => {
    const [notes, setNotes] = useState([]);


    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const length = notes.length;

    return (
        <div className="md:pb-20 md:m-20  min-h-screen md:h-screen">
            {length === 0 ? (
                <div className="flex flex-col justify-center items-center text-center py-20">
                    <div className="flex items-center gap-2">
                        <GiNotebook className="text-6xl md:text-9xl text-cyan-500" />
                        <h1 className="text-3xl md:text-6xl text-purple-500 font-bold">No Notes</h1>
                    </div>
                    <h1 className="text-3xl md:text-4xl text-cyan-500 font-bold">Add Note</h1>

                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-between">
                        <div className="ml-6 flex items-center   gap-2">
                            <GiNotebook className="text-2xl md:text-5xl text-cyan-500" />
                            <h1 className="text-xl md:text-4xl  text-purple-500 font-bold">Notes</h1>
                        </div>
                        <h1 className="text-xl md:text-4xl mr-6 text-purple-500 font-bold">{length}</h1>
                    </div>

                    <div className="border-2 border-purple-500 p-6  m-6 md:mb-10">
                        {notes.map((note, index) => (
                            <ListItems key={index} note={note} />
                        ))}
                    </div>

                </div>
            )}
            <AddButton title="Add Note" />
        </div>

    );
};

export default NotesListPage;
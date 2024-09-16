import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { BiArrowToLeft } from "react-icons/bi";

const NotePage = () => {

    const { id } = useParams();
    const [isUpdating, setIsUpdating] = useState(false);
    const [note, setNote] = useState({});
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    useEffect(() => {
        const getNote = async () => {
            try {
                const response = await axiosPublic.get(`/api/notes/${id}/`);
                setNote(response.data);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        getNote();
    }, [axiosPublic, id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    };


    const handleCreate = async () => {
        try {
            const response = await axiosPublic.post("/api/notes/", note);
            setNote(response.data);
            navigate("/note");
        } catch (error) {
            console.error("Error creating note:", error);
        }
    }
    const handleUpdate = async () => {
        try {
            const response = await axiosPublic.put(`/api/notes/update/${id}/`, note);
            setNote(response.data);
            navigate("/note");
        } catch (error) {
            console.error("Error updating note:", error);
        }
        navigate("/note");
    };

    const handleDelete = async () => {
        try {
            const response = await axiosPublic.delete(`/api/notes/delete/${id}/`, note);
            setNote(response.data);
            navigate("/note");
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            if (id === "new" && note.title !== '') {
                await handleCreate();
            } else if (id !== "new" && note.title === '') {
                await handleDelete();
            } else if (id !== "new" && note.title !== '') {
                await handleUpdate();
            }
        } catch (error) {
            console.error("Error submitting note:", error);
        } finally {
            navigate("/note");
        }
    };
    const handleClickUpdate = () => {
        setIsUpdating(true);
    };

    const getCreatedDate = (note) => {
        return new Date(note.created).toLocaleDateString();

    }
    const getDate = (note) => {
        return new Date(note.updated).toLocaleDateString();

    }
    return (
        <div className="md:m-20 h-screen">
            <div className="ml-6 flex items-center gap-2 mt-10 md:mt-0">
                <GiNotebook className="text-5xl text-cyan-500" />
                <h1 className="text-4xl text-purple-500 font-bold">Note </h1>
            </div>
            <div className="border-2 border-cyan-500 p-6 md:p-8 m-6 md:mb-44">


                <div className="flex items-center justify-between gap-2 my-2" onClick={handleSubmit} >
                    <div className="flex items-center gap-2">
                    <BiArrowToLeft className="text-3xl text-purple-500" ></BiArrowToLeft>
                    <h1 className="text-2xl text-cyan-500 font-bold">Details </h1>
                    </div>
                    {
                  id !== 'new' && (
                    <div className="flex items-center justify-between gap-16">
                    <h1 ><span className="text-lg  font-medium text-cyan-500">Created: </span>{getCreatedDate(note)} </h1>
                    {/* <h1 ><span className="text-lg  font-medium text-purple-500">Last Update: </span>{getDate(note)}</h1> */}
                </div>

                  )
              }
                </div>
             
                <hr className="my-4 border-1 border-cyan-500" />
                <p><span className="text-cyan-600"></span>{note?.title}</p>
                <div>
                    {id !== 'new' ? (
                        <>
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <button onClick={handleDelete} >
                                    <h1 className="text-sm text-white bg-rose-500 rounded px-2 py-1 font-semibold">Delete Note</h1>
                                </button>
                            </div>


                            {!isUpdating ? (
                                <div className="grid grid-cols-1 text-center  gap-2">
                                    <div>
                                        <button onClick={handleClickUpdate} >
                                            <h1 className="text-md text-white bg-cyan-500 rounded px-2 py-1 font-semibold" >Wanna Update?</h1>
                                        </button>
                                    </div>
                                    <div>
                                        <h1 className="text-sm text-purple-500  font-medium"> Click to update your note.</h1>
                                    </div>

                                </div>

                            ) : (
                                <div className="grid grid-cols-1 items-center justify-end gap-2">
                                    <div className="flex items-center justify-end gap-2 ">
                                        <button onClick={handleSubmit}  >
                                            <h1 className="text-sm text-white bg-cyan-500 rounded px-2 py-1 font-semibold " >Submit Note</h1>
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter new title"
                                        className="w-full border-2 border-purple-500 rounded mb-4 py-2"
                                        onChange={handleChange}
                                        value={note?.title}
                                    />

                                    <textarea
                                        name="content"
                                        onChange={handleChange}
                                        value={note?.content}
                                        className="w-full h-40 border-2 border-purple-500 rounded"
                                        placeholder="Write your thought here...."
                                    />


                                </div>
                            )}

                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <button onClick={handleSubmit}  >
                                    <h1 className="text-sm text-white bg-cyan-500 rounded px-2 py-1 font-semibold " >Submit Note</h1>
                                </button>
                            </div>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter new title"
                                className="w-full border-2 border-purple-500 rounded mb-4 py-2"
                                onChange={handleChange}
                                value={note?.title}
                            />

                            <textarea
                                name="content"
                                onChange={handleChange}
                                value={note?.content}
                                className="w-full h-40 border-2 border-purple-500 rounded"
                                placeholder="Write your thought here...."
                            />

                        </>
                    )}
                </div>
                {/* <h1 className="text-sm text-purple-500  font-medium"> Write your thought here....</h1> */}
            </div>
        </div>
    );
};

export default NotePage;

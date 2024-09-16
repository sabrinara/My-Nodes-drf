import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../layout/Root";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotePage from "../pages/NotePage";
import NotesListPage from "../pages/NotesListPage";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";


function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "/note",
            //     element: <Note />
            // },
            {
                path: "/note",
                element: <ProtectedRoute><NotesListPage /></ProtectedRoute>
            },
            {
                path: "/note/:id",
                element: <ProtectedRoute><NotePage /></ProtectedRoute>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },

            {
                path: "/logout",
                element: <Logout />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <RegisterAndLogout />
    },
]);


export default routers
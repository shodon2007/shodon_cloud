import {
    createBrowserRouter,
} from "react-router-dom";
import Auth from "@/pages/Auth/Auth";
import Layout from "@/components/Layout/Layout";
import FileExplorer from "@/pages/FileExplorer/FileExplorer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <FileExplorer />
            },
            {
                path: "/auth",
                element: <Auth />,
            },
        ]
    },

]);

export default router;
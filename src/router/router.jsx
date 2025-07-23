import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/pages/Home";

const router= createBrowserRouter([
    {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<h1>Router is not fount</h1>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
    ]
}
])
export default router;
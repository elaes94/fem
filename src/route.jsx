import App from './App.jsx'
import ErrorPage from "./error-page.jsx";
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    }, {
        path: "/toto",
        element: <div>Toto</div>
    },
])

export default router
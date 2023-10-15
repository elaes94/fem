import App from './App.jsx'
import ErrorPage from "./page/error-page.jsx";
import { createBrowserRouter } from "react-router-dom"
import Result from './page/results-summary-component-main'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    }, {
        path: "/toto",
        element: <div>Toto</div>
    }, {
        path: "/result",
        element: <Result />
    },
])

export default router
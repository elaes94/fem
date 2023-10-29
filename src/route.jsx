import App from './App.jsx'
import ErrorPage from "./page/error-page.jsx";
import { createBrowserRouter } from "react-router-dom"
import Result from './page/results-summary-component-main'
import Rating from './page/interactive-rating-component-main'

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
    }, {
        path: "/rating",
        element: <Rating />
    },
])

export default router
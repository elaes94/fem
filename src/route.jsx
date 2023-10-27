import App from './App.jsx'
import ErrorPage from "./page/error-page.jsx";
import { createBrowserRouter } from "react-router-dom"
import Result from './page/results-summary-component-main'
import Newsletter from './page/newsletter-sign-up-with-success-message-main/Index.jsx'

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
        path: "/newsletter",
        element: <Newsletter />
    },
])

export default router
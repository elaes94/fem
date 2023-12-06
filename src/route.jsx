import App from './App.jsx'
import ErrorPage from "./page/error-page.jsx";
import { createBrowserRouter } from "react-router-dom"
import Result from './page/results-summary-component-main'
import Rating from './page/interactive-rating-component-main/Index.jsx'
import Newsletter from './page/newsletter-sign-up-with-success-message-main/Index.jsx'
import Faq from './page/faq-accordion-main/Index.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    }, {
        path: "/result",
        element: <Result />
    }, {
        path: "/rating",
        element: <Rating />
    }, {
        path: "/newsletter",
        element: <Newsletter />
    }, {
        path: "/faq",
        element: <Faq />
    },
])

export default router
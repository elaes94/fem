import { Link } from "react-router-dom"

function MyCard({route}){

    const mystyle = {
        backgroundColor: 'chartreuse',
        margin: '1rem',
        padding: '1rem',
        fontSize: '1.2rem'
    }

    const myLink = {
        textDecoration: 'none',
        color: 'brown',
    }


    return (
        <Link to={route} style={myLink}>
            <div style={mystyle}>
                {route.slice(1)}
            </div>
        </Link>
    )
}

export default MyCard
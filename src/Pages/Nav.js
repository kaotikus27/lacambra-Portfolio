import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {

    const [toggle, setToggle] = React.useState("active")

    function toggleActive() {
        setToggle(prevState => !prevState)
    }

    return (
        <>
            <nav>
                <a href="Main" className="logo">Layout Specialist</a>
                <ul >
                    <Link to={"/Main"} ><a href="#" className="active">HOME</a></Link >
                    <Link to={"/About"} ><a href="#">About</a></Link>
                    <Link to={"/Contact"} ><a href="#">Contact Us</a></Link>
                    <Link to={"/Service"} ><a href="#">Service</a></Link>
                </ul>
            </nav>
        </>
    )
}
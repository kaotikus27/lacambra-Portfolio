import React from "react"
import aboutimg from "../images/Profile.jpg"

export default function About() {
    return (
        <>

            <div className="about--container">
                <img src={aboutimg} />
                <div className="about--text">
                    <p>About Me</p>
                    <p>Hello, My name is Kyla Lacambra. I am a front end developer and Designer</p>
                    <p>I love creating and exploring cool stuff about HTML and CSS, Sample Projects can be seen below</p>
                    <button>Hire me</button>
                    <button>Download CV</button>
                </div>
            </div>
        </>
    )
}
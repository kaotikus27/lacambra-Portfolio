import React from "react"
import Model from "../images/model.png"
import aboutimg from "../images/Profile.jpg"
import { Link } from "react-router-dom"
export default function Main() {
    return (
        <>
            <section>
                <div className="text--container">
                    <p>Hello!</p>
                    <p>I'm Kyla Lacambra</p>
                    <p>I am Front End Developer <br /> & Designer</p>
                    <button className="hire--btn">Hire me!</button>
                    <button className="down--cv">Download CV</button>
                </div>
            </section>
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
            <div className="services">
                <div className="services--text">
                    <p>Services</p>
                    <p>Services Required</p>
                    <p>If you want to build or wanted someone to build your website with cool and lot of colorful things contact me, this is something that needed to be add ,
                        a text where you can put that amaze your client something here!.
                    </p>
                </div>
                <h1>PROJECTS</h1>
                <div className="box--container">
                    <div className="box-1"></div>
                    <div className="box-2"></div>
                    <div className="box-3"></div>
                </div>
            </div>
            <div className="contact">
                <p>If you have Any project in your mind!.</p>
                <button  ><Link to={"/Contact"} ><a href="#">Contact Me</a></Link></button>
            </div>
        </>
    )
}
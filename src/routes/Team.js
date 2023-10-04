import React from "react";
import Navbar from "../components/Navbar";
import CEOImg from "../assets/avishek.jpg"; 
import MDImg from "../assets/sushil.jpg";
import COOImg from "../assets/sabin.jpg";
import CIOImg from "../assets/pranay.jpg";
import PMImg from "../assets/sujan.jpg";
import QAImg from "../assets/promish.jpg";
import './Team.css';

function Team() {
  return (
    <>
      <Navbar />
      <h2>Meet our team here at Saptam Technologies</h2>
      <div className="TeamInfo">
        <img src={CEOImg} alt="CEO" />
        <p>Mr. Avishek Subedi, Chief Executive</p>
        <img src={MDImg} alt="MD" />
        <p>Mr. Sushil Baral, Managing Director</p>
        <img src={COOImg} alt="COO" />
        <p>Mr. Sabin Adhikari, Chief Operation Officer</p>
        <img src={CIOImg} alt="CIO" />
        <p>Mr. Pranay Shakya, Chief Information Officer</p>
        <img src={PMImg} alt="PM" />
        <p>Mr. Sujan Tiwari, Project Manager</p>
        <img src={QAImg} alt="QA" />
        <p>Mr. Promish Gurung, Quality Assurance</p>
      </div>  
    </>
  );
}

export default Team;

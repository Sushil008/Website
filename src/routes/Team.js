import React from "react";
import Navbar from "../components/Navbar";
import CEOImg from "../assets/avishek.jpg"; 
import MDImg from "../assets/sushil.jpg";
import COOImg from "../assets/sabin.jpg";
import CIOImg from "../assets/pranay.jpg";
import PMImg from "../assets/sujan.jpg";
import PMAudio from "../assets/sujan-audio.mp3";
import QAImg from "../assets/promish.jpg";
import './Team.css';

function Team() {
  return (
    <>
      <Navbar />
      <h2 style= {{backgroundColor: '#4c2121', color: 'white', opacity:'90%', marginLeft:'20px', marginRight:'20px'}}>
        Meet our team here at Saptam Technologies
      </h2>
      <div className="TeamInfo">
        <div className="team-member">
          <img src={CEOImg} alt="CEO" />
          <p>Mr. Avishek Subedi, Chief Executive</p>
          <pre>{'"Ek game UNO khelam na ani dhama dhaam 8 bajey samma kaam garni"'}</pre>
        </div>
        <div className="team-member">
          <img src={MDImg} alt="MD" />
          <p>Mr. Sushil Baral, Managing Director</p>
          <pre>{'"Saptam Tech have a strong reputation in the industry for its work culture, innovation, and commitment to excellence. \n We are very appreciative of the companys positive image and values."'}</pre>
        </div>
        <div className="team-member">
          <img src={COOImg} alt="COO" />
          <p>Mr. Sabin Adhikari, Chief Operation Officer</p>
          <pre>{'"Khoi office ta cha tara k cha kasto cha kei tha nai chaina. Mah chuna ta chu tara kaha chu kina chu tha nai chaina. \n Mah office nai aunna ani kasari tha huncha sir malai ?  "'}</pre>
        </div>
        <div className="team-member">
          <img src={CIOImg} alt="CIO" />
          <p>Mr. Pranay Shakya, Chief Information Officer</p>
          <pre>{'"Khoi KTO k bhanam ma. Jaam baru mantri uncle lai bhetna"'}</pre>
        </div>
        <div className="team-member">
          <img src={PMImg} alt="PM" />
          <p>Mr. Sujan Tiwari, Project Manager</p>
          <pre>{'" The culture, values, and work-life balance the company posseses appealed to me. \n A good cultural fit contributes to our overall job satisfaction and well-being."'}</pre>
          <audio controls>
            <source src={PMAudio} type="audio/mpeg" />
            
          </audio>
        </div>
        <div className="team-member">
          <img src={QAImg} alt="QA" />
          <p>Mr. Promish Gurung, Quality Assurance</p>
          <pre>{'"Khoi huna ta ho, tara huna chai k ho"'}</pre>
        </div>
      </div>  
    </>
  );
}

export default Team;
import React from 'react'
import "./HeroStyles.css";
function Hero(props){
  return (
    <div className="hero-text">
      
       <img alt="HeroImg" src="https://thumbs.dreamstime.com/z/software-development-word-cloud-concept-grey-background-88535408.jpg?w=992"/>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.title}</p>
        
        </div>    
    </div>
    )
}

export default Hero;

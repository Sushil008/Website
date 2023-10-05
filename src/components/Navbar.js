import {Component} from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";
import brand from "../assets/saptam.png";
import "../styles.css"


class Navbar extends Component{
    state = {clicked: false};
    handleClick =() =>  {
        this.setstate({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">            
                <h1 className="navbar-logo" style={{ backgroundColor: 'white', color: '#000000'}}><img src={brand} alt="banner_image" className="brand-img"/><span style= {{fontWeight:'100%', fontFamily:'Helvetica', marginLeft: '20px', marginRight:'20px'}} >Technologies</span></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times":"fas fa-bar"}></i>
                </div>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return( 
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                            </Link>
                        </li>
                        )
                     }) }
                   
                </ul>
            </nav>
        )
    }
}

export default Navbar;
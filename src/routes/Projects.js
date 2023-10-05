import Navbar from "../components/Navbar";
import AppPic from "../assets/anfa.jpg"
import BandezzPic from "../assets/bandezz.jpg";
function Projects (){

    return(
        <>
        <Navbar/>
        <h2 style= {{backgroundColor: '#4c2121', color: 'white', opacity:'90%', marginLeft:'20px', marginRight:'20px'}}>
            Here are some products/projects we have built and are currently building.
        </h2>
            <pre>{' \n '}</pre>
        <div style={{ display: 'block', alignItems: 'center' }}>
            <img src={AppPic} alt="Sahayatri App" style={{ height: '100px', width: '100px', opacity:'70%' }} />
            <div style={{marginLeft: '20px', marginRight:'20px'}}>
                 <dt style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 'larger' }}>
                    <u>Sahayatri</u>- <span style={{ fontStyle: 'italic' }}>Your Travel Buddy</span>
                </dt>
                <dd style={{ textAlign: 'left' }}>
                    Sahayatri is your ultimate travel guide  mobile application, meticulously crafted to transform your journeys into unforgettable experiences. With Sahayatri, embark on a voyage of exploration and discovery like never before.
                    Meet Your Sahayatri: Our app serves as your unwavering travel companion, ensuring a seamless journey from beginning to end. Whether you're an adventure enthusiast, a culture aficionado, or a leisure traveler, Sahayatri has got you covered.
                </dd>
            </div>
        </div>
        <div style={{ float: 'right', alignItems: 'center' }}>
            <img src={BandezzPic} alt="Sahayatri App" style={{ height: '100px', width: '100px', opacity:'70%' }} />
            <div style={{marginLeft: '20px', marginRight:'20px'}}>
                 <dt style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 'larger' }}>
                    <u>Bandezz</u>- <span style={{ fontStyle: 'italic' }}>connecting local musicians</span>
                </dt>
                
                <dd style={{ textAlign: 'left' }}>
                Introducing Bandezz – Your Gateway to Local Music Collaboration!Bandezzis the ultimate mobile app designed to bridge the gap between local musicians and foster exciting collaborations. Whether you're a guitarist, vocalist, drummer, or any other instrumentalist, Bandezzis your go-to platform to find, connect, and create music with fellow artists in your area.
                </dd>
            </div>
            
        </div>    
        </>
    )

}

export default Projects;
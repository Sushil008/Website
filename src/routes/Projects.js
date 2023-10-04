import Navbar from "../components/Navbar";
import AppPic from "../assets/anfa.jpg"
function Projects (){

    return(
        <>
        <Navbar/>
        <h2 style= {{backgroundColor: '#4c2121', color: 'white'}}>
            Here are some products/projects we have built and are currently building.
        </h2>
            <pre>{' \n '}</pre>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={AppPic} alt="Sahayatri App" style={{ height: '100px', width: '100px' }} />
            <div>
                 <dt style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 'larger' }}>
                    <u>Sahayatri</u>- <span style={{ fontStyle: 'italic' }}>Your Travel Buddy</span>
                </dt>
                <dd style={{ textAlign: 'left' }}>
                    Sahayatri is your ultimate travel guide  mobile application, meticulously crafted to transform your journeys into unforgettable experiences. With Sahayatri, embark on a voyage of exploration and discovery like never before.
                    Meet Your Sahayatri: Our app serves as your unwavering travel companion, ensuring a seamless journey from beginning to end. Whether you're an adventure enthusiast, a culture aficionado, or a leisure traveler, Sahayatri has got you covered.
                </dd>
            </div>
        </div><div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={AppPic} alt="Sahayatri App" style={{ height: '100px', width: '100px' }} />
            <div>
                 <dt style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 'larger' }}>
                    <u>Bandezz</u>- <span style={{ fontStyle: 'italic' }}>connecting local musicians</span>
                </dt>
                <dd style={{ textAlign: 'left' }}>
                    Sahayatri is your ultimate travel guide  mobile application, meticulously crafted to transform your journeys into unforgettable experiences. With Sahayatri, embark on a voyage of exploration and discovery like never before.
                    Meet Your Sahayatri: Our app serves as your unwavering travel companion, ensuring a seamless journey from beginning to end. Whether you're an adventure enthusiast, a culture aficionado, or a leisure traveler, Sahayatri has got you covered.
                </dd>
            </div>
        </div>    
        </>
    )

}

export default Projects;
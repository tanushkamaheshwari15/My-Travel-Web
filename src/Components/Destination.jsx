import mountain1 from "../assets/mountain1.jpeg";
import mountain2 from "../assets/mountain2.jpg";
import mountain3 from "../assets/mountain3.webp";
import mountain4 from "../assets/mountain4.jpg";
import DestinationData from "./DestinationData";


import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData
            cName = "first-des"
                heading="Taal Volcano, Batangas"
                text="One od the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the creater is a mere 45 minutes, and is easy enough for beginners, Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano,including volconic rocks and steam vents. the hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home !"
                img1={mountain1}
                img2={mountain2}
            />

             <DestinationData
             cName= "first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Nestled in the scenic town of San Juan, Batangas, Mt. Daguldul is a beginner-friendly mountain that offers a rewarding mix of forest trails, coastal views, and local culture. At approximately 672 meters above sea level, it's perfect for first-time hikers or those looking for a quick nature getaway from Manila."
                img1={mountain3}
                img2={mountain4}
            />
        </div>
    )
}
export default Destination;
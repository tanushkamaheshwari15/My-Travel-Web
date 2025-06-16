import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/indo.jpg";
import Trip2 from "../assets/frnc.webp";
import Trip3 from "../assets/mly.jpg";
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Embark on an unforgettable journey through Indonesia’s stunning islands.
Relax on Bali’s sun-kissed beaches, explore ancient temples, and dive into vibrant local culture.
From serene landscapes to thrilling adventures, Indonesia has it all.
Your tropical escape awaits!"
                />

                <TripData
                    image={Trip2}
                    heading="Trip in France"
                    text="Stroll through the romantic streets of Paris, sip wine in the vineyards of Bordeaux, and marvel at the French Riviera’s beauty.
From world-famous art and fashion to charming countryside villages, France captivates at every turn.
Indulge in fine cuisine, rich culture, and timeless elegance.
Your French escape begins here!"
                />

                <TripData
                    image={Trip3}
                    heading="Trip in Malaysia"
                    text="From the dazzling city lights of Kuala Lumpur to the tranquil beauty of Langkawi, Malaysia offers the perfect blend of culture, nature, and adventure.
Wander through lush rainforests, savor diverse cuisines, and explore historic temples.
Whether you're chasing city vibes or island calm, Malaysia has it all.
Start your journey today!"
                />
            </div>
        </div>
    )
}
export default Trip;
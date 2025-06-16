
import "./ServiceStyle.css";
import service from "../assets/service.jpg"

function ServiceCon() {
    return (
        <div className="service">
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquam facilis eaque ipsam, quod tenetur?</p>
            <div className="s-card">
                <div className="s-image">
                    <img src={service} alt="image" />
                </div>
                <div className="serContent">
                    <div>
                        <i class="fa-solid fa-house-chimney"></i>
                        <h3>Hotel Reservations</h3>
                        <p>Get access to a wide range of hotels, resorts, and guesthouses at competitive prices, tailored to your budget and preferences.</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-id-card"></i>
                        <h3>Easy to Contact</h3>
                        <p>Our dedicated support team is available round-the-clock to help you with any travel-related concerns.</p>
                    </div>

                    <div>
                        <i class="fa-solid fa-utensils"></i>
                        <h3>Restaurants & Cafe</h3>
                        <p>Discover the best local restaurants, from street food stalls to fine dining experiences. We guide you to where the locals eat!</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone-volume"></i>
                        <h3>24/7 Customer Support</h3>
                        <p>Our dedicated support team is available round-the-clock to help you with any travel-related concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceCon;
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ServiceCon from "../Components/ServicesCon";
function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-ser"
                heroImg="https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg"
                title="Let's Enjoy Your Trip In Pairs"
                url="/"
                btnClass="hide"
            />
            <ServiceCon/>
            <Footer/>
        </>
    )
}
export default Service;
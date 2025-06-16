import ContactFile from "../Components/ContactFile";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-contact"
                heroImg="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg"
                title="Your travel dreams are just a message away."
                url="/"
                btnClass="hide"
            />
            <ContactFile />
            <Footer />
        </>
    )
}
export default Contact;
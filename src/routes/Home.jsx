import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://plus.unsplash.com/premium_photo-1687428554373-216355fb6929?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home;
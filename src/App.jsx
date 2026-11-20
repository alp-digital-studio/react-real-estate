import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PropertyList from "./components/PropertyList.jsx";
import PropertyStats from "./components/PropertyStats.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import Footer from "./components/Footer.jsx";
import properties from "./data/properties.js";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <PropertyStats properties={properties} />
                <PropertyList properties={properties} />
                <FeaturedProperties properties={properties} />
            </main>
            <Footer />
        </>
    );
}

export default App;

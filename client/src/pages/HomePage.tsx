import Headers from "../components/Header.tsx";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className="min-h-full bg-gray-900 py-12 sm:py-16">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <Headers/>
                <Footer/>
            </div>
        </div>
    );
}

export default HomePage;
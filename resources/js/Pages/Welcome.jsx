import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import GuestLayout from "../Layouts/GuestLayout";
import backgroundImage from "../../../public/hero.jpg";
import ProductList from "@/Components/productlist";
import Footer from "@/Components/Footer";
import Catagories from "@/Components/Catagories";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <GuestLayout>
                <Head title="Welcome" />
                <div
                    className=""
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover", // Adjust as necessary
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center", // Adjust as necessary
                        height: "700px", // Adjust height as necessary
                        // Add other styles as needed
                    }}
                ></div>
                <ProductList/>
                <Catagories/>
                <Footer/>
            </GuestLayout>
        </>
    );
}

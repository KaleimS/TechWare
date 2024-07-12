import ApplicationLogo from "@/Components/ApplicationLogo";
import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="w-full">
            <Navbar />
            <div className="">{children}</div>
        </div>
    );
}

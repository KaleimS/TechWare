
import Navbar from "@/Components/Navbar";

export default function ProductLayout({ children }) {
    return (
        <div className="w-full">
            <Navbar />
            <div className="">{children}</div>
        </div>
    );
}

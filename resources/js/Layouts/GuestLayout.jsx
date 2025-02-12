import Navbar from "@/Components/Navbar";

export default function Guest({ children }) {
    return (
        <div className="w-full">
            <Navbar />
            <div className="">{children}</div>
        </div>
    );
}

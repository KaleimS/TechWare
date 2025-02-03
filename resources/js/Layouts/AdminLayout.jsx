import React from "react";
import AdminNavbar from "../Pages/Admin/AdminNavbar";
import SidebarComp from "@/Pages/Admin/SidebarComp";

export default function AdminLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-primary">
            <AdminNavbar/>
            <div className="flex flex-grow">
                <SidebarComp />
                <div className="flex-grow p-4">{children}</div>
            </div>
        </div>
    );
}

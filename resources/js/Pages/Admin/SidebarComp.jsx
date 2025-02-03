import {
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiUser,
} from "react-icons/hi";

import { Sidebar } from "flowbite-react";

export default function SidebarComp() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href={route("admin.dashboard")} icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                        <Sidebar.Item href={route("admin.products.index")}>Products</Sidebar.Item>
                        <Sidebar.Item href="#">Brand</Sidebar.Item>
                        <Sidebar.Item href="#">Category</Sidebar.Item>
                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

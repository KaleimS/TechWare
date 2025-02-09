import React, { useState, useEffect } from "react";
import { Disclosure, Popover, PopoverButton } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Link, usePage, useForm } from "@inertiajs/react";
import { initializePaddle } from "@paddle/paddle-js";

import { Inertia } from "@inertiajs/inertia";

import Logo from "../../../public/techware-high-resolution-logo-transparent.png";

const navigation1 = {
    categories: [
        {
            id: "office",
            name: "Office Furniture",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://img.freepik.com/free-photo/office-chair_1203-2396.jpg?uid=R185078485&ga=GA1.1.836261793.1738163280&semt=ais_hybrid",
                    imageAlt:
                        "Models sitting back to back, wearing Basic Tee in black and bone.",
                },
                {
                    name: "Desks",
                    href: "#",
                    imageSrc:
                        "https://img.freepik.com/free-photo/minimalist-desk-arrangement-with-laptop-top-view_23-2149073044.jpg?uid=R185078485&ga=GA1.1.836261793.1738163280&semt=ais_hybrid",
                    imageAlt:
                        "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                },
            ],
            sections: [
                {
                    id: "chairs",
                    name: "Chairs",
                    items: [
                        { name: "Executive Chairs", href: "#" },
                        { name: "Office Chairs", href: "#" },
                        { name: "Ergonomic Office Chairs", href: "#" },
                        { name: "Ergonomic Stools", href: "#" },
                        { name: "Gaming Chairs", href: "#" },
                        { name: "Browse All", href: "#" },
                    ],
                },
                {
                    id: "desk",
                    name: "Desks",
                    items: [
                        { name: "Executive Desks", href: "#" },
                        { name: "Standing Desks", href: "#" },
                        { name: "L-Shaped Desks", href: "#" },
                        { name: "Gaming Desk", href: "#" },
                        { name: "Writing Desk", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Accessories",
                    items: [
                        { name: "Footrests", href: "#" },
                        { name: "Chair Mats", href: "#" },
                        { name: "Whiteboards", href: "#" },
                        { name: "Recyclable Paper", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "gaming",
            name: "Gaming",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://img.freepik.com/free-photo/headphones-displayed-against-dark-background_157027-4466.jpg?uid=R185078485&ga=GA1.1.836261793.1738163280&semt=ais_hybrid",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Gaming Chairs",
                    href: "#",
                    imageSrc:
                        "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746568.jpg?uid=R185078485&ga=GA1.1.836261793.1738163280&semt=ais_hybrid",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
            ],
            sections: [
                {
                    id: "gamingFurniture",
                    name: "Gaming Furniture",
                    items: [
                        { name: "Gaming Chairs", href: "#" },
                        { name: "Gaming Desk", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Accessories",
                    items: [
                        { name: "Cable Managemnet", href: "#" },
                        { name: "Lamps", href: "#" },
                        { name: "Headset Holders", href: "#" },
                        { name: "Mouse Mats", href: "#" },
                        { name: "LED Lights", href: "#" },
                    ],
                },
                {
                    id: "miceKeyHead",
                    name: "Gaming Mice, Keyboards and Headsets",
                    items: [
                        { name: "Gaming Mice", href: "#" },
                        { name: "Gaming Keyboards", href: "#" },
                        { name: "Gaming Headsets", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Contact", href: "/contact" },
    ],
};

export default function Navbar() {
    const { props } = usePage();
    const { auth } = props;

    useEffect(() => {
        initializePaddle({
            environment: "sandbox",
            token: "test_cd1d6988724dfad9f64f84482f8",
        })
            .then((paddleInstance) => {
                if (paddleInstance) {
                    // Paddle.js is initialized
                }
            })
            .catch((error) => {
                console.error("Error initializing Paddle.js:", error);
            });
    }, []);

    const openCheckout = () => {
        if (window.Paddle) {
            Paddle.Checkout.open({
                items: [
                    { price_id: "pri_01jk8wfe5s9tyg723q18x6qgk5", quantity: 5 },
                    { price_id: "pri_01jk8wgscj135hs3nr6xyayaza", quantity: 1 },
                ],
                customer: {
                    email: "sam@example.com",
                    address: { country_code: "US", postal_code: "10021" },
                },
            });
        } else {
            console.error("Paddle is not loaded.");
        }
    };

    const handleSignOut = () => {
        // Example of how to sign out using Inertia.js

        Inertia.post(route("logout"));
    };
    return (
        <>
            <div>
                <Disclosure as="nav" className="bg-primary">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-30 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        aria-hidden="true"
                                        className="block h-6 w-6 group-data-[open]:hidden"
                                    />
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="hidden h-6 w-6 group-data-[open]:block"
                                    />
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="/"
                                    className="text-secondary text-2xl font-black"
                                >
                                    <img src={Logo} className="h-8" alt="" />
                                </a>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                {/* Search Input */}
                                <div className="mb-3 md:w-96 mr-20 hidden sm:flex">
                                    <div className="relative mb-4 mt-6 flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            className="relative block w-full rounded-full  bg-secondary bg-clip-padding px-3 py-[0.25rem] pl-4 pr-10 text-base font-normal leading-[1.6] text-neutral-700  transition duration-200 ease-in-out focus:z-[3] focus:border-secondary focus:text-neutral-700 dark:text-neutral-200 dark:placeholder:text-white "
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="white"
                                                className="h-5 w-5 text-neutral-700 dark:text-neutral-200"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Disclosure>
            </div>

            <div>
                <div className="bg-white">
                    {/* Mobile menu */}

                    <header className="relative bg-white">
                        <p className="flex h-10 items-center justify-center bg-secondary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                            Get free delivery on orders over $100
                        </p>

                        <nav
                            aria-label="Top"
                            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                        >
                            <div className="border-b border-gray-200">
                                <div className="flex h-16 items-center">
                                    {/* Flyout menus */}
                                    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                        <div className="flex h-full space-x-8">
                                            {navigation1.categories.map(
                                                (category) => (
                                                    <Popover
                                                        key={category.name}
                                                        className="flex"
                                                    >
                                                        <div className="relative flex">
                                                            <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                                                {category.name}
                                                            </PopoverButton>
                                                        </div>

                                                        <Popover.Panel
                                                            transition
                                                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                                        >
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                aria-hidden="true"
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                            />
                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            item.name
                                                                                        }
                                                                                        className="group relative text-base sm:text-sm"
                                                                                    >
                                                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                            <img
                                                                                                alt={
                                                                                                    item.imageAlt
                                                                                                }
                                                                                                src={
                                                                                                    item.imageSrc
                                                                                                }
                                                                                                className="object-cover object-center"
                                                                                            />
                                                                                        </div>
                                                                                        <a
                                                                                            href={
                                                                                                item.href
                                                                                            }
                                                                                            className="mt-6 block font-medium text-gray-900"
                                                                                        >
                                                                                            <span
                                                                                                aria-hidden="true"
                                                                                                className="absolute inset-0 z-10"
                                                                                            />
                                                                                            {
                                                                                                item.name
                                                                                            }
                                                                                        </a>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Shop
                                                                                            now
                                                                                        </p>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map(
                                                                                (
                                                                                    section
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            section.name
                                                                                        }
                                                                                    >
                                                                                        <p
                                                                                            id={`${section.name}-heading`}
                                                                                            className="font-medium text-gray-900"
                                                                                        >
                                                                                            {
                                                                                                section.name
                                                                                            }
                                                                                        </p>
                                                                                        <ul
                                                                                            role="list"
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map(
                                                                                                (
                                                                                                    item
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={
                                                                                                            item.name
                                                                                                        }
                                                                                                        className="flex"
                                                                                                    >
                                                                                                        <a
                                                                                                            href={
                                                                                                                item.href
                                                                                                            }
                                                                                                            className="hover:text-gray-800"
                                                                                                        >
                                                                                                            {
                                                                                                                item.name
                                                                                                            }
                                                                                                        </a>
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Popover>
                                                )
                                            )}

                                            {navigation1.pages.map((page) => (
                                                <a
                                                    key={page.name}
                                                    href={page.href}
                                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                                >
                                                    {page.name}
                                                </a>
                                            ))}
                                        </div>
                                    </Popover.Group>

                                    <div className="ml-auto flex items-center">
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                            {auth.user ? (
                                                <button
                                                    onClick={handleSignOut}
                                                    className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                                                >
                                                    Sign out
                                                </button>
                                            ) : (
                                                <>
                                                    <Link
                                                        href={route("login")}
                                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                                    >
                                                        Sign in
                                                    </Link>
                                                    <span
                                                        aria-hidden="true"
                                                        className="h-6 w-px bg-gray-200"
                                                    />
                                                    <Link
                                                        href={route("register")}
                                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                                    >
                                                        Create account
                                                    </Link>
                                                </>
                                            )}
                                        </div>

                                        <div className="hidden lg:ml-8 lg:flex">
                                            <a
                                                href="#"
                                                className="flex items-center text-gray-700 hover:text-gray-800"
                                            >
                                                <img
                                                    alt=""
                                                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                    className="block h-auto w-5 flex-shrink-0"
                                                />
                                                <span className="ml-3 block text-sm font-medium">
                                                    CAD
                                                </span>
                                                <span className="sr-only">
                                                    , change currency
                                                </span>
                                            </a>
                                        </div>

                                        {/* Search */}

                                        {/* Cart */}
                                        <div className="ml-4 flow-root lg:ml-6">
                                            <a
                                                href="#"
                                                onClick={openCheckout}
                                                className="group -m-2 flex items-center p-2"
                                            >
                                                <ShoppingBagIcon
                                                    aria-hidden="true"
                                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                />
                                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                                    0
                                                </span>
                                                <span className="sr-only">
                                                    items in cart, view bag
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    );
}

import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {
    Bars3Icon,
    BellIcon,
    ShoppingCartIcon,
    StarIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

const navigation = [
    { name: "Dashboard", href: "#", current: false },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar(auth) {
    return (
        <>
            <div>
                <Disclosure as="nav" className="bg-primary">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
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
                                    href="#"
                                    className="text-secondary text-2xl font-black"
                                >
                                    TechWare
                                </a>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                {/* Search Input */}
                                <div className="mb-3 md:w-96 ml-24 hidden sm:flex">
                                    <div className="relative mb-4 mt-6 flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            className="relative block w-full rounded-full  bg-secondary bg-clip-padding px-3 py-[0.25rem] pl-4 pr-10 text-base font-normal leading-[1.6] text-neutral-700  transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-700 dark:text-neutral-200 dark:placeholder:text-white "
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
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full p-1 text-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <StarIcon
                                        aria-hidden="true"
                                        className="h-8 w-8 mr-5"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full text-secondary text-sm hover:text-black">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <UserIcon className="h-8 w-8 mr-5" />
                                        </Menu.Button>
                                    </div>
                                    <Menu.Items
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <Menu.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                            >
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                            >
                                                Settings
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a
                                                href={route("register")}
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                            >
                                                Register
                                            </a>
                                        </Menu.Item>
                                        {auth.user ? (
                                            <Menu.Item>
                                                <Link
                                                    href={route("logout")}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                    method="post"
                                                    as="button"
                                                >
                                                    Sign out
                                                </Link>
                                            </Menu.Item>
                                        ) : (
                                            <Menu.Item>
                                                <Link
                                                    href={route("login")}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                >
                                                    Sign in
                                                </Link>
                                            </Menu.Item>
                                        )}
                                    </Menu.Items>
                                </Menu>
                                <button
                                    type="button"
                                    className="relative rounded-full text-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <ShoppingCartIcon
                                        aria-hidden="true"
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
            </div>

            <div>
                <Disclosure as="nav" className="bg-secondary hidden sm:flex">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
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
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-secondary"
                                                        : "text-secondary hover:bg-black hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium bg-white"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </>
    );
}

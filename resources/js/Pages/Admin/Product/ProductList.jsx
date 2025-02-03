import React from "react";

import { Link, usePage } from "@inertiajs/react";

export default function ProductList() {
    const products = usePage().props.products;

    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("updateProductButton").click();
    });
    return (
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label
                                    htmlFor="simple-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search"
                                        required=""
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <div
                                id="crud-modal"
                                tabIndex="-1"
                                aria-hidden="true"
                                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            >
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Create New Product
                                            </h3>
                                            <button
                                                type="button"
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-toggle="crud-modal"
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Close modal
                                                </span>
                                            </button>
                                        </div>
                                        <form className="p-4 md:p-5">
                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                <div className="col-span-2">
                                                    <label
                                                        htmlFor="name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Type product name"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label
                                                        htmlFor="price"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        id="price"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="$2999"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label
                                                        htmlFor="category"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Category
                                                    </label>
                                                    <select
                                                        id="category"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    >
                                                        <option selected="">
                                                            Select category
                                                        </option>
                                                        <option value="TV">
                                                            TV/Monitors
                                                        </option>
                                                        <option value="PC">
                                                            PC
                                                        </option>
                                                        <option value="GA">
                                                            Gaming/Console
                                                        </option>
                                                        <option value="PH">
                                                            Phones
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="col-span-2">
                                                    <label
                                                        htmlFor="description"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Product Description
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        rows="4"
                                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Write product description here"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                <svg
                                                    className="me-1 -ms-1 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                Add new product
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                data-modal-target="crud-modal"
                                data-modal-toggle="crud-modal"
                                className="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                <svg
                                    className="h-3.5 w-3.5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    />
                                </svg>
                                Add product
                            </button>
                            <div className="flex items-center space-x-3 w-full md:w-auto">
                                <button
                                    id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
                                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button"
                                >
                                    <svg
                                        className="-ml-1 mr-1.5 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                    Actions
                                </button>
                                <div
                                    id="actionsDropdown"
                                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="actionsDropdownButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Mass Edit
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Delete all
                                        </a>
                                    </div>
                                </div>
                                <button
                                    id="filterDropdownButton"
                                    data-dropdown-toggle="filterDropdown"
                                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="h-4 w-4 mr-2 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Filter
                                    <svg
                                        className="-mr-1 ml-1.5 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="filterDropdown"
                                    className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                                >
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Choose brand
                                    </h6>
                                    <ul
                                        className="space-y-2 text-sm"
                                        aria-labelledby="filterDropdownButton"
                                    >
                                        <li className="flex items-center">
                                            <input
                                                id="apple"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor="apple"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                Apple (56)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="fitbit"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor="fitbit"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                Microsoft (16)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="razor"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor="razor"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                Razor (49)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="nikon"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor="nikon"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                Nikon (12)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="benq"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor="benq"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                BenQ (74)
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Brand
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Publish
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((products, index) => (
                                    <tr
                                        key={products.id}
                                        className="border-b dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {products.title}
                                        </th>
                                        <td className="px-4 py-3">
                                            {products.category_id}
                                        </td>
                                        <td className="px-4 py-3">
                                            {products.brand_id}
                                        </td>
                                        <td className="px-4 py-3">
                                            {products.quantity}
                                        </td>
                                        <td className="px-4 py-3">
                                            {products.price}
                                        </td>

                                        <td className="px-4 py-3">
                                            {products.inStock}
                                        </td>
                                        <td className="px-4 py-3">
                                            {products.published}
                                        </td>
                                        <td className="px-4 py-3 flex items-center justify-end">
                                            <button
                                                id="apple-imac-27-dropdown-button"
                                                data-dropdown-toggle="apple-imac-27-dropdown"
                                                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                                type="button"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </button>
                                            <div
                                                id="apple-imac-27-dropdown"
                                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                            >
                                                <ul
                                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="apple-imac-27-dropdown-button"
                                                >
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Show
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            id="defaultModalButton"
                                                            data-modal-target="defaultModal"
                                                            data-modal-toggle="defaultModal"
                                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Edit
                                                        </button>
                                                        <div
                                                            id="defaultModal"
                                                            tabIndex="-1"
                                                            aria-hidden="true"
                                                            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
                                                        >
                                                            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                                                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                                                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                            Add
                                                                            Product
                                                                        </h3>
                                                                        <button
                                                                            type="button"
                                                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                            data-modal-toggle="defaultModal"
                                                                        >
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    fill-rule="evenodd"
                                                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                                    clip-rule="evenodd"
                                                                                ></path>
                                                                            </svg>
                                                                            <span className="sr-only">
                                                                                Close
                                                                                modal
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                    <form action="#">
                                                                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                                            <div>
                                                                                <label
                                                                                    for="name"
                                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                >
                                                                                    Name
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="name"
                                                                                    id="name"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                                    placeholder="Type product name"
                                                                                    required=""
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <label
                                                                                    for="brand"
                                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                >
                                                                                    Brand
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="brand"
                                                                                    id="brand"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                                    placeholder="Product brand"
                                                                                    required=""
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <label
                                                                                    htmlFor="price"
                                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                >
                                                                                    Price
                                                                                </label>
                                                                                <input
                                                                                    type="number"
                                                                                    name="price"
                                                                                    id="price"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                                    placeholder="$2999"
                                                                                    required=""
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <label
                                                                                    htmlFor="category"
                                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                >
                                                                                    Category
                                                                                </label>
                                                                                <select
                                                                                    id="category"
                                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                                >
                                                                                    <option selected="">
                                                                                        Select
                                                                                        category
                                                                                    </option>
                                                                                    <option value="TV">
                                                                                        TV/Monitors
                                                                                    </option>
                                                                                    <option value="PC">
                                                                                        PC
                                                                                    </option>
                                                                                    <option value="GA">
                                                                                        Gaming/Console
                                                                                    </option>
                                                                                    <option value="PH">
                                                                                        Phones
                                                                                    </option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="sm:col-span-2">
                                                                                <label
                                                                                    for="description"
                                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                >
                                                                                    Description
                                                                                </label>
                                                                                <textarea
                                                                                    id="description"
                                                                                    rows="4"
                                                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                                    placeholder="Write product description here"
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            type="submit"
                                                                            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                                        >
                                                                            <svg
                                                                                className="mr-1 -ml-1 w-6 h-6"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    fill-rule="evenodd"
                                                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                                                    clip-rule="evenodd"
                                                                                ></path>
                                                                            </svg>
                                                                            Add
                                                                            new
                                                                            product
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <a
                                                        href="#"
                                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav
                        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                        aria-label="Table navigation"
                    >
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white">
                                1-10
                            </span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white">
                                1000
                            </span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    ...
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    100
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

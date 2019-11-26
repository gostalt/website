import React from "react";
import { Link } from "gatsby";
import logo from "../images/gostalt.svg";

const Items = [
    {
        title: "Installation",
        path: "/getting-started/installation",
        section: "getting-started",
    },
    {
        title: "Routing",
        path: "/getting-started/routing",
        section: "getting-started",
    },
    {
        title: "Deployment SSL",
        path: "/deploy/ssl",
        section: "getting-started",
    },
    {
        title: "Validate",
        path: "/packages/validate",
        section: "packages",
    },
];

const createNavigation = items => (
    <div className="md:sticky md:top-16 mb-16 md:mb-0">
        <div className="text-center md:text-left">
            <Link to="">
                <img
                    src={logo}
                    className="mb-8"
                    style={{ maxWidth: "80px" }}
                    alt="The Gostalt Logo"
                />
            </Link>
        </div>
        <nav>
            <section class="mb-4">
                <h3 className="mb-2 uppercase text-xs text-gray-500 font-semibold">
                    Getting Started
                </h3>
                {items
                    .filter(item => item.section === "getting-started")
                    .map(item => (
                        <Link
                            activeClassName="border-gray-400"
                            className="block py-1 border-l-4 pl-2 border-solid border-transparent hover:text-gray-600"
                            to={item.path}
                        >
                            {item.title}
                        </Link>
                    ))}
            </section>
            <section class="mb-4">
                <h3 className="mb-2 uppercase text-xs text-gray-500 font-semibold">
                    Packages
                </h3>
                {items
                    .filter(item => item.section === "packages")
                    .map(item => (
                        <Link
                            activeClassName="border-gray-400"
                            className="block py-1 border-l-4 pl-2 border-solid border-transparent hover:text-gray-600"
                            to={item.path}
                        >
                            {item.title}
                        </Link>
                    ))}
            </section>
        </nav>
    </div>
);

export const Nav = () => createNavigation(Items);

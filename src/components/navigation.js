import React from "react";
import { Link } from "gatsby";
import logo from "../images/gostalt.svg";

const Items = [
    // {
    //     title: "Installation",
    //     path: "/getting-started/installation",
    // },
    // { title: "Routing", path: "/getting-started/routing" },
    {
        title: "Validate",
        path: "/packages/validate",
    },
];

const createNavigation = items => (
    <div className="md:sticky md:top-16 mb-16 md:mb-0">
        <div className="text-center md:text-left">
            <div className="md:pl-3 inline-block text-center md:text-left text-center">
                <Link to="">
                    <img
                        src={logo}
                        className="mb-2"
                        style={{ maxWidth: "80px" }}
                        alt="The Gostalt Logo"
                    />
                    <h2 className="mb-8 uppercase font-bold text-xs text-center tracking-widest">
                        Gostalt
                    </h2>
                </Link>
            </div>
        </div>
        {items.map(item => (
            <Link
                activeClassName="border-gray-400"
                className="block py-1 border-l-4 pl-2 border-solid border-transparent hover:text-gray-600"
                to={item.path}
            >
                {item.title}
            </Link>
        ))}
    </div>
);

export const Nav = () => createNavigation(Items);

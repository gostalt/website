import React from "react";
import { Link } from "gatsby";
import Image from "../components/image";

const Items = [
    {
        title: "Installation",
        path: "/getting-started/installation",
    },
    { title: "Routing", path: "/getting-started/routing" },
    {
        title: "Validate",
        path: "/packages/validate",
    },
];

const createNavigation = items => (
    <div className='sticky top-16'>
        <div className='mb-4 pl-3'>
            <Image />
        </div>
        {items.map(item => (
            <div className='mb-2'>
                <Link
                    activeClassName='border-red-200'
                    className='border-l-4 pl-2 border-solid border-transparent hover:text-gray-600'
                    to={item.path}
                >
                    {item.title}
                </Link>
            </div>
        ))}
    </div>
);

export const Nav = () => createNavigation(Items);

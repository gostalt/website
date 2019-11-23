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
        <div className='pl-3 inline-block' style={{ textAlign: "center" }}>
            <Link to=''>
                <Image className='mb-2' />
                <h2 className='mb-8 uppercase font-bold text-xs tracking-widest'>
                    Gostalt
                </h2>
            </Link>
        </div>
        {items.map(item => (
            <Link
                activeClassName='border-gray-400'
                className='block py-1 border-l-4 pl-2 border-solid border-transparent hover:text-gray-600'
                to={item.path}
            >
                {item.title}
            </Link>
        ))}
    </div>
);

export const Nav = () => createNavigation(Items);

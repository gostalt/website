import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title='~' />
        <div className='flex flex-col items-center'>
            <h1 className='font-display tracking-tight text-gray-700 leading-none text-6xl'>
                Gostalt
            </h1>
            <p className='text-xl text-gray-500 tracking-tight'>
                The Go Framework. Arriving 2020.
            </p>
        </div>
    </Layout>
);

export default IndexPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <SEO title="Not Found" />
        <div className="flex flex-col items-center">
            <h1 className="font-display tracking-tight text-gray-800 leading-none text-6xl">
                Not Found
            </h1>
            <p className="text-xl text-gray-500 tracking-tight text-center">
                The page you are looking for doesn't seem to exist.
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Nav } from "../components/navigation";
import SEO from "../components/seo";

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout title={frontmatter.title}>
            <SEO title={frontmatter.title} />
            <div className="md:flex">
                <div className="w-100 md:w-1/4">
                    <Nav />
                </div>
                <div className="w-100 md:w-3/4">
                    <h1 className="text-gray-800 text-4xl font-display tracking-tight font-bold mb-2">
                        {frontmatter.title}
                    </h1>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;

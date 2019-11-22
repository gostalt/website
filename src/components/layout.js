/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children, title }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <main className='my-16 w-3/5 m-auto'>{children}</main>
                <footer className='bg-gray-100 flex-grow py-16'>
                    <div className=' w-3/5 m-auto'>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href='https://www.gatsbyjs.org'>Gatsby</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

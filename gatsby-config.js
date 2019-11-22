module.exports = {
    siteMetadata: {
        title: `Gostalt Docs`,
        description: `Documentation for the Gostalt Go Framework.`,
        author: `@gostalt`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown`,
            },
        },
        // Transform local a tags to Link (for Markdown files)
        `gatsby-plugin-catch-links`,

        // PostCSS for Tailwind
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: "heading-anchor",
                            maintainCase: false,
                            removeAccents: false,
                            offsetY: `30`,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gostalt.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};

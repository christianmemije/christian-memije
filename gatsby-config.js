module.exports = {
  siteMetadata: {
    title: 'Christian Memije',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/layouts/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
};

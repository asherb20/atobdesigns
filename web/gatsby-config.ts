import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `A to B Designs`,
    siteUrl: `https://www.atobdesigns.com`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.atobdesigns.com',
        sitemap: 'https://www.example.com/sitemap-0.xml',
        policy: [{ userAgent: '*', disallow: '/success' }]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Ubuntu`,
            file: `https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P6QFZ7Q6',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'u97u3cga',
        dataset: 'production'
      }
    }
  ]
};

export default config;

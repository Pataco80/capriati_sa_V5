const path = require("path")

// Initialize dotenv
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`, // or '.env'
})
module.exports = {
	siteMetadata: {
		title: `Capriati SA`,
		siteUrl: `https://capriati.netlify.app`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: process.env.production ? false : true,
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				fieldName: `graphCmsData`,
				url: `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloiri6mk0sja01t64cahfsbc/master`,
				typeName: `GraphCMS`,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
}

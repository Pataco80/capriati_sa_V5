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
		[
			"babel-plugin-styled-components",
			{
				minify: process.env.production ? true : false,
				transpileTemplateLiterals: process.env.production ? true : false,
				ssr: true,
			},
		],
		// Data Configuration
		"gatsby-transformer-remark",
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.AIRTABLE_API_USER_KEY_TOKEN, // may instead specify via env, see below
				concurrency: 5, // default, see using markdown and attachments for more information
				tables: [
					// Liste des Employés Database
					{
						baseId: process.env.AIRTABLE_TEAM_DATABASE_ID,
						tableName: `Team`,
						mapping: { teamPhoto: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
					},

					// Données de Site Database
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Services`,
						mapping: {
							serviceIcon: `fileNode`,
							serviceDescriptions: `text/markdown`,
							serviceFeatureImg: `fileNode`,
							serviceGallery: `fileNode`,
							serviceImg1: `fileNode`,
							serviceImg2: `fileNode`,
							serviceImg3: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`Gallerie`, `Travaux`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Gallerie`,
						mapping: {
							galleryImage: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`Services`, `Travaux`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Travaux`,
						tableLinks: [`Services`, `Gallerie`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `References`,
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Historique`,
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Partenaires`,
						mapping: {
							partenaireLogo: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
					},
				],
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

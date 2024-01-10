const path = require(`path`)

const templatePath = path.resolve(`./src/templates/service-template.js`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		query getServices {
			allAirtable(filter: { table: { eq: "Services" } }) {
				totalCount
				edges {
					node {
						recordId
						data {
							serviceId
							serviceSlug
							serviceName
							serviceDescriptions {
								childMarkdownRemark {
									html
								}
							}
							serviceIcon {
								...AirtableImgParams
							}
							serviceFeatureImg {
								...AirtableImgParams
							}
							Gallerie {
								data {
									galleryImageLegend
									galleryImage {
										...AirtableImgParams
									}
								}
							}
						}
					}
				}
			}
		}

		fragment AirtableImgParams on AirtableField {
			localFiles {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
				name
			}
		}
	`)

	result.data.allAirtable.edges.forEach(({ node }) => {
		createPage({
			path: `/services/${node.data.serviceSlug}`,
			component: templatePath,
			context: {
				recordId: node.recordId,
			},
		})
	})
}

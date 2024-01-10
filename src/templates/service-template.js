import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const serviceTemplate = ({ data }) => {
	const {
		serviceName,
		serviceDescriptions,
		serviceIcon,
		serviceFeatureImg,
		Gallerie,
	} = data.airtable.data
	const icon = getImage(serviceIcon.localFiles[0])
	const featureImg = getImage(serviceFeatureImg.localFiles[0])

	return (
		<div>
			<div style={{ width: "500px", height: "auto" }}>
				<GatsbyImage image={featureImg} />
			</div>
			<GatsbyImage image={icon} style={{ width: "100px", height: "100px" }} />
			<h1>{serviceName}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: serviceDescriptions.childMarkdownRemark.html,
				}}
			/>
			<div>
				{Gallerie.map((item, i) => {
					const { galleryImage, galleryImageLegend } = item.data
					const image = getImage(galleryImage.localFiles[0])
					return (
						<div key={i}>
							<GatsbyImage
								image={image}
								style={{ width: "200px", height: "auto" }}
							/>
							<p>{galleryImageLegend}</p>
						</div>
					)
				})}
			</div>
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	)
}

export const query = graphql`
	query getRecord($recordId: String!) {
		airtable(recordId: { eq: $recordId }) {
			recordId
			data {
				serviceName
				serviceSlug
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

	fragment AirtableImgParams on AirtableField {
		localFiles {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH)
			}
			name
		}
	}
`

export default serviceTemplate
//recHhcOcYs41vCDXO

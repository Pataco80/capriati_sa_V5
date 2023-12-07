import "@fontsource-variable/noto-sans-jp"
import { GlobalStyle } from "./src/theme/globalStyles"

const React = require("react")
const Layout = require("./src/components/Layout/Layout").default
export const wrapRootElement = ({ element }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<>
			<GlobalStyle />
			<p>is root</p>
			{element}
		</>
	)
}

export const wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<>
			<Layout {...props}>{element}</Layout>
		</>
	)
}

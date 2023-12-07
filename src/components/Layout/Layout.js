import React from "react"
import { NavBar } from "../index"
const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	)
}

export default Layout

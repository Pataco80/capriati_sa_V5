import React from "react"
import Navbar from "../NavBar/NavBar"

import * as S from "./LayoutStyled"

const Layout = ({ children }) => {
	return (
		<>
			<p>is Layout</p>
			<Navbar />
			{children}
		</>
	)
}

export default Layout

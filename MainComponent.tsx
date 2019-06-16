import React from "react"

import DashboardComponent from "./Dashboard/DashboardComponent"
import NavBarComponent from "./NavBarComponent/NavBarComponent"

import { NavBar } from "./conduits/components"

const MainComponent = () => (
	<NavBar navItems={<NavBarComponent />}>
		<DashboardComponent />
	</NavBar>
)

export default MainComponent

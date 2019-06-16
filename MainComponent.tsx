import React from "react"

import DashboardComponent from "./screens/Dashboard/DashboardComponent"
import NavBarComponent from "./screens/NavBarComponent/NavBarComponent"

import { NavBar } from "./conduits/components"

const MainComponent = () => (
	<NavBar navItems={<NavBarComponent />}>
		<DashboardComponent />
	</NavBar>
)

export default MainComponent

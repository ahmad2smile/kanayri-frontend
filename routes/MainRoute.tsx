import * as React from "react"
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import { AuthRoute, PublicRoute, Loader, NavBar } from "../conduits/components"

import NavBarComponent from "../screens/NavBarComponent/NavBarComponent"

import { IProps } from "./__types/IProps"

const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))
const AboutComponent = React.lazy(() => import("../screens/About/AboutComponent"))

const LoginRoute = () => <div>WIP</div>

const MainRoute = ({ authToken }: IProps): JSX.Element => (
	<Router>
		<React.Suspense fallback={<Loader />}>
			<NavBar navItems={<NavBarComponent />}>
				<Switch>
					<PublicRoute
						exact
						path="/login"
						title="Login"
						isUnAuth={!authToken}
						component={LoginRoute}
					/>
					<AuthRoute
						exact
						path="/about"
						title="About"
						isAuth={!!authToken}
						component={AboutComponent}
					/>
					<AuthRoute
						path="/"
						title="Orion - eShop"
						isAuth={!!authToken}
						component={DashboardComponent}
					/>
				</Switch>
			</NavBar>
		</React.Suspense>
	</Router>
)

export default connect(({ auth }: IRootState) => ({
	authToken: auth.authToken
}))(MainRoute)

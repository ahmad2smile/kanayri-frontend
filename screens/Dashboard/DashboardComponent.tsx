import * as React from "react"
import injectSheet from "react-jss"

import Products from "./Products/Products"

import { Container } from "../../conduits/components"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

class DashboardComponent extends React.Component<IProps> {
	public render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Container>
					<h1 className={classes.header}>Exotic eShop</h1>
					<p className={classes.description}>
						We don't sell on corporate scale but we sell the best
					</p>
				</Container>
				<Container fullTablet>
					<Products />
				</Container>
			</div>
		)
	}
}

export default injectSheet(styles)(DashboardComponent)

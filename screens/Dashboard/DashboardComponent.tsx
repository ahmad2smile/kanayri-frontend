import * as React from "react"
import useSheet from "react-jss"

import { Container } from "../../conduits/components"

import { IProps } from "./__types/IProps"

import styles from "./styles"

class DashboardComponent extends React.Component<IProps> {
	public render() {
		const { classes } = this.props

		return (
			<Container>
				<div className={classes.container}>
					<h1 className={classes.header}>Dashboard Page</h1>
				</div>
			</Container>
		)
	}
}

export default useSheet(styles)(DashboardComponent)

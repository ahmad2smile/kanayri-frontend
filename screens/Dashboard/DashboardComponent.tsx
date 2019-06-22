import * as React from "react"
import injectSheet from "react-jss"

import { Container } from "../../conduits/components"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

class DashboardComponent extends React.Component<IProps> {
	public render() {
		const { classes } = this.props

		return (
			<Container>
				<div className={classes.container}>
					<h1 className={classes.header}>Kanayri is a shop with hand chosen exotic products.</h1>
					<p className={classes.description}>We believe in helping brands create through strategy, story-telling, digital products, and integrated experiences on web, mobile, and in the world. And you're here, friends, because you also believe.</p>
				</div>
			</Container>
		)
	}
}

export default injectSheet(styles)(DashboardComponent)

import React from "react"
import injectSheet from "react-jss"
import { Link } from "react-router-dom"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const NavBarComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<div className={classes.logo}>Orion</div>
		<div className={classes.linksContainer}>
			<Link to="/">
				<div className={classes.item}>Home</div>
			</Link>
			<Link to="/about">
				<div className={classes.item}>About</div>
			</Link>
		</div>
	</div>
)

export default injectSheet(styles)(NavBarComponent)

import React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const NavBarComponent = ({ classes }: IProps) => (
	<div className={classes.container}>
		<div className={classes.logo}>Orion</div>
		<div className={classes.linksContainer}>
			<div className={classes.item}>Home</div>
			<div className={classes.item}>About</div>
		</div>
	</div>
)

export default injectSheet(styles)(NavBarComponent)
